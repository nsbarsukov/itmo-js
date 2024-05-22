---
class: host
---

# Про свойство `prototype`

````md magic-move
```js
function Cat(name) {
   // здесь сохранение кучи свойств в this
}

function Dog(name) {
   // здесь сохранение кучи свойств в this
}

const cat1 = new Сat('Матроскин');
const cat2 = new Сat('Том');

const dog1 = new Dog('Шарик')
const dog2 = new Dog('Спайк')
```

```js
function Cat(name) {
   // здесь сохранение кучи свойств в this
}

function Dog(name) {
   // здесь сохранение кучи свойств в this
}

const cat1 = new Сat('Матроскин');
const cat2 = new Сat('Том');

const dog1 = new Dog('Шарик')
const dog2 = new Dog('Спайк')

// cat1.eat() // 'хрум-хрум'
// dog1.eat() // 'хрум-хрум'
```

```js
function Cat(name) {
   // здесь сохранение кучи свойств в this
}

function Dog(name) {
   // здесь сохранение кучи свойств в this
}

const animal = {
   canBreathe: true,
   eat() {
       console.log('хрум-хрум');
   }
}

const cat1 = new Сat('Матроскин');
const cat2 = new Сat('Том');

const dog1 = new Dog('Шарик')
const dog2 = new Dog('Спайк')

// cat1.eat() // 'хрум-хрум'
// dog1.eat() // 'хрум-хрум'
```

```js
function Cat(name) {
   // здесь сохранение кучи свойств в this
}

function Dog(name) {
   // здесь сохранение кучи свойств в this
}

const animal = {
   canBreathe: true,
   eat() {
       console.log('хрум-хрум');
   }
}

Cat.prototype = animal;
Dog.prototype = animal;

const cat1 = new Сat('Матроскин');
const cat2 = new Сat('Том');

const dog1 = new Dog('Шарик')
const dog2 = new Dog('Спайк')

cat1.eat() // 'хрум-хрум'
dog1.eat() // 'хрум-хрум'
```

````

<style>
.host {
    --slidev-code-font-size: 0.75rem;
    --slidev-code-line-height: 1rem;
}
</style>
