import { ContainerMain, Line, HeaderMount, SectionMount } from "..";
import React from "react";

export default function Main(){
    return(
        <ContainerMain>
            <HeaderMount/>
            <SectionMount/>
            <Line/>
        </ContainerMain>
    )
}