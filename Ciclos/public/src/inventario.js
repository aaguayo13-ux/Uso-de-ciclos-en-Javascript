class Inventario {
    constructor() {
        this.array = [];
    }
    
    agregar(producto) {
        for (let i = 0 ; i < this.array.length; i++) {
            if (producto.codigo == this.array[i].codigo) {
                return null;
            } else if (producto.codigo < this.array[i].codigo) {
                this.insertar(producto,i);
                return;
            }
        } this.insertar(producto,this.array.length)
    }
    
    agregarInicio(producto) {
        for(let i = this.array.length; i > 0; i--) {
            this.array[i] = this.array[i-1];
        }
        this.array[0] = producto;
    }
            
    insertar(producto, posicion) {
        for (let i = this.array.length; i > posicion; i--) {
            this.array[i] = this.array[i-1];
        }
        this.array[posicion] = producto;
    }
    
    extraerPrimero() {
        let aux = this.array[0];
        for (let i = 1; i < this.array.length; i++) {
            this.array[i-1] = this.array[i];
        }
        this.array.pop();
        return aux;
    }

    extraerUltimo() {
        let aux = this.array[this.array.length-1];
        this.array.pop();
        return aux;
    }
    
    listar() {
        let datos = "";
        for(let i = 1; i <= this.array.length; i++) {
            datos += this.array[i-1].info() + "\n";
        }
        return datos;
    }
    
    eliminar(codigo) {
        let aEliminar = this.buscar(codigo);

        if (aEliminar == null) {
            return null;
        } 

        for (let i = aEliminar; i < this.array.length -1; i++) {
            this.array[i] = this.array[i+1];
        }
        this.array.pop();
    }
    
    buscar(codigo) {
        let linf = 0;
        let lsup = this.array.length-1;
        let lmed;
        while(linf <= lsup) {
            lmed = Math.floor((linf + lsup) / 2);
            if (codigo == this.array[lmed].codigo) {
                return this.array[lmed];
            } else if (codigo < this.array[lmed].codigo) {
                lsup = lmed - 1;
            } else {
                linf = lmed + 1;
            }
        }
        return null;
    }

    listarHTML() {
        let datos = "";
        for(let i = 0; i < this.array.length; i++) {
            datos += this.array[i].infoHtml(); 
        }
        return datos;
    }

    listarInversoHTML() {
        let datos = "";
        for(let i = this.array.length - 1; i >= 0; i--) {
            datos += this.array[i].infoHtml();
        }
        return datos;
    }
}