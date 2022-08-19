import styled from "styled-components";
import { ImageTypes } from "../../types/ImageTypes";

export default function Imagens({alt,height,src,width}:ImageTypes) {
    const Image = styled.img`
    width: ${width}px;
    height: ${height}px;
    filter: drop-shadow(8px 8px 10px gray);
    position: absolute;
    `
    return( <Image
         src={src}
         alt={alt}
         />)
} 