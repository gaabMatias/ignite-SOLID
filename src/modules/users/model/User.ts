/* eslint-disable prettier/prettier */
import { v4 as uuidV4 } from "uuid";

class User {
  id: string;

  name: string;

  email: string;

  admin?: boolean;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id || this.id === undefined) {
      this.id = uuidV4();
    }
    if (!this.admin || this.admin === undefined) {
      this.admin = false;
    }
  }
}

export { User };
