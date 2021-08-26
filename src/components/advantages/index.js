import styled from "styled-components"
import { useEffect } from "react"
import AOS from "aos"

const MainAdvantages = styled.section`
    background-color: #0d0221;
    padding: 4rem 0 2rem 0;
`

const ContainerAdvantages = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80%;
    margin: auto;
    padding: 1rem;
`

const Advantage = styled.div`
    margin: 1rem;
`

const AdvantageName = styled.h2`
    display: block;
    text-align: center;
    padding: 1rem;
`

const AdvantageIcon = styled.div`
    display: block;
    text-align: center;
    font-size: 8rem;
    padding-bottom: 2rem;
`


export default function Advantages(){

    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    }, [])

    return(
        <MainAdvantages>
            <ContainerAdvantages>
                <Advantage data-aos="fade-right">
                    <AdvantageName data-aos="fade-right">Benefício 1</AdvantageName>
                    <AdvantageIcon><i class="fa fa-handshake-o"></i></AdvantageIcon>
                </Advantage>
                <Advantage data-aos="zoom-in">
                    <AdvantageName data-aos="zoom-in">Benefício 2</AdvantageName>
                    <AdvantageIcon><i class="fa fa-credit-card-alt"></i></AdvantageIcon>
                </Advantage>
                <Advantage data-aos="fade-left">
                    <AdvantageName data-aos="fade-left">Benefício 3</AdvantageName>
                    <AdvantageIcon><i class="fa fa-calendar-check-o"></i></AdvantageIcon>
                </Advantage>
            </ContainerAdvantages>
        </MainAdvantages>
    )
}