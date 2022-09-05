import { To } from "react-router-dom";

export type ButtonTypes = {
    text: string;
    onClick?: () => void;
    link: To;
}