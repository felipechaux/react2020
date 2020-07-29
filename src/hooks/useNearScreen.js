import {useEffect,useState,useRef} from 'react'

//custom hook 
export function useNearScreen(){
    //permite capturar elemento del dom - para lazyload
    const element = useRef(null)

    const [show,setShow] = useState(false)

    useEffect(function(){
        //usar solo dependencia polyfill de intersection observer si el navegador no es soportado
        Promise.resolve(
        //promesa
         typeof window.IntersectionObserver!='undefined' 
         ? window.IntersectionObserver 
         //import dinamico
         // soportar mas navegadores con la dependencia intersection-
         : import('intersection-observer')
        ).then(()=>{
          const observer =new window.IntersectionObserver(
            //para saber si esta o no en el viewport
            function(entries){
               //console.log(entries)
               const {isIntersecting}=entries[0];
               //console.log(isIntersecting)
               if(isIntersecting){
                //actualizar estado de componente
                setShow(true)
                //evitar que el observador se actualice
                observer.disconnect()
      
               }
      
            })
            observer.observe(element.current)
         // console.log(element.current)
         })
    
      },[element])
       
      //retorna si el elemento tiene que mostrarse (show), element referencia
      return  [show,element]
}