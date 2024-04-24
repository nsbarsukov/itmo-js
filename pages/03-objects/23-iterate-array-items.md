---
class: host
---

# Перебор элементов массива через цикл

```js
const fruits = ["Яблоко", "Апельсин", "Груша"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

```

<div class="arrow" v-click>↓</div>

```js {hide|all}{at:1}
const fruits = ["Яблоко", "Апельсин", "Слива"];

for (const fruit of fruits) {
    console.log(fruit);
}

```

<style>
.host code {
  font-size: 1.25rem;
}

.host .arrow {
    font-size: 3rem;
    text-align: center;
    color: gray;
}
</style>
