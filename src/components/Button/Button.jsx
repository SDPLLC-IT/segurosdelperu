import './Button.scss'

export const Button = ({children}) => {

    return(
        <button className={`button ${(children === "Validando" || children === "Enviando") ? "disabled" : ((children === "Validar" || children === "Enviar") ? "validation" : "")}`} disabled={children === "Validando" ? true : false}>{children}</button>
    );
}