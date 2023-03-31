import VictorJulio from '../assets/img/projects/preview/victor-julio.png';
import MyPool from '../assets/img/projects/preview/my-pool-framed.png';
import OneCard from '../assets/img/projects/preview/onecard.png';
import EstoqueTotal from '../assets/img/projects/preview/estoque-total.png';
import Trinity from '../assets/img/projects/preview/trinity-phone.png';
import Dantas from '../assets/img/projects/preview/chacara-dantas.png';

import VictorJulioVideo from '../assets/img/projects/videos/victor-julio.mov';
import MyPoolVideo from '../assets/img/projects/videos/my-pool.webm';
import OneCardVideo from '../assets/img/projects/videos/onecard.MOV';
import EstoqueTotalVideo from '../assets/img/projects/videos/estoque-total.mov';
import TrinityVideo from '../assets/img/projects/videos/trinity.mov';
import DantasVideo from '../assets/img/projects/videos/chacara-dantas.mov';
import TrinitySecondImage from '../assets/img/projects/preview/trinity.png';

const MEDIA_TYPE_VIDEO = 'VIDEO';
const MEDIA_TYPE_IMAGE = 'IMAGE';

export const getProjects = (t) => {
  const PROPERTIES = {
    WEB: t('projects.properties.web'),
    MOBILE: t('projects.properties.mobile'),
    DESIGN: t('projects.properties.designByMe'),
    PLATFORM: t('projects.properties.platform'),
    MICROSERVICES: t('projects.properties.microservices'),
    REACT: 'ReactJS',
    FLUTTER: 'Flutter',
    TYPESCRIPT: 'Typescript',
    ANGULAR: 'Angular',
    NODEJS: 'NodeJS',
    SQL: 'SQL',
    AWS: 'AWS',
  };

  return [
    {
      id: 'myPool',
      name: t('projects.titles.myPool'),
      description: t('projects.descriptions.myPool'),
      properties: [PROPERTIES.MOBILE, PROPERTIES.FLUTTER, PROPERTIES.DESIGN],
      img: MyPool,
      company: 'Minha Piscina',
      url: 'https://play.google.com/store/apps/details?id=com.jdantas.my_pool&hl=en&gl=BR',
      isConfidential: false,
      media: [
        {
          type: MEDIA_TYPE_VIDEO,
          data: MyPoolVideo,
          isMobile: true,
        },
      ],
    },
    {
      id: 'oneCard',
      name: t('projects.titles.oneCard'),
      description: t('projects.descriptions.oneCard'),
      properties: [PROPERTIES.MOBILE, PROPERTIES.WEB, PROPERTIES.TYPESCRIPT],
      img: OneCard,
      company: 'OneCard',
      url: 'https://onecard.com.br/login',
      isConfidential: false,
      media: [
        {
          type: MEDIA_TYPE_VIDEO,
          data: OneCardVideo,
          isMobile: true,
        },
      ],
    },
    {
      id: 'estoqueTotal',
      name: t('projects.titles.estoqueTotal'),
      description: t('projects.descriptions.estoqueTotal'),
      properties: [
        PROPERTIES.PLATFORM,
        PROPERTIES.MICROSERVICES,
        PROPERTIES.REACT,
        PROPERTIES.NODEJS,
        PROPERTIES.SQL,
      ],
      img: EstoqueTotal,
      company: 'XPro Cycle',
      url: '',
      isConfidential: true,
      media: [
        {
          type: MEDIA_TYPE_VIDEO,
          data: EstoqueTotalVideo,
        },
      ],
    },
    {
      id: 'trinity',
      name: t('projects.titles.trinity'),
      description: t('projects.descriptions.trinity'),
      properties: [PROPERTIES.WEB, PROPERTIES.REACT, PROPERTIES.DESIGN],
      img: Trinity,
      company: 'Trinity Personalizados',
      url: 'https://trinitypersonalizados.com.br',
      isConfidential: false,
      media: [
        {
          type: MEDIA_TYPE_VIDEO,
          data: TrinityVideo,
          isMobile: true,
        },
        {
          type: MEDIA_TYPE_IMAGE,
          data: TrinitySecondImage,
        },
      ],
    },
    {
      id: 'victoJulio',
      name: t('projects.titles.victorJulio'),
      description: t('projects.descriptions.victorJulio'),
      properties: [PROPERTIES.WEB, PROPERTIES.ANGULAR, PROPERTIES.DESIGN],
      img: VictorJulio,
      company: 'Victor Julio Fotografia',
      url: '',
      isConfidential: false,
      media: [
        {
          type: MEDIA_TYPE_VIDEO,
          data: VictorJulioVideo,
          isMobile: true,
        },
      ],
    },
    {
      id: 'chacaraDantas',
      name: t('projects.titles.chacaraDantas'),
      description: t('projects.descriptions.chacaraDantas'),
      properties: [PROPERTIES.WEB, PROPERTIES.REACT, PROPERTIES.DESIGN],
      img: Dantas,
      company: 'Chacara Dantas',
      url: '',
      isConfidential: false,
      media: [
        {
          type: MEDIA_TYPE_VIDEO,
          data: DantasVideo,
        },
      ],
    },
  ];
};
