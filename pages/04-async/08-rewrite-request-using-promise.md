---
class: host
---

# Перепишем нашу функцию для "отправки запросов"

```js
function request(url, callback) {
    const randomInteger = Math.round(Math.random() * 10);

    setTimeout(() => {
        callback(randomInteger);
    }, randomInteger * 100);
}
```

<div class="arrow">↓</div>

```js
function request(url) {
    return new Promise((resolve, reject) => {
        const randomInteger = Math.round(Math.random() * 10);

        setTimeout(() => {
            if (randomInteger) {
                resolve(randomInteger);
            } else {
                reject('эх, ноль получился, не повезло')
            }
        }, randomInteger * 100);
    });
}
```

<style>
.host h1 {
    font-size: 2rem;
}

.host {
    --slidev-code-font-size: 0.75rem;
    --slidev-code-line-height: 1rem;
}

.host .arrow {
    font-size: 2rem;
    text-align: center;
    color: gray;
}
</style>
