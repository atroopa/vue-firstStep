const app = Vue.createApp({
    data() {
        return {

            url : "www.google.com",
            showBooks: true,
            books : [
                {title: "بوف کور" , author: "صادق هدایت", image: "images/1.jpg", isFav: false},
                {title: "چنین گفت زرتشت" , author: "فردریش نیچه", image: "images/2.jpg", isFav: true},
                {title: "جنایت و مکافات" , author: "فئودور داستایفسکی", image: "images/3.jpg", isFav: true},
            ]

        }
    },
    methods: {
        changeShowBooks(){
            this.showBooks = !this.showBooks 
        },
        changeFav(book){
            book.isFav = !book.isFav
        },
    computed: {
        filteredBooks(){
            return "Hello"
        }
    }
    },
});


app.mount("#app");