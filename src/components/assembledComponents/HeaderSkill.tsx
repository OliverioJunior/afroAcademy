import ContainerRowAll from "../Factures/ContainerRowAll";
import SectionHeader from "../Factures/SectionHeader";


export default function HeaderSkill() {
    return (
        <ContainerRowAll
        height={"auto"}
        width={"100%"}
      >
        
        <ContainerRowAll
          height={"60px"}
          width={"auto"}
          >
            <SectionHeader
              text="Minhas"
            >
              <span>
                Techs
              </span>
              .
            </SectionHeader>
          </ContainerRowAll>
        </ContainerRowAll>
    )
}