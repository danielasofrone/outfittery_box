'use strict';
var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = 'amzn1.ask.skill.e2befcfb-4f8a-4357-854e-1811f7f3c89c';
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', 'Hallo Daniela! Willkommen bei Outfittery! Wir haben gerade neue Frühlings- und Sommer - Outfits bekommen - möchtest du gleich eine Box bestellen?', 'Möchtest du eine neue Box bestellen?');
    },

    'AMAZON.YesIntent' : function() {
      this.emit( ':ask', 'Was genau brauchst du? Oberteile, Hose oder Schuhe? Oder möchtest du neue Outfits? ')
    },
    'AMAZON.NoIntent' : function() {
      this.emit( ':tell', 'Ok, dann vielleicht nächstes Mal. Ich wünsche dir noch einen schönen Tag. ')
    },
    'selectArticleIntent' : function() {
      this.emit( ':ask', ' Dann werde ich sofort eine Box für dich packen lassen. Möchtest du die Box an die gleiche Adresse zustellen lassen?')
    }

};
