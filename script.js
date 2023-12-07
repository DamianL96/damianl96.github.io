

    const buttons = document.querySelectorAll('#mostrar-descripcion');
    const descripcion = document.querySelectorAll('#descripcion');
    const elemento= document.querySelectorAll("#elemento");

    buttons.forEach((button, index) => {

      button.addEventListener('click', () => {

        const textElement = descripcion[index];
        const alturaElemento= elemento [index];

        alturaElemento.classList.toggle("altura");
        textElement.classList.toggle('show');
       
        if(textElement.classList.contains("show")){
          button.innerHTML= " Descripcion del Proyecto - ";
        }else{
          button.innerHTML= " Descripcion del Proyecto + ";
        }

      });
    });

