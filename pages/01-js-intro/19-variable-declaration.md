---
layout: default
class: host
---

# Объявление переменных

```js
// устаревший способ
var universityName = 'itmo';
```

<br />

<div v-click>

```js
let age = 5;
age = 99;
age = 100;
```
</div>

<br />

<div v-click>

```js
let age = 42
age = 2; // ✅

const age = 42;
age = 2; // ❌ Attempt to assign to const or readonly variable 
```
</div>


<style>
    .host code {
        font-size: 1.25rem;
    }
</style>

