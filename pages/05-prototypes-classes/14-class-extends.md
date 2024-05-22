---
class: host
---

# Наследование классов

````md magic-move
```js
class Animal {
    energy = 100;
    run() {
        this.energy--;
    }
    sleep() {
        this.energy++;
    }
}

class Cat extends Animal {
    sayHi() {
        console.log('Meow!');
    }
}

const cat = new Cat('Матроскин');
cat.run();
console.log(cat.energy); // 99
```

```js
class Animal {
    energy = 100;
    run() {
        this.energy--;
    }
    sleep() {
        this.energy++;
    }
}

class Cat extends Animal {
    sayHi() {
        console.log('Meow!');
    }
}

const cat = new Cat('Матроскин');
cat.run();
console.log(cat.energy); // 99

class Dog extends Animal {
   energy = 1000;
}

const dog = new Dog('Шарик');
dog.sleep();
console.log(dog.energy); // 1001
```

````


<style>
.host {
    --slidev-code-font-size: 0.7rem;
    --slidev-code-line-height: 1rem;
}
</style>
