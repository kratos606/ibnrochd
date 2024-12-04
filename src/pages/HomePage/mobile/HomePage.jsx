import React from 'react'
import '../HomePage.css';
import './HomePage.css'
import Navbar from '@components/Navbar/mobile/Navbar'
import Title from '@components/Title/Title'
import CardBoard from '@components/CardBoard/mobile/CardBoard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sponsors from '@components/Sponsors/Sponsors';
import Contact from '@components/Contact/mobile/Contact';
import { faArrowLeft, faArrowRight, faCalendarAlt, faChevronRight, faEnvelopeOpen, faPhone, faPlay } from '@fortawesome/free-solid-svg-icons'

const MobileHomePage = () => {
  return (
    <div className='home__page__mobile'>
        <Navbar />
        <div className="home__mobile__hero">
            <h1 className="hero__mobile__title">
                YOUR HEALTH,<br />
                Our Personal Care.
            </h1>
            <p className="hero__mobile__description">
                Bienvenue dans un lieu où "votre santé, Nos soins personnels" est notre engagement.
            </p>
            <div className="hero__mobile__cta">
                <button className="hero__cta__mobile__button">MORE ABOUT US</button>
                <div className="hero__arrow__mobile">
                    <FontAwesomeIcon style={{ fontSize: '1.5rem' }} icon={faArrowRight} />
                </div>
            </div>
            <div className="hero__mobile__image">
                <img src="/13f00b97db4641b3ed6c7b387b771752.webp" alt="Home" />
            </div>
        </div>
        <div className="booking__form__mobile">
            <form>
                <div className="form-container">
                    <div className="form-field">
                    <label htmlFor="email">
                        <FontAwesomeIcon icon={faEnvelopeOpen} /> Adresse E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Votre E-mail"
                        required
                    />
                    </div>
                    <div className="form-field">
                    <label htmlFor="phone">
                        <FontAwesomeIcon icon={faPhone} /> Numéro de téléphone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Téléphone"
                        required
                    />
                    </div>
                    <div className="form-field">
                    <label htmlFor="date">
                        <FontAwesomeIcon icon={faCalendarAlt} /> Date
                    </label>
                    <input type="date" id="date" name="date" required />
                    </div>
                    <div className="form-submit">
                    <button type="submit">Rendez-vous</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="video__mobile__section">
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
            <HomeVideo />
            <Title
                title="Ce qui fait la différence"
                subtitle="Chez Ibn Rochd"
                description="À la Clinique Ibn Rochd, notre engagement se traduit par une approche centrée sur la qualité des soins de gynécologie et de pédiatrie ainsi que sur le bien-être de nos patientes."
                style={{
                    title: {fontSize: '24px',lineHeight:'28px'},
                    subtitle: {fontSize: '24px',lineHeight:'28px'},
                    description: {fontSize: '16px',lineHeight:'20px'},
                    container: {marginBlock: '1rem',width:'100%'}
                }}
            />
            <Features />
            <CardBoard />
            <Title
                title="Soins personnels"
                subtitle="Et vie saine"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."
                style={{
                    title: {fontSize: '24px',lineHeight:'28px'},
                    subtitle: {fontSize: '24px',lineHeight:'28px'},
                    description: {fontSize: '16px',lineHeight:'20px'},
                    container: {marginBlock: '1rem',width:'100%'}
                }}
            />
            <Specialties />
            <Title
              title="Les ailes de"
              subtitle="La clinique"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."
              style={{
                title: {fontSize: '24px',lineHeight:'28px'},
                subtitle: {fontSize: '24px',lineHeight:'28px'},
                description: {fontSize: '16px',lineHeight:'20px'},
                container: {marginBlock: '1rem',width:'100%'}
              }}
            />
            <ClinicWing
              number="01"
              title="Premier étage"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              images={[
                '/b8dabe7f11276a7a5a058c97166b0c15.webp',
                '/f800cfb2aa8238b84077530434eb11c5.webp',
                '/300726901718ac044bf52aa78933c642.webp',
              ]}
            />
            <Title
              title="NOS"
              subtitle="MEDECINS"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."
              style={{
                title: {fontSize: '24px',lineHeight:'28px'},
                subtitle: {fontSize: '24px',lineHeight:'28px'},
                description: {fontSize: '16px',lineHeight:'20px'},
                container: {marginBlock: '1rem',width:'100%'}
              }}
            />
            <Team />
            <Sponsors />
        </div>
        <Contact />
    </div>
  )
}

