Beers = new Meteor.Collection("Beers");

Meteor.methods({
    "insertBeer": function(numBeers, date) {
        numBeers = parseInt(numBeers);
        console.log(check)
        check(numBeers, Number);
        check(date, Date);

        return Beers.insert({beers: numBeers, date: date});
    },

    "removeBeer": function(id) {
        check(id, String);
        return Beers.remove(id);
    }
})