const app = Vue.createApp({
    data() {
        return {

            url : "www.google.com",
            showBooks: true,
            books : [
                {title: "boof koor" , author: "sadegh hedayat"},
                {title: "chenin goft zartosht" , author: "fredrich niche"},
                {title: "jenayat o mokafat" , author: "feyodor dastayovsky"},
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