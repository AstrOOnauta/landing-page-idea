import styled from "styled-components"

const MainHeader = styled.main`
    background-color: #0d0221;
    padding: 1rem 0;
    width: 100%;
    min-height: 5rem;
`

const ContainerHeaderPrimary = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin: auto;
`

const ContainerHeaderSecondary = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
`

const LogoHeader = styled.i`
    display: flex;
    font-size: 3rem;
    padding-right: 1rem;
`

const TextHeader = styled.h2`
    display: flex;
    font-family: monospace;
    font-size: 3vw;
    letter-spacing: .2rem;
`

const SpanHeader = styled.span`
    color: #26408B;
`

const Timer = styled.div`
    display: block;
    justify-content: space-between;
    font-family: monospace;
    width: 3.2em;
    height: 2rem;
    padding: .6rem .8rem;
    margin: 1rem .2rem;
    border: 1px solid #26408B;
    border-radius: 5rem;
`

const TimerDays = styled.p`
    font-size: 1rem;
    font-family: monospace;
    text-align: center;
`

const TimerHours = styled.p`
    font-size: 1rem;
    font-family: monospace;
    text-align: center;
`

const TimerMinutes = styled.p`
    font-size: 1rem;
    font-family: monospace;
    text-align: center;
`

const TimerSeconds = styled.p`
    font-size: 1rem;
    font-family: monospace;
    text-align: center;
`

const TextTimer = styled.p`
    font-size: .6rem;
    font-family: monospace;
    text-align: center;
`

export default function Header(){
    //Mechanism that makes the timer work in the header
    // Set the date we're counting down to
    let countDownDate = new Date("Aug 25, 2022 23:59:59").getTime()

    // Update the count down every 1 second
    let timer = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime()

    // Find the distance between now and the count down date
    let distance = countDownDate - now

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    //Standardizing hte time
    let newDays, newHours, newMinutes, newSeconds

    if(days<10){
        newDays = "0" + days
    }else{
        newDays = days
    }
    if(hours<10){
        newHours = "0" + hours
    }else{
        newHours = hours
    }
    if(minutes<10){
        newMinutes = "0" + minutes
    }else{
        newMinutes = minutes
    }
    if(seconds<10){
        newSeconds = "0" + seconds
    }else{
        newSeconds = seconds
    }

    // Display the result in the elements
    document.getElementById("timerDays").innerHTML = newDays
    document.getElementById("timerHours").innerHTML = newHours
    document.getElementById("timerMinutes").innerHTML = newMinutes
    document.getElementById("timerSeconds").innerHTML = newSeconds
    }, 1000)

    return(
        <MainHeader>
            <ContainerHeaderPrimary>
                <ContainerHeaderSecondary>
                    <LogoHeader className="fa fa-ravelry" />
                    <TextHeader>VAGAS&nbsp;<SpanHeader>LIMITADAS!</SpanHeader></TextHeader>
                </ContainerHeaderSecondary>
                <ContainerHeaderSecondary>
                    <Timer>
                        <TimerDays id="timerDays">0</TimerDays>
                        <TextTimer>dias</TextTimer>
                    </Timer>
                    <Timer>
                        <TimerDays id="timerHours">0</TimerDays>
                        <TextTimer>horas</TextTimer>
                    </Timer>
                    <Timer>
                        <TimerDays id="timerMinutes">0</TimerDays>
                        <TextTimer>minutos</TextTimer>
                    </Timer>
                    <Timer>
                        <TimerDays id="timerSeconds">0</TimerDays>
                        <TextTimer>segundos</TextTimer>
                    </Timer>
                </ContainerHeaderSecondary>
            </ContainerHeaderPrimary>
        </MainHeader>
    )
}