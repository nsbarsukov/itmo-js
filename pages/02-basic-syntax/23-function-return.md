---
class: host
---

# Ключевое слово return

```js {all|hide}{at:1}
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2);
console.log( result ); // 3
```

```js {hide|all|hide}{at:1}
function sayHi() {
   console.log('Hi!')
}

const result = sayHi();
console.log( result ); // undefined
```

```js {hide|hide|all|4}{at:1}
function checkAge(age) {
   if (!age) {
       console.log('Аргумент не передан');
       return; // функция вернет undefined
       console.log('Эта строчка НИКОГДА не будет вызвана');
   }

   console.log(age > 18 ? 'Разрешено' : 'Запрещено');
}

checkAge(); // 'Аргумент не передан'
checkAge(19); // 'Разрешено'
```

<style>
.host code {
    font-size: 1.25rem;
}

.host .slidev-vclick-hidden {
    display: none;
}
</style>
