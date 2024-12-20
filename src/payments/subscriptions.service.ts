import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { OnEvent } from '@nestjs/event-emitter';
import { PaymentFailedEvent } from './events/payment-failad-event';
import { EventContext } from './context/event-context';

@Injectable()
export class SubscriptionsService {
  constructor(private readonly moduleRef: ModuleRef) {}

  @OnEvent(PaymentFailedEvent.key)
  async cancelSubscription(event: PaymentFailedEvent) {
    const eventContext = await this.moduleRef.resolve(
      EventContext,
      event.meta.contextId,
    );

    console.log('Cancelling subscription', eventContext.request.url);
  }
}
