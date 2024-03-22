const supertest = require("supertest");
const app = require("../app"); // Adjust this to the path to your app's entry point
const { updateUserImage, getProfImageById } = require("../service/userprof");

// Mock the service functions
jest.mock("../service/userprof", () => ({
  updateUserImage: jest.fn(),
  getProfImageById: jest.fn(),
}));

const request = supertest(app);

describe("User Profile Image", () => {
  describe("Update User Profile Image", () => {
    it("should update user image successfully", async () => {
      const userId = "123"; // Example user ID
      const imagePath = "path/to/image.jpg"; // Example image path
      updateUserImage.mockResolvedValueOnce(); // Mock successful update

      const response = await request
        .post(`/user/${userId}/image`)
        .attach("image", imagePath);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ status: "Success" });
      expect(updateUserImage).toHaveBeenCalledWith(userId, expect.anything());
    });

    it("should return error for missing image or user id", async () => {
      // This test assumes you have a way to simulate missing file or ID,
      // e.g., not attaching a file or omitting the ID in the request URL.
      const response = await request.post(`/user/image`); // Missing user ID and image

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: "Missing image or user id" });
    });
  });

  describe("Get User Profile Image", () => {
    it("should return user profile image successfully", async () => {
      const userId = "123"; // Example user ID
      const expectedFilename = "user-image.jpg";
      getProfImageById.mockResolvedValueOnce(expectedFilename); // Mock service response

      const response = await request.get(`/user/${userId}/image`);

      expect(response.status).toBe(200);
      // Since sending a file, you might only be able to check the response type or headers
      // This example checks for a successful file response indirectly
      expect(getProfImageById).toHaveBeenCalledWith(userId);
    });

    it("should return error if image not found", async () => {
      const userId = "notExistingId";
      getProfImageById.mockRejectedValueOnce(new Error("user image not found")); // Mock failure

      const response = await request.get(`/user/${userId}/image`);

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: "user image not found" });
    });
  });
});
