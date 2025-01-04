import { Injectable } from '@nestjs/common';
import { I18nService } from './i18n/i18n.service';

@Injectable()
export class AppService {
  constructor(private readonly i18nService: I18nService) {
    console.log(this);
  }

  getHello(): string {
    return this.i18nService.translate('ERRORS.USER_NOT_FOUND', {
      firstName: 'Ivan',
    });
  }
}
