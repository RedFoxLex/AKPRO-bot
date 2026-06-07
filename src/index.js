require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { setupHandlers } = require('./handlers');
const { getPresentProxyEnvKeys, validateTokenFormat } = require('./bot');
const config = require('./config');

function logStartupDiagnostics() {
  const envPath = path.join(process.cwd(), '.env');
  const hasDotEnv = fs.existsSync(envPath);
  const proxyEnvKeys = getPresentProxyEnvKeys();

  console.log('[startup] Working directory:', process.cwd());
  console.log('[startup] .env present:', hasDotEnv ? 'yes' : 'no');
  console.log('[startup] TELEGRAM_BOT_TOKEN present:', config.token ? 'yes' : 'no');

  if (config.token) {
    console.log('[startup] TELEGRAM_BOT_TOKEN format:', validateTokenFormat(config.token) ? 'looks valid' : 'looks suspicious');
  }

  console.log('[startup] Proxy env detected:', proxyEnvKeys.length > 0 ? proxyEnvKeys.join(', ') : 'none');
}

logStartupDiagnostics();
setupHandlers();

console.log('Bot started');
