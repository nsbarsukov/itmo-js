---
class: host
---

# Разновидности функций

```js {all|all|hide}{at:1}
// function declaration
function sayHi() {
    console.log("Привет");
}
```

```js {hide|all|hide}{at:1}
// function expression
const sayHi = function() {
    console.log("Привет");
};
```

```js {hide|hide|all|2-3|hide}{at:1}
funcDeclaration(); // ✅
funcExpression(); // ❌ ReferenceError:
                  // Cannot access 'funcExpression' before initialization

function funcDeclaration() {
    console.log('Я могу быть вызвана даже раньше своего объявления 😎');
}

const funcExpression = function () {
    console.log('А я упаду с ошибкой, если меня вызовут раньше объявления 🥲');
}
```

```js {hide|hide|hide|hide|all|hide}{at:1}
'use strict';

const condition = Math.random() > 0.5;

if (condition) {
   function funcDeclaration() {}
} else {
   function funcDeclaration() {}
}

funcDeclaration(); // ❌ ReferenceError: funcDeclaration is not defined
```

```js {hide|hide|hide|hide|hide|all}{at:1}
'use strict';

const condition = Math.random() > 0.5;
let funcExpression;

if (condition) {
    funcExpression = function() {}
    function funcDeclaration() {}
} else {
    funcExpression = function () {}
    function funcDeclaration() {}
}

funcExpression(); // ✅
funcDeclaration(); // ❌ ReferenceError: funcDeclaration is not defined
```

<style>
.host code {
    font-size: 1rem;
}

.host .slidev-vclick-hidden {
    display: none;
}
</style>
