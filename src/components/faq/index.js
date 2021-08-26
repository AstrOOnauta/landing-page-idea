import styled from "styled-components";

const MainFAQ = styled.section`
    background-color: #26408B;
    padding: 2rem 2rem 6rem 2rem;
`

const PresentationFAQ = styled.h2`
    text-align: center;
    font-size: 2rem;
    padding: 4rem;
`

const ButtonFAQ = styled.button`
    background-color: #26408B;
    color: #C2E7D9;
    cursor: pointer;
    padding: 1rem;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
    font-size: 1.2rem;
    margin: .5rem 0;
    &:hover{
        background-color: #C2E7D9;
        color: #0d0221;
    }
`

const PanelFAQ = styled.div`
    padding: 0 1rem;
    margin: 0 .5rem .5rem .5rem;
    background-color: #26408B;
    display: none;
    overflow: hidden;
`

const TextFAQ = styled.p`
    color: #C2E7D9;
    font-size: 1rem;
    margin: 1rem 0;
    text-align: justify;
`



export default function FAQ(){
    
    return(
        <MainFAQ>
            <PresentationFAQ>Perguntas frequentes</PresentationFAQ>
            <div>
                <ButtonFAQ onClick={()=>{
                    let faq = document.getElementById("textFAQ1")

                    if (faq.style.display === "block") {
                        faq.style.display = "none"
                    } else {
                        faq.style.display = "block"
                    }
                }}>1. Pergunta?</ButtonFAQ>
                <PanelFAQ id="textFAQ1">
                    <TextFAQ>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod harum temporibus veniam maiores vel iste officiis laudantium mollitia vitae, sapiente assumenda nulla neque sed ea possimus cumque. Officiis, harum.
                    Exercitationem reiciendis deleniti a nesciunt rerum error suscipit dicta laboriosam sequi commodi similique aut maiores, officia tempore nulla odio. Et explicabo minus rerum vitae quas consequatur est fugiat id ipsa!</TextFAQ>
                </PanelFAQ><hr />
                <ButtonFAQ onClick={()=>{
                    let faq = document.getElementById("textFAQ2")

                    if (faq.style.display === "block") {
                        faq.style.display = "none"
                    } else {
                        faq.style.display = "block"
                    }
                }}>2. Pergunta?</ButtonFAQ>
                <PanelFAQ id="textFAQ2">
                    <TextFAQ>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at eveniet excepturi totam illum, ducimus molestiae optio dolores necessitatibus amet cumque qui ipsam aspernatur deserunt iusto odit delectus?
                        Distinctio ea adipisci illo, velit explicabo quod consequatur quidem aliquam? Natus suscipit enim illo laudantium quas quidem inventore ad, ex, aspernatur eius repudiandae iure sit hic voluptatem iusto consectetur error.</TextFAQ>
                </PanelFAQ><hr />
                <ButtonFAQ onClick={()=>{
                    let faq = document.getElementById("textFAQ3")

                    if (faq.style.display === "block") {
                        faq.style.display = "none"
                    } else {
                        faq.style.display = "block"
                    }
                }}>3. Pergunta?</ButtonFAQ>
                <PanelFAQ id="textFAQ3">
                    <TextFAQ>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi earum voluptas fugit aliquam officiis quod voluptates voluptatem, magni maiores officia vero, alias ex iste sequi incidunt totam est quis aspernatur.
                    Esse fuga repellendus nesciunt sed ipsum suscipit ullam facilis quod!</TextFAQ>
                </PanelFAQ><hr />
                <ButtonFAQ onClick={()=>{
                    let faq = document.getElementById("textFAQ4")

                    if (faq.style.display === "block") {
                        faq.style.display = "none"
                    } else {
                        faq.style.display = "block"
                    }
                }}>4. Pergunta?</ButtonFAQ>
                <PanelFAQ id="textFAQ4">
                    <TextFAQ>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi earum voluptas fugit aliquam officiis quod voluptates voluptatem, magni maiores officia vero, alias ex iste sequi incidunt totam est quis aspernatur.
                    Esse fuga repellendus nesciunt sed ipsum suscipit ullam facilis quod!</TextFAQ>
                </PanelFAQ><hr />
                <ButtonFAQ onClick={()=>{
                    let faq = document.getElementById("textFAQ5")

                    if (faq.style.display === "block") {
                        faq.style.display = "none"
                    } else {
                        faq.style.display = "block"
                    }
                }}>5. Pergunta?</ButtonFAQ>
                <PanelFAQ id="textFAQ5">
                    <TextFAQ>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi earum voluptas fugit aliquam officiis quod voluptates voluptatem, magni maiores officia vero, alias ex iste sequi incidunt totam est quis aspernatur.
                    Esse fuga repellendus nesciunt sed ipsum suscipit ullam facilis quod!</TextFAQ>
                </PanelFAQ><hr />
            </div>
        </MainFAQ>
    )
}