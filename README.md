[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-DanielGlezDeChavesGonzalez/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-DanielGlezDeChavesGonzalez?branch=main) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-DanielGlezDeChavesGonzalez&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-DanielGlezDeChavesGonzalez)

# Informe practica 09  - DSI FunkoApp

## Descripción

En esta práctica se ha desarrollado una Api que permita almacenar informacion con NodeJS, chai y yarg para la gestión de una base de datos de Funko. La información se almacena en un sistema de carpetas y ficheros en formato JSON.

## Implementación

Para la implementación de la práctica se han creado dos clases principales, la clase Funko y la clase FunkoApp. La clase Funko se encarga de almacenar la información de cada Funko, y la clase FunkoApp se encarga de gestionar la información de los Funko.

### Clase Funko

```typescript
export class Funko {
  id: number;
  name: string;
  description: string;
  Tipo: Tipos;
  Genero: Genero;
  Franquicia: string;
  Numero_franquicia: number;
  Exclusivo: boolean;
  Caracteristicas_especiales: string;
  Precio: number;

  /**
   * constructor de la clase Funko
   * @param id id del funko
   * @param name nombre del funko
   * @param description descripcion del funko
   * @param Tipo tipo del funko
   * @param Genero genero del funko
   * @param Franquicia franquicia del funko
   * @param Numero_franquicia numero de la franquicia del funko
   * @param Exclusivo exclusivo del funko
   * @param Caracteristicas_especiales caracteristicas especiales del funko
   * @param Precio precio del funko
   */
  constructor(
    id: number,
    name: string,
    description: string,
    Tipo: Tipos,
    Genero: Genero,
    Franquicia: string,
    Numero_franquicia: number,
    Exclusivo: boolean,
    Caracteristicas_especiales: string,
    Precio: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.Tipo = Tipo;
    this.Genero = Genero;
    this.Franquicia = Franquicia;
    this.Numero_franquicia = Numero_franquicia;
    this.Exclusivo = Exclusivo;
    this.Caracteristicas_especiales = Caracteristicas_especiales;
    this.Precio = Precio;
  }
}
```

La clase Funko se encarga de almacenar la información de cada Funko, para ello se han creado los atributos de la clase, que son los mismos que se han pedido en la práctica. Además se ha creado un constructor para la clase.

### Enumerados de tipo y genero para usar en la clase Funko

```typescript
export enum Tipos {
  Pop = "Pop",
  Pop_Rides = "Pop_Rides",
  Vynil_Soda = "Vynil_Soda",
  Vynil_Gold = "Vynil_Gold",
  Dorbz = "Dorbz",
  Chrome = "Chrome",
  Pocket_Pops = "Pocket_Pops",
  Mystery_Mini = "Mystery_Mini",
  Pint_Size_Heroes = "Pint_Size_Heroes",
  Error = "Error",
}

export enum Genero {
  Animacion = "Animacion",
  Peliculas_y_Tv = "Peliculas_y_Tv",
  Videojuegos = "Videojuegos",
  Comics = "Comics",
  Deportes = "Deportes",
  Musica = "Musica",
  Anime = "Anime",
  Error = "Error",
}
```

Para la clase Funko se han creado dos enumerados, uno para el tipo de Funko y otro para el genero del Funko, para que se puedan usar en la clase Funko.

```typescript
export function asignarTipo(tipo: string): Tipos {
  switch (tipo) {
    case "Pop":
      return Tipos.Pop;
    case "Pop_Rides":
      return Tipos.Pop_Rides;
    case "Vynil_Soda":
      return Tipos.Vynil_Soda;
    case "Vynil_Gold":
      return Tipos.Vynil_Gold;
    case "Dorbz":
      return Tipos.Dorbz;
    case "Chrome":
      return Tipos.Chrome;
    case "Pocket_Pops":
      return Tipos.Pocket_Pops;
    case "Mystery_Mini":
      return Tipos.Mystery_Mini;
    case "Pint_Size_Heroes":
      return Tipos.Pint_Size_Heroes;
    default:
      return Tipos.Error;
  }
}

export function asignarGenero(genero: string): Genero {
  switch (genero) {
    case "Animacion":
      return Genero.Animacion;
    case "Peliculas_y_Tv":
      return Genero.Peliculas_y_Tv;
    case "Videojuegos":
      return Genero.Videojuegos;
    case "Comics":
      return Genero.Comics;
    case "Deportes":
      return Genero.Deportes;
    case "Musica":
      return Genero.Musica;
    case "Anime":
      return Genero.Anime;
    default:
      return Genero.Error;
  }
}
```

