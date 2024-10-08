import {
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5,
  benefitCard6,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
} from '@/assets'
import { BenefitCardItem } from '@/types'

export const benefits: BenefitCardItem[] = [
  {
    id: '1',
    title: 'Ask anything',
    text: 'Lets users quickly find answers to their questions without having to search through multiple sources.',
    backgroundUrl: benefitCard1,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: '2',
    title: 'Improve everyday',
    text: 'The app uses natural language processing to understand user queries and provide accurate and relevant responses.',
    backgroundUrl: benefitCard2,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: '3',
    title: 'Connect everywhere',
    text: 'Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.',
    backgroundUrl: benefitCard3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: '4',
    title: 'Fast responding',
    text: 'Lets users quickly find answers to their questions without having to search through multiple sources.',
    backgroundUrl: benefitCard4,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: '5',
    title: 'Ask anything',
    text: 'Lets users quickly find answers to their questions without having to search through multiple sources.',
    backgroundUrl: benefitCard5,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: '6',
    title: 'Improve everyday',
    text: 'The app uses natural language processing to understand user queries and provide accurate and relevant responses.',
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
]
