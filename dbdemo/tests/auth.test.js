/*import request from 'supertest';
import app from '../app.js'
import mongoose from 'mongoose';

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Auth Routes", () => {
  it("should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ username: "testuser21", password: "password123" });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User registered successfully");
  });

  it("should login and return a token", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ username: "testuser21", password: "password123" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});


*/
import { expect } from "chai";
import request from "supertest";
import app from "../app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

before(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await request(app)
    .post("/api/auth/register")
    .send({ username: "mochauser", password: "password123" });
});

after(async () => {
  await mongoose.connection.close();
});

describe("Auth Routes", () => {
  it("should login and return a token", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ username: "mochauser", password: "password123" });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("token");
  });
});
