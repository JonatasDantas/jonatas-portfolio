import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import userImg from '../../assets/img/avatar.jpg';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import './Home.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(26),
        height: theme.spacing(26),
        display: "inline-flex",
    },
    button: {
        zIndex: 3
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <section className="home" id="home">
            <div className="info">
                <h1>Jonatas de Almeida Dantas</h1>

                <div className="welcoming-text">
                    Olá! Meu nome é Jonatas, sou desenvolvedor Full-Stack. Atuo em projetos de alta complexidade
                    que atendem milhares de clientes em todo o Brasil.

                    <br /><br /><br />
                    {/* 
                    Tenho um conjunto de habilidades muito diverso, variando de tecnologias para desenvolvimento web, 
                    mobile multiplataforma, design, infraestrutura e habilidades intrapessoais.
                    <br/><br/> */}

                </div>

                <Button
                    variant="contained"
                    color="default"
                    size="large"
                    className={classes.button}
                    endIcon={<ArrowForwardIcon />}
                >
                    Conheça meu trabalho
                </Button>

                <br /><br />

                <div className="image">
                    <Avatar alt="Jonatas de Almeida" src={userImg} className={classes.large} />
                </div>
            </div>

            <Particles
                params={{
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 900,
                            }
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            }
                        }
                    }
                }}
            />
            
            {/* <nav className="navigation">
                <div className="menu">
                    <div className="menuItem">Home</div>
                    <div className="menuItem">Sobre Mim</div>
                    <div className="menuItem">Habilidades</div>
                    <div className="menuItem">Projetos</div>
                    <div className="menuItem">Contato</div>
                </div>
            </nav> */}
        </section>
    )
}

export default Home;
