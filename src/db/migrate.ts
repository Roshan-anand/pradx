import { pool } from "./client";

const CREATE_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS lead_inquiries (
    id         TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    name       TEXT NOT NULL,
    email      TEXT NOT NULL,
    company    TEXT,
    industry       TEXT NOT NULL,
    starting_point TEXT NOT NULL,
    brief          TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
  );
`;

export async function migrate() {
  await pool.query(CREATE_TABLE_SQL);
}
