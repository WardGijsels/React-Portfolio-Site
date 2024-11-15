import {Image} from '@nextui-org/react'
import {FC} from 'react'
import styled from 'styled-components'
import {useLanguage} from '../../components/languageContext/LanguageContext.tsx'

const HeroSectionWrapper = styled.div`
  background-image: url('/heroSectionBackground.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    height: auto;
    padding: 4rem 1.5rem;
  }
`

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 800px;
  color: #f0f0f0;
`

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #646cff;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #f0f0f0;
  line-height: 1.6;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const heroSubtitleText = {
  en: 'I am Ward Gijsels, currently enrolled in the Programming Graduate program at Thomas More University in Turnhout. My choice for this field of study stems from my deep interest in web development, information technology, and computers in general. This field has always fascinated me, and I am determined to further develop my knowledge and skills in this area.',
  nl: 'Ik ben Ward Gijsels en momenteel ben ik ingeschreven voor de opleiding Programmeren Graduaat aan de Thomas More Hogeschool in Turnhout. Mijn keuze voor deze studierichting komt voort uit mijn diepgewortelde interesse in websiteontwikkeling, informatietechnologie en computers in het algemeen. Dit vakgebied heeft me altijd al gefascineerd en ik ben vastbesloten om mijn kennis en vaardigheden op dit gebied verder te ontwikkelen.',
}

const HeroSection: FC = () => {
  const {language} = useLanguage()

  return (
    <>
      <HeroSectionWrapper>
        <ContentWrapper>
          <HeroTitle> {language === 'en' ? 'Who am I?' : 'Wie ben ik?'}</HeroTitle>
          <SubtitleContainer>
            <HeroSubtitle>{language === 'en' ? heroSubtitleText.en : heroSubtitleText.nl}</HeroSubtitle>
            <Image isZoomed width={2000} src='/passfoto.png' alt='Passfoto' />
          </SubtitleContainer>
        </ContentWrapper>
      </HeroSectionWrapper>
    </>
  )
}

export default HeroSection
