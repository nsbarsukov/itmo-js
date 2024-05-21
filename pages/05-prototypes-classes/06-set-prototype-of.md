---
class: host
---

# Object.setPrototypeOf

````md magic-move
```js
const animal = {
   canBreathe: true,
   eat() {
       console.log('ням-ням');
   }
}

const cat = new Cat('Матроскин');
const dog = new Dog('Шарик');

cat.eat(); // TypeError: cat.eat is not a function

Object.setPrototypeOf(cat, animal);
Object.setPrototypeOf(dog, animal);

cat.eat(); // ✅
dog.eat(); // ✅
```

```js
const animal = {
   canBreathe: true,
   eat() {
       console.log('ням-ням');
   }
}

const cat = new Cat('Матроскин');
const dog = new Dog('Шарик');

cat.eat(); // TypeError: cat.eat is not a function

Object.setPrototypeOf(cat, animal);
Object.setPrototypeOf(dog, animal);

cat.eat(); // ✅
dog.eat(); // ✅

const anotherCat = new Сat('Том');
anotherCat.eat(); // TypeError: cat.eat is not a function
```

````

<style>
.host {
    --slidev-code-font-size: 1rem;
    --slidev-code-line-height: 1.25rem;
}
</style>
