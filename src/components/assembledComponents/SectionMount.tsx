import Perfil from "../../assets/imgs/perfil.jpeg";
import {Button , ContainerHalfWidthColumn, ContainerMaxContent, ContainerMainScreenWidth, Imagens, Paragraph, Square, ContainerImagen, ContainerSectionItens, ContainerButtonSection} from "../index"
export default function SectionMount(){
    const paragraf = 'Este é meu portifólio onde mostro o melhor do meu trabalho como desenvolvedor web.'
    const button = 'Conheça meu trabalho'
    return(
        <ContainerMainScreenWidth>
          <ContainerHalfWidthColumn>
            <ContainerSectionItens>
              <h1>Oi, eu sou o <span>Olivério Júnior</span>.</h1>
            </ContainerSectionItens>
            <ContainerSectionItens>
              <p>{paragraf}</p>
            </ContainerSectionItens>
            <ContainerButtonSection>
                <Button text={button}/>
            </ContainerButtonSection>
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