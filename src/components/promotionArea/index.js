import styled from "styled-components";
import { useEffect, useState } from "react";
import AOS from "aos"

const MainPromotionArea = styled.section`
    display: grid;
    @media(min-width: 860px){
        grid-template-columns: 50% 40%;
    }
    width: 100%;
    padding: 3rem 0;
`

const FormArea = styled.form`
    background-color: white;
    border: 1px solid black;
    border-radius: .4rem;
    padding: 2rem 1rem;
    width: 18rem;
    margin: auto;
`

const SloganInputArea = styled.h1`
    color: #0d0221;
    padding: 1rem 0;
    font-family: monospace;
    font-size: 1.48rem;
    text-align: center;
`

const InputFormArea = styled.input`
    background-color: rgba(0, 0, 0, .1);
    color: #26408B;
    border: none;
    border-radius: .4rem;
    margin: .5rem 0;
    height: 3rem;
    text-align: center; 
`

const ButtonFormArea = styled.button`
    background-color: #0d0221;
    border: none;
    border-radius: .4rem;
    cursor: pointer;
    margin: .5rem 0;
    width: 18rem;
    height: 3rem;
`

const TextInputArea = styled.p`
    color: #26408B;
    padding: 1rem 0;
    font-size: .8rem;
    text-align: justify;
`

const DescriptionPromotionArea = styled.article`
    padding: 2rem;
`

const ImageDescriptionPromotionArea = styled.i`
    display: block;
    padding: 1rem 0;
    margin: auto;
    width: 10rem;
    color: #0d0221;
    font-size: 8rem;
`

const TextDescriptionPromotionArea = styled.p`
    color: #0d0221;
    padding: .5rem 0;
    text-align: justify;
`


export default function PromotionArea(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    
    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    }, [])

    return(
        <MainPromotionArea>
            <FormArea onSubmit={(e)=>{
                e.preventDefault()
                setName("")
                setEmail("")
            }}>
                <SloganInputArea>Acelere sua entrada no mercado de crédito!</SloganInputArea>
                <InputFormArea type="name" placeholder="Digite seu nome..." size="37" value={name} onChange={(e)=>setName(e.target.value)} required />
                <InputFormArea type="email" placeholder="Digite seu e-mail..." size="37" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <ButtonFormArea type="submit">Receber 50% de desconto!</ButtonFormArea>
                <TextInputArea>Na qualidade de Usuário declaro que li, compreendi e estou de acordo com os <a style={{color: "#26408B"}} href="#">Termos de Uso</a> e com a Política de Privacidade</TextInputArea>
            </FormArea>
            <DescriptionPromotionArea>
                <ImageDescriptionPromotionArea className="fa fa-grav" />
                <TextDescriptionPromotionArea data-aos="zoom-in">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam earum consequuntur doloremque impedit, facere adipisci perferendis ullam sed unde libero animi et ab recusandae eius, fugiat quisquam eligendi reiciendis. Voluptatem?</TextDescriptionPromotionArea>
                <TextDescriptionPromotionArea data-aos="zoom-in">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima veniam praesentium temporibus, quae expedita? Maxime explicabo nulla distinctio possimus, animi praesentium fugiat hic repellat officiis reprehenderit! Dignissimos, ut ipsa!</TextDescriptionPromotionArea>
            </DescriptionPromotionArea>
        </MainPromotionArea>
    )
}