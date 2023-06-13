import React from "react";
import "./funcion.css";





function Funcion() {
   
      

    function saludo () {
        // obtener los valores de los inputs y pasarlos a numeros 

        const A = parseFloat(document.getElementById("A").value);   
        const B = parseFloat(document.getElementById("B").value);
        const C = parseFloat(document.getElementById("C").value);
        const x1 = parseFloat(document.getElementById("x1").value);
        const y1 = parseFloat(document.getElementById("y1").value);
        // mostrar los valores en la consola
        const pendiente = -A/B;
        var ecuacion = `y = ${pendiente}x + ${-pendiente*x1 + y1}`;
        // mostrar los valores en la pagina en el div con clase mostrarresultados
        document.querySelector(".mostraresultados").innerHTML = ecuacion;
    };
    
    return (
        <div className="contenedorinputs">
            <h1 className="titulo">Rectas raras</h1>
            <input type="text" id="A"  />X + 
            <input type="text" id="B" />Y =
            <input type="text" id="C" />        
         
            <h2 className="titulo"> Coordenadas</h2>
            (<input type="text" id="x1" />x1
            <input type="text" id="y1" />y1)
           
            <booton onClick={saludo} className="boton">Calcular</booton>

            <div className="mostrar">
                <h3 className="titulo">Resultados</h3>
                <p className="parrafo">La ecuacion de la recta es: </p>
                <div className="mostraresultados"></div>
            </div>
        </div> 
    );
}

export default Funcion;
