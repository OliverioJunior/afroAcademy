import styled from "styled-components"

export default function ContainerTogether() {
  const string = "Entre em contato comigo através das seguintes maneiras para que possamos fazer algo incrível juntos!  "
    return (
        <Container>
          <div>
            <p>
              {string}
            </p>
          </div>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  color: var(--color-quaternary);
  margin-bottom: 30px;
  
  div{
    margin: 30px
  }
  p{
    font-weight: 500;
    font-size: 1.25rem;
  }
  @media(max-width: 858px) {
    width: 100%;
    margin: auto; 
 }
`