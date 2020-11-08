const clockElem = document.querySelector('#clock')
const hoursElem = document.querySelector('#clock .hours')
const minutesElem = document.querySelector('#clock .minutes')
const meridianElem = document.querySelector('#clock .meridian')



const updateTime = () => {
    const d = new Date()
    const h = d.getHours()
    const m = d.getMinutes()

    let hours
    if (h === 0) hours = 12
    else if (h > 12) hours = h - 12
    else hours = h

    const minutes  = m < 10 ? `0${m}` : m
    const meridian = h > 11 ? 'pm' : 'am'

    hoursElem.innerHTML    = hours
    minutesElem.innerHTML  = minutes
    meridianElem.innerHTML = meridian
}
updateTime()



setInterval(() => {
    updateTime()
}, 1000)


