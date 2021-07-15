/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {

    const { user } = request.headers
    const listUsers = this.listAllUsersUseCase.execute({ user_id: user[0] })
    if (listUsers) {
      return response.json(listUsers)
    }
    return response.status(400).send({ message: 'User unauthorized' })

  }
}

export { ListAllUsersController };
