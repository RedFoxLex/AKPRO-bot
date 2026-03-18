#!/bin/bash

# Скрипт для установки бота как systemd сервиса

echo "Установка AKPRO Bot как сервиса..."

# Копируем сервис файл
sudo cp jarvis-bot.service /etc/systemd/system/

# Перезагружаем systemd
sudo systemctl daemon-reload

# Включаем автозапуск
sudo systemctl enable jarvis-bot

# Запускаем сервис
sudo systemctl start jarvis-bot

# Проверяем статус
sudo systemctl status jarvis-bot

echo "Сервис установлен и запущен!"