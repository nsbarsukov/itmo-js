---
class: host
---

# Логическое И
Обозначается двумя знаками амперсанда

```js
true && true;   // true
false && true;  // false
true && false;  // false
false && false; // false
```

<br />

```js {hide|all}
const result = '42' && true && {} && '' && null;

console.log(result); // ''
```


<style>
.host code {
    font-size: 1.75rem;
}
</style>
