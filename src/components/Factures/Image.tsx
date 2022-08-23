import styled from "styled-components";
import { ImageTypes } from "../../types/ImageTypes";
const Image = styled.img`
    width: 334px;
    filter: drop-shadow(8px 8px 10px gray);
    position: absolute;
    `
export default function Imagens({alt,src}:ImageTypes) {
    
    return( <Image
         src={src}
         alt={alt}
         />)
} 