class AlarmClock {
    constructor(timerId) {
        this.timerId = null;
        this.alarmCollection = [];
    }

    addClock(time, callback, id) {
        if (id === null) {
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
        const duplicateAlarm = this.alarmCollection.filter((item => item.id === id);
        if (duplicateAlarm) {
            return this.alarmCollection.splice(duplicateAlarm.id, 1);
        }
    }

    getCurrentFormattedTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;

    }

    start() {
        const checkClock = () => {
            if(this.getCurrentFormattedTime(this.time)) {

            }

        }
        setInterval((checkClock), 60000);

    }

    stop() {
        if (this.timerId) {
            clearTimeinterval(timerId);
        }
    }

    printAlarms() {
        const array = this.alarmCollection.forEach(item => console.log(`${item.id} ${item.time}`));
        return array.length;
    }

    clearAlarms() {

    }
    clearTimeout() {

    }
}