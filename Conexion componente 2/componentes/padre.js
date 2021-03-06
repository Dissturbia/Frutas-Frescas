Vue.component('padre', {
    template:
    `
    <div class="p-5 bg-danger text-white">
    <h2>Componente padre: {{numeroPadre}}</h2>
    <button class="btn btn-success" @click="numeroPadre++">+</button>
    {{nombrePadre}}
    <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
    </div>
    
    `,

    data(){
        return{
            numeroPadre:0,
            nombrePadre: ''
        }
    }
})