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
    this.admin = false;

    if (!this.id || this.id === undefined) {
      this.id = uuidV4();
    }
  }
}

export { User };
