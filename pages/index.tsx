import React, {useState} from 'react';
import type { NextPage } from 'next';
import Image from 'next/image'
import { RandomFox } from '@/components/RandomFox';

const random = ():number => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello platzi!
      </h1>
      {images.map((image, index)=>(
        <div key={index} className="p-4">
          <RandomFox image={image}/>
        </div>
      ))}

    </main>
  )
}
