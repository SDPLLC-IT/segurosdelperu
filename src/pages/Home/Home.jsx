import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import './Home.scss'

export const Home = ({type}) => {
    return(
        <section className='section__home'>
        {type === "inicio" ? (
            <>
                <h1>Qué es el SCTR?</h1>
                <p>El SCTR es un seguro obligatorio en muchos países, diseñado para proteger a los trabajadores que realizan actividades consideradas de alto riesgo, como la minería, la construcción, la industria pesada, entre otras. Este seguro complementa la cobertura que proporciona el seguro de salud estándar, ofreciendo beneficios adicionales específicos para accidentes de trabajo y enfermedades profesionales.</p>
                
                <h3>Cobertura del SCTR:</h3>
                <ol>
                <li><strong>Accidentes de trabajo:</strong> Incluye lesiones sufridas por el trabajador mientras realiza sus labores en el lugar de trabajo. Esto puede cubrir desde accidentes menores hasta situaciones más graves que requieren hospitalización y tratamiento médico prolongado.</li>
                <li><strong>Enfermedades profesionales:</strong> Cubre enfermedades causadas directamente por las condiciones del trabajo o exposición a agentes físicos, químicos o biológicos en el entorno laboral. Ejemplos comunes incluyen enfermedades respiratorias por exposición a polvo o químicos, enfermedades osteomusculares por malas posturas repetitivas, entre otras.</li>
                <li><strong>Prestaciones económicas:</strong> El SCTR también proporciona prestaciones económicas como subsidios por incapacidad temporal o permanente, pensiones por invalidez o sobrevivencia en caso de fallecimiento del trabajador a causa de un accidente laboral o enfermedad profesional.</li>
                </ol>
                
                <h2>Beneficios para las empresas:</h2>
                <ul>
                <li><strong>Cumplimiento legal:</strong> Las empresas que contratan el SCTR cumplen con las normativas de seguridad y salud ocupacional, reduciendo riesgos legales y sanciones.</li>
                <li><strong>Mejora de la imagen corporativa:</strong> Demostrar preocupación por la seguridad y bienestar de los trabajadores puede mejorar la reputación de la empresa y ayudar a atraer y retener talento.</li>
                <li><strong>Reducción de costos indirectos:</strong> Al prevenir accidentes y enfermedades laborales, las empresas pueden reducir costos asociados con ausentismo, rotación de personal y demandas legales.</li>
                </ul>
                
                <h2>Servicios relacionados:</h2>
                <p>Además del seguro en sí, las empresas especializadas en SCTR suelen ofrecer servicios adicionales como evaluaciones de riesgos laborales, capacitaciones en prevención de riesgos, implementación de medidas de seguridad, asesoría legal en temas laborales y de seguridad, entre otros.</p>
                
                <p>En resumen, el SCTR es crucial para proteger tanto a los trabajadores como a las empresas, asegurando un entorno laboral seguro y cumpliendo con las obligaciones legales establecidas.</p>
                <Link to="/cotiza" ><Button>Cotiza ya!</Button></Link>
            </>   
        ) 
        :
        (
            <>
                <h1>Seguros del Peru</h1>
                <h2>Somos una empresa dedicada a proporcionar el servicio de aseguramiento (SCTR)</h2>
                <p>El SCTR es un seguro obligatorio en muchos países, diseñado para proteger a los trabajadores que realizan actividades consideradas de alto riesgo, como la minería, la construcción, la industria pesada, entre otras. Este seguro complementa la cobertura que proporciona el seguro de salud estándar, ofreciendo beneficios adicionales específicos para accidentes de trabajo y enfermedades profesionales.</p>
                
                <h3>Nuestros Valores:</h3>
                <ul>
                    <li><strong>Compromiso:</strong> Nos comprometemos a proporcionar la mejor cobertura y servicios relacionados para garantizar la seguridad y bienestar de los trabajadores.</li>
                    <li><strong>Calidad:</strong> Nos esforzamos por ofrecer soluciones de calidad que cumplan con las normativas legales y mejoren la reputación corporativa de nuestros clientes.</li>
                    <li><strong>Innovación:</strong> Buscamos constantemente mejorar y adaptar nuestros servicios para satisfacer las necesidades cambiantes del mercado y de nuestros clientes.</li>
                </ul>
                
                <Link to="/cotiza"><Button>Cotiza ahora</Button></Link>
            </>
            )}
         </section>
    );
}