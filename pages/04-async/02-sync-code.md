---
class: host
---

# Синхронное выполнение кода
Код выполняет задачи одну за другой, ждет завершения каждой, прежде чем начать следующую

<div class="code">

```js {all|1-10|15,17,19|12-13,16,18,20,22|all} {at:0}
function imitateHeavyCalculations(n) {
    console.log('Начинаю работу функции с аргументом n =', n);
    
    let sum = 0;
    for (let i = 0; i < n; i++) { // имитируем сложные синхронные вычисления
        sum += Math.random();
    }

    console.log('=[Результат]= ', sum);
}

const timerId = 'Прошло времени (от самого старта)';
console.time(timerId);

imitateHeavyCalculations(1_000_000);
console.timeLog(timerId);
imitateHeavyCalculations(100_000);
console.timeLog(timerId);
imitateHeavyCalculations(500_000);
console.timeEnd(timerId);
```

<div class="logs" v-click="4">

```
Начинаю работу функции с аргументом n = 1000000
=[Результат]=  500058.82939772226
Прошло времени (от самого старта): 12.232ms
Начинаю работу функции с аргументом n = 100000
=[Результат]=  49921.08561919031
Прошло времени (от самого старта): 13.622ms
Начинаю работу функции с аргументом n = 500000
=[Результат]=  249863.4447998303
Прошло времени (от самого старта): 16.842ms
```
</div>

</div>

<style>
.host {
    --slidev-code-font-size: 0.75rem;
    --slidev-code-line-height: 1rem;
}

.host .code {
    position: relative;
}

.host .logs {
    position: absolute;
    right: 0;
    bottom: 0;
}

.host .logs pre {
    box-shadow: rgba(168, 168, 168, 0.6) 3px 3px 6px 0px inset;
    border-top-right-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
}
</style>
