/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
    * Este es el mensaje a mostrar
    */
    label: string;
    /**
    * Este es el tamaño de la etiqueta
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Todo capitalizado
    */
    allCaps: boolean;
    /**
     * Colores basico del texto
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
    * Custom Color
    */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor }: MyLabelProps) => JSX.Element;
