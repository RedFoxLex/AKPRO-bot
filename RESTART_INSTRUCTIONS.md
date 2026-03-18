# Restart Instructions

## Quick Restart

### Using npm
```bash
npm restart
```

### Using systemd
```bash
sudo systemctl restart jarvis-bot
```

### Using Docker
```bash
docker restart akpro-bot
```

## Manual Restart

1. Stop the bot:
```bash
# Find the process
ps aux | grep node

# Kill it
kill -9 <PID>
```

2. Start the bot:
```bash
npm start
```

## Troubleshooting

### Bot not responding

1. Check logs:
```bash
journalctl -u jarvis-bot -f
```

2. Check if process is running:
```bash
ps aux | grep node
```

3. Check port usage:
```bash
netstat -tlnp | grep 3000
```

### High memory usage

1. Check memory:
```bash
free -h
```

2. Restart bot:
```bash
sudo systemctl restart jarvis-bot
```

## Monitoring

### Check status
```bash
sudo systemctl status jarvis-bot
```

### View logs
```bash
journalctl -u jarvis-bot -f
```

### Check uptime
```bash
uptime
```