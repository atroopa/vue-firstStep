const app = Vue.createApp({
    data() {
        return {
            x: 0,
            y: 0,
            showBooks: true,
            title: "bof koor",
            author: "sadegh hedayat",
            age: 45
        }
    },
    methods: {
        changeShowBooks(){
            this.showBooks = !this.showBooks 
        },

        handleEvent(e){
            console.log(e.type)
        },

        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
});


app.mount("#app");