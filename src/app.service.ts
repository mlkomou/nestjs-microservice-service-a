import { Injectable, Post } from "@nestjs/common";
import { CreateUserRequest } from "./createUserRequest";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Service A!';
  }

  handleUserCreated(createUserRequest: CreateUserRequest) {
    console.log('user created from service A', createUserRequest);
  }
}
