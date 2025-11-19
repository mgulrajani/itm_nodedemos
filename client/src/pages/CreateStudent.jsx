import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function CreateStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await api.post("/api/students", { name, age: Number(age) });
      navigate("/");
    } catch (error) {
      setErr(error.response?.data?.message || "Failed to create student");
    }
  };

  return (
    <div>
      <h2>Create student</h2>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <form onSubmit={onSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" type="number" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
