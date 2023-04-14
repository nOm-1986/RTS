import type { NextPage } from 'next';
import Image from 'next/image'
import { RandomFox } from '@/components/RandomFox';

const random = ():number => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello platzi!
      </h1>
      <RandomFox image={`https://randomfox.ca/images/${random()}.jpg`}/>
    </main>
  )
}
