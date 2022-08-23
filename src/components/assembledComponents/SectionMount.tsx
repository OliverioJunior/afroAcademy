import Perfil from "../../assets/imgs/perfil.jpeg";
import {Button , ContainerHalfWidthColumn, ContainerMaxContent, ContainerMainScreenWidth, Imagens, Paragraph, Square, ContainerImagen} from "../index"
export default function SectionMount(){
    return(
        <ContainerMainScreenWidth>
          <ContainerHalfWidthColumn>
            <ContainerMaxContent>
              <h1>Oi, eu sou o <span>Olivério Júnior</span>.</h1>
            </ContainerMaxContent>
            <ContainerMaxContent>
              <Paragraph
              text={"Este é meu portifólio onde mostro o melhor do meu trabalho como desenvolvedor web."}
              />
            </ContainerMaxContent>
            <ContainerMaxContent>
                <Button text="Conheça meu trabalho"/>
            </ContainerMaxContent>
          </ContainerHalfWidthColumn>
          <ContainerImagen>
            <Square/>
            <Imagens
              alt="Imagem de perfil"
              src={Perfil}
            />

          </ContainerImagen>
        </ContainerMainScreenWidth>
    )
}