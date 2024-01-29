import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { finished } from 'node:stream/promises';
import { getPath } from '../services.js';

const fileToCalculateHashPath = getPath(
    import.meta.url,
    'files',
    'fileToCalculateHashFor.txt'
);

const calculateHash = async () => {
    const stream = createReadStream(fileToCalculateHashPath);
    const hash = createHash('sha256');

    stream.on('data', (chunk) => {
        hash.update(chunk);
    });

    await finished(stream);
    const result = hash.digest('hex');
    console.log(result);
};

await calculateHash();