Para poder usar los enumerados en la clase Funko se han creado dos funciones, una para asignar el tipo de Funko y otra para asignar el genero del Funko.


### Clase FunkoApp

```typescript
export class App {
  private Usuario: string;
  private Funkos: Map<number, Funko> = new Map<number, Funko>();

  constructor(user: string) {
    this.Usuario = user;
  }
}
```

La clase FunkoApp se encarga de gestionar la información de los Funko, para ello se ha creado un atributo de tipo Map, que es el que se encarga de almacenar la información de los Funko. Además se ha creado un constructor para la clase.

### Funciones de la clase FunkoApp

#### cargarDatos

```typescript
/**
   * funcion para cargar los datos de un usuario
   * @param user nombre del usuario
   * @returns devuelve true si se ha cargado correctamente
   */
  public cargarDatos(user: string): boolean {
    const carpeta: string = "./data/" + user + "/";
    if (!fs.existsSync(carpeta)) {
      fs.mkdirSync("./data/" + user);
    }
    const archivos = fs.readdirSync(carpeta);

    if (archivos.length == 0) {
      return false;
    } else {
      archivos.forEach((archivo) => {
        const ruta: string = path.join(carpeta, archivo);
        const funko: Funko = JSON.parse(fs.readFileSync(ruta, "utf-8"));
        this.Funkos.set(funko.id, funko);
      });
    }
    return true;
  }
```

La función cargarDatos se encarga de cargar los datos de un usuario, para ello se le pasa por parámetro el nombre del usuario, y se comprueba si existe la carpeta del usuario, si no existe se crea. Después se leen los archivos de la carpeta del usuario, y se comprueba si la carpeta está vacía, si está vacía se devuelve false, si no está vacía se recorren los archivos y se almacenan en el Map de la clase.

#### guardarDatos

```typescript
/**
   * funcion para guardar los datos de un usuario
   * @returns devuelve true si se ha guardado correctamente
   */
  public guardarDatos(): boolean {
    this.Funkos.forEach((funko) => {
      if (!fs.existsSync("./data/" + this.Usuario + "/" + funko.id + ".json")) {
        fs.writeFileSync(
          "./data/" + this.Usuario + "/" + funko.id + ".json",
          JSON.stringify(funko)
        );
      }
    });
    return true;
  }

```

La función guardarDatos se encarga de guardar los datos de un usuario, para ello se recorren los Funko del Map de la clase, y se comprueba si existe el archivo del Funko, si no existe se crea.

#### getFunko

```typescript
  /**
   * funcion para obtener un funko
   * @param id id del funko
   * @returns devuelve el funko con el id indicado
   */
  public getFunko(id: number): Funko | undefined {
    return this.Funkos.get(id);
  }
```

La función getFunko se encarga de obtener un Funko, para ello se le pasa por parámetro el id del Funko, y se devuelve el Funko con el id indicado.

#### addFunko

```typescript
/**
   * funcion para añadir un funko
   * @param user usuario
   * @param id id del funko
   * @param name nombre del funko
   * @param description descripcion del funko
   * @param Tipo tipo del funko
   * @param Genero genero del funko
   * @param Franquicia franquicia del funko
   * @param Numero_franquicia numero de la franquicia del funko
   * @param Exclusivo exclusivo del funko
   * @param Caracteristicas_especiales caracteristicas especiales del funko
   * @param Precio precio del funko
   * @returns devuelve true si se ha añadido correctamente
   */
  public addFunko(
    user: string,
    id: number,
    name: string,
    description: string,
    Tipo: Tipos,
    Genero: Genero,
    Franquicia: string,
    Numero_franquicia: number,
    Exclusivo: boolean,
    Caracteristicas_especiales: string,
    Precio: number
  ): boolean {
    if (!this.Funkos.has(id)) {
      const funko = new Funko(
        id,
        name,
        description,
        Tipo,
        Genero,
        Franquicia,
        Numero_franquicia,
        Exclusivo,
        Caracteristicas_especiales,
        Precio
      );
      const ruta: string = "./data/" + user + "/" + id + ".json";
      fs.writeFileSync(ruta, JSON.stringify(funko));
      return true;
    } else {
      return false;
    }
  }
```

