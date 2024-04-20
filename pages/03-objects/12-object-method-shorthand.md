---
class: host
---

# Про сокращённая запись методов

```js
const obj = {
    property: 'property value',
    method() {
        // [...]
    }
}
```

<div class="arrow" v-click>↑</div>

```js {hide|all}{at:1}
const obj = {
    property: 'property value',
    method: function() {
        // [...]
    }
}
```

<style>
.host code {
  font-size: 1rem;
}

.host .arrow {
    font-size: 3rem;
    text-align: center;
    color: gray;
}
</style>
