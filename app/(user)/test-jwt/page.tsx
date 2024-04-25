"use client";
import { error } from "console";
import React, { useState } from "react";

export default function TestJWT() {
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState(null);
  const [unAuthorized, setUnAuthorized] = useState(false);

  //Handle Login
  const handleLogin = async () => {
    const email = "sanhpanha3003@gmail.com";
    const password = "Panha12345";

    fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data with JWT:", data);
        setAccessToken(data.accessToken);
        setUser(data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //handle partial update
  const handlePartialUpdate = async () => {
    const body = {
      name: "Running Shoes",
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/products/${493}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      }
    );

    if (res.status === 401) {
      setUnAuthorized(true);
    }

    const data = await res.json();
    console.log("Data from partial update:", data);
  };

  //Handle refresh token
  const handleRefreshToken = async () => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/refresh", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data from refresh token:", data);
        setAccessToken(data.accessToken);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Handle Logout
  const handleLogout = async () => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data from Logout:", data);
        setAccessToken(data.accessToken);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="h-screen grid place-content-center">
      <h1 className="text-5xl">Test Handle Login</h1>
      <button
        className="text-gray-100 text-3xl p-4 my-4 bg-blue-600 rounded-xl"
        onClick={handleLogin}
      >
        Login
      </button>

      <button
        className="text-gray-100 text-3xl p-4 my-4 bg-blue-600 rounded-xl"
        onClick={handlePartialUpdate}
      >
        Partial Update
      </button>

      {unAuthorized && (
        <button
          onClick={handleRefreshToken}
          className="text-gray-100 text-3xl p-4 my-4 bg-blue-600 rounded-xl"
        >
          Refresh
        </button>
      )}

      <button
        className="text-gray-100 text-3xl p-4 my-4 bg-blue-600 rounded-xl"
        onClick={handleLogout}
      >
        Logout
      </button>
    </main>
  );
}