La función addFunko se encarga de añadir un Funko, para ello se le pasan por parámetro todos los atributos del Funko, y se comprueba si el id del Funko ya existe, si no existe se crea el Funko, se crea el archivo del Funko, y se devuelve true, si el id del Funko ya existe se devuelve false.

#### modifyFunko

```typescript
/**
   * funcion para modificar un funko
   * @param id id del funko
   * @param name nombre del funko
   * @param description descripcion del funko
   * @param Tipo tipo del funko
   * @param Genero genero del funko
   * @param Franquicia franquicia del funko
   * @param Numero_franquicia numero de la franquicia del funko
   * @param Exclusivo exclusivo del funko
   * @param Caracteristicas_especiales caracteristicas especiales del funko
   * @param Precio precio del funko
   * @returns devuelve true si se ha modificado correctamente
   */
  public modifyFunko(
    id: number,
    name: string,
    description: string,
    Tipo: Tipos,
    Genero: Genero,
    Franquicia: string,
    Numero_franquicia: number,
    Exclusivo: boolean,
    Caracteristicas_especiales: string,
    Precio: number
  ): boolean {
    if (this.Funkos.has(id)) {
      const funko = new Funko(
        id,
        name,
        description,
        Tipo,
        Genero,
        Franquicia,
        Numero_franquicia,
        Exclusivo,
        Caracteristicas_especiales,
        Precio
      );
      const ruta: string = "./data/" + this.Usuario + "/" + id + ".json";
      fs.writeFileSync(ruta, JSON.stringify(funko));
      return true;
    } else {
      return false;
    }
  }
```

La función modifyFunko se encarga de modificar un Funko, para ello se le pasan por parámetro todos los atributos del Funko, y se comprueba si el id del Funko existe, si existe se crea el Funko, se crea el archivo del Funko, y se devuelve true, si el id del Funko no existe se devuelve false.

#### removeFunko

```typescript
/**
   * funcion para eliminar un funko
   * @param id id del funko
   * @returns devuelve true si se ha eliminado correctamente
   */
  public removeFunko(id: number): boolean {
    if (this.Funkos.has(id)) {
      fs.unlinkSync("./data/" + this.Usuario + "/" + id + ".json");
      this.Funkos.delete(id);
      return true;
    }
    return false;
  }
```

La función removeFunko se encarga de eliminar un Funko, para ello se le pasa por parámetro el id del Funko, y se comprueba si el id del Funko existe, si existe se elimina el archivo del Funko, y se elimina el Funko del Map de la clase, y se devuelve true, si el id del Funko no existe se devuelve false.

#### listFunkos

```typescript
/**
   * funcion para listar los funkos
   * @returns devuelve true si se ha listado correctamente
   */
  public listFunkos(): boolean {
    console.log(chalk.green("Funkos de " + this.Usuario));
    console.log(chalk.green("------------------"));
    this.Funkos.forEach((funko) => {
      let color = chalk.green;
      if (funko.Precio <= 100) {
        color = chalk.green;
      } else if (funko.Precio > 100 && funko.Precio <= 200) {
        color = chalk.yellow;
      } else if (funko.Precio > 200 && funko.Precio <= 500) {
        color = chalk.red;
      } else {
        color = chalk.blue;
      }
      console.log(color("ID: " + funko.id));
      console.log(color("Nombre: " + funko.name));
      console.log(color("Descripcion: " + funko.description));
      console.log(color("Tipo: " + funko.Tipo));
      console.log(color("Genero: " + funko.Genero));
      console.log(color("Franquicia: " + funko.Franquicia));
      console.log(color("Numero de franquicia: " + funko.Numero_franquicia));
      console.log(color("Exclusivo: " + funko.Exclusivo));
      console.log(
        color("Caracteristicas especiales: " + funko.Caracteristicas_especiales)
      );
      console.log(color("Precio: " + funko.Precio));
      console.log(color("------------------"));
    });
    return true;
  }
```

La función listFunkos se encarga de listar los Funkos, para ello se recorre el Map de la clase, y se muestran por pantalla todos los atributos del Funko, y se devuelve true.

#### showFunkoById

