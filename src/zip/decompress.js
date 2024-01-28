import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { getPath } from '../services.js';

const compressedFilePath = getPath(import.meta.url, 'files', 'archive.gz');
const decompressedFilePath = getPath(
    import.meta.url,
    'files',
    'fileToCompress.txt'
);

const decompress = async () => {
    const readStream = createReadStream(compressedFilePath);
    const writeStream = createWriteStream(decompressedFilePath);
    await pipeline(readStream, createGunzip(), writeStream);
};

await decompress();
