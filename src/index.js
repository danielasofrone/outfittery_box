'use strict';
var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = 'amzn1.ask.skill.e2befcfb-4f8a-4357-854e-1811f7f3c89c';
    alexa.registerHandlers(handlers, confirmBoxModeHandlers, selectArticleModeHandlers);
    alexa.execute();
};

var states = {
  STARTMODE: '_STARTMODE',
  CONFIRMBOXMODE: '_CONFIRMBOXMODE',
  SELECTARTICLEMODE: '_SELECTARTICLEMODE',

};

var handlers = {
    'LaunchRequest': function () {
      this.handler.state = states.CONFIRMBOXMODE;
        this.emit(':ask', 'Hallo Daniela! Willkommen bei Outfittery! Wir haben gerade neue Frühlings- und Sommer - Outfits bekommen - möchtest du gleich eine Box bestellen?', 'Möchtest du eine neue Box bestellen?');
        }
};

var confirmBoxModeHandlers = Alexa.CreateStateHandler(states.CONFIRMBOXMODE, {

  'AMAZON.YesIntent' : function() {
    this.handler.state = states.SELECTARTICLEMODE;
    this.emit( ':ask', 'Was genau brauchst du? Oberteile, Hose oder Schuhe? Oder möchtest du neue Outfits? ')
   },
  'AMAZON.NoIntent' : function() {
      this.handler.state = states.SELECTARTICLEMODE;
    this.emit( ':tell', 'Ok, dann vielleicht nächstes Mal. Ich wünsche dir noch einen schönen Tag. ')
  },
  'Unhandled': function() {
    this.emit(':ask', 'Bitte antworte mit ja oder nein. Möchtest du eine Box bestellen?' )
  }
});

var selectArticleModeHandlers = Alexa.CreateStateHandler(states.SELECTARTICLEMODE, {

    'selectArticleIntent' : function() {
        this.emit( ':ask', ' Dann werde ich sofort eine Box für dich packen lassen. Möchtest du die Box an die gleiche Adresse zustellen lassen?')
      }
});
