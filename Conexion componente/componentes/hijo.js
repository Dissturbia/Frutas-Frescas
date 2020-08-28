Vue.component('hijo', {
    template:
    `
   <div class="p-5 bg-primary">
   <h4>Componente hijito: {{numero}}</h4>
   </div>
    
    
    `,

    props:['numero']
})