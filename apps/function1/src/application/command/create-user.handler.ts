import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  async execute(command: CreateUserCommand) {
    const { email, name, password } = command;
    console.log(email, name, password);

    return {
      body: 'hello 11111',
      statusCode: HttpStatus.OK,
    };
  }
}
