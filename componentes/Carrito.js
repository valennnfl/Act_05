const Carrito = {
    props: ["carrito", "total"],

    template: ` 
        <!-- Si hay productos en el carrito, se muestra la lista y el resumen -->
        <div v-if="carrito.length > 0">
            <carrito-item
                v-for="(producto, index) in carrito"
                :key="producto.id"
                :producto="producto"
                @eliminar="$emit('eliminar', index)"
            ></carrito-item>

            <!-- Sección final con el Total y los botones de acción -->
            <div class="carrito-footer-lune">
                <div class="carrito-total-contenedor">
                    <span>Total estimado:</span>
                    <span class="carrito-total-precio">
                        $<span v-text="total"></span>
                    </span>
                </div>

                <div class="carrito-botones-grupo">
                    <button class="btn-vaciar-carrito" @click="$emit('vaciar')">
                        Vaciar
                    </button>
                </div>
            </div>
        </div>

        <!-- Mensaje estético por si no agregaron nada todavía -->
        <div v-else class="carrito-vacio-mensaje">
            <i class="bi bi-bag-heart"></i>
            <p>Tu carrito de Luné está vacío.<br>¡Explorá nuestros productos!</p>
        </div>
    `
};