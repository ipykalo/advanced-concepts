/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { COFFEES_DATA_SOURCE } from './coffees-di-token';
import { LazyModuleLoader } from '@nestjs/core';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

export const COFFEE_DATA_SOURCE = Symbol('COFFEE_DATA_SOURCE');

export interface CoffeesDataSource {
  [index: number]: Coffee;
}

@Injectable()
export class CoffeesService {
  constructor(
    @Inject(COFFEES_DATA_SOURCE) dataSource: CoffeesDataSource,
    private readonly lazyModuleLoader: LazyModuleLoader,
  ) {}

  async create(createCoffeeDto: CreateCoffeeDto) {
    // Lazy load RewardsModule
    console.time();
    const rewardsModuleRef = await this.lazyModuleLoader.load(() =>
      import('../rewards/rewards.module').then((m) => m.RewardsModule),
    );
    const { RewardsService } = await import('../rewards/rewards.service');
    const rewardsService = rewardsModuleRef.get(RewardsService);
    console.timeEnd();
    rewardsService.grantTo();

    /**
     * Open up a separate terminal window and use CURL to call our POST /coffees endpoint, just to test everything out:
     * curl.exe -H 'content-type: application/json' localhost:3000/coffees -d "{}"
     **/

    return 'This action adds a new coffee';
  }

  findAll() {
    return `This action returns all coffees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coffee`;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    return `This action updates a #${id} coffee`;
  }

  remove(id: number) {
    return `This action removes a #${id} coffee`;
  }
}
