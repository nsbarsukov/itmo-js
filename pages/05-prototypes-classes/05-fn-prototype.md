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

// cat1.eat() // 'ням-ням'
// dog1.eat() // 'ням-ням'
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
       console.log('ням-ням');
   }
}

const cat1 = new Сat('Матроскин');
const cat2 = new Сat('Том');

const dog1 = new Dog('Шарик')
const dog2 = new Dog('Спайк')

// cat1.eat() // 'ням-ням'
// dog1.eat() // 'ням-ням'
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
       console.log('ням-ням');
   }
}

Cat.prototype = animal;
Dog.prototype = animal;

const cat1 = new Сat('Матроскин');
const cat2 = new Сat('Том');

const dog1 = new Dog('Шарик')
const dog2 = new Dog('Спайк')

// cat1.eat() // 'ням-ням'
// dog1.eat() // 'ням-ням'
```

````

<style>
.host {
    --slidev-code-font-size: 0.75rem;
    --slidev-code-line-height: 1rem;
}
</style>
