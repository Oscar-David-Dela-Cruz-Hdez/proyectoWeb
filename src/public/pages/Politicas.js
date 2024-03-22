import React from 'react';
import '../../public/pages/estilos/politicas.css'; // Asegúrate de ajustar la ruta si es necesario

export default function Politicas() {
  return (
    <div className="politicas-container">
      <h1 className="politicas-title">Políticas</h1>
      <p className="politicas-text">
        Política de Tecnología de la Información (TI):
        Seguridad de Datos y Privacidad:
        Todos los datos de clientes y comerciales deben almacenarse de forma segura y protegidos contra accesos no autorizados.
        Se requerirá que los empleados cumplan con las políticas de seguridad de TI al acceder a sistemas y datos de la empresa.
      </p>
      <h2 className="politicas-subtitle">Privacidad</h2>
      <p className="politicas-text">En Plantech, valoramos la privacidad y la seguridad de la información personal de nuestros clientes.</p>
      <p className="politicas-text">
        Recopilación de Información Personal:
        Cuando realiza una compra en nuestro sitio web, recopilamos información como su nombre, dirección de correo electrónico, dirección de envío y detalles de pago.
        También podemos recopilar información adicional, como su número de teléfono o preferencias de producto, si elige proporcionarla voluntariamente.
      </p>
      <p className="politicas-text">
        Uso de la Información Personal:
        Utilizamos la información personal que recopilamos para procesar sus pedidos, enviarle confirmaciones de compra y proporcionarle actualizaciones sobre el estado de su envío.
        También podemos utilizar su información para comunicarnos con usted sobre ofertas promocionales, nuevos productos o actualizaciones importantes relacionadas con nuestros servicios.
      </p>
      <p className="politicas-text">
        Consentimiento y Control:
        Al utilizar nuestros servicios, usted acepta los términos de esta política de privacidad.
        Usted tiene derecho a acceder, corregir o eliminar su información personal en cualquier momento, y puede optar por no recibir comunicaciones de marketing directamente desde su cuenta en línea.
      </p>

      <h2 className="politicas-subtitle">Terminos y condiciones</h2>
      <p className="politicas-text">
        Al acceder o utilizar nuestros Servicios, usted acepta cumplir y estar legalmente obligado por estos Términos. 
        Si no está de acuerdo con alguno de estos términos, no utilice nuestros Servicios.</p>
      <p className="politicas-text">
        Uso de los Servicios:
        Usted acepta utilizar nuestros Servicios únicamente con fines legales y de acuerdo con estos Términos y todas las leyes y regulaciones aplicables.
        Usted es responsable de mantener la confidencialidad de su cuenta y contraseña, y acepta notificarnos inmediatamente cualquier uso no autorizado de su cuenta.
      </p>
      <p className="politicas-text">
        Propiedad Intelectual:
        Nuestros Servicios y todos los derechos de propiedad intelectual asociados son propiedad exclusiva de PLANTECH Compañía y sus licenciantes.
        Usted acepta no reproducir, distribuir, modificar, crear trabajos derivados, transmitir, mostrar públicamente, realizar públicamente o 
        explotar de otra manera ningún contenido de nuestros Servicios sin nuestro consentimiento previo por escrito.
      </p>
      <p className="politicas-text">
        Limitación de Responsabilidad:
        En la medida máxima permitida por la ley, en ningún caso seremos responsables ante usted o cualquier tercero por daños indirectos, incidentales, especiales, 
        consecuentes o punitivos, incluyendo, pero no limitado a, pérdida de beneficios, datos, uso o buena voluntad, derivados de su acceso o uso de nuestros Servicios.
      </p>
    </div>
  );
}
