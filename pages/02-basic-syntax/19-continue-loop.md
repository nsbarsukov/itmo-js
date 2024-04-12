---
class: host
---

# continue
Досрочное завершение выполнение текущей итерации цикла и переход к следующей итерации

```js
for (let i = 0; i < 10; i++) {

    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) {
        continue;
    };
    
    console.log(i); // 1, затем 3, 5, 7, 9
}
```

<style>
.host code {
    font-size: 1.5rem;
}
</style>
