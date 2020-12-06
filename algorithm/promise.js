// 未考虑异步处理等边界情况
// 1.自动执行函数， 2.三个状态3.then


class Promise {
    constructor(fn) {
        // 三个状态pending fulfilled rejected ,默认pending
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        // 成功的参数function
        let resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
            }
        }
        let reject = value => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = value
            }
        }
        // 自动执行函数
        try {
            fn(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    // then
    then(onFulfilled, onRejected) {
        switch (this.state) {
            case 'fulfilled':
                onFulfilled(this.value)
                break
            case 'rejected':
                onRejected(this.value)
                break
            default:
        }
    }
}
function isPromise(val) {
    return typeof val.then === 'function'; // (123).then => undefined
}
// 实现promise.all
Promise.all = promises => {
    return new Promise((resolve, reject) => {
        let arr = []; // 存放promise执行后的结果
        let index = 0; // 计数器，用来累计promise的已执行次数
        const processData = (key, data) => {
            arr[key] = data;

            if (++index === promises.length) {
                resolve(arr)
            }
        }
        // 遍历数组依次拿到执行结果
        for (let i = 0; i < promises.length; i++) {
            let result = promises[i]
            if (isPromise(result)) {
                // 让里面的promise执行，取得成功后的结果
                // data promise执行后的返回结果
                result.then(data => {
                    processData(i, data)
                }, reject)
            } else {
                processData(i, result)
            }
        }
    })
}

// 实现promise.finally
Promise.prototype.finally = callback => {
    return this.then(data => {
        // 让函数执行 内部会调用方法，如果方法是promise,需要等待它完成
        // 如果当前promise执行失败了，会把err传递到err的回调函数中
        return Promise.resolve(callback()).then(() => data) // data 上一个promise的成功
    }, err => {
        return Promise.resolve(callback()).then( () => {
            throw err; // 把之前的失败的err抛出去
        })
    })
}