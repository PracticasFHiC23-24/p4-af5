const app2 = Vue.createApp({
    data() {
        return {
            mensaje1: 'Hello world',
            mensaje2: 'Mi primer programa con',
            jsF: 'Vue',
            url: 'https://vuejs.org'
        };
    },
    methods: {
        mostrarUrl() {
            return this.url;
        },

        openPage(ref) {
            window.location.href = ref;
            console.log("ayoooo", ref);
        }

    }
  });

app2.mount("#main");