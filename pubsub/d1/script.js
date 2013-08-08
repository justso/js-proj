var Controller, Model, View;

Controller = {
    topics: [],
    publish: function (topic, info) {
        this.topics[topic](info);
    },
    subscribe: function (topic, callback) {
        this.topics[topic] = callback;
    }
};
Model = {
    process: function (arg) {
        this.finish(arg + ' is processed!');
    },
    finish: function (output) {
        Controller.publish('cruncher/done', output);
    }
};
View = {
    init: function () {
        Controller.subscribe('cruncher/done', this.show);
    },
    show: function (str) {
        $('body').text(str);
    }
};
View.init();
Model.process(new Date());

/*

translation glue
idealized ports to guide implementation and desing


To put it in other words, you have to follow the OO concept of Encapsulation; the exposed part of a class is its interface. The important part here is that the interface represents “what” the class can do but not “how” it will do it, which is the actual implementation.

“Program to an interface”, really means “Program to a supertype”.


how i think pubsub works and how i can implement without external framework (possibly)

publish something was done (who knows if it matters)
    associate a "name string"
    provide pointer to data

subscribe to something by "name string"
    deal with output as is



example form
    enjoy an state of assumptions about other domains to keep thins simple
    chances are slim but later down the line a choice changes those initial simplifying assumptions
    handle adaptation by allowing the items that may complicate things along the way subscribe to domain alteration
    we know that section 1 allowed for us to pretend an environmental factor was without consequence
    we shied from the fact that a couple things in section 1 could be uniquely affected by a situation that strongly doesn't merit addressing until later
    now we come to a crisis of flow because assumptions are upset and now we feel very cloudy about how many assumptions upon assumptions could be a house of cards we could practically anticipate the logical implications
    the domains of affect and complexity would be better contained by agreements to reevaluate only the necessary points related to the environmental change
    when we isolate the associated players in a domain change we subscribe to an exception or contingency which is later published (or not!)
    pubsub draws lines of influence that point to certain parts that could become moving parts after positions were taken by other components (primary relationships)
    contingency relationships need to have a an abstraction formula to allow necessary alterations to reestablish a state for assumptions and reevaluating (possibly) primary relationships
    primary relationship are sibling and immediate family of conditions and options that roll up to a primary collector of control for maintainability
    contingency relationships reform the state such that a new layer is imagined where distributed control is abstracted into an antecedent for normal flow
    like screen redraw this is a blittering mess of possibly occlusion and overlap and conflict/contradiction and void
    this complication is usually decoupled by grouping but what about the exceptions?
    should all fields be ignorant actors and equals for a logic layer or can the work intelligently by rule of limitation of interest



*/
