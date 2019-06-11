Vue.component(`messages-list`, {
    template: `
    <div class="div-center list-kebab">
      <hr><h2 class="subtitle">{{title}}</h2><hr>
<!--      Exercice 1-->
<!--      <div v-for="message in messages">-->
<!--        <h2 class="subtitle">{{message}}</h2>-->
<!--      </div>-->

<!--        Exercice 2-->
      <div v-for="ingredient in kebab">
        <h2 class="subtitle">{{ingredient}}
<!--        Exercice 3-->
        <button v-on:click="deleteIngredient(ingredient)" 
        class="button is-link fa fa-times">
        </button></h2>
      </div>
    </div>
  `,
    data() {
        return {
            // Exercice 1
            // title: "Messages List",
            // messages: []

            // Exercice 2
            title: "Détail du Kebab",
            kebab: [],
            ingredients: []
        }


    },
    methods: {
        // populateTheList: function() {
        //     Exercice 1
        //     fetch(`/messages`, {
        //         method: 'GET',
        //         headers: {
        //             "Content-Type": "application/json",
        //         }
        //     })
        //         .then(response => response.json())
        //         .then(data => {
        //             data.map(item => this.messages.push(item.text));
        //             console.log(data)
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })
        // }

            //Exercice 2
        buildKebab: function (){
            fetch(`/kebab`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then(response => response.json())
                .then(data => {
                    data.map(item => this.kebab.push(item.ingredient));
                    console.log(data)
                })
                .catch(error => {
                    console.log(error)
                })
            // console.log(kebab)
        },

        // Exercice 3
        deleteIngredient: function(ingredient){
            this.$root.$emit("delete_ingredient", ingredient)
        }
    },
    mounted() {
        // Exercice 1
        // this.populateTheList()
        //
        // this.$root.$on("add-message", (message)=> {
        //     this.messages.push(message)
        //     console.log(message)
        //     fetch(`/messages`, {
        //         method: 'POST',
        //         headers: {
        //             "Content-Type": "text/plain",
        //         },
        //         body:"text="+message
        //     })
        //         .then(response => response.json())
        //         .then(data => {
        //             console.log(data)
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })
        // })

        //Exercice 2
        this.buildKebab();

        this.$root.$on("add-message", (ingredient)=> {
            this.kebab.push(ingredient)

            // console.log(ingredient)
            fetch(`/kebab`, {
                method: 'POST',
                headers: {
                    "Content-Type": "text/plain",
                },
                body:"ingredient="+ingredient
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.log(error)
                })
        })

        // Exercice 3
        this.$root.$on("delete_ingredient", (ingredient)=> {

            console.log(this.kebab)
            fetch(`/delingredient?ingredient=`+ingredient, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "text/plain",
                },
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.log(error)
                })

            this.kebab = []
            this.buildKebab()
        })
    }
});
