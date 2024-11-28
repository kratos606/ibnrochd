import React from 'react';

import ContactInfo from '@components/ContactInfo/ContactInfo';
import Header from '@components/Header/Header';
import Title from '@components/Title/Title';
import Sponsors from '@components/Sponsors/Sponsors';
import Contact from '@components/Contact/Contact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import './GaleriePage.css';

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

const GaleriePage = () => (
  <>
    <div className="galerie__page">
      <ContactInfo />
      <Header>
        <Title
          title="Explorez la"
          subtitle="Clinique Ibn Rochd"
          description="Excellence médicale et compassion personnalisée pour vos soins de gynécologie et de pédiatrie à BERKANE."
        />
        <div className="video__galerie">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`video__item ${video.active ? 'active' : ''}`}
            >
              <img loading="lazy" src={video.src} alt={`Video ${index + 1}`} />
              <div className="video__title">{video.title}</div>
              {video.active && (
                <div className="play-icon">
                  <FontAwesomeIcon icon={faPlay} />
                </div>
              )}
            </div>
          ))}
        </div>
        <Title
          title="Moments Pictures"
          subtitle="Clinique Ibn Rochd"
          description="Excellence médicale et compassion personnalisée pour vos soins de gynécologie et de pédiatrie à BERKANE."
        />
        <div className="image__galerie__grid">
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
        <Sponsors />
      </Header>
    </div>
    <Contact />
  </>
);

export default GaleriePage;