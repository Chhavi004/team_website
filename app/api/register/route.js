// app/api/register/route.js
import mysql from "mysql2/promise";

export async function POST(request) {
  try {
    const { name, email, domains } = await request.json();

    if (!name || !email || !domains) {
      return new Response(JSON.stringify({ message: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "", // default password in XAMPP
      database: "recruitments",
    });

    await connection.execute(
      "INSERT INTO applicants (name, email, domains) VALUES (?, ?, ?)",
      [name, email, JSON.stringify(domains)]
    );

    await connection.end();

    return new Response(JSON.stringify({ message: "Registration successful" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database error:", error);
    return new Response(JSON.stringify({ message: "Server error", error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
