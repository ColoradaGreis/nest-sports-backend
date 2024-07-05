import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
// import { supabase } from 'src/config/supabase.config';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(
    email: string,
    password: string,
    first_lastname: string,
    second_lastname: string | null,
    first_name: string,
    second_name: string | null,
  ): Promise<User> {
    // const { error } = await supabase.auth.signUp({ email, password });

    // if (error) {
    //   throw new Error(error.message);
    // }
    const createdUser = new this.userModel({
      email,
      password,
      first_lastname,
      second_lastname,
      first_name,
      second_name,
    });
    return createdUser.save();
  }

  async getUserById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async updateUser(id: string, updateData: Partial<User>): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async deleteUser(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
