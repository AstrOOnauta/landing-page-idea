import styled from "styled-components";
import { useEffect } from "react";
import AOS from "aos"

const MainTeachers = styled.section`
    padding: 3rem 0 1rem 0;
`

const PresentationTeachers = styled.h1`
    text-align: center;
    font-family: monospace;
    font-size: 2rem;
    color: #0d0221;
`

const ContainerTeachers = styled.div`
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 90%;
    margin: auto;
    padding: 1rem;
`

const Teacher = styled.div`
    background-color: #0d0221;
    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.8);
    border: 1px solid #26408B;
    border-radius: .4rem;
    padding: 1rem;
    margin: 1rem;
    width: 20rem;
`

const TeacherIcon = styled.div`
    text-align: center;
    font-size: 7rem;
    padding: 1rem 0;
`

const TeacherName = styled.h3`
    text-align: center;
    padding: 0 0 1rem 0;
`

const TextTeacher = styled.li`
    list-style-type: none;
    text-align: justify;
    padding-bottom: 1rem;
`


export default function Teachers(){

    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    }, [])

    return(
        <MainTeachers>
            <PresentationTeachers>Com quem vou aprender?</PresentationTeachers>
            <ContainerTeachers>
                <Teacher data-aos="fade-up">
                    <TeacherIcon data-aos="zoom-in"><i className="fa fa-user-circle"></i></TeacherIcon>
                    <TeacherName>Professor 1</TeacherName>
                    <ul>
                        <TextTeacher>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem beatae recusandae voluptatem. </TextTeacher>
                        <TextTeacher>Natus cum magnam expedita minus laudantium fuga sequi a, atque nesciunt, totam odio quaerat, sapiente earum tenetur. Sed.</TextTeacher>
                        <TextTeacher>Id explicabo alias nisi impedit magni, aspernatur, accusantium sequi cum enim temporibus, iste ducimus aliquid facere libero. Harum eius unde perferendis sint!</TextTeacher>
                    </ul>
                </Teacher>
                <Teacher data-aos="fade-up">
                    <TeacherIcon data-aos="zoom-in"><i className="fa fa-user-circle"></i></TeacherIcon>
                    <TeacherName>Professor 2</TeacherName>
                    <ul>
                        <TextTeacher>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem beatae recusandae voluptatem. </TextTeacher>
                        <TextTeacher>Natus cum magnam expedita minus laudantium fuga sequi a, atque nesciunt, totam odio quaerat, sapiente earum tenetur. Sed.</TextTeacher>
                        <TextTeacher>Id explicabo alias nisi impedit magni, aspernatur, accusantium sequi cum enim temporibus, iste ducimus aliquid facere libero. Harum eius unde perferendis sint!</TextTeacher>
                    </ul>
                </Teacher>
                <Teacher data-aos="fade-up">
                    <TeacherIcon data-aos="zoom-in"><i className="fa fa-user-circle"></i></TeacherIcon>
                    <TeacherName>Professor 3</TeacherName>
                    <ul>
                        <TextTeacher>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem beatae recusandae voluptatem. </TextTeacher>
                        <TextTeacher>Natus cum magnam expedita minus laudantium fuga sequi a, atque nesciunt, totam odio quaerat, sapiente earum tenetur. Sed.</TextTeacher>
                        <TextTeacher>Id explicabo alias nisi impedit magni, aspernatur, accusantium sequi cum enim temporibus, iste ducimus aliquid facere libero. Harum eius unde perferendis sint!</TextTeacher>
                    </ul>
                </Teacher>
            </ContainerTeachers>
        </MainTeachers>
    )
}