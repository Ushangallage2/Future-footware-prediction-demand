const supertest = require("supertest");
const app = require("../app"); // Make sure to adjust this path to where your Express app is defined

const request = supertest(app);

describe("User Management", () => {
  describe("Get All Users", () => {
    it("should return a list of users", async () => {
      const response = await request.get("/api/users");
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe("Add New User", () => {
    it("should add a new user and return the created user", async () => {
      const newUser = {
        username: "testuser",
        password: "password123", // Assume your API expects a password; adjust according to your real model
        email: "testuser@example.com",
      };
      const response = await request.post("/api/users").send(newUser);
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("id");
    });
  });

  describe("Update User Details", () => {
    it("should update user details", async () => {
      const updatedUser = {
        email: "newemail@example.com",
      };
      const userId = 1; // Use a valid userId from your database or mock
      const response = await request
        .put(`/api/users/${userId}`)
        .send(updatedUser);
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty(
        "message",
        "User updated successfully"
      );
    });
  });

  describe("Delete User", () => {
    it("should delete a user", async () => {
      const userId = 1; // Use a valid userId that can be deleted
      const response = await request.delete(`/api/users/${userId}`);
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty(
        "message",
        "User deleted successfully"
      );
    });
  });

  describe("Send Request (Message)", () => {
    it("should send a message successfully", async () => {
      const message = {
        content: "This is a test message",
      };
      const userId = 1; // Assume this is the ID of the user sending the message
      const response = await request
        .post(`/api/users/${userId}/send-message`)
        .send(message);
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty(
        "message",
        "Message sent successfully"
      );
    });
  });
});
