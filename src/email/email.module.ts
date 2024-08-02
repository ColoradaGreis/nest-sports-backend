// src/email/email.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';

@Module({
  imports: [ConfigModule],
  providers: [EmailService],
  controllers: [EmailController],
})
export class EmailModule {}
