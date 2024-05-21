---
class: host
---

# Прототипы vs классы

```js
function Cat(name) {
    this.name = name;
    this.type = 'cat';
}

Cat.prototype.sayHi = function() {
    console.log(`${this.name} says "Meoooow"`);
}

const cat = new Cat('Матроскин');

/* ИЛИ */

class Cat {
    type = 'cat';

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} says "Meoooow"`);
    }
}

const cat = new Cat('Матроскин');
```

<style>
.host {
    --slidev-code-font-size: 0.7rem;
    --slidev-code-line-height: 1rem;
}
</style>
