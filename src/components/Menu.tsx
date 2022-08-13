import styled from "styled-components";
import Perfil from '../assets/imgs/Perfil.jpeg';
const Container = styled.menu`
    position: relative;
    width: 500px;
    height: 500px;
    border-radius: 37px;
    background-color: #fffc;
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: column
`
const Image = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
`
const ContainerImage = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ContainerText = styled.div`
    width: 100%;
    height: 20px;
    h1{
        font-size: 1em;
        margin: 30px 0 0 40px;

    }
`
const ContainerList = styled.div`
    margin-top: 40px;
    list-style: none;
`
const List = styled.ul`
    list-style: none;
    margin-left: 30px;
    li{
        margin: 10px;
    }
`

export default function Menu() {
    const Saudacao = 'Olá, meu nome é ';
    const Name = `Olivério Júnior`;	
    const list = [
        {
            id: 1,
            age: 26,
            address: 'Rua Boanerges de Almeida Pinheiro, nº: 1015',
            skill: 'Front-End',
            about: 'Odiava café, agora que programo tomo todo dia '

        }
    ]
    return (
        <Container>
            <ContainerImage>
                <Image src={Perfil} />
            </ContainerImage>
            <ContainerText>
                <h1>{Saudacao}{Name}</h1>
            </ContainerText>
            <ContainerList>
              {list.map(item => {
                return (
                    <List key={item.id}>
                        <li>
                            <strong>Idade: </strong>
                            {item.age}
                        </li>
                        <li>
                            <strong>Endereço: </strong>
                            {item.address}
                        </li>
                        <li>
                            <strong>Habilidade: </strong>
                            {item.skill}
                        </li>
                        <li>
                            <strong>Sobre: </strong>
                            {item.about}
                        </li>
                    </List>)
              })}
            </ContainerList>
        </Container>
    )
} 