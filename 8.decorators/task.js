//Задача № 1
function cachingDecoratorNew(func) {
    let cache = []
    
    function wrapper(...args) {
        const hash = md5(args) // получаем правильный хеш c помощью функции md5
        let objectInCache = cache.find((item) => item.hash === hash) // ищем элемент, хеш которого равен нашему хешу
        if (objectInCache) { 
            console.log("Из кэша: " + objectInCache.result) // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кэша: " + objectInCache.result
        }
    
        let result = func(...args)
        cache.push({hash: hash, result: result}) 
        if (cache.length > 5) { 
          cache.shift()
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
    }

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null
    function wr (...args) {
        if(timeoutId){
            clearTimeout(timeoutId)
        }
        if(wr.count === 0) {
            func(...args)
            wr.count++
        } else {
            timeoutId = setTimeout(() => {
                func(...args)
                wr.count++
            }, delay)
        }
        wr.allCount++
    }
    wr.allCount = 0
    wr.count = 0
    return wr
}
