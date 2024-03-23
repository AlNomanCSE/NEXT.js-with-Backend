"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const page = ({ params }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");

  async function getSingleUser() {
    const addUser = { name, email, age };
    const response = await fetch(`http://localhost:5000/${params.id}`, {
      method: "GET",
    });
    const result = await response.json();
    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      setName(result.name);
      setEmail(result.email);
      setAge(result.age);
      setError("");
      console.log(result);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const updateUser = { name, email, age };
    const response = await fetch(`http://localhost:5000/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(updateUser),
      headers: {
        "Content-type": "application/json",
      },
    });

    const result = await response.json();
    console.log(result);
    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      setError("");
      router.push("/allpost");
    }
  }

  useEffect(() => {
    getSingleUser();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <div>{error}</div>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
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
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default page;
