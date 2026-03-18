#!/bin/bash

# Скрипт для перезапуска бота

echo "Перезапуск AKPRO Bot..."

# Останавливаем бота
pkill -f "node src/bot.js"

# Ждём 2 секунды
sleep 2

# Запускаем бота
node src/bot.js &

echo "Бот перезапущен!"