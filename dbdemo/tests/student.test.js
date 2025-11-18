/*import request from 'supertest';
import app from '../app.js'
import mongoose from 'mongoose';

let token;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);

  // Register & login to get token
  await request(app)
    .post("/api/auth/register")
    .send({ username: "studentuser", password: "password123" });


  const loginRes = await request(app)
    .get("/api/auth/login")
    .send({ username: "testuser21", password: "password123" });

  token = loginRes.body.token;
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Student Routes", () => {
  it("should get all students (unprotected)", async () => {
    const res = await request(app).get("/api/students");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should create a student when authorized", async () => {
    const res = await request(app)
      .post("/api/students")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Asha", age: 22, enrolled: true });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.name).toBe("Asha");
  });

  it("should fail to create a student without token", async () => {
    const res = await request(app)
      .post("/api/students")
      .send({ name: "NoToken", age: 20 });

    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe("No token provided");
  });
});

*/

import { expect } from "chai";
import request from "supertest";
import app from "../app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
describe("Student Routes", () => {
  let token;

  before(async () => {
    const loginRes = await request(app)
      .get("/api/auth/login")
      .send({ username: "mochauser", password: "password123" });

    token = loginRes.body.token;
  });

  it("should get all students", async () => {
    const res = await request(app).get("/api/students");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("should create a student when authorized", async () => {
    const res = await request(app)
      .post("/api/students")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Asha", age: 22 });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("_id");
    expect(res.body.name).to.equal("Asha");
  });

  it("should fail to create a student without token", async () => {
    const res = await request(app)
      .post("/api/students")
      .send({ name: "NoToken", age: 20 });

    expect(res.status).to.equal(401);
    expect(res.body.message).to.equal("No token provided");
  });
});

