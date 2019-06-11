package polytech

import io.javalin.Javalin
import io.javalin.staticfiles.Location

fun main(args: Array<String>) {

    // simulation d'une base de données
    // Exercice 1
//    data class Message(val text: String)
//    val messages: MutableList<Message> = mutableListOf(
//        Message("Morgen"),
//        Message("Good Morning"),
//        Message("Bonjour")
//    )
//
//    val app = Javalin.create()
//
//    app.enableStaticFiles("./public", Location.EXTERNAL).start(7000)
//
//    app.get("/hello") { ctx -> ctx.result("Hello World") }
//
//    app.get("/hello-world") { ctx -> ctx.json(Message("Hello World")) }
//
//    app.get("/messages") { ctx -> ctx.json(messages) }
//
//    app.post("/messages") { ctx ->
//
//        val newMessage = Message(ctx.formParam("text").toString())
//        messages.add(newMessage)
//        ctx.json(newMessage).status(201)
//    }

    // Exercice 2
// simulation d'une base de données
    data class Ingredient(val ingredient: String)

    val ingredients: MutableList<Ingredient> = mutableListOf(
        Ingredient("Pain"),
        Ingredient("Salade"),
        Ingredient("Tomates"),
        Ingredient("Oignons"),
        Ingredient("Veau"),
        Ingredient("Mouton"),
        Ingredient("Champignons"),
        Ingredient("Ketchup"),
        Ingredient("Mayonnaise"),
        Ingredient("Moutarde")
    )

    //data class Kebab(val ingredient: Ingredient)
    val kebab: MutableList<Ingredient> = mutableListOf(
        Ingredient("Pain"),
        Ingredient("Salade"),
        Ingredient("Tomates"),
        Ingredient("Oignons"),
        Ingredient("Moutarde")
    )

    val app = Javalin.create()

    app.enableStaticFiles("./public", Location.EXTERNAL).start(7000)

    //Get liste ingrédients
    app.get("/ingredients") { ctx -> ctx.json(ingredients) }

    //Get liste ingrédient kebab actuel
    app.get("/kebab") { ctx -> ctx.json(kebab) }

    //Ajouter ingredient kebab
    app.post("/kebab") { ctx ->

        val newIngredient = Ingredient(ctx.formParam("ingredient").toString())
        kebab.add(newIngredient)
        ctx.json(newIngredient).status(201)

    }


}
