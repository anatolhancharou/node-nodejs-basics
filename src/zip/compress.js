import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { getPath } from '../services.js';

const fileToCompressPath = getPath(
    import.meta.url,
    'files',
    'fileToCompress.txt'
);
const compressedFilePath = getPath(import.meta.url, 'files', 'archive.gz');

const compress = async () => {
    const readStream = createReadStream(fileToCompressPath);
    const writeStream = createWriteStream(compressedFilePath);
    await pipeline(readStream, createGzip(), writeStream);
};

await compress();
