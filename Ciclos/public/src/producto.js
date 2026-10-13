class Producto {
    constructor(codigo, nombre, inventario, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.inventario = inventario;
        this.costo = costo;
    }

    info() {
        return "El producto " + this.nombre + " con el código " + this.codigo + ", tiene " + this.inventario + " unidades con el costo de " + this.costo + " pesos.";
    }

    infoHtml() {
        return `
            <div class="producto-info">
                <p><strong>Código:</strong> ${this.codigo}</p>
                <p><strong>Nombre:</strong> ${this.nombre}</p>
                <p><strong>Cantidad:</strong> ${this.inventario}</p>
                <p><strong>Precio:</strong> $${this.costo}</p>
            </div>
            <hr>
        `;
    }
}