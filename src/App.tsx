import {
  Benefits,
  ButtonGradient,
  Collaboration,
  Footer,
  Header,
  Hero,
  Pricing,
  Roadmap,
  Services,
} from '@/components'

export const App = () => {
  return (
    <>
      <div className='overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]'>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  )
}
