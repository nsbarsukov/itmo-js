---
class: host
---

# Про обработку ошибок внутри async функции
Используем конструкцию `try...catch`

```js
async function dumbFetch(url) {
    try {
        const response = await fetch(url)
        return response.json();
    } catch (error) {
        return null;
    }
}

dumbFetch('https://not-existing-url.com').then(x => {
    console.log(x);  // null
});
```

<style>
.host {
    --slidev-code-font-size: 1rem;
    --slidev-code-line-height: 1.25rem;
}
</style>
