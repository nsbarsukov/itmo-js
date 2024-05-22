---
layout: default
class: host
---

# Примеры статических методов и свойств

```js
class Math {
    static PI = 3.14159;
    static random() {
        // [магия с генерацией числа от 0 до 1]
    }
    static sqrt(x) {
        return x ** 0.5;
    }
}

console.log(Math.PI);
console.log(Math.random());
console.log(Math.sqrt(25));
```

```js {hide|all}
class Promise {
   static all(promises) {
       // [...]
   }
  
   static race(promises) {
       // [...]
   }
  
   static any(promises) {
       // [...]
   }
}
```

<style>
.host {
    --slidev-code-font-size: 0.7rem;
    --slidev-code-line-height: 1rem;
}

.host h1 {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
}
</style>
