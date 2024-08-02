import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Match, MatchSchema } from 'src/schemas/match.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Match.name, schema: MatchSchema }]),
  ],
  providers: [MatchService],
  controllers: [MatchController],
})
export class MatchModule {}
