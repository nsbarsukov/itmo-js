---
class: host
---

# Область видимости переменных для функций

<div v-click.hide>

```js
function greetUser(
    firstName,
    lastName = ''
) {
    const fullName = `${firstName}${lastName && (' ' + lastName)}`;
    
    console.log(`Hello, ${fullName}`);
}

greetUser('Nikita', 'Barsukov'); // 'Hello, Nikita Barsukov'
greetUser('Nikita'); // 'Hello, Nikita'
greetUser('Ivan', 'Petrov'); // 'Hello, Ivan Petrov'

console.log(fullName); // ReferenceError: fullName is not defined
```
</div>

<div v-click="1">
````md magic-move
```js
const GREETING_MESSAGE = 'Hello';

function greetUser(
   firstName,
   lastName = ''
) {
   console.log(`${GREETING_MESSAGE}, ${firstName} ${lastName}`);
}

greetUser('Nikita', 'Barsukov'); // 'Hello, Nikita Barsukov'
greetUser('Ivan', 'Petrov'); // 'Hello, Ivan Petrov'
```

```js
const GREETING_MESSAGE = 'Hello';

function greetUser(
   firstName,
   lastName = ''
) {
   const GREETING_MESSAGE = 'Hi';
  
   console.log(`${GREETING_MESSAGE}, ${firstName} ${lastName}`);
}

greetUser('Nikita', 'Barsukov'); // 'Hi, Nikita Barsukov'
greetUser('Ivan', 'Petrov'); // 'Hi, Ivan Petrov'
```
````
</div>

<style>
.host {
    --slidev-code-font-size: 1.25rem;
    --slidev-code-line-height: 1.75rem;
}

.host .slidev-vclick-hidden {
    display: none;
}
</style>
