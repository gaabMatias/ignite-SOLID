/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params
    const user = this.showUserProfileUseCase.execute({ user_id })
    if (user) {
      return response.json({ user })
    }
    return response.status(404).json({ message: "User not found" })
  }
}

export { ShowUserProfileController };
