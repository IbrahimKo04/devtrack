const request = require("supertest");
const app = require("../src/app");

describe("Issues API", () => {
  it("should create a new issue", async () => {
    const res = await request(app)
      .post("/api/issues")
      .send({
        title: "CI test issue",
        description: "Testing pipeline",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe("CI test issue");
  });

  it("should return all issues", async () => {
    const res = await request(app).get("/api/issues");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
