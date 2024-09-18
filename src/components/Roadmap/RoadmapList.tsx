import { roadmap } from '@/constants'
import { TagLine } from '../shared'
import { RoadmapGradient } from './RoadmapGradient'
import { RoadmapCardStatus } from './RoadmapCardStatus'
import { CardGridContainer } from './CardGridContainer'
import { CardImageBackground } from './CardImageBackground'

export const RoadmapList = () => {
  return (
    <div className='relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]'>
      {roadmap.map(({ date, id, imageUrl, status, text, title, colorful }) => {
        return (
          <div
            className={`rounded-[2.5rem] p-0.25 md:flex even:md:translate-y-[7rem] ${
              colorful ? 'bg-conic-gradient' : 'bg-n-6'
            }`}
            key={id}
          >
            <div className='relative overflow-hidden rounded-[2.4375rem] bg-n-8 p-8 xl:p-15'>
              <CardGridContainer />
              <div className='relative z-1'>
                <div className='mb-8 flex max-w-[27rem] items-center justify-between md:mb-20'>
                  <TagLine>{date}</TagLine>
                  <RoadmapCardStatus status={status} />
                </div>
                <CardImageBackground alt={title} imageUrl={imageUrl} />
                <h4 className='h4 mb-4'>{title}</h4>
                <p className='body-2 text-n-4'>{text}</p>
              </div>
            </div>
          </div>
        )
      })}
      <RoadmapGradient />
    </div>
  )
}
