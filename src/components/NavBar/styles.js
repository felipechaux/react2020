import styled from 'styled-components'
import { Link  as  LinkRouter } from "@reach/router";

import { fadeIn } from "../../styles/animation";

export const Nav = styled.nav`

  align-items:center;
  background:#fcfcfc;
  border-top:1x solid #e0e0e0;
  bottom:0;
  display:flex;
  height:50px;
  width:100%;
  justify-content:space-around;
  /**siempre centrado */
  left:0;
  /**siempre centrado */
  margin: 0 auto;
  max-width:500px;
  /**posicion fija */
  position:fixed;
 /**siempre centrado */
  right:0;
  z-index:1000;
`

export const Link = styled(LinkRouter)`
align-items:center;
/**oscuro */
color:#888;
/**alienar mejor los botones */
display:inline-flex;
height:100%;
width:100%;
justify-content:center;
/**evitar subrayado por defecto */
text-decoration:none;

/**condicion - elemento de lihk si es el actual */
&[aria-current]{
    color:#000;

   /**pseudo elemento - estilo punto nativo */
   &:after {
       
       ${fadeIn({ time:'2s'})};
       content:'.';
       position:absolute;
       bottom:0;
       font-size:34px;
       line-height:32px;
   }
}

`