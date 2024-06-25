import { Injectable, WritableSignal, signal } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { CapacitorSQLite } from '@capacitor-community/sqlite';

const DB_USERS = 'myuserdb';

export interface User {
  id: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private user: WritableSignal<User[]> = signal<User[]>([]);

  constructor() { }

  async initializePlugin() {
    this.db = await this.sqlite.createConnection(DB_USERS, false, 'no-encryption', 1, false);
    await this.db.open();
    await this.createSchema();
    this.loadUsers();
    return true;
  }

  async createSchema() {
    const schema = `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      password TEXT NOT NULL
    );`;
    await this.db.execute(schema);
  }

  async loadUsers() {
    const users = await this.db.query('SELECT * FROM users;');
    this.user.set(users.values || []);
  }

  async addUser(user: User) {
    const query = `INSERT INTO users (email, password) VALUES (?, ?);`;
    const result = await this.db.run(query, [user.email, user.password]);
    this.loadUsers();
    return result;
  }

  async updateUser(user: User) {
    const query = `UPDATE users SET email = ?, password = ? WHERE id = ?;`;
    const result = await this.db.run(query, [user.email, user.password, user.id]);
    this.loadUsers();
    return result;
  }

  async deleteUser(id: number) {
    const query = `DELETE FROM users WHERE id = ?;`
    const result = await this.db.run(query, [id]);
    this.loadUsers();
    return result;
  }

  async getUsers(): Promise<User[]> {
    if (!this.db) {
      console.warn('Database connection not initialized.');
      return [];
    }
    const result = await this.db.query('SELECT * FROM users;');
    return result.values || [];
  }
}