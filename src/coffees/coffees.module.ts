import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { COFFEES_DATA_SOURCE } from './coffees-di-token';
@Module({
  imports: [],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEES_DATA_SOURCE,
      useValue: [],
    },
  ],
  exports: [],
})
export class CoffeesModule {}
