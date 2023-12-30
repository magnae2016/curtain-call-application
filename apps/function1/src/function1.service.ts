import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { APIGatewayEvent } from 'aws-lambda';
import { CreateUserDto } from './interface/dto/CreateUserDto';
import { CreateUserCommand } from './application/command/create-user.command';

@Injectable()
export class Function1Service {
  constructor(private commandBus: CommandBus) {}

  createUser(event: APIGatewayEvent) {
    const dto: CreateUserDto = JSON.parse(event.body!);
    const { email, name, password } = dto;

    const command = new CreateUserCommand(name, email, password);
    return this.commandBus.execute(command);
  }
}
