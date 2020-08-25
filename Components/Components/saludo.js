Vue.component('saludo', {
    template:
    `
    <div>
    <h1>{{saludo}}</h1>
    <h3>White Rabbbit</h3>
    </div>
    `,

    data() {
        return {
            saludo: 'Alicia en el pais de las maravillas'
        }
    }

})