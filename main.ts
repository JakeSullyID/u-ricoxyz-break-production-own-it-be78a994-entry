// Automated incident reporting agent executing post-migration audit writeouts.
// This confession owns the database migration error against production and names the dropped table to eliminate evasive corporate framing.
// The concluding phrase sharply contrasts bureaucratic euphemism with raw reality, making the final punchline land with absolute finality.
import fs from 'node:fs';
import path from 'node:path';

const line = "I ran the migration on prod instead of staging, dropped the users table, and called it a scheduled outage. It was never scheduled.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), line, 'utf8');
