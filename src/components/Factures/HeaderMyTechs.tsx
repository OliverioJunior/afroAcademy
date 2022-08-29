import { TextTypes } from "../../types/TextTypes"
import { ContainerHeaderTechs } from "../index"


export default function HeaderMyTechs({span, text}: TextTypes) {
    return (
        <ContainerHeaderTechs>
          <div>
            <h1>
              {text}
              <span> {span}</span>
              .
            </h1>
          </div>
        </ContainerHeaderTechs>
    )
}
