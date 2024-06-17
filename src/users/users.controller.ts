import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(
    @Body()
    body: {
      email: string;
      password: string;
      first_lastname: string;
      second_lastname?: string;
      first_name: string;
      second_name?: string;
    },
  ): Promise<User> {
    const {
      email,
      password,
      first_lastname,
      second_lastname,
      first_name,
      second_name,
    } = body;

    return this.usersService.createUser(
      email,
      password,
      first_lastname,
      second_lastname || null,
      first_name,
      second_name || null,
    );
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() body: { email: string; password: string },
  ): Promise<User> {
    return this.usersService.updateUser(id, body.email, body.password);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.usersService.deleteUser(id);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }
}
