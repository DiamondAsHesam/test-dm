from telegram import InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Updater, CommandHandler

# توکن ربات تلگرام خود را اینجا قرار دهید
TOKEN = '7369812127:AAHlkw1RqFnZlV-Agtoc8ihI5VhlARfnU_0'

# تابع شروع ربات
def start(update, context):
    update.message.reply_text("سلام! به ربات من خوش آمدید.")

# تابع برای ایجاد دکمه و نمایش مینی اپ
def button(update, context):
    keyboard = [
        [InlineKeyboardButton("باز کردن مینی اپ", web_app={'url': 'https://your-web-app-url.com'})],
    ]
    
    reply_markup = InlineKeyboardMarkup(keyboard)
    update.message.reply_text('لطفاً دکمه زیر را فشار دهید تا مینی اپ باز شود:', reply_markup=reply_markup)

# تابع اصلی برای اجرای ربات
def main():
    updater = Updater(TOKEN, use_context=True)
    
    dp = updater.dispatcher
    
    dp.add_handler(CommandHandler('start', start))
    dp.add_handler(CommandHandler('menu', button))  # برای نمایش منو
    
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
