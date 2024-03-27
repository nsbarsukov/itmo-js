---
layout: default
class: host
---

# Точкой с запятой в конце инструкций важна!
Иногда ее отсутствие может привести к ошибке

```js
console.log('Hello');
[1, 2].forEach(console.log);
```

```shell
# Hello
# 1
# 2
```

<br />
<br />

<div v-click>

```js
console.log('Hello')
[1, 2].forEach(console.log)
```

```shell
# Hello
# TypeError: Cannot read properties of undefined (reading '2')
```

</div>


<style>
    .host code {
        font-size: 1.25rem;
    }
</style>