// Specialties Component
const Specialties = () => (
  <>
    <div className="home__specialites" style={{width:'100%',height:'fit-content',gap:'1rem'}}>
      <div className="specialties__title">
        <FontAwesomeIcon icon={faChevronRight} className="arrow" />
        <FontAwesomeIcon icon={faChevronRight} className="arrow" />
        <h2>Spécialités</h2>
      </div>
      <hr className="specialties__divider" />
      <p className="specialties__description">
        À la Clinique Ibn Rochd, notre engagement se traduit par une approche
        centrée sur la qualité des soins de gynécologie et de pédiatrie ainsi
        que sur le bien-être de nos patientes.
      </p>
    </div>
    <SpecialtyButtons />
    <NavigationControls />
  </>
);

// HomeVideo Component
const HomeVideo = () => (
    <div className="home__video__mobile__container">
      <img loading="lazy" src="/background.webp" alt="Home" />
      <div className="play-icon">
        <FontAwesomeIcon icon={faPlay} />
      </div>
    </div>
  );

// NavigationControls Component
const NavigationControls = () => (
  <div className="back__next__container" style={{width:'100%'}}>
    <div className="current__item__container">
      <div className="current__item__indicator"></div>
    </div>
    <div className="back__next__item">
      <div className="back__next__item__arrow">
        <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '1rem' }} />
      </div>
      <div className="back__next__item__arrow active">
        <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1rem' }} />
      </div>
    </div>
  </div>
);

// SpecialtyButtons Component
const SpecialtyButtons = () => {
  const specialties = [
    'Gynécologie obstétricale',
    'Pédiatrie et néonatalogie',
    'Ophtalmologie',
  ];
  // Assuming 'Pédiatrie et néonatalogie' is the active specialty
  return (
    <div className="button__group" style={{width:'100%',display:'block'}}>
      {specialties.map((specialty, index) => (
        <div
          key={index}
          className={`button__item ${
            specialty === 'Pédiatrie et néonatalogie' ? 'active' : ''
          }`}
        >
          {specialty === 'Pédiatrie et néonatalogie' && (
            <div className="button__item__arrow">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ fontSize: '1.5rem' }}
              />
            </div>
          )}
          {specialty}
        </div>
      ))}
    </div>
  );
};

// ClinicWing Component
// Add an opacity to images that goes like 100% 80% 60% 40% 20% 0%
const ClinicWing = ({ number, title, description, images }) => (
  <>
    <div className="header-section" style={{width:'100%'}}>
      {/* <div className="header-section__number">{number}</div> */}
      <div className="header-section__content">
        <h1 className="header-section__title">{title}</h1>
        <hr style={{ width: '300.5px' }} />
        <p className="header-section__description">{description}</p>
      </div>
    </div>
    <div className="image-carousel__container" style={{alignSelf:'flex-start'}}>
      <div className="image-carousel">
        {images.map((src, index) => {
          // Calculate opacity based on index
          const opacity = 1 - (index * 0.2); // 100%, 80%, 60%, 40%, 20%, 0%
          return (
            <div key={index} className="image-carousel__card" style={{ opacity, width:'min(85vw,400px)', aspectRatio:'254 / 359', height:'unset' }}>
              <img loading="lazy" src={src} alt={`Image ${index + 1}`} />
              {index === 0 && (
                <div className="play-icon">
                  <FontAwesomeIcon icon={faPlay} />
                </div>
              )}
            </div>
        )})}
      </div>
      <ImageNavigation />
    </div>
  </>
);

// ImageNavigation Component
const ImageNavigation = () => (
  <div className="navigation-controls" style={{width:'100vw'}}>
    <div className="arrows">
      <div className="icon__arrow left">
        <FontAwesomeIcon icon={faArrowLeft} className="navigation-controls__arrow" />
      </div>
      <div className="icon__arrow right">
        <FontAwesomeIcon icon={faArrowRight} className="navigation-controls__arrow" />
      </div>
    </div>
    <div className="numbers">
      <span className="navigation-controls__number">01</span>
      <div className="indicator__container">
        <div className="indicator"></div>
      </div>
      <span className="navigation-controls__number">04</span>
    </div>
  </div>
);

