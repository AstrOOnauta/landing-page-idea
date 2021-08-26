import styled from "styled-components";
import { useEffect } from "react";
import AOS from "aos"

const MainCourses = styled.section`
    background-color: #26408B;
    padding: 3rem 0 1rem 0;
`

const PresentationCourses = styled.h1`
    text-align: center;
    font-family: monospace;
    font-size: 2rem;
`

const ContainerCourses = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80%;
    margin: auto;
    padding: 1rem;
`

const Course = styled.div`
    background-color: rgba(0, 0, 0, .2);
    border: 1px solid #C2E7D9;
    border-radius: .4rem;
    padding: 1rem;
    margin: 1rem;
    width: 18rem;
`

const CourseIcon = styled.div`
    text-align: center;
    font-size: 5rem;
    padding: 2rem 0;
`

const CourseName = styled.h3`
    text-align: center;
    padding: 1rem 0;
`

const TextCourse = styled.li`
    text-align: justify;
    padding-bottom: 1rem;
    margin: 0 1rem;
`


export default function Courses(){

    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    }, [])

    return(
        <MainCourses>
            <PresentationCourses>O que vou aprender?</PresentationCourses>
            <ContainerCourses>
                <Course data-aos="fade-right">
                    <CourseIcon data-aos="fade-right"><i class="fa fa-bar-chart-o"></i></CourseIcon>
                    <CourseName>Básico (20h)</CourseName>
                    <ul>
                        <TextCourse>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem beatae recusandae voluptatem.</TextCourse>
                        <TextCourse>Natus cum magnam expedita minus laudantium fuga sequi a, atque nesciunt, totam odio quaerat, sapiente earum tenetur. Sed.</TextCourse>
                        <TextCourse>Id explicabo alias nisi impedit magni, aspernatur, accusantium sequi cum enim temporibus, iste ducimus aliquid facere libero. Harum eius unde perferendis sint!</TextCourse>
                    </ul>
                </Course>
                <Course data-aos="zoom-in">
                    <CourseIcon data-aos="zoom-in"><i class="fa fa-balance-scale"></i></CourseIcon>
                    <CourseName>Intermediário (40h)</CourseName>
                    <ul>
                        <TextCourse>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem beatae recusandae voluptatem.</TextCourse>
                        <TextCourse>Natus cum magnam expedita minus laudantium fuga sequi a, atque nesciunt, totam odio quaerat, sapiente earum tenetur. Sed.</TextCourse>
                        <TextCourse>Id explicabo alias nisi impedit magni, aspernatur, accusantium sequi cum enim temporibus, iste ducimus aliquid facere libero. Harum eius unde perferendis sint!</TextCourse>
                    </ul>
                </Course>
                <Course data-aos="fade-left">
                    <CourseIcon data-aos="fade-left"><i class="fa fa-gears"></i></CourseIcon>
                    <CourseName>Avançado (80h)</CourseName>
                    <ul>
                        <TextCourse>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem beatae recusandae voluptatem.</TextCourse>
                        <TextCourse>Natus cum magnam expedita minus laudantium fuga sequi a, atque nesciunt, totam odio quaerat, sapiente earum tenetur. Sed.</TextCourse>
                        <TextCourse>Id explicabo alias nisi impedit magni, aspernatur, accusantium sequi cum enim temporibus, iste ducimus aliquid facere libero. Harum eius unde perferendis sint!</TextCourse>
                    </ul>
                </Course>
            </ContainerCourses>
        </MainCourses>
    )
}