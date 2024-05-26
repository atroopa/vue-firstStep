const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: "bof koor",
            author: "sadegh hedayat",
            age: 45
        }
    },
    methods: {
        changeShowBooks(){
            this.showBooks = !this.showBooks 
        }
    },
});


app.mount("#app");