import React, {useState} from 'react';
import type {MouseEventHandler, } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image'
import { RandomFox } from '@/components/RandomFox';

const random = ():number => Math.floor(Math.random() * 123) + 1;
const generateId = () => Math.random().toString(36).substring(2, 9);


interface ImageItem  {id: string, url: string};

export default function Home() {
  // const [images, setImages] = useState<Array<ImageItem>>([
  //   {id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
  //   {id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
  //   {id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
  //   {id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
  // ]);

  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    
    const newImageItem: ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`
    }

    setImages([
      ...images,
      newImageItem
    ]);
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello platzi!</h1>

      <button onClick={addNewFox}>Add new Fox</button>

      {images.map((image)=>(
        <div key={image.id} className="p-4">
          <RandomFox image={image.url}/>
        </div>
      ))}

    </main>
  )
}
