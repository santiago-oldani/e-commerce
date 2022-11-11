import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';

const productsArray = [
    { id: "1", title: "Zapatillas Adidas Talle 9 US", description: "Urbanas, livianas y frescas, las Zapatillas adidas Coreracer están pensadas para cumplir con las demandas de los corredores más exigentes. Su suela tiene un estabilizador de talón y su capellada es transpirable para mantener el confort que mereces durante todo tu trayecto.", price: 24.999, pictureUrl: "../assets/adidas.jpg" },
    { id: "2", title: "Escritorio gerencial con 3 cajones", description: "Escritorio gerencial ejecutivo, construido en MDF, con 3 cajones fijos, color beige claro.", price: 83.000, pictureUrl: '../assets/escritorio.jpg' },
    { id: "3", title: "Sillon ejecutivo gerencial retec in 8074", description: "Este sillón cuenta con un diseño sobrio y superior, con una excelente calidad y presencia para tu oficina.", price: 35.499, pictureUrl: '../assets/gerencial.jpg' },
    { id: "4", title: "Campera de plumas mujer", description: "Campera de plumas Scania Campera negra de plumas para mujer Scania. Bolsillos: 2 Capucha: No Cierre: Si", price: 45.450, pictureUrl: '../assets/campera-mujer.png' },
    { id: "5", title: "Mesa Eames 80 CB", description: "Esta versión estilo Nórdico ofrece una combinación en tapa blanca laqueada mate y patas en tonos claros, para generar una visual única. Un diseño ideal para tu cocina o living comedor. Combinable con Sillas Eames o Sillones Praga. Su tamaño es ideal para cocinas modernas y con espacios reducidos. Ideal para 4 personas", price: 39.633, pictureUrl: '../assets/mesa.jpg' }
  ]

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item, setItem] = useState(null)
    useEffect(() =>{
        setItem(null)
        const task = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(productsArray[id - 1])
            }, 1000)
        })
        task.then((res) => setItem(res))
      },[id])
  return (
    <>{item ? <ItemDetail item={item}/> : null } </>

  )
}

export default ItemDetailContainer