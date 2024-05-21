---
class: host
---

# Создание однотипных объектов
Решаем проблему дублирование кода через функцию-конструктор

````md magic-move
```js
function Cat(name) {
    this.name = name;
    this.hasWhiskers = true;
    this.legs = 4;
    this.tail = 1;
    this.say = function () {
        console.log('Мяяяяяяу!');
    }
}

const cat1 = new Cat('Матроскин');
const cat2 = new Cat('Том');
```

```js
function Cat(name) {
   // this = {}; <=========== (неявно)

    this.name = name;
    this.hasWhiskers = true;
    this.legs = 4;
    this.tail = 1;
    this.say = function () {
        console.log('Мяяяяяяу!');
    }
    
    // return this; <=========== (неявно)
}

const cat1 = new Cat('Матроскин');
const cat2 = new Cat('Том');
```
````

<style>
.host {
    --slidev-code-font-size: 1rem;
    --slidev-code-line-height: 1.25rem;
}
</style>
