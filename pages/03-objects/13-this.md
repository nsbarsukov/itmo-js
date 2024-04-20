---
class: host
---

# Вот бы метод имел доступ к свойствам объекта ...

````md magic-move

```js
const person = {
    name: 'Nikita',
    surname: 'Barsukov',
    getFullName() {
        // Хочется, чтобы данный метод возвращал 'Nikita Barsukov'
    }
}
```

```js
const person = {
    name: 'Nikita',
    surname: 'Barsukov',
    getFullName() {
        return this.name + ' ' + this.surname;
    }
}
```

````

<br />

<blockquote v-click="1">

Для доступа к информации внутри объекта метод может использовать ключевое слово **this**
</blockquote>

<style>
.host {
    --slidev-code-font-size: 1.25rem;
    --slidev-code-line-height: 1.75rem;
}

.host blockquote p {
    font-size: 1.5rem;
    line-height: 2rem;
}
</style>
