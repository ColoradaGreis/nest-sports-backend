// src/email/email.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as sgMail from '@sendgrid/mail';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class EmailService {
  constructor(private configService: ConfigService) {
    sgMail.setApiKey(this.configService.get<string>('SENDGRID_API_KEY'));
  }

  async sendEmail(sendEmailDto: SendEmailDto): Promise<void> {
    const { to, subject, body } = sendEmailDto;
    const msg = {
      to,
      from: this.configService.get<string>('SENDGRID_FROM_EMAIL'),
      subject,
      text: body,
    };

    try {
      await sgMail.send(msg);
      return;
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
      throw new Error('Failed to send email');
    }
  }
}
