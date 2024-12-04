import React from 'react'
import Navbar from '@components/Navbar/mobile/Navbar';
import Title from '@components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Sponsors from '@components/Sponsors/Sponsors';
import Contact from '@components/Contact/mobile/Contact';
import '../GaleriePage.css';

const videos = [
    {
      src: '/dac531343433d67ad1859b5e8b22ec7a.webp',
      title: 'Lorem Ipsum Dolor',
      active: true,
    },
    {
      src: '/aa2af345e93eeea0eeb7efb594b2b6a6.webp',
      title: 'Lorem Ipsum',
      active: false,
    },
    {
      src: '/9eb95320ae2883dfea85158872ab13cd.webp',
      title: 'Lorem Ipsum',
      active: false,
    },
    {
      src: '/38b8fac457189fc27f3de71b38e89e02.webp',
      title: 'Lorem Ipsum',
      active: false,
    },
];
  
const images = [
    '8b09f8c296a829da5d22736046e64f84.webp',
    'dac531343433d67ad1859b5e8b22ec7a.webp',
    '10d4d7f0a517f8c0a8f9fdcd34db140b.webp',
    '6bdc55373d4fded98f68d8fe79870be0.webp',
    '18825dfe41ba83b88eb5a963cbb2e712.webp',
    '981e14ca60d564e39dcf65faf5036dee.webp',
];
  
const paginationItems = [1, 2, 3];

const MobileGaleriePage = () => {
  return (
    <div className='galerie__page__mobile'>
        <Navbar />
        <div style={{margin:'2rem'}}>
            <Title
                title="Explorez la"
                subtitle="Clinique Ibn Rochd"
                description="Excellence médicale et compassion personnalisée pour vos soins de gynécologie et de pédiatrie à BERKANE."
                style={{
                    title: {fontSize: '24px',lineHeight:'28px'},
                    subtitle: {fontSize: '24px',lineHeight:'28px'},
                    description: {fontSize: '16px',lineHeight:'20px'},
                    container: {marginBlock: '1rem',width:'100%'}
                }}
            />
            <div className="video__galerie" style={{display:'block',marginBlock:'4rem'}}>
                {videos.map((video, index) => (
                    <div
                    key={index}
                    className={`video__item ${video.active ? 'active' : ''}`}
                    style={{height:'470px',marginBlock:'1rem'}}
                    >
                        <img loading="lazy" src={video.src} alt={`Video ${index + 1}`} />
                        <div className="video__title">{video.title}</div>
                        <div className="play-icon">
                        <FontAwesomeIcon icon={faPlay} />
                        </div>
                    </div>
                ))}
            </div>
            <Title
                title="Moments Pictures"
                subtitle="Clinique Ibn Rochd"
                description="Excellence médicale et compassion personnalisée pour vos soins de gynécologie et de pédiatrie à BERKANE."
                style={{
                    title: {fontSize: '24px',lineHeight:'28px'},
                    subtitle: {fontSize: '24px',lineHeight:'28px'},
                    description: {fontSize: '16px',lineHeight:'20px'},
                    container: {marginBlock: '1rem',width:'100%'}
                }}
            />
            <div style={{marginBlock:'4rem'}}>
                <div className="image__galerie__grid" style={{gridTemplateAreas:'"item1 item1 item1 item1 item2 item2 item2 item2" "item3 item3 item3 item3 item4 item4 item4 item4" "item5 item5 item5 item5 item6 item6 item6 item6"'}}>
                    {images.map((src, index) => (
                    <div
                        key={index}
                        style={{ '--i': `item${index + 1}` }}
                        className="image__galerie__item"
                    >
                        <img loading="lazy" src={src} alt={`Gallery Image ${index + 1}`} />
                    </div>
                    ))}
                </div>
                <div className="image__galerie__pagination">
                    {paginationItems.map((item) => (
                    <div
                        key={item}
                        className={`image__galerie__pagination__item ${
                        item === 1 ? 'active' : ''
                        }`}
                    >
                        {`0${item}`}
                    </div>
                    ))}
                </div>
            </div>
            <Sponsors />
        </div>
        <Contact />
    </div>
  )
}

export default MobileGaleriePage