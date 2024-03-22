const supertest = require("supertest");
const app = require("../app"); // Adjust this to the actual path of your Express app
const request = supertest(app);

describe("Demand Prediction Module", () => {
  describe("Upload Image for Model", () => {
    it("should upload an image successfully", async () => {
      const response = await request
        .post("/api/model/upload-image")
        .field("modelNumber", "model123")
        .attach("image", "path/to/test/image.jpg"); // Adjust the path to a test image file

      expect(response.status).toBe(200);
      expect(response.body).toEqual(
        expect.objectContaining({
          status: "Success",
        })
      );
    });
  });

  describe("Get Image by Model Number", () => {
    it("should fetch an image filename successfully", async () => {
      const response = await request.get("/api/model/get-image/model123");

      expect(response.status).toBe(200);
      // Assuming the response is the path or filename of the image
      expect(response.body).toHaveProperty("filename");
    });
  });

  describe("Get Model Details", () => {
    it("should fetch model details successfully", async () => {
      const response = await request.get("/api/model/details/model123");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(
        expect.objectContaining({
          modelNumber: "model123",
          // Include other expected properties of the model details
        })
      );
    });
  });

  describe("Fetch All Model Numbers", () => {
    it("should fetch all model numbers successfully", async () => {
      const response = await request.get("/api/model/all-models");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("modelNumbers");
      expect(Array.isArray(response.body.modelNumbers)).toBe(true);
    });
  });

  describe("Predict Sales", () => {
    it("should predict sales successfully", async () => {
      const response = await request.post("/api/model/predict-sales").send({
        days: 30,
        shoe_model: "model123",
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("sum");
      // Ensure the response includes the predicted sales or the sum of filtered sales
    });
  });
});
