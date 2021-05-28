var root = new Vue({
    el: "#root",
    data: {
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        discs: "",
        title: "",
        author: "",
        year: "",
        image: "",
    },
    methods: {},
    mounted() {
        axios.get(this.url).then(result => {
            this.discs = result.data.response;
            console.log(this.discs);
        })
    }
    
})