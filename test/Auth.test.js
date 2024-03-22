const supertest = require("supertest");
const app = require("../app"); // Adjust the path to where your Express app is initialized
const request = supertest(app);

describe("Auth Login", () => {
  it("should login successfully with correct credentials", async () => {
    const response = await request.post("/login").send({
      username: "testuser",
      password: "testpassword",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("token"); // Assuming a token is returned on successful login
  });

  it("should fail with incorrect credentials", async () => {
    const response = await request.post("/login").send({
      username: "testuser",
      password: "wrongpassword",
    });

    expect(response.statusCode).toBe(401); // or the specific status code your API returns for auth failure
  });
});
