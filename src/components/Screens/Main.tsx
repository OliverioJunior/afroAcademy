import { ContainerColumnAllScreen, Line, HeaderMount, SectionMount } from "..";

export default function Main(){
    return(
        <ContainerColumnAllScreen
            height={"100vh"}
            width={"100%"}
        >
            <HeaderMount/>
            <SectionMount/>
            <Line/>
        </ContainerColumnAllScreen>
    )
}