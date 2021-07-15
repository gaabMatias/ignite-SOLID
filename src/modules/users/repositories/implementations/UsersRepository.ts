/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    let user = new User()

    const userAlreadyExists = this.users.find(
      user => user.email === email)
    if (userAlreadyExists) {
      return null
    }
    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date()
    }
    )
    this.users.push(user)
    return user
  }

  findById(id: string): User {
    const userById = this.users.find(
      user => user.id === id
    )

    return userById
  }

  findByEmail(email: string): User | undefined {
    const userByEmail = this.users.find(
      user => user.email === email
    )
    if (!userByEmail) {
      throw new Error
    }
    return userByEmail
  }

  turnAdmin(receivedUser: User): User {
    const updatedUser = receivedUser

    if (updatedUser.admin === false) {
      updatedUser.admin = true
      updatedUser.updated_at = new Date()
    }
    return updatedUser
  }

  list(): User[] {
    return (this.users)
  }
}

export { UsersRepository };
