---
class: host
---

# Set
Особый вид объекта без ключей, только значения. Каждое значение может появляться только один раз.

```js
const fruits = new Set([
    "апельсин",
    "яблоко",
    "банан",
    "яблоко" // этот дубль автоматом уберется
]);

console.log(fruits.size); // 3
fruits.add('груша');
console.log(fruits.size); // 4

fruits.add('апельсин'); // а он уже есть, пытаемся добавить дубль
console.log(fruits.size); // 4

fruits.delete('банан');
console.log(fruits.size); // 3
```

<style>
.host code {
    font-size: 1rem;
}
</style>
