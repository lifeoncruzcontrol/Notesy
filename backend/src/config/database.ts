import pgPromise from 'pg-promise';
import * as dotenv from 'dotenv';

const pgp = pgPromise();

dotenv.config();
const host = process.env.HOST;
const dbPort = Number(process.env.DB_PORT);
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_USER_PASS;

const configs: object = {
  host: host,
  port: dbPort,
  database: database,
  user: user,
  password: password,
  // ssl: true,
  max: 30
};

export const db = pgp(configs);

export async function testConection(): Promise<string> {
  const c = await db.connect();
  c.done();
  return c.client.serverVersion;
}