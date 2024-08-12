//alert ("Hola mundo! <3");

let app = document.getElementById('app');
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()

typewriter
  .pauseFor(2500)
  .typeString('Joseline Romano')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Frontend JR')
  .pauseFor(1000)
  .start();


  let frase = document.getElementById('frase');
  let typewriterFrase = new Typewriter(frase, {
    loop: true,
    delay: 75,
  });
  
  typewriterFrase
    .pauseFor(2500)
    .typeString('La idea no es vivir para siempre: la idea es crear algo que sí lo haga')
    .pauseFor(300)
    .deleteAll()
    .typeString('Andy Warhol')
    .pauseFor(1000)
    .start();