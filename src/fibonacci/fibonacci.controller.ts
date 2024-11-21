import { Controller, Get, Query } from '@nestjs/common';
import { FibonacciWorkerHost } from './fibonacci-worker.host';
import Piscina from 'piscina';
import { resolve } from 'path';

@Controller('fibonacci')
export class FibonacciController {
  fibonacciWorker = new Piscina({
    filename: resolve(__dirname, 'fibonacci.worker.js'),
  });

  constructor(private readonly fibonacciWorkerHost: FibonacciWorkerHost) {}

  @Get('single-worker')
  fibonacci(@Query('n') n = 10) {
    return this.fibonacciWorkerHost.run(+n);
  }

  @Get('worker-pool')
  fibonacciMultyWorkers(@Query('n') n = 10) {
    return this.fibonacciWorker.run(+n);
  }
}
