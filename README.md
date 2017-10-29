# Flower-Guild

Проект создан для того, чтобы познакомиться с основными возможностями Angular.

## Используемые технологии

[Angular](https://angular.io/)
[Angular CLI](https://cli.angular.io/)
[Angular Material](https://material.angular.io/)
[Angular Flex-Layout](https://github.com/angular/flex-layout)
Для имитации работы сервера использован [in-memory-web-api](https://github.com/angular/in-memory-web-api)
Для взаимодействия с сервером применяется [ngx-restangular](https://github.com/2muchcoffeecom/ngx-restangular)

## Работа с сайтом

Для открытия проекта в окне браузера необходимо пройти по ссылке https://sergeevagalina.github.io/Flower-Guild/.

На сайте доступны следующие функции: 
* Регистрация
* Вход под одной из существующих в памяти учетных записей (email: `ivanov.@gmail.com`; password: `bbbb`)
* Выход 
* Форма создания советов
* Форма создания объявлений

Все созданные пользователем записи будут доступны на сайте до обновления страницы. Данная особенность связана с работой in-memory web-api.
