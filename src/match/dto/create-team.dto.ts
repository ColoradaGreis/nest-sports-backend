import { CreatePlayerDto } from './create-player.dto';

export class CreateTeamDto {
  readonly name: string;
  readonly players: CreatePlayerDto[];
}