```typescript
/**
   * funcion para mostrar un funko por su id
   * @param id id del funko
   * @returns devuelve true si se ha mostrado correctamente
   */
  public showFunkoById(id: number): boolean {
    if (this.Funkos.has(id)) {
      const funko = this.Funkos.get(id);
      if (funko !== undefined) {
        console.log(chalk.gray("ID: " + funko.id));
        console.log(chalk.gray("Nombre: " + funko.name));
        console.log(chalk.gray("Descripcion: " + funko.description));
        console.log(chalk.gray("Tipo: " + funko.Tipo));
        console.log(chalk.gray("Genero: " + funko.Genero));
        console.log(chalk.gray("Franquicia: " + funko.Franquicia));
        console.log(
          chalk.gray("Numero de franquicia: " + funko.Numero_franquicia)
        );
        console.log(chalk.gray("Exclusivo: " + funko.Exclusivo));
        console.log(
          chalk.gray(
            "Caracteristicas especiales: " + funko.Caracteristicas_especiales
          )
        );
        console.log(chalk.gray("Precio: " + funko.Precio));
        console.log(chalk.gray("------------------"));
        return true;
      }
    }
    return false;
  }
```

La función showFunkoById se encarga de mostrar un Funko, para ello se le pasa por parámetro el id del Funko, y se comprueba si el id del Funko existe, si existe se muestra por pantalla todos los atributos del Funko, y se devuelve true, si el id del Funko no existe se devuelve false.

## index.ts

En el fichero index.ts se encuentra el código principal de la aplicación, en el se crea un objeto de la clase yargs, y se le pasan por parámetro los argumentos de la línea de comandos, y se le añaden los comandos de la aplicación, y se le añade el comando help, que muestra por pantalla la ayuda de la aplicación.

### Comando add


```typescript
yargs(hideBin(process.argv))
  .command(
    "add",
    "Adds a funko",
    {
      user: {
        description: "User name",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
      nombre: {
        description: "Funko name",
        type: "string",
        demandOption: true,
      },
      desc: {
        description: "Funko description",
        type: "string",
        demandOption: true,
      },
      tipo: {
        description: "Funko type",
        type: "string",
        demandOption: true,
      },
      genero: {
        description: "Genere of the funko",
        type: "string",
        demandOption: true,
      },
      franq: {
        description: "Funko franchise",
        type: "string",
        demandOption: true,
      },
      num_f: {
        description: "Funko franchise number",
        type: "number",
        demandOption: true,
      },
      exclusivo: {
        description: "Funko exclusive",
        type: "boolean",
        demandOption: true,
      },
      car_e: {
        description: "Funko special features",
        type: "string",
        demandOption: true,
      },
      precio: {
        description: "Funko price",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      const app = new App(argv.user);
      app.cargarDatos(argv.user);
      let tipo: Tipos;
      let genero: Genero;
      tipo = asignarTipo(argv.tipo);
      genero = asignarGenero(argv.genero);
      if (tipo === Tipos.Error || genero === Genero.Error) {
        console.log(chalk.red("Tipo o genero invalido"));
        return;
      }
      let added = app.addFunko(
        argv.user,
        argv.id,
        argv.nombre,
        argv.desc,
        tipo,
        genero,
        argv.franq,
        argv.num_f,
        argv.exclusivo,
        argv.car_e,
        argv.precio
      );
      app.guardarDatos();
      if (added) {
        console.log(
          chalk.green(
            "Funko added successfully to " + argv.user + " collection"
          )
        );
      } else {
        console.log(
          chalk.red("Funko already exists in " + argv.user + " collection")
        );
      }
    }
  )
  .help().argv;
```

En el index.ts se crea un comando para añadir un Funko, para ello se le pasa por parámetro el nombre del usuario, el id del Funko, el nombre del Funko, la descripción del Funko, el tipo del Funko, el género del Funko, la franquicia del Funko, el número de la franquicia del Funko, si es exclusivo o no, las características especiales del Funko, y el precio del Funko. Se crea una instancia de la clase App, y se cargan los datos del usuario, se comprueba si el tipo y el género son correctos, si lo son se añade el Funko, y se guardan los datos, si no lo son se muestra un mensaje de error por pantalla.

### Comando list

```typescript
yargs(hideBin(process.argv))
  .command(
    "list",
    "Shows all the funkos of a user",
    {
      user: {
        description: "User name",
        type: "string",
        demandOption: true,
      },
    },
    (argv) => {
      const app = new App(argv.user);
      app.cargarDatos(argv.user);
      app.listFunkos();
    }
  )
  .help().argv;
```

En el index.ts se crea un comando para listar todos los Funkos de un usuario, para ello se le pasa por parámetro el nombre del usuario, se crea una instancia de la clase App, y se cargan los datos del usuario, y se listan los Funkos.

### Comando update

