---
class: host
transition: fade
---

# Promise API

<v-clicks at="0">
<ul>

<li>

`Promise.allSettled`
```js
const urls = [
    'https://api.github.com/users/nsbarsukov',
    'https://not-existing-url.com',
    'https://another-not-existing-url.com',
]

const validUrls = [];
let brokenUrlCount = 0;

Promise.allSettled(urls.map(x => fetch(x))).then(results => {
    results.forEach(result => {
        /**
         * Объект переменной result сейчас имеет одну из следующих структур:
         * - либо {status:"fulfilled", value:результат}
         * - либо {status:"rejected", reason:ошибка} 
         */
        
        if (result.status === 'fulfilled') {
            validUrls.push(result.value.url);
        } else {
            brokenUrlCount++;
            console.log(result.reason);
        }
    });
});
```
</li>

</ul>
</v-clicks>

<style>
.host {
    --slidev-code-font-size: 0.6rem;
    --slidev-code-line-height: 0.75rem;
}

.host li p {
    margin-bottom: 0.25rem;
}
</style>
