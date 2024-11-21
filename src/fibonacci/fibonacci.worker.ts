import { parentPort } from 'worker_threads';

function fib(n = 10) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// FibonacciWorkerHost
parentPort.on('message', ({ n, id }) => {
  const result = fib(n);
  parentPort.postMessage({ result, id });
});

// piscina - the worker pool
module.exports = (n: number) => {
  return fib(n);
};
