---
class: host
---

# Создание однотипных объектов
Решаем проблему дублирование кода через функцию-фабрику

```js
function createCat(name) {
    return {
        name,
        species: 'cat',
        hasWhiskers: true,
        legs: 4,
        tail: 1,
        say() {
            console.log('Мяяяяяяу!');
        }
    }
}

const cat1 = createCat('Матроскин');
const cat2 = createCat('Том');
```

<style>
.host {
    --slidev-code-font-size: 1rem;
    --slidev-code-line-height: 1.25rem;
}
</style>
