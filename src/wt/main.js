import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';
import { getPath } from '../services.js';

const cpuCoresCount = cpus().length;
const workerFilePath = getPath(import.meta.url, 'worker.js');

const workerService = (count) => {
    return new Promise((res) => {
        const worker = new Worker(workerFilePath, { workerData: count });

        worker.on('message', (data) => {
            res({
                status: 'resolved',
                data,
            });
        });

        worker.on('error', () => {
            res({
                status: 'error',
                data: null,
            });
        });
    });
};

const performCalculations = async () => {
    const workers = Array.from({ length: cpuCoresCount }).map((_, i) =>
        workerService(10 + i)
    );
    const result = await Promise.all(workers);
    console.log(result);
};

await performCalculations();
