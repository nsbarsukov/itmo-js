---
class: host
---

# Свойства и методы примитивов

```js
console.log('как много букв'.length); // 14

'вот бы вырасти'.toUpperCase(); // 'ВОТ БЫ ВЫРАСТИ'
```
<div v-click>

Каждый примитив имеет свой собственный «объект-обёртку» с набором полезных методов:
- `String`
- `Number`
- `Boolean`
- `Symbol`
- `BigInt`

<br />

> **null** и **undefined** – самые примитивные из примитивных. <br />
> У них нет никаких оберток с набором полезных методов.

</div>

<style>
.host {
    --slidev-code-font-size: 1.25rem;
    --slidev-code-line-height: 1.75rem;
}
</style>
