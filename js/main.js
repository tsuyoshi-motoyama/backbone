var person = {
    name: "Mosh",
    walk() {
        this.trigger("walking", {
            speed: 1,
            startTime: "08:00"
        });
    }
};

_.extend(person, Backbone.Events);

person.on("walking", function(e) {
    console.log("Person is walking");
    console.log("Event Args", e);
});

person.walk();