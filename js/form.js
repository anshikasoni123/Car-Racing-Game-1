class Form
{
    constructor()
    {

    }

    display()
    {

        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(150, 50);

        var input = createInput("Write Your Name Here");
        input.position(150, 200);

        var button = createButton("Play");
        button.position(300, 250);

        button.mousePressed(
            function()
            {
                var name = input.value();

                var element = createElement("h3")
                element.html("Hello " + name + " Welcome to the Game");
                element.position(50, 300)
            }
        )
    }
}