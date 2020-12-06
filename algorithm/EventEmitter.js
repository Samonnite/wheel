// 发布订阅 ：每次event.emit (发布)，就会触发一次event.on (注册)
class EventEmitter {
    constructor() {
        // 事件对象，存放订阅的名字和事件
        this.events = {};
    }

    // 订阅事件的方法
    on(eventName, callback) {
        if (!this.events[eventName]) {
            // 一个名字可以订阅多个事件函数
            this.events[eventName] = [callback]
        } else {
            // 存在则push到数组
            this.events[eventName].push(callback)
        }
    }
    // 触发事件的方法
    emit(eventName) {
        // 遍历执行所有订阅的事件
        this.events[eventName] && this.events[eventName].forEach(cb => cb())
    }
}

let em = new EventEmitter()
function workDay() {
    console.log("每天工作");
  }
  em.on("work", workDay);
  em.emit('work')