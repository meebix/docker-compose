import express from "express";
import { Client } from "pg";

const app = express();
const port = 8080;
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

app.get("/", async (req, res) => {
  return res.send("Hello, World!");
});

app.get("/add", async (req, res) => {
  await client.query("INSERT INTO actor (email) VALUES ('james@mail.com')");
  return res.end();
});

app.get("/show", async (req, res) => {
  const { rows } = await client.query("SELECT * FROM actor");
  return res.send(rows);
});

(async () => {
  await client.connect();

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
})();
