import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import avatarImg from '../../assets/img/avatar.jpg';
import SpeedIcon from '@material-ui/icons/Speed';
import DevicesIcon from '@material-ui/icons/Devices';
import CodeIcon from '@material-ui/icons/Code';
import PeopleIcon from '@material-ui/icons/People';

import './AboutMe.scss';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(54),
        height: theme.spacing(66),
        display: "inline-flex",
    }
}));

function AboutMe() {
    const classes = useStyles();

    const advantages = [
        {
            name: "Clean Code",
            description: "Sempre prezo pela qualidade do código, seguindo as melhores práticas do mercado",
            icon: <CodeIcon/>
        },
        {
            name: "Alta Performance",
            description: "Busco desenvolver aplicações de alta performance, que executam com velocidade e sem lags",
            icon: <SpeedIcon/>
        },
        {
            name: "Responsivo",
            description: "Meus layouts funcionam em qualquer dispositivo, grande ou pequeno.",
            icon: <DevicesIcon/>
        },
        {
            name: "Multidisciplinar",
            description: "Possuo um Perfil multidisciplinar e me comunico bem com grandes equipes",
            icon: <PeopleIcon/>
        }
    ];

    return (
        <section className="about-me" id="about-me">
            <div className="welcoming">Sobre mim</div>
            <hr className="divider" />

            <div className="details">
                <div className="image">
                    <Avatar variant="rounded" className={classes.avatar} src={avatarImg}></Avatar>
                </div>

                <div className="info">
                    <div className="text">
                        Olá! Meu nome é Jonatas, sou desenvolvedor Full-Stack. Atuo em projetos de alta complexidade
                        que atendem milhares de clientes em todo o Brasil.

                        <br /><br />

                        Sou graduando em Sistemas de Informação na USP, Universidade de São Paulo. Além disso, trabalho na Cleartech, 
                        onde enfrento diversos desafios e colaboro para a construção de aplicações de alta complexidade.

                        <br /><br />

                        {/* Tenho um conjunto de habilidades muito diverso, variando de tecnologias para desenvolvimento web,
                        mobile multiplataforma, design, infraestrutura e habilidades intrapessoais. */}
                    </div>

                    <div className="advantages">
                        {
                            advantages.map((advantage) => (
                                <div className="advantage" key={advantage.name}>
                                    <Avatar>
                                        {advantage.icon}
                                    </Avatar>
                                    <span className="name">{advantage.name}</span>
                                    <span className="description">{advantage.description}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


        </section>
    );
}

export default AboutMe;