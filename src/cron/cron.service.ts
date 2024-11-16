import { Interval } from 'src/scheduler/decorators/interval.decorator';
import { IntervalHost } from '../scheduler/decorators/interval-host.decorator';

@IntervalHost
export class CronService {
  @Interval(1000)
  everySecond() {
    console.log('This will be logged every second');
  }
}
