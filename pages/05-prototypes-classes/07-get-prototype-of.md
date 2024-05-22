---
class: host
---

# Object.getPrototypeOf

```js
const animal = {
    canBreathe: true,
    eat() {
        console.log('хрум-хрум');
    }
}

const cat = new Cat('Матроскин');

Object.setPrototypeOf(cat, animal);

console.log(Object.getPrototypeOf(cat) === animal); // true
```

<style>
.host {
    --slidev-code-font-size: 1.25rem;
    --slidev-code-line-height: 1.5rem;
}
</style>
