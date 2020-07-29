import {useState} from 'react'

//custom hook para guardar estado de componente 
export function useLocalStorage(key,initialValue){
    //estado local para likes
    const [storedValue,setValue] = useState(()=>{
      try {
        //obtener dato de local storage
        const item = window.localStorage.getItem(key)
        return item!=null ? JSON.parse(item) : initialValue
      } catch (e) {
        return initialValue
      }
    })
  
    //local storage
    const setLocalStorage = value =>{
      try {
        window.localStorage.setItem(key,JSON.stringify(value))
        setValue(value)
      } catch (e) {
         console.error(e)
      }
    }
  
   return [storedValue,setLocalStorage]
  }