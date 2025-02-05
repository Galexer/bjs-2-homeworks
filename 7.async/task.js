"use strict"

class AlarmClock {
    constructor(){
        this.alarmCollection = []
        this.intervalId = null
    }

    addClock(time, callback) {
        if(time === null || callback === undefined) {
            throw new Error("Отсутствуют обязательные аргументы")
        }
        
        this.alarmCollection.some(it => {if(it.time === time) {console.warn("Уже присутствует звонок на это же время")}})
        
        this.alarmCollection.push({
            time: time, 
            callback: callback, 
            canCall: true,
        })
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(clock => clock.time != time)
    }

    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString("en-US", { hour12: false }).slice(0, 5)
    }

    start() {
        if(this.intervalId != null) {
            return
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(it => {
                if(it.time === this.getCurrentFormattedTime() && it.canCall === true){
                    it.canCall = false
                    it.callback()
                }
            })
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    resetAllCalls() {
        this.alarmCollection.forEach(it => {
            it.canCall = true
        })
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = []
    }
}