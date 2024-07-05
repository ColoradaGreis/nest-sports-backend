import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
class Player {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId; // Referencia al User original

  @Prop({ required: true })
  originalName: string; // Nombre del usuario en el momento del partido
}

const PlayerSchema = SchemaFactory.createForClass(Player);

@Schema()
class Team {
  @Prop({ type: [PlayerSchema], required: true })
  players: Player[];
}

const TeamSchema = SchemaFactory.createForClass(Team);

@Schema()
export class Match extends Document {
  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ type: TeamSchema, required: true })
  teamA: Team;

  @Prop({ type: TeamSchema, required: true })
  teamB: Team;
}

export const MatchSchema = SchemaFactory.createForClass(Match);
