const dateFns = require('date-fns');
const exec = require('node:child_process').execSync;

const date = dateFns.format(new Date(), 'yyyy-MM-dd');
const repomix = `npx dlx repomix --config repomix/repomix.config.json --include "src" --output "repomix/output/${date}-output.md"`;
const repomixAll = `npx dlx repomix --config repomix/repomix.config.json --include "**/*" --output "repomix/output/${date}-output-all.md"`;
const command = process.argv.includes('--all') ? repomixAll : repomix;

exec(command, { stdio: 'inherit' });
