

function generatePassword(){

  let text = "";
  const possible = "abcdefghijklmnopqrstuvwxyz0123456789";

  for ( let i = 0; i < 15; i++ ) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
      
  return text;
}


export default generatePassword
