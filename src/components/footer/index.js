import styled from "styled-components";

const MainFooter = styled.footer`
    background-color: #0d0221;
    padding: 3rem 0 1rem 0;
    width: 100%;
    min-height: 4rem;
`

const ContainerFooter = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 50%;
    margin: auto;
`

const ImageFooter = styled.i`
    display: block;
    padding: 1rem 0;
    margin: auto;
    width: 10rem;
    font-size: 8rem;
`

const CopyrightFooter = styled.h5`
    text-align: center;
`

export default function Footer(){
    return(
        <MainFooter>
            <ContainerFooter>
                <h3>#NinguémMeSegura</h3>
                <h3>#VouLucrar</h3>
                <h3>#MercadoDeCrédito</h3>
            </ContainerFooter>
            <ImageFooter className="fa fa-ravelry" />
            <CopyrightFooter>© 2021 Mercado de Crédito. Todos os direitos reservados.</CopyrightFooter>
        </MainFooter>
    )
}