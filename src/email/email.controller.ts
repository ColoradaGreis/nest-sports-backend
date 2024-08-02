// src/email/email.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() sendEmailDto: SendEmailDto): Promise<void> {
    await this.emailService.sendEmail(sendEmailDto);
  }
}
