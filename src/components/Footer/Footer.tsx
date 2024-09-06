import { Section } from '../shared'
import { SocialsList } from './SocialsList'

export const Footer = () => {
  return (
    <Section crosses className='py-8 lg:py-8 xl:py-8' id='footer'>
      <div className='container flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between'>
        <p className='caption text-n-4 lg:block'>
          © {new Date().getFullYear()}. All rights reserved
        </p>
        <SocialsList />
      </div>
    </Section>
  )
}
