import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema';
import { Match } from './match.schema';

@Schema()
export class Group extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  owner: User;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }], default: [] })
  members: User[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Match' }], default: [] })
  matches: Match[];
}

export const GroupSchema = SchemaFactory.createForClass(Group);
