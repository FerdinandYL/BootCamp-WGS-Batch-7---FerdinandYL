export default function bodyElement(){
    const currentPage = window.location.href;
    let element;
    if(currentPage === 'http://localhost:3000/about'){
      element = <h1>This is about</h1>;
    } else if (currentPage === 'http://localhost:3000/contacts'){
      element = <h1>This is contacts</h1>;
    } else {
      element = <h1>This is home</h1>;
    }
    console.log(currentPage);
    return(element);
  }