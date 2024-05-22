---
class: host
---

# Легаси \_\_proto\_\_

```js
function Cat(name) {}
function Dog(name) {}

const animal = {
    canBreathe: true,
    eat() {
        console.log('хрум-хрум');
    }
}

const cat = new Cat('Матроскин');
const dog = new Dog('Шарик');

Object.setPrototypeOf(cat, animal);
dog.__proto__ = animal;

cat.eat(); // ✅
dog.eat(); // ✅

console.log(Object.getPrototypeOf(cat) === animal); // true
console.log(dog.__proto__ === animal); // true
```

<style>
.host {
    --slidev-code-font-size: 0.85rem;
    --slidev-code-line-height: 1rem;
}
</style>
