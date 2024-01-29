import { writeFile } from 'node:fs/promises';
import { getPath } from '../services.js';
import { errorMessage } from './constants.js';

const content = 'I am fresh and young';
const filePath = getPath(import.meta.url, 'files', 'fresh.txt');

const create = async () => {
    try {
        await writeFile(filePath, content, { flag: 'wx' });
    } catch {
        throw new Error(errorMessage);
    }
};

await create();
