---
class: host
---

# Map
"Прокаченный" объект, который может использовать ключи любого типа данных

```js
const map = new Map();

map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");  // булевое значение как ключ

console.log(map.get("1")); // "str1"
console.log(map.get(1)); // "num1"
console.log(map.get(true)); // "bool1"

console.log(map.has(1)); // true
map.delete(1);
console.log(map.has(1)); // false
console.log(map.has('1')); // true

console.log(map.size); // 2
```

<style>
.host code {
    font-size: 1rem;
}
</style>
