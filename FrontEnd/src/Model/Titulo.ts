class Titulo {
    nombre: string;
    esDesplegable: boolean;


    constructor(titulo: Titulo) {
        if (titulo) {
            this.nombre = titulo.nombre;
            this.esDesplegable = titulo.esDesplegable;
        } else {
            this.nombre = "";
            this.esDesplegable = false;
        }
    }

}

export default Titulo;
