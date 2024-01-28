import { EOL } from 'node:os';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, _, callback) {
            const output = chunk.toString().trim().split('').reverse().join('');
            callback(null, `${output}${EOL}`);
        },
    });

    await pipeline(process.stdin, reverse, process.stdout);
};

await transform();
