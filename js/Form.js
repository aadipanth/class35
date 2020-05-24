class Form {
    constructor(){

    }
    display(){
        var title=createElement("h2");
        title.html("car race");
        title.position(130,0);

        var input=createInput("");
        input.position(130,160);

        var button=createButton("play");
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            var greeting=createElement("h2");
            greeting.html("welcome "+name);
            greeting.position(130,160);
                })
    }
}