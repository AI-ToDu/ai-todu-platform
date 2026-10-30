# 🚀 AI-ToDu - Landing Page B2B

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

**AI-ToDu** conecta inventario, ventas y despachos de pequeños negocios. Este repositorio contiene su **Landing Page**: presenta la propuesta de valor, explica el recorrido operativo y permite continuar hacia la demostración del producto.

### 🌍 [Ver Demo en Vivo (GitHub Pages)](https://ai-todu.github.io/ai-todu-platform/)

> **Nota para evaluación:** sitio académico responsive y bilingüe, con inglés predeterminado y español latinoamericano. La revisión se encuentra en `fix/tb1-readiness`; contrastar la versión pública con la rama revisada. La vista del hero está identificada como ilustrativa y no acredita capacidades productivas de IA, pago o emisión fiscal.

---

## 🏗️ Arquitectura del Proyecto

La landing utiliza **HTML, CSS y JavaScript**, sin paquetes de ejecución. Actúa como capa de presentación y dirige a la aplicación Angular, donde se encuentran los flujos de negocio.

* **Propuesta y funcionalidades:** explicación del problema y del alcance de la demo.
* **Recorrido operativo:** recepción, inventario, venta y entrega.
* **Segmentos y equipo:** presentación del público objetivo y de IA-INNOVATION.
* **CTA:** acceso al workspace, conservando idioma y perfil demo solicitado.
* **Contacto y recursos:** canal real del proyecto en GitHub y términos/privacidad académicos.

El perfil enviado por el enlace es una sugerencia de entrada; una sesión ya autenticada conserva sus propias reglas y rol.

---

## 🛠️ Tecnologías y Prácticas Implementadas

* **Estructura y diseño:** HTML semántico y CSS responsive con secciones apiladas en móvil.
* **Interacción:** JavaScript para idioma, navegación y diálogos nativos.
* **Internacionalización:** inglés y español latinoamericano.
* **Accesibilidad:** menú colapsable y controles utilizables con teclado, foco y Escape.
* **Verificación:** pruebas de traducciones, anclas y recursos mediante GitHub Actions en ramas fix y PR.

---

## 🚀 Despliegue Local (Para Desarrolladores)

1. Clona la rama de revisión:

   ```sh
   git clone --branch fix/tb1-readiness https://github.com/AI-ToDu/ai-todu-platform.git
   cd ai-todu-platform
   ```

2. Comprueba el contenido con Node.js:

   ```sh
   npm run check
   ```

3. Sirve los archivos con Python 3:

   ```sh
   python -m http.server 8851 --bind 127.0.0.1
   ```

4. Abre [http://127.0.0.1:8851](http://127.0.0.1:8851). Para recorrer el CTA local, ejecuta también `npm run demo` en el frontend, que utiliza el puerto 8850.

En hosting público, el CTA apunta a la URL del workspace en Pages. La rama predeterminada histórica de la landing es `develop`; revisar integración y configuración de Pages antes de publicar la revisión.

## ✅ Verificación y Alcance

Revisar escritorio/móvil, ambos idiomas, menú, foco, Escape, destino del CTA y términos. El sitio no incorpora analytics, testimonios ficticios ni checkout de suscripción.

Siguen pendientes un formulario B2B con persistencia, testimonios auténticos y evidencias audiovisuales del producto/exposición. El contacto actual utiliza el canal público del proyecto en GitHub.

---

## 🔗 Ecosistema del Proyecto

* **[Landing Page](https://github.com/AI-ToDu/ai-todu-platform/tree/fix/tb1-readiness):** presentación del producto y acceso a la demo.
* **[Frontend](https://github.com/AI-ToDu/ai-todu-webapp/tree/fix/tb1-readiness):** espacio de trabajo Angular.
* **[Fake REST API](https://github.com/AI-ToDu/ai-todu-fake-api/tree/fix/tb1-readiness):** motor canónico de demostración y contrato OpenAPI.
* **[Informe](https://github.com/AI-ToDu/ai-todu-report/tree/fix/tb1-readiness):** requisitos, arquitectura, diseño de datos y evidencias.

---

## 👥 Equipo de Desarrollo

Proyecto desarrollado por **IA-INNOVATION**:

* **Kevin Junior Salazar Marquina:** arquitectura base, recursos compartidos y enrutamiento del frontend inicial.
* **Fernando André Condezo Pacheco:** módulo de inventario del frontend inicial.
* **Darikson Bill Salazar Quiche:** POS y dashboard del frontend inicial.
* **Luis Carlos Chui Kcomt:** módulo de logística del frontend inicial.
* **Carlos Alberto Bernal Torres:** IAM y documentación del frontend inicial.

Las contribuciones históricas y sus fuentes se registran en el informe. Las mejoras posteriores se acreditan con sus commits y revisiones correspondientes.

---
*Desarrollado por el equipo IA-INNOVATION · AI-ToDu · UPC · 2026.*
