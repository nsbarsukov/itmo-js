---
class: host
---

# Числовое преобразование типа

```js {all|1-4|5-6|7|8-9|5,11-12}
Number("123"); // 123
Number("   123   "); // 123
Number("      "); // 0
Number("abc"); // NaN
Number(true); // 1
Number(false); // 0
Number(null); // 0
Number(undefined); // NaN
Number({}); // NaN

// Унарный плюс – краткая версия числового преобразования
console.log(+true); // 1
```


<style>
.host code {
    font-size: 1.5rem;
}
</style>