// Features Component
const Features = () => (
    <div className="features__container" style={{flexDirection:'column',width:'100%',height:'fit-content',gap:'4rem',marginBlock:'2rem'}}>
      <div className="features__image">
        <img loading="lazy" src="/08b22943500b5ee2d90ca52fb8376213.webp" alt="Features" />
      </div>
      <div className="features__list" style={{ gridTemplateColumns: '1fr' }}>
        {featureItems.map((item, index) => (
          <FeatureItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
  
  const featureItems = [
    {
      icon: '/features/microscope.svg',
      title: 'Technologies avancées',
      description:
        'Nous utilisons des équipements de pointe pour des diagnostics précis et des traitements efficaces, assurant des soins de santé de classe mondiale.',
    },
    {
      icon: '/features/security.svg',
      title: 'Confort et sécurité',
      description:
        'Nous créons un environnement accueillant et sûr, où le confort et la sécurité de nos patientes sont nos priorités absolues.',
    },
    {
      icon: '/features/care.svg',
      title: 'Soins personnalisés',
      description:
        'Chaque patiente reçoit une attention individualisée avec des plans de traitement adaptés à ses besoins spécifiques.',
    },
    {
      icon: '/features/equipe.svg',
      title: 'Équipe expérimentée',
      description:
        'Nos professionnels médicaux et paramédicaux, hautement qualifiés, garantissent des soins de qualité supérieure et une expérience positive.',
    },
  ];
  
  // FeatureItem Component
  const FeatureItem = ({ icon, title, description }) => (
    <div className="features__list__item" style={{width:'100%'}}>
      <div className="feature__icon">
        <img loading="lazy" src={icon} alt={title} />
      </div>
      <div className="feature__title">{title}</div>
      <div className="feature__description" style={{width:'322.23px'}}>{description}</div>
    </div>
  );  

  // Team Component
const Team = () => (
  <>
    <div className="team__container" style={{width:'100%',height:'fit-content',gap:'1rem',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      {teamMembers.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
    <div className="back__next__container" style={{width:'100%'}}>
      <div className="current__item__container">
        <div className="current__item__indicator"></div>
      </div>
      <div className="back__next__item">
        <div className="back__next__item__arrow">
          <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '1rem' }} />
        </div>
        <div className="back__next__item__arrow active">
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1rem' }} />
        </div>
      </div>
    </div>
  </>
);

const teamMembers = [
  {
    name: 'Hajar BADAOUI',
    specialty: 'Traumatologie',
    image: '/6f0db22bb3bd80edeba55fc061be9d3a.webp',
  },
  {
    name: 'Hajar BADAOUI',
    specialty: 'Traumatologie',
    image: '/8eca4d911be4f2553f59cf9923b5fb0d.webp',
  },
  {
    name: 'Hajar BADAOUI',
    specialty: 'Traumatologie',
    image: '/6f0db22bb3bd80edeba55fc061be9d3a.webp',
  },
  {
    name: 'Hajar BADAOUI',
    specialty: 'Traumatologie',
    image: '/8eca4d911be4f2553f59cf9923b5fb0d.webp',
  },
];

// TeamMember Component
const TeamMember = ({ name, specialty, image }) => {
  function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  const calculateAngles = (degrees) => {
    const radians = degreesToRadians(degrees);
    return {
      cos: Math.cos(radians),
      sin: Math.sin(radians),
    };
  };

  const angles = calculateAngles(-45);

  return (
    <div className="team__item">
      <div className="team__item__image">
        <img loading="lazy" src={image} alt={name} />
        <div
          style={{
            '--cos': angles.cos,
            '--sin': angles.sin,
          }}
          className="team__member__arrow"
        >
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1rem', transform: 'rotate(-45deg)' }} />
        </div>
      </div>
      <h2>{name}</h2>
      <h3>{specialty}</h3>
    </div>
  );
};

export default MobileHomePage