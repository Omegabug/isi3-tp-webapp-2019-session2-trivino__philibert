Vue.component(`add-message`, {
    template: `
    <div class="field is-grouped div-center">
<!--    Exercice 1-->
<!--      <div class="control">-->
<!--        <input v-model="message" class="input" type="text" placeholder="type message">-->
<!--        -->
<!--        <button v-on:click="addMessage" class="button is-link">add message</button>-->

<!--      </div>-->

        <div id="selector" class="add-margin-right">
            <select class="form-control " name="template" v-model="selected">
                <option v-for="ingredient in ingredients" v-bind:value="ingredient">
                   {{ ingredient }}
                </option>
            </select>
            </div>
            <div>
              <button v-on:click="addIngredient" class="button is-link">Ajouter Ingrédient</button>
            </div>
        </div> 

    </div>    
    
  `,
    data() {
        return {
            // Exercice 1
            // message:null

            // Exercice 2
            el: '#selector',
            ingredients: [],
            selected: 'Pain'
        }
    },
    methods:{
        // Click button
        // Exercice 1
        // addMessage(event) {
        //     this.$root.$emit("add-message", this.message)
        //     this.message = null
        // }

        buildList: function() {
            fetch(`/ingredients`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then(response => response.json())
                .then(data => {
                    data.map(item => this.ingredients.push(item.ingredient));
                    console.log(data)
                    console.log(this.ingredients)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        // Click button
        addIngredient(event) {
            this.$root.$emit("add-message", this.selected)
        }

    },
    mounted() {
        this.buildList()
    }

});