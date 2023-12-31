# Интернет-магазин с админ панелью

Этот проект представляет собой интернет-магазин с административной панелью, разработанный с использованием React, Node.js, Express, PostgreSQL и других технологий. Проект включает в себя авторизацию, возможность управления товарами, добавление изображений товаров, категории товаров, рейтинг, а также функциональность корзины.

## Описание проекта

Этот интернет-магазин предоставляет пользователю возможность просмотра и покупки товаров. Администратор имеет доступ к административной панели, где он может управлять товарами, добавлять новые, удалять существующие, а также управлять категориями товаров.

### Основные функции

1. **Авторизация и безопасность**
    - Авторизация происходит с использованием JWT токена, передаваемого через cookie по протоколу HTTP.
    - Реализована система безопасности для защиты данных пользователей и администратора (SSH, JWT).

2. **Управление товарами**
    - Администратор может добавлять новые товары, удалять существующие и редактировать информацию о товарах.
    - Для загрузки изображений товаров используется express-fileupload.

3. **Категории товаров**
    - Товары разделены по категориям и типам для удобства навигации пользователей.

4. **Рейтинг товаров**
    - Товары имеют рейтинг, отражающий их популярность среди пользователей.

5. **Корзина покупок**
    - Пользователи могут добавлять товары в корзину и удалять их перед оформлением заказа.

## Технологии

- **Backend:**
    - Node.js
    - Express.js
    - PostgreSQL
    - JWT для аутентификации
    - express-fileupload для загрузки изображений

- **Frontend:**
    - React
    - Mobx для управления состоянием
    - react-router для навигации

[//]: # (## Установка)

[//]: # ()
[//]: # (1. Клонируйте репозиторий:)

[//]: # ()
[//]: # (   ```bash)

[//]: # (   git clone https://github.com/your_username/your_project.git)

[//]: # (Перейдите в каталог проекта:)

[//]: # ()
[//]: # (bash)



[//]: # (cd your_project)

[//]: # (Установите зависимости для сервера:)

[//]: # ()
[//]: # (bash)



[//]: # (cd server)

[//]: # (npm install)

[//]: # (Установите зависимости для клиента:)

[//]: # ()
[//]: # (bash)



[//]: # (cd client)

[//]: # (npm install)

[//]: # (Настройка базы данных)

[//]: # (Создайте базу данных PostgreSQL для проекта.)

[//]: # ()
[//]: # (В файле server/config/dbConfig.js укажите параметры подключения к вашей базе данных.)

[//]: # ()
[//]: # (Запустите миграции для создания таблиц в базе данных:)

[//]: # ()
[//]: # (bash)



[//]: # (cd server)

[//]: # (npm run migrate)

[//]: # (Настройка сервера)

[//]: # (В файле server/config/config.js укажите секретный ключ для генерации JWT токенов.)

[//]: # ()
[//]: # (Запустите сервер:)

[//]: # ()
[//]: # (bash)



[//]: # (cd server)

[//]: # (npm start)

[//]: # (Сервер будет запущен по адресу http://localhost:3001.)

[//]: # ()
[//]: # (Настройка клиента)

[//]: # (В файле client/src/config.js укажите базовый URL для взаимодействия с сервером.)

[//]: # ()
[//]: # (Запустите клиентскую часть:)

[//]: # ()
[//]: # (bash)



[//]: # (cd client)

[//]: # (npm start)

[//]: # (Клиент будет доступен по адресу http://localhost:3000.)
