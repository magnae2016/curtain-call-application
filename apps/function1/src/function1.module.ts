import { Module } from '@nestjs/common';
import { Function1Service } from './function1.service';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserHandler } from './application/command/create-user.handler';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [Function1Service, CreateUserHandler],
})
export class Function1Module {}
