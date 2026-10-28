// Unit tests for the Express application.
// Tests the root and health endpoints without starting a server.
// See https://vitest.dev/ for the test framework reference.

import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "./index";

describe("GET /", () => {
  it("returns a JSON greeting", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello World" });
  });

  it("returns health check status ok", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });
});
