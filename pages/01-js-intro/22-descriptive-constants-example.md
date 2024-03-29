---
layout: default
class: host
---

# Что автор этих строк имел в виду ?

<br />

```js
2 * 86400000;
// Почему бы не написать сразу 172_800_000 ?
```

<br />
<br />

<div v-click>

```js
const MS_IN_DAY = 24 * 60 * 60 * 1000;

// где-то позже в коде
2 * MS_IN_DAY;
```
</div>

<style>
    .host code {
        font-size: 2em;
    }
</style>

