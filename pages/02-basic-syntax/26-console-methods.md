---
class: host
---

# Console методы

```js {all}{at:1}
console.log('1' + '1'); // '1'

console.warn('Be carefull!'); // ⚠️ Be carefull!
console.error('Oops!'); // 🛑️ Oops!
```

```js {hide|all}{at:1}
function fn() {
  console.count("Custom id");
}

fn(); // Custom id: 1
fn(); // Custom id: 2
```

```js {hide|hide|all}{at:1}
function fn() {
    console.time('Custom id');
    // [function body]
    // [...]
    console.timeEnd("Custom id");
}
```

```js {hide|hide|hide|all}{at:1}
console.group('My mega group name');
console.log(1);
console.log(2);
console.groupEnd();
```

<style>
.host code {
    font-size: 0.75rem;
}
</style>
