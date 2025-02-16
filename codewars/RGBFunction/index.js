// RGB To Hex Conversion
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// Example (input --> output): 255, 255, 255 --> "FFFFFF"

function rgb(r, g, b) {
  
    limit = n => Math.max(0, Math.min(255, n))
    
    return [limit(r), limit(g), limit(b)]
      .map(n => ("00" + n.toString(16)).slice(-2).toUpperCase()).join('')
      return rgb;
}

module.exports = rgb;

// or
// function rgb(r, g, b) {
  
//     limit = n => Math.max(0, Math.min(255, n))
    
//     return [limit(r), limit(g), limit(b)]
//       .map(n => n.toString(16).padStart(2, '0').toUpperCase()).join('')
//       return rgb;
// padStart - preencher uma string com caracteres adicionais à esquerda até chegar a um certo tamanho .
// }