const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            productos: [],
            carrito: [],
            categoriaSeleccionada: "Todas",
            busqueda: ""
        };
    },

    mounted() {
        fetch("productos.json")
            .then(respuesta => respuesta.json())
            .then(datos => {
                this.productos = datos;
                console.log(this.productos);
            })
            .catch(error => {
                console.error("Error al cargar los productos:", error);
            });
    },

    methods: {
        agregarAlCarrito(producto) {
        const productoExistente = this.carrito.find(item => item.id === producto.id);

        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            this.carrito.push({
                ...producto,
                cantidad: 1
            });
        }},

        eliminarDelCarrito(index) {
        const producto = this.carrito[index];

        if (producto.cantidad > 1) {
            producto.cantidad--;
        } else {
            this.carrito.splice(index, 1);
        }},

        vaciarCarrito() {
            this.carrito = [];
        }
    },

    computed: {
        total() {
            return this.carrito.reduce((acumulado, producto) => {
                return acumulado + (producto.precio * producto.cantidad);
            }, 0);
        },

        productosFiltrados() {
         return this.productos.filter(producto => {

        const coincideCategoria =
            this.categoriaSeleccionada === "Todas" ||
            producto.categoria === this.categoriaSeleccionada;

        const coincideBusqueda =
            producto.nombre.toLowerCase().includes(this.busqueda.toLowerCase());

        return coincideCategoria && coincideBusqueda;
    });
}
    }

})


app.component("producto-card", ProductoCard);
app.component("carrito-item", CarritoItem);
app.component("carrito", Carrito);
app.mount("#app");