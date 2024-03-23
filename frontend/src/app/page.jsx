"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const addUser = { name, email, age };
    const response = await fetch("http://localhost:5000", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      setAge(0);
      setEmail("");
      setName("");
      setError("");
      router.push("/allpost");
    }
  }
  return (
    <section>
      <h2>Enter Data</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name ..."
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email ..."
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            id="age"
            value={age}
            placeholder="Enter your age ..."
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default page;
