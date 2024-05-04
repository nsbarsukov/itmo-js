---
class: host
---

# Async/await 
Вначале про async

<v-clicks at="0">

<p class="all-fn-types">

```js
async function functionDeclaration(arg1, arg2) {
    // [...]
}

const functionExpression = async function(arg1, arg2) {};
const arrowFunction = async (arg1, arg2) => {};
```
</p>

```js
async function fn() {
   return 1;
}

console.log(fn()); // Promise
fn().then(x => console.log(x)); // 1
```

```js
async function fn() {
   return Promise.resolve(1);
}

fn().then(x => console.log(x)); // 1
```

</v-clicks>

<style>
.host {
    --slidev-code-font-size: 0.75rem;
    --slidev-code-line-height: 1rem;
}

.host .all-fn-types {
    margin-bottom: 3rem;
}
</style>
