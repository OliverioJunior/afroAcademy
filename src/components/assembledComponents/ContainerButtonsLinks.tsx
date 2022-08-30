import { ContainerLinks, IconLinkContainer, WrapperLinks } from "..";
import { GITHUB, GMAIL, WHATS, LINKEDIN } from "../../assets/svg/svg";
export default function ContainerButtonsLinks() {
    const redes = [{
        id: 1,
        icon: WHATS,
        link:'https://api.whatsapp.com/send?phone=5579996824092',
        title: ' (79) 99682-4092',
        colors: '#25d366'
    }, {
        id: 2,
        icon: LINKEDIN,
        link:'https://www.linkedin.com/in/oliv%C3%A9rio-j%C3%BAnior/',
        title: 'in/olivério-júnior',
        colors: '#0e76a8'
    }, {
        id: 3,
        icon: GITHUB,
        link:'https://github.com/OliverioJunior/',
        title: 'OliverioJunior',
        colors: '#000'
    }, {
        id: 4,
        icon: GMAIL,
        title: 'oliverio.junior2',
        link:' mailto:oliverio.junior2@gmail.com',
        colors: '#ea4335'
    }]
    return (
    <ContainerLinks>
        {redes.map((item) => {
            return (
                <WrapperLinks colors={item.colors} key={item.id}>
                    <IconLinkContainer>
                      <a href={item.link}>
                        <div>
                            <i>
                                {item.icon}
                            </i>
                        </div>
                        <section>
                            {item.title}
                        </section>
                      </a>
                    </IconLinkContainer>
                </WrapperLinks>
            )
        })}
    </ContainerLinks>
    )
}