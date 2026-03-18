# Migration Guide

## From v0.x to v1.0

### Breaking Changes

1. **Configuration Format**
   - Old: `config.json`
   - New: `.env` file

2. **Database Structure**
   - Old: `data/database.json`
   - New: `data/freon-db.json`

3. **Bot Token**
   - Old: Hardcoded in config
   - New: Environment variable `TELEGRAM_BOT_TOKEN`

### Migration Steps

1. Backup your data:
```bash
cp data/database.json data/database.json.backup
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Copy your old configuration:
```bash
# Edit .env and add your old values
```

4. Update database format:
```bash
node migrate-db.js
```

5. Test the bot:
```bash
npm test
```

6. Start the bot:
```bash
npm start
```

## Rollback

If you need to rollback:

1. Stop the bot
2. Restore database:
```bash
cp data/database.json.backup data/database.json
```

3. Checkout previous version:
```bash
git checkout v0.x
```

4. Start the bot

## Support

For issues, create a GitHub issue.