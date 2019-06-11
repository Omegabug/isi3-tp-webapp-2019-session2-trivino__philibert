Vue.component(`messages-list`, {
    template: `
    <div>
      <hr><h2 class="subtitle">{{title}}</h2><hr>
      <div v-for="message in messages">
        <h2 class="subtitle">{{message}}</h2>
      </div>
    </div>
  `,
    data() {
        return {
            title: "Messages List",
            messages: []
        }
    },
    methods: {
        populateTheList: function() {
            fetch(`/messages`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then(response => response.json())
                .then(data => {
                    data.map(item => this.messages.push(item.text));
                    console.log(data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    mounted() {
        this.populateTheList()

        this.$root.$on("add-message", (message)=> {
            this.messages.push(message)
            console.log(message)
            fetch(`/messages`, {
                method: 'POST',
                headers: {
                    "Content-Type": "text/plain",
                },
                body:"text="+message
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.log(error)
                })
        })

    }
})
