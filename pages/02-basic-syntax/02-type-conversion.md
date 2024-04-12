---
class: host
---

# Преобразование типов
Это процесс преобразования значений из одного типа данных в другой тип данных

<div class="code">

```ts {hide|1-3|5-6|8-9}
// Проблема 
console.log('12' + '3'); // '123'
console.log(12 + 3); // 15

// Явное преобразование
console.log(Number('12') + Number('3')); // 15

// Неявное преобразование
console.log('12' - 3); // 9
```
</div>


<style>
.host code {
    font-size: 1.75rem;
}
</style>
