import React, { Component, useEffect, useState } from 'react';

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

class Button extends Component {
    async componentDidMount() {
        //const users = await getUsers();
        console.log('mounted');
    }

    render() {
        return <button />
    }
}

const Counter = () => {
    const [seconds, setSeconds] = useState('--');
    const [minutes, setMinutes] = useState('--');
    const [hours, setHours] = useState('--');
    const [days, setDays] = useState('--');

    const updateCountdown = () => {
        // отримати фінальну дату в мілісекундах
        const finalTime = new Date('2024-03-09T12:00:00').getTime();

        // отримати поточну дату в мілісекундах
        const currentTime = Date.now();

        const diff = finalTime - currentTime;

        // різницю конвертувати в дні, години, хвилини, ...
        setDays(Math.floor(diff / MS_DAY));
        setHours(Math.floor((diff % MS_DAY) / MS_HOUR))
        setMinutes(Math.floor((diff % MS_HOUR) / MS_MINUTE))
        setSeconds(Math.floor((diff % MS_MINUTE) / MS_SECOND))
    }

    useEffect(() => {
        const id = setInterval(updateCountdown, 1000)

        return () => clearInterval(id);
    }, [])

    return (
        <div className="until" id="countDown">
            <div className="component">
                <div id="days" className="numeric days">
                    {days}
                </div>
                <div className="unit">Days</div>
            </div>
            <div className="component">
                <div id="hours" className="numeric hours">
                    {hours}
                </div>
                <div className="unit">Hours</div>
            </div>
            <div className="component">
                <div id="minutes" className="numeric minutes">
                    {minutes}
                </div>
                <div className="unit">Minutes</div>
            </div>
            <div className="component">
                <div id="seconds" className="numeric seconds">
                    {seconds}
                </div>
                <div className="unit">Seconds</div>
            </div>
            <div className="until__event">Until 31 December 2024</div>
        </div>
    )
}

export default Counter;