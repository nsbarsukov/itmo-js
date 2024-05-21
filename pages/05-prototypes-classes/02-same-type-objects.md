---
class: host
---

# Создание однотипных объектов
Объекты отличаются лишь одним свойством – проблема дублирования кода

```js
const cat1 = {
    name: 'Матроскин',
    species: 'cat',
    hasWhiskers: true,
    legs: 4,
    tail: 1,
    say() {
        console.log('Мяяяяяяу!');
    }
}

const cat2 = {
    name: 'Том',
    species: 'cat',
    hasWhiskers: true,
    legs: 4,
    tail: 1,
    say() {
        console.log('Мяяяяяяу!');
    }
}
```

<style>
.host {
    --slidev-code-font-size: 0.75rem;
    --slidev-code-line-height: 1rem;
}
</style>
