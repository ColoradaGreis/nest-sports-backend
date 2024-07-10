import { CreateTeamDto } from './create-team.dto';

export class CreateMatchDto {
  readonly date: Date;
  readonly teamA: CreateTeamDto;
  readonly teamB: CreateTeamDto;
}
