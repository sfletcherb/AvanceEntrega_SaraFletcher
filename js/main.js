

let buscador = () => {

    let buscar = listaOferta.filter((medicamento) => medicamento.producto?.indexOf(input.value) !== -1)
    tresMejores(buscar);
}



let tresMejores = (buscar) => {

    let top3 = buscar.sort((a, b) => { return a.precio - b.precio; }).slice(0, 3);
    localStorage.setItem('principales', JSON.stringify(top3));
    impresionResultados(top3);

};



let impresionResultados = (top3) => {

    div.innerHTML = ``

    top3.forEach((element) => {

        div2.innerHTML = `<div class = "formatoCard">${element.producto}</div>`
        div1.innerHTML = `<img src = '${element.imagen} ' />`;


        div.innerHTML += `<div class= "row">

        <div>
        <table class="table table__formato"">
                <tr>
                    <td >${element.store}</td>
                    <td >${element.precio}</td>
                    <td >${element.inventario}</td>
                </tr>
                
            </table>
        </div>`;


    });


};


let opcion = JSON.parse(localStorage.getItem("principales"))
const hoy = new Date();

let respuesta1 = () => {

    let pedido = opcion[0]?.domicilio === "" ? opcion[0].precio : opcion[0].precio + opcion[0].domicilio;

    div3.innerHTML =

        `
        <div>
        <p class="text-end">Fecha: ${hoy.getMonth() + 1}/${hoy.getDate()}/${hoy.getFullYear()} </p>
        <p>Has seleccionado la mejor opción de precio disponible de tu producto. El detalle de tu pedido es:</p>
    
        Tienda: ${opcion[0].store} <br/>
        Precio: ${opcion[0].precio}<br/>
        stock: ${opcion[0]?.inventario || 'Sin stock'}<br/>
        Domicilio: ${opcion[0]?.domicilio || 'Sin costo'}<br/>

        <b>Total pedido: ${pedido};</b><br/><br/>
        
        Gracias por preferirnos!
        </div>`


};

let respuesta2 = () => {

    let pedido = opcion[1]?.domicilio === "" ? opcion[1].precio : opcion[1].precio + opcion[1].domicilio;

    div3.innerHTML =

        `
        <div>
        <p class="text-end">Fecha: ${hoy.getMonth() + 1}/${hoy.getDate()}/${hoy.getFullYear()} </p>
        <p>Has seleccionado la 2da mejor opción de precio disponible de tu producto. El detalle de tu pedido es:</p>
    
        Tienda: ${opcion[1].store} <br/>
        Precio: ${opcion[1].precio}<br/>
        stock: ${opcion[1]?.inventario || 'Sin stock'}<br/>
        Domicilio: ${opcion[1]?.domicilio || 'Sin costo'}<br/>

        <b>Total pedido: ${pedido};</b><br/><br/>
        
        Gracias por preferirnos!
        </div>`


};

let respuesta3 = () => {

    let pedido = opcion[2]?.domicilio === "" ? opcion[2].precio : opcion[2].precio + opcion[2].domicilio;

    div3.innerHTML =

        `
        <div>
        <p class="text-end">Fecha: ${hoy.getMonth() + 1}/${hoy.getDate()}/${hoy.getFullYear()} </p>
        <p>Has seleccionado la 3ra mejor opción de precio disponible de tu producto. El detalle de tu pedido es:</p>
    
        Tienda: ${opcion[2].store} <br/>
        Precio: ${opcion[2].precio}<br/>
        stock: ${opcion[2]?.inventario || 'Sin stock'}<br/>
        Domicilio: ${opcion[2]?.domicilio || 'Sin costo'}<br/>

        <b>Total pedido: ${pedido};</b><br/><br/>
        
        Gracias por preferirnos!
        </div>`


};


let domicilio = () => {

    Swal.fire({
        title: 'Metodo de pago',
        text: 'Selecciona la opción de pago más cómoda para ti:',
        confirmButtonText: 'Efectivo Contra entrega',
        cancelButtonText: 'Transferencia',
        showCancelButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                text: 'Has confirmado que tu pago será en efectivo.'
                
            })
            
        } else {
            Swal.fire({
                icon: 'info',
                text: 'En un momento serás redireccionado al botón de pago PSE'
                
            })
        }

    })

    
    
};

