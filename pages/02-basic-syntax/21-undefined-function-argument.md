---
class: host
---

# Отсутствующие аргументы функции

````md magic-move
```js
export function greetUser(
    firstName,
    lastName,
    greetingMessage
) {
    console.log(`${greetingMessage}, ${firstName} ${lastName}`);
}

greetUser('Nikita', 'Barsukov', 'Hello'); // 'Hello, Nikita Barsukov'
greetUser('Ivan', 'Petrov', 'Hi'); // 'Hi, Ivan Petrov'
```

```js
export function greetUser(
    firstName,
    lastName,
    greetingMessage
) {
    console.log(`${greetingMessage}, ${firstName} ${lastName}`);
}

greetUser('Nikita', 'Barsukov'); // 'undefined, Nikita Barsukov'
greetUser('Ivan', 'Petrov', 'Hi'); // 'Hi, Ivan Petrov'
```

```js
export function greetUser(
    firstName,
    lastName,
    greetingMessage = 'Hello'
) {
    console.log(`${greetingMessage}, ${firstName} ${lastName}`);
}

greetUser('Nikita', 'Barsukov'); // 'Hello, Nikita Barsukov'
greetUser('Ivan', 'Petrov', 'Hi'); // 'Hi, Ivan Petrov'
```
````

<style>
.host {
    --slidev-code-font-size: 1.25rem;
    --slidev-code-line-height: 2rem;
}
</style>
