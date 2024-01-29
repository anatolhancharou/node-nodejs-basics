import { spawn } from 'node:child_process';
import { getPath } from '../services.js';

const scriptPath = getPath(import.meta.url, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    spawn('node', [scriptPath, ...args], {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2', 'arg3']);
