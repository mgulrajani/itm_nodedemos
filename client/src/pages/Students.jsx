import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [err, setErr] = useState("");
  const { token, logout } = useAuth();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await api.get("/api/students");
        setStudents(data);
      } catch (error) {
        setErr(error.response?.data?.message || "Failed to fetch students");
      }
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Students</h2>
      {token ? (
        <div>
          <Link to="/students/new">Create student</Link>
          <button onClick={logout} style={{ marginLeft: 12 }}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link> • <Link to="/register">Register</Link>
        </div>
      )}
      {err && <p style={{ color: "red" }}>{err}</p>}
      <ul>
        {students.map(s => (
          <li key={s._id}>{s.name} ({s.age})</li>
        ))}
      </ul>
    </div>
  );
}
