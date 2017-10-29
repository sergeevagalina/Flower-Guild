# Flower-Guild

Проект создан для того, чтобы познакомиться с основными возможностями Angular.

## Используемые технологии

* [Angular](https://angular.io/)
* [Angular CLI](https://cli.angular.io/)
* [Angular Material](https://material.angular.io/)
* [Angular Flex-Layout](https://github.com/angular/flex-layout)
* [ngx-restangular](https://github.com/2muchcoffeecom/ngx-restangular)
* [rxjs](https://github.com/Reactive-Extensions/RxJS)
Для эмуляции работы сервера (REST API) использован [in-memory-web-api](https://github.com/angular/in-memory-web-api), для имитации ожидания загрузки с бэкенда в нем установлена задержка в 1 секунду.

## Работа с сайтом

Для открытия проекта в окне браузера необходимо пройти по ссылке https://sergeevagalina.github.io/Flower-Guild/.

На сайте доступны следующие функции: 
* Регистрация
* Вход под одной из существующих в памяти учетных записей (email: `ivanov.@gmail.com`; пароль: `bbbb`)
* Выход 
* Форма создания советов
* Форма создания объявлений (только для зарегистрированных пользователей)

Все созданные пользователем записи будут доступны на сайте до обновления страницы. Данная особенность связана с работой in-memory web-api.
