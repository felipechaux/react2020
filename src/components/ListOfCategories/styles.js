import styled,{css} from 'styled-components'
import { fadeIn } from '../../styles/animation'


export const List = styled.ul`
 display:flex;
 overflow: scroll;
 width:100%;


/*cuando sea  fixed*/
 ${props => props.fixed && css`
 {
    ${fadeIn()};
     background : #fff;
     border-radius:60px;
     box-shadow:0 0 20px rgba(0,0,0,0.3);
     left:0;
     margin:0 auto;
     max-width:400px;
     padding: 5px;
     position:fixed;
     right:0;
     top:-20px;
     /*mitad de pequeño*/
     transform: scale(.5);
     /* por encima del otro contenido */
     z-index:1;
 }` 
 }
`
/* pading horizontal and vertical */
export const Item = styled.li`
 padding: 0 8px;
`
