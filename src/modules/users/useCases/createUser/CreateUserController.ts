/* eslint-disable prettier/prettier */
import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    const { email, name } = request.body
    const user = this.createUserUseCase.execute({ email, name })
    if (user) {
      return response.status(201).json(user)
    }
    return response.status(400).json({ error: 'user already taken' })


  }
}

export { CreateUserController };
