# 🚀 AI-ToDu - Landing Page B2B

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

**AI-ToDu** conecta inventario, ventas y despachos de pequeños negocios. Este repositorio contiene su **Landing Page**: presenta la propuesta de valor, explica el recorrido operativo y permite continuar hacia la demostración del producto.

### 🌍 [Ver Demo en Vivo (GitHub Pages)](https://ai-todu.github.io/ai-todu-platform/)

> **Nota para evaluación:** sitio académico responsive y bilingüe, con inglés predeterminado y español latinoamericano. AV2 conecta la aplicación a [Java/Spring Boot y PostgreSQL](https://github.com/AI-ToDu/ai-todu-api); esta landing conserva su naturaleza estática. La vista del hero está identificada como ilustrativa y no acredita capacidades productivas de IA, pago o emisión fiscal.

---

## 🏗️ Arquitectura del Proyecto

La landing utiliza **HTML, CSS y JavaScript**, sin paquetes de ejecución. Actúa como capa de presentación y dirige a la aplicación Angular, donde se encuentran los flujos de negocio.

* **Propuesta y funcionalidades:** explicación del problema y del alcance de la demo.
* **Recorrido operativo:** recepción, inventario, venta y entrega.
* **Segmentos y equipo:** presentación del público objetivo y de IA-INNOVATION.
* **CTA:** acceso al servidor de la webapp, conservando idioma. El rol procede de la cuenta autenticada.
* **Contacto y recursos:** canal real del proyecto en GitHub y términos/privacidad académicos.

En desarrollo local el enlace puede sugerir un perfil de demostración. En la publicación pública usa el modo servidor y los permisos reales de la cuenta.

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
   git clone --branch develop https://github.com/AI-ToDu/ai-todu-platform.git
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

En hosting público, el CTA apunta a la URL del workspace en Pages. La rama predeterminada histórica de la landing es `develop`, publicada mediante GitHub Actions y versionada como `v1.1.0`. Las correcciones se revisan en ramas `fix/...`.

## ✅ Verificación y Alcance

Revisar escritorio/móvil, ambos idiomas, menú, foco, Escape, destino del CTA y términos. El sitio no incorpora analytics, testimonios ficticios ni checkout de suscripción.

Siguen pendientes un formulario B2B con persistencia, testimonios auténticos y evidencias audiovisuales del producto/exposición. El contacto actual utiliza el canal público del proyecto en GitHub.

---

La documentación de servicios del backend está en [Swagger UI](https://ai-todu-api-av2.onrender.com/swagger-ui.html) y en el informe. El servidor implementa el Transactional Outbox Pattern; la landing enlaza ese producto y no consume ni publica eventos de dominio.

## 🔗 Ecosistema del Proyecto

* **[Backend REST](https://github.com/AI-ToDu/ai-todu-api):** Java, PostgreSQL, OpenAPI y Outbox.

* **[Landing Page](https://github.com/AI-ToDu/ai-todu-platform/tree/develop):** presentación del producto y acceso a la demo.
* **[Frontend](https://github.com/AI-ToDu/ai-todu-webapp/tree/main):** espacio de trabajo Angular.
* **[Fake REST API](https://github.com/AI-ToDu/ai-todu-fake-api/tree/main):** motor canónico de demostración y contrato OpenAPI.
* **[Informe](https://github.com/AI-ToDu/ai-todu-report/tree/main):** requisitos, arquitectura, diseño de datos y evidencias.

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
