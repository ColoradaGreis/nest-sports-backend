import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Match } from '../schemas/match.schema';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Injectable()
export class MatchService {
  constructor(@InjectModel(Match.name) private matchModel: Model<Match>) {}

  async create(createMatchDto: CreateMatchDto): Promise<Match> {
    const createdMatch = new this.matchModel(createMatchDto);
    return createdMatch.save();
  }

  async findAll(): Promise<Match[]> {
    return this.matchModel.find().exec();
  }

  async findOne(id: string): Promise<Match> {
    return this.matchModel.findById(id).exec();
  }

  async update(id: string, updateMatchDto: UpdateMatchDto): Promise<Match> {
    return this.matchModel
      .findByIdAndUpdate(id, updateMatchDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Match> {
    return this.matchModel.findByIdAndDelete(id).exec();
  }
}
