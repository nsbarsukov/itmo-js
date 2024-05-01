---
class: host
---

# Callback hell vs Цепочка промиссов

```js
request(
    'https://website1.com',
    () => request(
        'https://website2.com',
        () => request(
            'https://website3.com',
            () => request(
                'https://website4.com',
                () => {
                    // ...
                },
            )
        )
    )
);
```

<div class="arrow">↓</div>

```js
request('https://website1.com')
    .then(() => request('https://website2.com'))
    .then(() => request('https://website3.com'))
    .then(() => request('https://website4.com'));
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
