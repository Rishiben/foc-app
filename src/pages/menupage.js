import React, { useEffect, useState } from "react";
import items from "../data";
import {useParams} from "react-router-dom";
import './menupage.css'

function MenuPage() {
    const [name,setName]= useState('')
    const [imgsrc,setImg]= useState('')
    const {id}=useParams();

    useEffect(() => {
        const result = items.find(item => item.id === Number(id));

        if (result) {
          setName(result.name);
          setImg(result.imgSrc);
        }
      }, [id]);

  return (
    <div>
    <header className="Head">
    {name || "error404"}
    </header>
    <img src={imgsrc}>
    </img>
    </div>
  );
}

export default MenuPage;
