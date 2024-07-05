import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  first_lastname: string;

  @Prop()
  second_lastname?: string;

  @Prop({ required: true })
  first_name: string;

  @Prop()
  second_name?: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop([{ type: Types.ObjectId, ref: 'Group' }])
  groups: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
