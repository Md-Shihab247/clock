    // Analog clock 

    let hr = document.querySelector('.hr')
    let min = document.querySelector('.min')
    let sec = document.querySelector('.sec')

    setInterval(() => {

        let timeA = new Date()
        let hh = timeA.getHours() 
        let mm = timeA.getMinutes() 
        let ss = timeA.getSeconds()

        let h = hh * 30 + mm/2
        let m = mm * 6
        let s = ss * 6


        hr.style.transform = `rotate(${h}deg)`
        min.style.transform = `rotate(${m}deg)`
        sec.style.transform = `rotate(${s}deg)`

    }, 1000)


    // Digital clock 

    let hour = document.querySelector('.hour')
    let minite = document.querySelector('.minite')
    let second = document.querySelector('.second')

    setInterval(() => {

        let timeD = new Date()
        let hours = (timeD.getHours() < 10 ? "0" : "") + timeD.getHours() 
        let minutes = (timeD.getMinutes() < 10 ? "0" : "" )+ timeD.getMinutes() 
        let seconds = (timeD.getSeconds() < 10 ? "0" : "" ) + timeD.getSeconds()

        hour.innerHTML = hours
        minite.innerHTML = minutes
        second.innerHTML = seconds
    
    }, 1000)