# Reto tecnico - coordinadora

Automatización completa para el **Reto Técnico de Coordinadora**, incluyendo:

* Pruebas funcionales de API con **Playwright**
* Implementación del **Screenplay Pattern**
* Escenarios BDD en **Gherkin**
* Pruebas de carga y estrés con **k6**
* Casos de prueba manuales
* Estructura lista para producción y despliegue en GitHub

Este documento describe en detalle el proyecto, las tecnologías utilizadas, la configuración y los pasos necesarios para ejecutar todo el entorno.

---

# 1. Descripción del Proyecto

El objetivo principal del proyecto es automatizar el flujo completo de **creación y consulta de guías con Recaudo Contra Entrega (RCE)** utilizando el API de Coordinadora. El sistema debe validar parámetros obligatorios, límites, rangos permitidos, manejo de errores y eficiencia bajo carga.

El repositorio contiene:

* Implementación de pruebas automáticas
* Scripts de rendimiento
* Modelos de datos
* Escenarios BDD
* Herramientas de integración y validación

La arquitectura está basada en patrones modernos de automatización para garantizar **mantenibilidad**, **escalabilidad** y **claridad del código**.

---

# 2. Tecnologías Utilizadas

### **Backend Testing / API Automation**

* **Playwright** → Motor de automatización
* **Serenity/JS + Screenplay Pattern** → Organización de actores, tareas e interacciones
* **TypeScript** → Lenguaje tipado para robustez

### **Performance Testing**

* **k6** → Pruebas de carga y estrés sobre API

### **Herramientas adicionales**

* **Node.js 18+**
* **npm** o **yarn**
* **Axios** (para obtener token)
* **Git/GitHub**

---

# 📁 3. Estructura del Proyecto

```
coordinadora-automation/
│
├── src/
│   ├── actors/ → Definición de actores del Screenplay
│   ├── interactions/ → Llamadas HTTP y acciones
│   ├── tasks/ → Tareas reutilizables
│   ├── models/ → Modelos JSON y payloads
│   └── utils/ → Utilidades (token, helpers)
│
├── tests/
│   ├── crear-guia.spec.ts
│   ├── validaciones.spec.ts
│   └── consulta.spec.ts
│
├── performance/
│   ├── load-test.js
│   ├── stress-test.js
│   └── utils.js
│
├── playwright.config.ts
└── README.md
```

---

#  4. Instalación

###  **Requisitos previos**

* Node.js 18+
* npm o yarn
* k6 instalado globalmente (`brew install k6` o descargado desde su web)

### **Instalar dependencias del proyecto**

```
npm install
```

---

#  5. Configuración

###  **1. Obtener token de autenticación**

El proyecto usa un archivo utilitario para obtener automáticamente el token desde el servidor de autenticación:

```
src/utils/token.ts
```

No debes configurarlo manualmente a menos que la empresa te dé nuevas credenciales.

###  **2. Configurar URL base**

La configuración de la API ya está integrada dentro del Actor:

```
CallAnApi.at('https://guias-service-test.coordinadora.com')
```

Puedes modificarla si cambia el entorno.

---

# 6. Ejecución de Pruebas Funcionales

### ✔ Ejecutar todas las pruebas

```
npx playwright test
```

### ✔ Ejecutar una prueba específica

```
npx playwright test tests/crear-guia.spec.ts
```

### ✔ Ver reporte en HTML

```
npx playwright show-report
```

---

# 7. Pruebas Manuales Incluidas

El repositorio contiene casos estructurados para validar:

* Creación exitosa de guías
* Campos obligatorios vacíos
* Manejo de caracteres especiales
* Valores límite (1 y 16'000.000)
* Valores fuera de rango
* Consulta de guías existentes/no existentes

Estos se documentan en el entregable del reto.

---

# 8. Escenarios BDD en Gherkin

Los escenarios BDD cubren:

* Flujo principal exitoso
* Errores en validaciones
* Campos vacíos
* Límites y particiones de equivalencia
* Manejo de caracteres inválidos
* Concurrencia
* Consulta de guía

Se encuentran en el documento principal y pueden integrarse a frameworks como Cucumber si se requiere.

---

#  9. Automatización Playwright + Screenplay

El patrón Screenplay divide la automatización en:

###  Actor

Representa al usuario que interactúa con el sistema.

###  Tareas

Ej: **CrearGuia**, **ConsultarGuia**, **ValidarError**.

###  Interacciones

Encapsulan llamadas HTTP.

Esto permite una estructura limpia, escalable y fácil de mantener.

---

#  10. Pruebas de Carga

Ejecutar:

```
k6 run performance/load-test.js
```

Parámetros:

* 20 usuarios simultáneos
* 2 req/seg
* 1 minuto

Resultados esperados:

* p95 < 500ms
* tasa de éxito > 99%

---

# ⚡ 11. Pruebas de Estrés

Ejecutar:

```
k6 run performance/stress-test.js
```

Parámetros:

* 100 → 300 usuarios
* Incremento cada 15s
* Hasta ~6000 solicitudes

Resultados esperados:

* Degradación progresiva
* Identificación del punto de ruptura (~250 usuarios)

---

# 12 . Análisis de Resultados

### *prueba de carga**

* Estable
* p95 dentro del objetivo
* Sin errores significativos

### **Prueba de estrés**

* Aumento progresivo de latencia
* Errores 429 y 500 bajo saturación
* Punto de ruptura identificado

---

#  13. Conclusión

El proyecto demuestra una automatización completa que cubre:

* Funcionalidad del API
* Reglas de negocio
* Calidad de datos
* Estabilidad bajo carga
* Comportamiento ante estrés

La arquitectura basada en Screenplay y la infraestructura de pruebas permiten extender fácilmente nuevos casos, endpoints y pruebas de desempeño.

---


