import './myLabel.css'

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
    color: 'primary' | 'secondary' | 'tertiary'
    /**
    * Custom Color
    */
    fontColor?: string
}

export const MyLabel = ({
    label = "No Label",
    size = "normal",
    color = "primary",
    allCaps = false,
    fontColor
}: MyLabelProps) => {
    return (
        <span style={{ color: fontColor }} className={`label ${size} text-${color}`}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}

export default MyLabel;