import Button from "../Factures/Button";
import ContainerHalfWidthColumn from "../Factures/ContainerHalfWidthColumn";
import ContainerMaxContent from "../Factures/ContainerMaxContent";
import ContainerRowAll from "../Factures/ContainerRowAll";
import Imagens from "../Factures/Image";
import Paragraph from "../Factures/Paragraph";
import Square from "../Factures/Square";
import Perfil from "../../assets/imgs/perfil.jpeg";

export default function SectionMount(){
    return(
        <ContainerRowAll>
        <ContainerHalfWidthColumn>
          <ContainerMaxContent>
            <h1>Oi, eu sou o <span>Olivério Júnior</span>.</h1>
          </ContainerMaxContent>
          <ContainerMaxContent>
            <Paragraph 
            size={20} 
            p={"Este é meu portifólio onde mostro o melhor do meu trabalho como desenvolvedor web."}
            />
          </ContainerMaxContent>
          <ContainerMaxContent>
              <Button text="Conheça meu trabalho"/>
          </ContainerMaxContent>
        </ContainerHalfWidthColumn>
        <ContainerHalfWidthColumn>
          <Square/>
          <Imagens
            alt="Imagem de perfil"
            height={334}
            src={Perfil}
            width={338}
          />

        </ContainerHalfWidthColumn>
        
      </ContainerRowAll>
    )
}