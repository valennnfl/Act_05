const CarritoItem = {
    props: ["producto"],

    template: `
        <div class="item-carrito-card">
            <img :src="producto.imagen" class="item-carrito-img" :alt="producto.nombre">

            <div class="item-carrito-info">
                <h4 v-text="producto.nombre"></h4>
                <p>
                    $<span v-text="producto.precio"></span> 
                    <small class="text-muted" v-if="producto.cantidad > 1">
                        (x{{ producto.cantidad }})
                    </small>
                </p>
            </div>

            <button class="btn-eliminar-item" @click="$emit('eliminar')">
                <i :class="producto.cantidad > 1 ? 'bi bi-dash' : 'bi bi-trash3'"></i>
            </button>
        </div>
    `
};
