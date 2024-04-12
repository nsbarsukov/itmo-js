---
class: host
---

# Оператор нулевого слияния
Обозначается двумя вопросительными знаками

```js {all|1-2|6-7|all}
const res1 =  null || undefined || 0 || '42' || '';
console.log(res1); // '42'

/* ------ */

const res2 =  null ?? undefined ?? 0 ?? '42' ?? '';
console.log(res2); // 0
```


<style>
.host code {
    font-size: 1.5rem;
}
</style>
