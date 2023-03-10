import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"
import React from "react"


const Header = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto, 
  isValidPresupuesto,
  setIsValidPresupuesto

  
  }) => {
  return (
    <header>

    <h1>Planificador de gastos</h1>

     {isValidPresupuesto ?
      ( <ControlPresupuesto
      gastos={gastos}
      presupuesto={presupuesto}
      setGastos={setGastos}
      setPresupuesto={setPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
       />):
    
    
     (<NuevoPresupuesto 
     gastos={gastos}
     presupuesto={presupuesto}
     setPresupuesto={setPresupuesto}
     setIsValidPresupuesto={setIsValidPresupuesto}

    />)
}


   
      
    </header>
  )
}

export default Header
