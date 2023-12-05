import Hero from "./Hero"
import Join from "./Join"

export const metadata = {
  title: 'Sicu Aura',
  description: 'Home Page for Sicu Aura',
}


export default function Home() {
  return (
    <main className="flex flex-col w-screen h-auto">
      <Hero />
      <Join />
    </main>
  )
}
