import React from "react";

type Props = { image: string};


//export const RandomFox = (props: Props):JSX.Element => {
//Utilizando desctructurazión en las props
export const RandomFox = ({image}: Props):JSX.Element => {    
    return <img width="500" height="auto" src={image} className="rounded"/>
}