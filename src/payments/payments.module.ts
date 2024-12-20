import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { SubscriptionsService } from './subscriptions.service';
import { NotificationsService } from './notiofications.service';
import { EventContext } from './context/event-context';

@Module({
  imports: [],
  controllers: [PaymentsController],
  providers: [NotificationsService, SubscriptionsService, EventContext],
})
export class PaymentsModule {}
