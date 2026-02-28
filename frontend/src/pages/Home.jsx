import React from 'react'
// import './App.css'
const Home = () => {
  return (
    <div className="bg-amber-50">
    <div className='w-full bg-amber-300' id='navbar'>
      <div className="flex justify-end">
        
         <span className='me-2'>Opciones </span> 
      </div>
      </div>  
      <div className="flex justify-center items-center bg-amber-300" id='logoP'>
        <img src="src/assets/gatosCocinerosSF.png" alt="logoPrincipal" className='w-77'/>
      </div>
    <div className="max-w-5xl mx-auto px-4 text-center rounded">
      <span className='text-2xl my-1'>🌟Recetas principales🌟</span>
      <div className="receta">
        <span>Bizcochuelo de Naranja</span>
        
      </div>
      <div className="receta">
        <span>Bizcochuelo de Banana</span>
        
      </div>
      <div className="receta">
        <span>Pastafrola</span>
        
      </div>
      <div className="receta">
        <span>Pan</span>
        
      </div>
      <div className="receta">
        <span>Galletas</span>
        
      </div>
    
    </div>
    <div className="bg-amber-300 mt-3 max-w-6xl mx-auto p-3 rounded-2xl text-center ">
      <h4 className='text-2xl mb-2'>¿Queres ver todas nuestras recetas?</h4>
      
      <a className='p-3 text-xl md:hover:bg-amber-900 md:hover:text-amber-100 md:hover:shadow-md md:hover:rounded-2xl cursor-pointer'>¡Conocelas Aquí!</a>
    </div>
    <div className="w-full bg-amber-900 text-amber-300 mt-2 p-3 flex justify-end">
      <span className='footItem '>Sobre Nosotros </span>
      <span className='p-1'>|</span>
      <span className='mx-2 footItem'>Redes</span>
      <span className='p-1'>|</span>
      <span className='footItem'>Proyecto</span>
    </div>
    </div>
  )
}

export default Home