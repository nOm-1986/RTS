import Image from 'next/image'
import { Inter } from 'next/font/google';
import { RandomFox } from '@/components/RandomFox';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello platzi!
      </h1>
      <RandomFox />
    </main>
  )
}
