const app = Vue.createApp({
    data() {
        return {

            url : "www.google.com",
            showBooks: true,
            books : [
                {title: "boof koor" , author: "sadegh hedayat", image: "images/1.jpg"},
                {title: "chenin goft zartosht" , author: "fredrich niche", image: "images/2.jpg"},
                {title: "jenayat o mokafat" , author: "feyodor dastayovsky", image: "images/3.jpg"},
            ]

        }
    },
    methods: {
        changeShowBooks(){
            this.showBooks = !this.showBooks 
        },
    },
});


app.mount("#app");