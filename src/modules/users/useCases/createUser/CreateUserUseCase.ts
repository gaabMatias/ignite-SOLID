/* eslint-disable prettier/prettier */
/* eslint-disable import-helpers/order-imports */
import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const user = this.usersRepository.create({ email, name })
    return user
  }
}

export { CreateUserUseCase };
