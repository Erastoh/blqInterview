import Image from 'next/image'
import Container from './components/Container'
import HomeBanner from './pages/homebanner'

export default function Home() {
   const homebanner: HomeBanner[] = [/* Array of HomeBanner objects */];
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //  TestValley
    // </main>
    <Container>
      <div>
        <HomeBanner homebanner={homebanner} />
</div>
    </Container>
  )
}

