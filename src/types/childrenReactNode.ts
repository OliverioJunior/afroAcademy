export type  ChildrenReactNode<U> = {
    value?:U
    children: React.ReactNode | React.ReactNode[];
    colors?: string;
    background?: string;
} 