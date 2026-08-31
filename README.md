# ContactosApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.22.

## Challenge 02 - Gestor de Contactos

Aplicación desarrollada como parte del **Challenge 02** de la clase de Estructura de Datos y Algoritmos 2. Simula una app de gestión de contactos con carga inicial de datos, permitiendo agregar y eliminar contactos de forma dinámica.

### Requisitos cumplidos

- Muestra un loader al iniciar la aplicación.
- Carga una lista inicial de contactos (simulada con `async/await`).
- Permite agregar contactos con nombre y teléfono.
- Permite eliminar contactos de la lista.
- La aplicación está dividida en componentes.

### Estructura de componentes

```
src/app/
├── loader/          → Muestra el mensaje de carga mientras se simulan los datos
├── contact-list/     → Muestra la lista de contactos y permite eliminarlos
├── contact-form/     → Formulario para agregar un nuevo contacto
├── app.ts            → Componente principal, guarda el estado y la lógica
└── app.html          → Controla cuándo mostrar el loader o la lista
```

### Conceptos de JavaScript aplicados

- `let` / `const`
- Funciones (regulares y arrow)
- Objetos y arreglos
- Métodos de arreglos: `push()`, `filter()`
- Promesas y `async/await` con `try/catch`
- Estructuras selectivas (`if`)

### Conceptos de Angular aplicados

- Componentes standalone
- Comunicación entre componentes con `@Input()`, `@Output()` y `EventEmitter`
- Control de flujo en templates: `@if` / `@else`, `@for`
- Event binding: `(click)`

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Autor

Juan Jose Hinestroza Guasguita - 2240080
