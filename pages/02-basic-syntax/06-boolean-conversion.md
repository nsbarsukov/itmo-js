---
class: host
---

# Логическое преобразование типа

```js {all|1-6|8-12|all}
// "ложноподобные" ("falsy") значения
console.log(Boolean('')); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// "истинноподобные" ("truthy") значения
console.log(Boolean(' ')); // true
console.log(Boolean('0')); // true
console.log(Boolean(42)); // true
console.log(Boolean({})); // true
```


<style>
.host code {
    font-size: 1.5rem;
}
</style>
