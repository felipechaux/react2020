import styled from 'styled-components'

import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
/*empujar contenido - problema*/
min-height:200px;
`


export const ImgWrapper = styled.div`
 border-radius:10px;
 display:block;
 height:0;
 overflow:hidden;
 /* misma relacion de aspecto for paddding */
 padding: 56.25% 0 0 0;
 position:relative;
 width:100%;
`


export const Img = styled.img`
 ${fadeIn()};
 box-shadow: 0px 10px 14px rgba(0,0,0,0.2);
 height:100%;
 /** adaption a el espacio que tenga la imagen */
 object-fit:cover;
 position:absolute;
 top:0;
 width:100%;
`

export const Button = styled.button`
 display:flex;
 align-items:center;
 padding-top: 8px;
 & svg{
     margin-right:4px;
 }
`
