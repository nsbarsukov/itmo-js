---
class: host
---

# Про переопределение методов

````md magic-move
```js
class Animal {
   constructor(initialEnergy) {
       this.energy = initialEnergy;
   }
   run() {
       this.energy--;
   }
   sleep() {
       this.energy++;
   }
}

const unknownAnimal = new Animal(100);
unknownAnimal.run();
console.log(unknownAnimal.energy); // 99
```

```js
class Animal {
   constructor(initialEnergy) {
       this.energy = initialEnergy;
   }
   run() {
       this.energy--;
   }
   sleep() {
       this.energy++;
   }
}

const unknownAnimal = new Animal(100);
unknownAnimal.run();
console.log(unknownAnimal.energy); // 99

class Dog extends Animal {
   constructor(initialEnergy, name) {
       super(initialEnergy);
       this.name = name;
   }
}
```

```js
class Animal {
   constructor(initialEnergy) {
       this.energy = initialEnergy;
   }
   run() {
       this.energy--;
   }
   sleep() {
       this.energy++;
   }
}

const unknownAnimal = new Animal(100);
unknownAnimal.run();
console.log(unknownAnimal.energy); // 99

class Dog extends Animal {
   constructor(initialEnergy, name) {
       super(initialEnergy);
       this.name = name;
   }
   sleep() {
       console.log('Zzzzzzzz...');
   }
}

const dog = new Dog(1_000, 'Шарик');
dog.sleep(); 'Zzzzzzzz...'
console.log(dog.energy); // 1_000 (упс, забыли энергию увеличить после сна!)
```

```js
class Animal {
   constructor(initialEnergy) {
       this.energy = initialEnergy;
   }
   run() {
       this.energy--;
   }
   sleep() {
       this.energy++;
   }
}

const unknownAnimal = new Animal(100);
unknownAnimal.run();
console.log(unknownAnimal.energy); // 99

class Dog extends Animal {
   constructor(initialEnergy, name) {
       super(initialEnergy);
       this.name = name;
   }
   sleep() {
       super.sleep();
       console.log('Zzzzzzzz...');
   }
}

const dog = new Dog(1_000, 'Шарик');
dog.sleep(); 'Zzzzzzzz...'
console.log(dog.energy); // 1_001 (теперь все хорошо)
```

````

<style>
.host {
    padding-top: 1rem;
}

.host h1 {
    margin-bottom: 0.25rem;
}

.host {
    --slidev-code-font-size: 0.6rem;
    --slidev-code-line-height: 1rem;
}
</style>
