import { useEffect, useState } from "react";



//Creamos un custom Hook personalizado , siempre y cuando el nombre empieze con use...
export const useLocalStorage  = (itemName , initalValue) => {
  //podemos usar otros hooks
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item , setItem] = useState(initalValue);

  useEffect(() => {
    setTimeout( () => {
      try {
          //guardamos el item en una constante
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem ;

          // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
          if(!localStorageItem) {
            //si el user no existe en el localStorage va a guardar un array basio
            localStorage.setItem(itemName, JSON.stringify(initalValue)); //el localStorage solo guarda strings por eso lo transformamos con stringiFy a array
            parsedItem = initalValue;
          } else {
            //en caso q si exista lo regresamos a como un obj de js con parse para poder renderizarlo
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
      } catch (error) {
        setError(error);   // En caso de un error lo guardamos en el estado
      } finally {
        setLoading(false);    // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
      }
    },1000);
  },);

  const saveItem = (newItem) => {
    // Manejamos la tarea dentro de un try/catch por si ocurre algún error
    try {
      const stringiFyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringiFyItem);
      setItem(newItem);
    } catch(error) {
      setError(error);  // En caso de algún error lo guardamos en el estado
    }
  }

  // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
  return {
    item ,
    saveItem,
    loading,
    error
  }
}
