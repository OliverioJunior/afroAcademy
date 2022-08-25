import styled from "styled-components";
import { ImageTypes } from "../../types/ImageTypes";
const Image = styled.img`
    width: 334px;
    filter: drop-shadow(0px 5px 4px rgba(0,0,0,0.9));
    position: absolute;
    `
export default function Imagens({alt,src}:ImageTypes) {
    
    return( <Image
         src={src}
         alt={alt}
         />)
} 