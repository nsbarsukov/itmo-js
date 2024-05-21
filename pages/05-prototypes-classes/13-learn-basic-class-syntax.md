---
class: host
---

# Базовый синтаксис классов

```js {all|1|1,4-12,21|1,2,23|14-18,26|all}
class PascalCaseName {
    field = 'Я свойство/поле класса';

    /*
        Функция-конструктор будет вызвана в момент инициализации класс:
        const obj = new PascalCaseName(param1, param2);
     */
    constructor(param1, param2) {
        this.param1 = param1; // Можно сохранить параметр в качестве свойства класса
        console.log(param2); // А можно попользоваться им только внутри конструктора и не сохранять
        // Количество параметров у конструктора не ограничено (>= 0)
    }

    method1() {
        console.log('Я метод будущего объекта');
        // Доступ к this внутри методов также есть
        console.log(this.field === 'Я свойство/поле класса'); // true
    }
}

const obj = new PascalCaseName('первый аргумент', 'второй аргумент');

console.log(obj.field); // 'Я свойство/поле класса'
console.log(obj.param1); // 'первый аргумент'
console.log(obj.param2); // undefined
obj.method1();
```

<style>
.host h1 {
    margin-bottom: 0;
}

.host {
    --slidev-code-font-size: 0.7rem;
    --slidev-code-line-height: 1rem;
}
</style>
