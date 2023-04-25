import React, {useState} from 'react';
import type { NextPage } from 'next';
import Image from 'next/image'
import { RandomFox } from '@/components/RandomFox';

const random = ():number => Math.floor(Math.random() * 123) + 1;
const generateId = () => Math.random().toString(36).substring(2, 9);


type ImageItem = {id: string, url: string};

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([
    {id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
    {id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
    {id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
    {id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
  ]);

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello platzi!
      </h1>
      {images.map((image)=>(
        <div key={image.id} className="p-4">
          <RandomFox image={image.url}/>
        </div>
      ))}

    </main>
  )
}
