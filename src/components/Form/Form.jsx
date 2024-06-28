import { useEffect, useState } from "react"
import { Button } from "../Button/Button"
import './Form.scss'
import { useNavigate } from "react-router-dom"

export const Form = ({type}) => {
    const [successMessage, setSuccessMessage] = useState("")
    const [errorValidationMessage, setErrorValidationMessage] = useState("")
    const [dataValidated, setDataValidated] = useState(false);
    const navigate = useNavigate();
    const [isValidating, setIsValidating] = useState(false);

    
    const [data, setData] = useState({
        companyName: "",
        companyRUC: "",
        contactName: "",
        email:"",
        laborAmount: 0,
        totalWage: 0,
        laborActivity: ""
    })

    const dataValidation = ({companyRUC}) => {
        if(isNaN(+companyRUC) || companyRUC.length !== 11 || (companyRUC.charAt(0) !== "1" && companyRUC.charAt(0) !== "2")) {
            setErrorValidationMessage("El numero de RUC es incorrecto")
            setDataValidated(false);
            return false;
        }
        setErrorValidationMessage("")
        return true;
    }

    const handleChange = (event) => {
        setErrorValidationMessage("")
        setData(data => ({
            ...data,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => { 
        event.preventDefault()
        if(dataValidation(data)){
            setDataValidated(true)
        }
    }

    useEffect(() => {
        const min = 1000;
        const max = 3000;
        const time = (min) + (max - min) * Math.random()

        if(dataValidated) {
            setIsValidating(true);
            setTimeout(() => {
                setSuccessMessage(`Hemos recibido tus datos ${data.contactName}, ${type === "cotiza" ? "te enviaremos tu cotización" : "nos pondremos en contacto contigo"} a la brevedad.`)
                setIsValidating(false);
            }, time)
            setTimeout(() => {
                setSuccessMessage("")
                navigate('/inicio');

            }, time + 3000)
        }
    },[dataValidated])

    return (
        <>
            <h2 className="form__title">{type === "cotiza" ? "Cotiza con nosotros" : "Llena tus datos para contactarte"}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="companyName">Razón Social</label>
                    <input id="companyName"type="text" onChange={handleChange} name="companyName" required placeholder="Nombre de la empresa"/>
                </div>
                <div>
                    <label htmlFor="companyRUC">RUC</label>
                    <input id="companyRUC"type="text" onChange={handleChange} name="companyRUC" required placeholder="23456789012" />
                </div>
                <div>
                    <label htmlFor="contactName">Persona de Contacto</label>
                    <input id="contactName"type="text" onChange={handleChange} name="contactName" required placeholder="Nombre de contacto"/>
                </div>
                <div>
                    <label htmlFor="email">Email de Contacto</label>
                    <input id="email"type="email" onChange={handleChange} name="email" required placeholder="nombre.empresa@gmail.com"/>
                </div>
                {type === "cotiza" && (
                    <>
                        <div>
                            <label htmlFor="laborAmount">Numero de trabajadores</label>
                            <input id="laborAmount"type="number" onChange={handleChange} name="laborAmount" required placeholder="30"/>
                        </div>
                        <div>
                            <label htmlFor="totalWage">Remuneración Mensual (Total)</label>
                            <input id="totalWage"type="number" onChange={handleChange} name="totalWage" required placeholder="60000"/>
                        </div>
                        <div>
                            <label htmlFor="laborActivity">Actividad laboral (Ficha RUC)</label>
                            <input id="laborActivity"type="text" onChange={handleChange} name="laborActivity" required placeholder="Cultivo de hortalizas"/>
                        </div>
                    </>
                )}
                {errorValidationMessage && (
                    <p className="message message--error">{errorValidationMessage}</p>
                )}
                <Button>{isValidating ? "Enviando" : "Enviar"}</Button>
                <p className="small">Tus datos son 100% confidenciales, no los compartiremos con terceros.</p>
                {isValidating ? <section className="lds-dual-ring"></section> : (
                    successMessage && (
                        <p className="message message--success">{successMessage}</p>
                    ))}   
            </form>     
        </>
    );
}