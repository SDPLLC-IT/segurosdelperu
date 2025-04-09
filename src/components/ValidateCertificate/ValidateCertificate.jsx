import { useEffect, useState } from "react";
import './ValidateCertificate.scss'
import { Button } from "../Button/Button";
import certificateImage from '../../assets/certif.png'

export const ValidateCertificate = () => {
    const [resultIdx, setresultIdx] = useState("");
    const [certificateValue, setCertificateValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isValidating, setIsValidating] = useState(false);
    const [isImageShown, setIsImageShown] = useState(false);

    // Data retrieved from the data base
    const certificates = [
        { id: "nOp2QrStUvWxYz", company: "Minería y Construcción S.A.C" },
        { id: "5678AbCdEfGhIj", company: "Industrias Metalúrgicas del Mar S.A." },
        { id: "LMnopQRsTuVwXy", company: "Consultora Legal Hermanos Pérez" },
        { id: "1234dEfGh5678i", company: "Transportes El Veloz EIRL" },
        { id: "kLmNOpQrStUv9W", company: "Ingeniería Civil y Asociados S.C." },
        { id: "xYz012345678Ab", company: "Manufacturas Textiles Rivas S.A.C." },
        { id: "DfGhIjKlMnOpQr", company: "Laboratorios Médicos Modernos S.R.L." },
        { id: "tUvWxYzAbxwsfG", company: "Compañía Agrícola San José Ltda." },
        { id: "hIjKlM5678nOpQ", company: "Tecnología Avanzada Gómez & Cía." },
        { id: "sTuVwXyZ1234Ab", company: "Productos Alimenticios Gourmet S.A." },
        { id: "aB3cdE5FgHiJkL", company: "Black BBC Out S.A.C." },
        { id: "A1B2C3D4E5F6G7", company: "Tech Innovations Global" },
        { id: "H8I9J0K1L2M3N4", company: "Consultora Estratégica Visionaria EIRL" },
        { id: "O5P6Q7R8S9T0U1", company: "Distribuidora de Insumos Médicos S.R.L." },
        { id: "V2W3X4Y5Z6A7B8", company: "Agencia Creativa Brillante SAC" },
        { id: "C9D0E1F2G3H4I5", company: "Consultores Ambientales y Legales Asociados" },
        { id: "J6K7L8M9N0O1P2", company: "Corporación de Alimentos Saludables S.A." },
        { id: "Q3R4S5T6U7V8W9", company: "Centro Odontológico Sonrisas Plenas" },
        { id: "X0Y1Z2A3B4C5D6", company: "Servicios Financieros del Sur EIRL" },
        { id: "E7F8G9H0I1J2K3", company: "Importadora de Tecnología Avanzada SAC" },
        { id: "L4M5N6O7P8Q9R0", company: "Inversiones Inmobiliarias Mendoza & Asociados" },
        { id: "S1T2U3V4W5X6Y7", company: "Grupo Empresarial de Logística Integral S.A.C." },
        { id: "Z8A9B0C1D2E3F4", company: "Desarrollo y Construcción Moderna EIRL" },
        { id: "G5H6I7J8K9L0M1", company: "Agencia de Marketing Digital Vanguardista SAC" },
        { id: "N2O3P4Q5R6S7T8", company: "Soluciones en Software Empresarial S.A." },
        { id: "U9V0W1X2Y3Z4A5", company: "Consultoría y Asesoría Financiera Premium" },
        { id: "B6C7D8E9F0G1H2", company: "Centro Médico Bienestar Total" },
        { id: "I3J4K5L6M7N8O9", company: "Innovaciones Energéticas Sustentables" },
        { id: "tUvWxYzAbCDEfG", company: "Almacenes y Distribuciones San José" },
        { id: "ld4s2wvXl9sjEJ", company: "Logistica en general El Dorado Peru S.A.C." },
        { id: "2vNgHo4orlOKFV", company: "Logistica en general Gavilanes S.A.C." }
      ];
      

    const handleChange = (event) => {
        setCertificateValue(event.target.value);
        setErrorMessage("")
        setIsSubmitted(false)
        setSuccessMessage("")
        setresultIdx("")
    }

    const isCertificateValueValid = (certificateValue) => {
        if(certificateValue.length !== 14) {
            return false;
        } else {
            const certificateId = certificates.findIndex(certificate => certificate.id === certificateValue)
            if(certificateId === -1) {
                return false;
            }
            setresultIdx(certificateId)
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
        let upperDayLimit;
        
        if(certificates[resultIdx].id.includes("d4s2wvXl9s")) {
            upperDayLimit = 9;
        } 
        if(certificates[resultIdx].id.includes("4orlOKF")) {
            upperDayLimit = 9;
        } 
        if(certificates[resultIdx].id.includes("3cdE5FgHi")) {
            upperDayLimit = 13;
        }

        const formatDate = (y,m,d) => {
            const date = new Date(y,m,d)
            return `${date.getDate()}/${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}/${date.getFullYear()}`
        }

        if (day <= upperDayLimit) {
            return formatDate(year, month, upperDayLimit);
        } else if(month < 11){
                return formatDate(year, month + 1, upperDayLimit);
          } else {
            return formatDate(year + 1, 0, upperDayLimit);
          }        
    }

    useEffect(() => {
        if(resultIdx) {
            setSuccessMessage(`Este certificado pertenece a ${certificates[resultIdx].company.toUpperCase()}, válido hasta el ${validDate()}`)
        }
    }, [resultIdx]);


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

    const handleMouseEnter = (event) => {
        setIsImageShown(true)
    }

    const handleMouseLeave = (event) => {
        setIsImageShown(false)
    }

    
    return(
        <>
            <h2>Aquí podrás validar la autenticidad del certificado SCTR</h2>
            <form onSubmit={handleSubmit} className="form__certificate">
                <div className="form-container">
                    <div>
                        <label htmlFor="certificate">Ingrese el id del certificado:</label>
                        <p className="small small--cert">¿Donde encuentro el id del certificado? <span className="info" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></span></p>
                        {isImageShown && (<img src={certificateImage} alt="Imagen del id del certificado" width="300" className="image"/>)}
                        <input id="certificate"type="text" onChange={handleChange} name="certificate" required placeholder="Coloca el id del certificado"/>
                    </div>
                    <Button>{isValidating ? "Validando" : "Validar"}</Button>
                    {isValidating ? <div className="lds-dual-ring"></div> : (
                        errorMessage ? (<p className="message message--error">{errorMessage}</p>) : (
                            successMessage && (<p className="message message--success">{successMessage}</p>)
                        )
                    )}
                </div>
            </form>
        </>
    );
}