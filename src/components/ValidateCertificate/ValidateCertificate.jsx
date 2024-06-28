import { useEffect, useState } from "react";
import './ValidateCertificate.scss'
import { Button } from "../Button/Button";

export const ValidateCertificate = () => {
    const [resultId, setResultId] = useState("");
    const [certificateValue, setCertificateValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isValidating, setIsValidating] = useState(false);

    // Data retrieved from the data base
    const certificates = [
        { id: "nOp2QrStUvWxYz", company: "Minería y Construcción SAC" },
        { id: "5678AbCdEfGhIj", company: "Industrias Metalúrgicas del Mar S.A." },
        { id: "LMnopQRsTuVwXy", company: "Consultora Legal Hermanos Pérez" },
        { id: "1234dEfGh5678i", company: "Transportes El Veloz EIRL" },
        { id: "kLmNOpQrStUv9W", company: "Ingeniería Civil y Asociados S.C." },
        { id: "xYz012345678Ab", company: "Manufacturas Textiles Rivas S.A.C." },
        { id: "DfGhIjKlMnOpQr", company: "Laboratorios Médicos Modernos S.R.L." },
        { id: "tUvWxYzAbxwsfG", company: "Compañía Agrícola San José Ltda." },
        { id: "hIjKlM5678nOpQ", company: "Tecnología Avanzada Gómez & Cía." },
        { id: "sTuVwXyZ1234Ab", company: "Productos Alimenticios Gourmet S.A." },
        { id: "aB3cdE5FgHiJkL", company: "Black BBC Out S.A.C" },
        { id: "nO22QrStxvWxYz", company: "Importaciones Internacionales del Peru SRL" },
        { id: "52gopbCdEfGhIj", company: "Servicios Financieros Inversiones Concha SAC" },
        { id: "LMnox3tfTuVwXy", company: "Distribuidora de Electrodomésticos y más S.A." },
        { id: "6feedEfGh5678i", company: "Agencia de Publicidad Creativa Suarez EIRL" },
        { id: "ksmNOpQxwtUv9W", company: "Consultora Ambiental Del Padro y Asociados S.C." },
        { id: "xYz02wgtw678Ab", company: "Inversiones Inmobiliarias Rivas Pinedo S.A.C." },
        { id: "DfGhIsssMnOpQr", company: "Clínica Dental Sonrisas Felices S.R.L." },
        { id: "tUvWxYzAbCDEfG", company: "Almacenes y Distribuciones San José Ltda." },
        { id: "aIjKlM49o8nOpQ", company: "Empresa de Tecnología Innovadora Gómez & Cía." }
      ];
      

    const handleChange = (event) => {
        setCertificateValue(event.target.value);
        setErrorMessage("")
        setIsSubmitted(false)
        setSuccessMessage("")
        setResultId("")
    }

    const isCertificateValueValid = (certificateValue) => {
        if(certificateValue.length !== 14) {
            return false;
        } else {
            const certificateId = certificates.findIndex(certificate => certificate.id === certificateValue)
            console.log(certificateId)
            if(certificateId === -1) {
                return false;
            }
            setResultId(certificateId)
        }
        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
    }

    const validDate = () => {
        const today = new Date();
        let day = today.getDate();
        let month = today.getMonth();
        let year = today.getFullYear();

        const formatDate = (y,m,d) => {
            const date = new Date(y,m,d)
            return `${date.getDate()}/${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}/${date.getFullYear()}`
        }

        if (day <= 13) {
            return formatDate(year, month, 13);
        } else if(month < 11){
                return formatDate(year, month + 1, 13);
          } else {
            return formatDate(year + 1, 0, 13);
          }        
    }

    useEffect(() => {
        if(resultId) {
            setSuccessMessage(`El certificado es auténtico, pertenece a ${certificates[resultId].company}. Valido hasta el ${validDate()}`)
        }
    }, [resultId]);


    useEffect(() => {
        const min = 2000;
        const max = 4500;
        const time = (min) + (max - min) * Math.random()

        if(isSubmitted) {
            setIsValidating(true);
            setTimeout(() => {
                if(isCertificateValueValid(certificateValue)) {
                    setErrorMessage("");
                    setIsValidating(false);
                    return;
                }
                setErrorMessage("El certificado ingresado no es correcto")
                setSuccessMessage("")
                setIsValidating(false);
            }, time)
        }
    }, [isSubmitted])

    
    return(
        <>
            <h2>Aquí podrás validar la autenticidad del certificado SCTR</h2>
            <form onSubmit={handleSubmit} className="form__certificate">
                <div>
                    <label htmlFor="certificate">Ingrese el id del certificado:</label>
                    <input id="certificate"type="text" onChange={handleChange} name="certificate" required placeholder="Coloca el id del certificado"/>
                </div>
                <Button>{isValidating ? "Validando" : "Validar"}</Button>
                {isValidating ? <div className="lds-dual-ring"></div> : (
                    errorMessage ? (<p className="message message--error">{errorMessage}</p>) : (
                        successMessage && (<p className="message message--success">{successMessage}</p>)
                    )
                )}
            </form>
        </>
    );
}