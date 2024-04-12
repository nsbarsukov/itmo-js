---
class: host
---

# break
Досрочное прерывание цикла

```js
let bullets = 6;

while (bullets) {
    bullets--;

    if (Math.random() > 0.5) {
        console.log('Убит');
        break;
    } else {
        console.log('Повезло');
    }
}
```

<style>
.host code {
    font-size: 1.25rem;
}
</style>
