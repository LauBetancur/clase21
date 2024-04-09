const render = () => {
    const persona = {
        nombre: "laura",
        edad: 19,
        espayordeedad: true,
    }
    console.log(persona);
    console.log(persona.nombre); console.log(persona.edad); console.log(persona.espayordeedad);

    persona.edad = 20;
    console.log(persona);

    persona.nombreMascota = "toby";
    console.log(persona);

    const persona2 = {
        edad: 10,
        espayordeedad: false,
        nombre: "ana",
        nombreMascota: "lola",
    }
    console.log(persona2);

    const familia = [persona,
        persona2,
        { nombre: "papa", 
        edad: 40,
         espayordeedad: true, 
         nombreMascota="julio" }
    ];
    console.log(familia);

    for(const intem of familia){
        console.log(integrante.nombre);
        console.log(integrante);
    };  


    document.addEventListener("DOMContentLoaded", render); //ejecuta la función render al cargar la página carga al final js

//porque puedo modificar la propiedades de un objeto  const *persona* es la cajita , no puedo cambiar la cajita pero si lo que hay dentro de ella 