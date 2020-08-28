Vue.component('hijo', {
    template:
    `
   <div class="p-5 bg-primary">
   <h4>Componente hijito: {{numero}}</h4>
   <h4>Nombre:{{nombre}}</h4>
   </div>
    
    
    `,

    props:['numero'],
    data(){
        return {
            nombre: 'Gigi',
        }
    },

    mounted(){
        this.$emit('nombreHijo', this.nombre);
    }
})