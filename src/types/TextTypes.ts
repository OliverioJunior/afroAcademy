import { MutableRefObject } from 'react';
export type TextTypes = {
    text: string;
    span?: string;
    phrase?: string;
    children?: React.ReactNode;
    innerRef?: MutableRefObject<HTMLDivElement>;
}