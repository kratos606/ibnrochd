import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import '../AproposPage.css';
import './AproposPage.css'
import Navbar from '@components/Navbar/mobile/Navbar'
import Title from '@components/Title/Title'
import Sponsors from '@components/Sponsors/Sponsors';
import Contact from '@components/Contact/mobile/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';

const sectionImages = [
    {
        src: '/38b8fac457189fc27f3de71b38e89e02.webp',
        className: 'section__image top',
        alt: 'Section Image 1',
    },
    {
        src: '/9eb95320ae2883dfea85158872ab13cd.webp',
        className: 'section__image',
        alt: 'Section Image 2',
    },
];

const videos = [
    {
        src: '/981e14ca60d564e39dcf65faf5036dee.webp',
        alt: 'Vidéo 1',
    }
];

const MobileAproposPage = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'MA';
    const [isPlaying, setIsPlaying] = useState(false);
  const bulletPoints = t('apropos.bulletPoints', { returnObjects: true });

   // Add if link end in #id scroll to id
    useEffect(() => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          window.scrollTo(0, element.offsetTop - 100);
        }
      }
    }, []);

  return (
    <div className="apropos__page__mobile page__mobile">
        <Navbar />
        <div className="apropos__image__section">
            <Title
                title={t('apropos.title')}
                subtitle={t('apropos.subtitle')}
                style={{
                    title: {fontSize: '24px',lineHeight:'28px'},
                    subtitle: {fontSize: '24px',lineHeight:'28px'},
                    description: {fontSize: '16px',lineHeight:'20px'},
                    container: {marginBlock: '1rem'}
                }}
            />
            <div className="section__phone__container"  style={{marginBlock:'4rem',width:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'fit-content',display:'flex',gap:'2rem'}}>
                <div className="section__container__item image__container" style={{height:'fit-content',width:'100%',position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    {sectionImages.map((image, index) => (
                    <img loading="lazy"
                        key={index}
                        src={image.src}
                        className={image.className}
                        alt={t(`apropos.images.section${index + 1}`)}
                        style={{position:'static',width:'100%',height:'100%',objectFit:'contain'}}
                    />
                    ))}
                    <div className="phone__number" style={{top:'50%',left:'50%',transform:'translate(-50%, -50%)'}}>
                    <div className="icon__container">
                        <img loading="lazy" src="/contacts/phone.svg" alt={t('apropos.images.phoneIcon')} /></div>
                        <p>+212-536-614446</p>
                    </div>
                </div>
                <div className="section__container__item" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
                    <div className="section__sub__header" style={{textAlign: isRTL ? 'right' : 'left', direction: isRTL ? 'rtl' : 'ltr' }}>
                        {t('apropos.subHeader')}
                    </div>
                    <div className="section__header" style={{textAlign: isRTL ? 'right' : 'left' }}>
                        <h1 style={{textAlign: isRTL ? 'right' : 'left' }}>{t('apropos.patientCaring.title')} <span>{t('apropos.patientCaring.highlight')}</span></h1>
                    </div>
                    <div className="section__description">
                        {t('apropos.description')}
                    </div>
                    <div className="section__bullets">
                    <ul>
                        {bulletPoints.map((point, index) => (
                        <li key={index}>
                            <img loading="lazy" src="/checklist.svg" alt={t('apropos.images.checklistIcon')} /> {point}
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className="apropos__video__container" style={{marginBlock:'2rem',aspectRatio: '16 / 9',width:'100%'}}>
                    {videos.map((video, index) => (
                        <div key={index} className="apropos__video__item">
                        {!isPlaying ? (
                            <>
                                <img loading="lazy" style={{width:'100%',height:'100%'}} src={video.src} alt={t(`apropos.images.video${index + 1}`)} />
                                <div className="play-icon" onClick={() => setIsPlaying(true)}>
                                <FontAwesomeIcon icon={faPlay} />
                                </div>
                            </>
                            ) : (
                            <iframe 
                                style={{borderRadius: '25px'}}
                                loading="lazy"
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/ZgUA8t4lr5Q?si=iswGaE4zljLUcnQQ&autoplay=1" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            />
                        )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="title__title__container">
            <Title
                title={t('apropos.doctors.title')}
                subtitle={t('apropos.doctors.subtitle')}
                style={{
                    title: {fontSize: '24px',lineHeight:'28px'},
                    subtitle: {fontSize: '24px',lineHeight:'28px'},
                    description: {fontSize: '16px',lineHeight:'20px'},
                    container: {marginBlock: '1rem'}
                }}
            />
        </div>
        <div style={{paddingInline:'2rem'}}>
            <DoctorTeam />
            <Sponsors />
        </div>
        <Contact />
    </div>
  )
}

const DoctorTeam = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'MA';   
    const [currentIndex, setCurrentIndex] = useState(window.localStorage.getItem('doctorIndex') || 0);
    const DOCTORS = t('home.doctors.team', { returnObjects: true });
    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex < DOCTORS.length - 1 ? (prevIndex + 1) % DOCTORS.length : 0
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
        if (prevIndex === -1){
            return DOCTORS.length - 2
        }
        return prevIndex - 1
        });
    };
    return (
        <div id='apropos__doctor__team' className="apropos__doctor__team" style={{width:'100%',height:'fit-content',gap:'2rem',flexDirection:'column',justifyContent:'center',alignItems:'center',direction: isRTL ? 'rtl' : 'ltr', overflow:'visible'}}>
        <div className="doctor__team__item doctor__team__content" style={{width:'100%',height:'fit-content'}}>
            <div className="doctor__cardboard" data-direction={isRTL ? 'rtl' : 'ltr'}>
            <div className="doctor__name" style={{fontSize:'1.5rem'}}>{DOCTORS.at(currentIndex).name}</div>
            <div className="doctor__speciality" style={{fontSize:'1.5rem',textAlign: isRTL ? 'right' : 'left'}}>{DOCTORS.at(currentIndex).speciality}</div>
            </div>
            <div className="doctor__team__title" style={{fontSize:'1.5rem',textAlign: isRTL ? 'right' : 'left', lineHeight:'2rem', marginBlock:'1rem'}}>
                {t('apropos.doctorTeam.title')}
            </div>
            <div className="doctor__team__description">
                {t('apropos.doctorTeam.description')}
            </div>
            <div className="doctor__team__cta" style={{justifyContent:'space-between'}}>
            <div className="back__next__item" style={{flexDirection: isRTL ? 'row-reverse' : 'row',marginBlock:'1rem'}}>
                <div className="back__next__item__arrow active" onClick={handlePrev}>
                <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "1rem" }} />
                </div>
                <div className="back__next__item__arrow" onClick={handleNext}>
                <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "1rem" }} />
                </div>
            </div>
            <div className="doctor__team__separator"></div>
            <div className="doctor__team__contact__us" style={{cursor:'pointer',width:'fit-content',paddingInline:'1rem'}} onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>{t('apropos.doctorTeam.contactUs')}</div>
            </div>
        </div>
        <div className="doctor__team__item doctor__team__image" style={{width:'100%'}}>
            <img loading="lazy" style={{width:'100%',height:'100%',objectFit:'contain'}} src={DOCTORS.at(currentIndex).image} alt="Image" />
            <div className="background__mobile" style={{width:'90vw',aspectRatio:'1/1', transform:'translate(-50%,-50%)',left:'50%',top:'50%',position:'absolute',background: 'linear-gradient(180deg, #4CB9C1 0%, #24575B 100%)', borderRadius:'50%', zIndex:'-1'}}></div>
        </div>
        </div>
    )
}

export default MobileAproposPage