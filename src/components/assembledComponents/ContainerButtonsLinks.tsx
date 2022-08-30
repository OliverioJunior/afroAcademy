import { ContainerLinks, WrapperLinks } from "..";
import { GITHUB, GMAIL, WHATS, LINKEDIN } from "../../assets/svg/svg";
export default function ContainerButtonsLinks() {
    const redes = [{
        id: 1,
        icon: WHATS,
        title: ' (79) 99682-4092',
        colors: '#25d366'
    }, {
        id: 2,
        icon: LINKEDIN,
        title: 'in/olivério-júnior',
        colors: '#0e76a8'
    }, {
        id: 3,
        icon: GITHUB,
        title: 'OliverioJunior',
        colors: '#000'
    }, {
        id: 4,
        icon: GMAIL,
        title: 'oliverio.junior2',
        colors: '#ea4335'
    }]
    return (
    <ContainerLinks>
        {redes.map((item) => {
            return (
                <WrapperLinks colors={item.colors} key={item.id}>
                    <div >
                        <div>
                            <i>
                                {item.icon}
                            </i>
                        </div>
                        <section>
                            {item.title}
                        </section>
                    </div>
                </WrapperLinks>
            )
        })}
    </ContainerLinks>
    )
}