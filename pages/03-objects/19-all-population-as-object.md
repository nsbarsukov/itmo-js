---
class: host
---

# Сохраняем все население страны в один объект

````md magic-move

```js
const citizens = {
    '1234 567890': { // серия и номер паспорта
        name: 'Nikita',
        surname: 'Barsukov'
        // [Прочие свойства гражданина]
    },
    '0987 654321': {
        name: 'Ivan',
        surname: 'Petrov',
        // [Прочие свойства гражданина]
    }
    // ...
}

// Как же неудобно – нужно знать ключи
console.log(citizens['1234 567890'].name); // 'Nikita'
console.log(citizens['0987 654321'].surname); // 'Petrov'
```

```js
const citizens = {
   '0': {
       id: '0987 654321', // серия и номер паспорта
       name: 'Nikita',
       surname: 'Barsukov'
       // [Прочие свойства гражданина]
   },
   '1': {
       id: '0987 654321',
       name: 'Ivan',
       surname: 'Petrov',
       // [Прочие свойства гражданина]
   }
   // ...
}

// Как же удобно – достаточно взять порядковый номер
console.log(citizens[0].name); // Nikita
console.log(citizens[1].surname); // Petrov
```

```js
const citizens = [
   {
       id: '0987 654321', // серия и номер паспорта
       name: 'Nikita',
       surname: 'Barsukov'
       // [Прочие свойства гражданина]
   },
   {
       id: '0987 654321',
       name: 'Ivan',
       surname: 'Petrov',
       // [Прочие свойства гражданина]
   }
   // ...
]

// Как же удобно – достаточно взять порядковый номер
console.log(citizens[0].name); // Nikita
console.log(citizens[1].surname); // Petrov
```

````

<br />

<blockquote v-click="[1,2]">И вот мы "изобрели" заново массив!</blockquote>

<style>
.host code {
    font-size: 1rem;
}
</style>