```typescript
yargs(hideBin(process.argv))
  .command(
    "update",
    "Updates a funko",
    {
      user: {
        description: "User name",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
      nombre: {
        description: "Funko name",
        type: "string",
        demandOption: true,
      },
      desc: {
        description: "Funko description",
        type: "string",
        demandOption: true,
      },
      tipo: {
        description: "Funko type",
        type: "string",
        demandOption: true,
      },
      genero: {
        description: "Genere of the funko",
        type: "string",
        demandOption: true,
      },
      franq: {
        description: "Funko franchise",
        type: "string",
        demandOption: true,
      },
      num_f: {
        description: "Funko franchise number",
        type: "number",
        demandOption: true,
      },
      exclusivo: {
        description: "Funko exclusive",
        type: "boolean",
        demandOption: true,
      },
      car_e: {
        description: "Funko special features",
        type: "string",
        demandOption: true,
      },
      precio: {
        description: "Funko price",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      const app = new App(argv.user);
      app.cargarDatos(argv.user);
      let tipo: Tipos;
      let genero: Genero;
      tipo = asignarTipo(argv.tipo);
      genero = asignarGenero(argv.genero);
      if (tipo === Tipos.Error || genero === Genero.Error) {
        console.log(chalk.red("Tipo o genero invalido"));
        return;
      }
      let modified = app.modifyFunko(
        argv.id,
        argv.nombre,
        argv.desc,
        tipo,
        genero,
        argv.franq,
        argv.num_f,
        argv.exclusivo,
        argv.car_e,
        argv.precio
      );
      app.guardarDatos();
      if (modified) {
        console.log(
          chalk.green(
            "Funko modified successfully in " + argv.user + " collection"
          )
        );
      } else {
        console.log(
          chalk.red("Funko doesn't exist in " + argv.user + " collection")
        );
      }
    }
  )
  .help().argv;
```

En el index.ts se crea un comando para modificar un Funko, para ello se le pasa por parámetro el nombre del usuario, el id del Funko, el nombre del Funko, la descripción del Funko, el tipo del Funko, el género del Funko, la franquicia del Funko, el número de la franquicia del Funko, si es exclusivo o no, las características especiales del Funko, y el precio del Funko. Se crea una instancia de la clase App, y se cargan los datos del usuario, se comprueba si el tipo y el género son correctos, si lo son se modifica el Funko, y se guardan los datos, si no lo son se muestra un mensaje de error por pantalla.

### Comando remove

```typescript
yargs(hideBin(process.argv))
  .command(
    "read",
    "Shows a funko given an ID",
    {
      user: {
        description: "User name",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      const app = new App(argv.user);
      app.cargarDatos(argv.user);
      let readed = app.showFunkoById(argv.id);
      if (!readed) {
        console.log(chalk.red("Funko not found"));
      }
    }
  )
  .help().argv;
```

En el index.ts se crea un comando para mostrar un Funko dado un id, para ello se le pasa por parámetro el nombre del usuario, y el id del Funko, se crea una instancia de la clase App, y se cargan los datos del usuario, y se muestra el Funko, si no se encuentra el Funko se muestra un mensaje de error por pantalla.

### Comando remove

```typescript
yargs(hideBin(process.argv))
  .command(
    "remove",
    "Removes a funko given an ID",
    {
      user: {
        description: "User name",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      const app = new App(argv.user);
      app.cargarDatos(argv.user);
      let removed = app.removeFunko(argv.id);
      app.guardarDatos();
      if (removed) {
        console.log(
          chalk.green(
            "Funko removed successfully from " + argv.user + " collection"
          )
        );
      } else {
        console.log(
          chalk.red("Funko doesn't exist in " + argv.user + " collection")
        );
      }
    }
  )
  .help().argv;
```

En el index.ts se crea un comando para eliminar un Funko dado un id, para ello se le pasa por parámetro el nombre del usuario, y el id del Funko, se crea una instancia de la clase App, y se cargan los datos del usuario, y se elimina el Funko, si no se encuentra el Funko se muestra un mensaje de error por pantalla, y se guardan los datos.

## Conclusiones

En este proyecto se ha podido ver como se puede crear una aplicación de consola con Node.js, y como se puede utilizar la librería yargs para crear comandos para la aplicación. También se ha podido ver como se puede utilizar la librería chalk para dar color a los mensajes de la aplicación. Se ha podido ver como se puede utilizar la librería fs para leer y escribir archivos. 


