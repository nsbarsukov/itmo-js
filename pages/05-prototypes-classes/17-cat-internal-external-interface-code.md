---
layout: default
class: host
---

# Модификаторы доступа в действии

```js {all|1,2,14,25,27|1,3,9,14,17,25,28|1,4,6,14,15,19-20,25,26|all}
class Animal {
   isAlive = true; // public
   _energy = 100; // эмуляция protected
   #stomach = []; // private
   eat(food) {
       this.#stomach.push(food);
   }
   sleep() {
       this._energy += this.#stomach.length;
       this._stomach = [];
   }
}

class Cat extends Animal {
   #legs = 4;
   play() {
       this._energy--;
   }
   hunt() {
       this.#stomach.push('мышь'); // ❌ Error
       super.eat('мышь') // ✅
   }
}

const cat = new Cat();
cat.#legs = 5; // ❌Error
console.log(cat.isAlive); // ✅
cat._energy = -5; // Ошибки не будет, но лучше не стоит
```

<style>
.host {
    --slidev-code-font-size: 0.65rem;
    --slidev-code-line-height: 1rem;
}

.host h1 {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
}
</style>
