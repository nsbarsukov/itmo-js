---
class: host
---

# Легаси \_\_proto\_\_

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
    --slidev-code-font-size: 0.7rem;
    --slidev-code-line-height: 1rem;
}
</style>
