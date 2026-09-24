const ProductoCard = {
    props: ["producto"],

    template: `
        <div class="card-individual">
            
            <div class="contenedor-img">
                <span class="categoria-etiqueta" v-text="producto.categoria"></span>
                <img :src="producto.imagen" :alt="producto.nombre" class="img-producto">
            </div>

            <div class="info-producto">
                <h3 class="precio-producto">
                    $<span v-text="producto.precio"></span>
                </h3>
                <h4 class="titulo-producto" v-text="producto.nombre"></h4>
                <p class="descripcion-producto" v-text="producto.descripcion"></p>
               
            </div>

            <button class="btn-agregar" v-on:click="$emit('agregar', producto)">
                Agregar al carrito
            </button>
        </div>
    `
};