class CAutores {
    constructor(nombre, apellido, nacionalidad, mejorObra, anoPublicacion, edadPublicacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.mejorObraejorObra = mejorObra;
        this.anoPublicacion = anoPublicacion;
        this.edadPublicacion = edadPublicacion;
    }
}

let autores = [
    new CAutores('Gabriel', 'García Márquez', 'Colombiano', 'Cien años de soledad', 1967, 40),
    new CAutores('Julio', 'Cortázar', 'Argentino', 'Rayuela', 1963, 48),
    new CAutores('Isabel', 'Allende', 'Chilena', 'La casa de los espíritus', 1982, 40),
    new CAutores('Jorge Luis', 'Borges', 'Argentino', 'Ficciones', 1944, 45),
    new CAutores('Clarice', 'Lispector', 'Brasileña', 'La hora de la estrella', 1977, 56),
    new CAutores('Juan', 'Rulfo', 'Mexicano', 'Pedro Páramo', 1955, 38),
    new CAutores('Carlos', 'Fuentes', 'Mexicano', 'La región más transparente', 1958, 29),
    new CAutores('Eduardo', 'Galeano', 'Uruguayo', 'Las venas abiertas de América Latina', 1971, 31)
];

let autoresArgentinos = autores.filter(autor => autor.nacionalidad === 'Argentino');
console.log('Autores Argentinos:', autoresArgentinos);

let autoresPublicacion = autores.filter(autor => autor.anoPublicacion >= 1960 && autor.anoPublicacion <= 1980);
console.log('Autores que publicaron entre 1960 y 1980:', autoresPublicacion);

let promedioEdadPublicacion = autores.reduce((sum, autor) => sum + autor.edadPublicacion, 0) / autores.length;
console.log('Promedio de la edad de publicación:', promedioEdadPublicacion);

console.log('Todos los autores:', autores);
