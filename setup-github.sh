#!/bin/bash

# Скрипт для настройки GitHub репозитория

echo "=========================================="
echo "  Настройка GitHub для AKPRO-bot"
echo "=========================================="
echo ""

# Проверяем, инициализирован ли git
if [ ! -d ".git" ]; then
    echo "📦 Инициализация Git..."
    git init
    echo "✅ Git инициализирован"
else
    echo "✅ Git уже инициализирован"
fi

# Добавляем все файлы
echo ""
echo "📁 Добавление файлов..."
git add .

# Создаём коммит
echo ""
echo "💾 Создание коммита..."
git commit -m "Initial commit: AKPRO-bot"

echo ""
echo "=========================================="
echo "  Следующие шаги:"
echo "=========================================="
echo ""
echo "1. Создайте репозиторий на GitHub:"
echo "   https://github.com/new"
echo "   Название: AKPRO-bot"
echo "   Приватный: Нет"
echo ""
echo "2. Добавьте удалённый репозиторий:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/AKPRO-bot.git"
echo ""
echo "3. Загрузите код:"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. Настройте Secrets в GitHub:"
echo "   Settings → Secrets and variables → Actions"
echo "   Добавьте: TELEGRAM_BOT_TOKEN, ADMIN_CHAT_ID, и другие"
echo ""
echo "5. Запустите бота:"
echo "   Actions → Run Telegram Bot → Run workflow"
echo ""
echo "Подробные инструкции: DEPLOY_INSTRUCTIONS.md"
echo ""