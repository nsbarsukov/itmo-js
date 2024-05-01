---
class: host
---

# Возможности цепочки промисов

```js {all|5-6,10,14,23,24|6,8,10,12,14-19|14,21-23|all}
const promise = new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve(1) : reject(-1);
});

promise
    .then(result => {
        console.log(result); // 1
        return 2;
    })
    .catch(err => {
        console.log(err); // -1
        return -2;
    })
    .then(result => {
        /**
         * Вот здесь может быть как и 2, так и -2
         * (зависит от того, сработал ли выше then или catch)
         */
        console.log(result);

        return new Promise(res => res(0));
    })
    .then(x => console.log(x)) // 0
    .catch(() => console.log('никогда не буду вызван'));
```

<style>
.host {
    --slidev-code-font-size: 0.75rem;
    --slidev-code-line-height: 0.75rem;
}
</style>
