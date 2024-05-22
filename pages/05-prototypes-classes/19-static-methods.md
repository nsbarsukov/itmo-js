---
layout: default
class: host
---

# Статические методы и свойства
Используются для реализации констант/функций, которые будут принадлежать классу в целом, но не какому-либо его конкретному объекту

```js
class SuperClass {
    static staticMethod() {
        console.log(this === SuperClass);
    }
}

const instance = new SuperClass();

SuperClass.staticMethod(); // true
console.log(instance.staticMethod) // undefined
```

<style>
.host {
    --slidev-code-font-size: 1.25rem;
    --slidev-code-line-height: 1.5rem;
}
</style>
