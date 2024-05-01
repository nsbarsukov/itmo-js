---
class: host
---

# Async/await 
Ключевое слово `await` заставит JavaScript ждать, пока промис справа от `await` не выполнится

```js
function getMovieTitle(id) {
   return fetch(`https://swapi.dev/api/films/${id}/`)
       .then(x => x.json())
       .then(x => x.title);
}

getMovieTitle(1).then(x => console.log(x)); // A New Hope
```

<div class="arrow">↓</div>

<div>

```js
async function getMovieTitle(id) {
   const response = await fetch(`https://swapi.dev/api/films/${id}/`)
   const result = await response.json();

   return result.title;
}

getMovieTitle(1).then(x => console.log(x));
```
</div>

<style>
.host {
    --slidev-code-font-size: 0.75rem;
    --slidev-code-line-height: 1rem;
}

.host .arrow {
    font-size: 3rem;
    text-align: center;
    color: gray;
}
</style>
