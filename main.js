const app = new Vue ({
    el : '#app',
    data : {
        titulo : 'Fruteria mucha fruta',
        subtitulo: 'las frutas más frescas del mercado',
        frutas: [
            { nombre: 'bananas', cantidad:10 },
            { nombre: 'frutillas', cantidad:20 },
            { nombre: 'sandias', cantidad:5 },
        ], 
        nuevaFruta: '',
        total: 0
    },

    methods : {
        agregarfruta() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
                

            }),
            this.nuevaFruta = ''
        }

    },

    computed: {
        sumarFrutas() {
            this.total = 0
            for(fruta of this.frutas) {
                this.total = this.total + fruta.cantidad;
            }
            return this.total;

        }
    }
    
})