---
class: host
---

# Итерация ключей объекта

```js
const obj = {
   first: 1,
   second: 2,
   third: 3,
};

for (const key in obj) {
   console.log(key); // 'first', 'second', 'third'
   console.log(obj[key]); // 1, 2, 3
}
```

<style>
.host code {
  font-size: 1.75rem;
}

</style>
