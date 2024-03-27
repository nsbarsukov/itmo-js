---
layout: default
class: host
---

# Как запустить JavaScript код ?
Через HTML-файл

<ol>

<li>

Создаем 2 файла
```shell
touch index.html index.js
```
</li>

<li>

Сохраняем любой свой JavaScript код в файл **index.js**
```js
console.log(2+2);
```
</li>

<li>

Подключаем JavaScript-файл внутри **index.html**
```html
<script src="index.js"></script>
```
</li>

<li>

Открываем файл **index.html** через браузер
</li>
</ol>

<style>
    .host li p {
        margin-bottom: 0;
    }

    .host li {
        margin-bottom: 2rem;
    }
</style>

