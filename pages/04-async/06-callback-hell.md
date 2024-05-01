---
class: host
---

# Адская пирамида вызовов / "Callback hell" 

```js
request(
    'https://website1.com',
    () => request(
        'https://website2.com',
        () => request(
            'https://website3.com',
            () => request(
                'https://website4.com',
                () => request(
                    'https://website5.com',
                    () => {
                        // ...
                    },
                ),
            )
        )
    )
);

```

<style>
.host {
    --slidev-code-font-size: 1rem;
    --slidev-code-line-height: 1.25rem;
}
</style>
