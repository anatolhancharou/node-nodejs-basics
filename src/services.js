import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const getPath = (currentFileUrl, ...args) => {
    const __dirname = dirname(fileURLToPath(currentFileUrl));
    return join(__dirname, ...args);
};
