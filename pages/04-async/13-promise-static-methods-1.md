---
class: host
transition: fade
---

# Promise API

<v-clicks at="0">
<ul>

<li>

`Promise.resolve` и `Promise.reject`
```js
const fulfilledPromise = new Promise(resolve => resolve(1));
const fulfilledPromise = Promise.resolve(1); // Сокращенная версия строчки выше

const rejectedPromise = new Promise((_, reject) => reject(-1));
const rejectedPromise = Promise.reject(-1); // Сокращенная версия строчки выше
```
</li>

<li>

`Promise.all`
```js
const promises = [
    fetch('https://your-website.com/api/get-current-user-country'),
    fetch('https://your-website.com/api/get-current-user-age'),
    fetch('https://your-website.com/api/get-forbidden-contries-list'),
].map(x => x.then(x => x.json()));

Promise.all(promises)
    .then(results => {
        const [userCountry, userAge, forbiddenCountries] = results;
        
        console.log(
            forbiddenCountries.includes(userCountry) || userAge < 18
                ? 'Доступ запрещен'
                : 'Доступ разрешен'
        );
    })
    .catch(() => console.log('Доступ запрещен'));
```
</li>

</ul>
</v-clicks>

<style>
.host {
    --slidev-code-font-size: 0.65rem;
    --slidev-code-line-height: 0.75rem;
}

.host li p {
    margin-top: 0.5rem;
    margin-bottom: 0;
}
</style>
