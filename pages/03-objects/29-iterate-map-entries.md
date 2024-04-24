---
class: host
---

# Перебор свойств в Map

```js
const recipeMap = new Map([
    ["огурец",  500],
    ["помидор", 350],
    ["лук",     50]
]);

// перебор по ключам (овощи)
for (const vegetable of recipeMap.keys()) {
    console.log(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (const amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}

// перебор по key/value
for (const amount of Array.from(recipeMap)) {
    console.log(amount); // [ ["огурец", 500], ["помидор", 350], ["лук", 50] ]
}
```

<style>
.host code {
    font-size: 0.9rem;
}
</style>
