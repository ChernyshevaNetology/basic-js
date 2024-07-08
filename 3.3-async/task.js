class AlarmClock {
    constructor(timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        console.log(this.alarmCollection);
        if (!id) {
            throw new Error('ID не был передан!');
        }
        if (this.alarmCollection.find(item => item.id === id)) {
            console.error('Будильник с таким id уже добавлен.')
        }
        this.alarmCollection.push({
                time: time,
                callback: callback,
                id: id
            }
        )
    }

    removeClock(id) {
        const duplicateAlarmIndex = this.alarmCollection.findIndex((item => item.id === id));
        if (duplicateAlarmIndex !== -1) {
            this.alarmCollection.splice(duplicateAlarmIndex, 1);
        }
    }

    getCurrentFormattedTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;

    }

    start() {
        const checkClock = (time) => {
            const foundTime = this.alarmCollection.find(item => item.time === this.getCurrentFormattedTime(time));
            if (foundTime) {
                foundTime.callback();
            }
        }
        setInterval((checkClock), 60000);
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }

    printAlarms() {
        return this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведен на ${item.time}`));
    }

    clearAlarms() {
        this.alarmCollection.length = 0;
        clearTimeout(this.timerId);
    }
}