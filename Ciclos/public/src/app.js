const inv = new Inventario();

const btnAdd = document.getElementById("btnAdd");
const btnEliminar = document.getElementById("btnEliminar");
const btnBuscar = document.getElementById("btnBuscar");
const btnListar = document.getElementById("btnListar");
const btnListarInv = document.getElementById("btnListarInv");

const detalles = document.getElementById("detalles");

btnAdd.addEventListener("click", () => {
    console.log("El botón Agregar fue clickeado")
    let codigo = Number(document.getElementById("txtCod").value);
    let nombre = document.getElementById("txtNom").value;
    let precio = Number(document.getElementById("txtPrecio").value);
    let cantidad = Number(document.getElementById("txtCant").value);
    let nuevo = new Producto(codigo, nombre, cantidad, precio);
    let resultado = inv.agregar(nuevo);
    if (resultado === null) {
        detalles.innerHTML = `<p>El producto ${nombre} tiene código repetido, no se pudo agregar.</p>`;
    } else detalles.innerHTML = `<p>El producto ${nombre} se agregó correctamente.</p>`;
});

btnEliminar.addEventListener("click", () => {
    let codigo = Number(document.getElementById("txtCod").value);
    let eliminado = inv.buscar(codigo);
    inv.eliminar(codigo)

    if (eliminado) {
        detalles.innerHTML = "<h4>Producto Eliminado:</h4>" + eliminado.infoHtml();
    } else {
        detalles.innerHTML = `<p>El producto con código ${codigo} no existe.</p>`
    }
})

btnBuscar.addEventListener("click", () => {
    let codigo = Number(document.getElementById("txtCod").value);
    let encontrado = inv.buscar(codigo);
    
    if (encontrado) {
        detalles.innerHTML = "<h4>Producto Encontrado:</h4>" + encontrado.infoHtml();
    } else {
        detalles.innerHTML = `<p>El producto con código ${codigo} no existe.</p>`;
    }
});

btnListar.addEventListener("click", () => {
    let resultado = inv.listarHTML();
    
    if (resultado === "") {
        detalles.innerHTML = "<p>El inventario está vacío.</p>";
    } else {
        detalles.innerHTML = "<h4>Lista de Productos:</h4>" + resultado;
    }
});

btnListarInv.addEventListener("click", () => {
    let resultado = inv.listarInversoHTML();
    
    if (resultado === "") {
        detalles.innerHTML = "<p>El inventario está vacío.</p>";
    } else {
        detalles.innerHTML = "<h4>Lista de Productos (Orden Inverso):</h4>" + resultado;
    }
});