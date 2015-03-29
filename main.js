require('angular');
require('pikaday-angular');

angular.module('exampleApp', ['pikaday'])
  .config(['pikadayConfigProvider', function(pikaday) {
    var locales = {
      de: {
        previousMonth : 'Vorheriger Monat',
        nextMonth     : 'Nächster Monat',
        months        : ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        weekdays      : ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        weekdaysShort : ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."]
      }
    };
    pikaday.setConfig({
      locales: locales
      // disableDayFn: function (day) {
      //   console.log(arguments);
      // }
    });
  }])
  .controller('exampleController', function() {

    this.local = "de";
    this.onPikadaySelect = function onPikadaySelect(pikaday) {
      alert(pikaday.toString());
    };
    this.filterDays = function filterDaysFn(date) {
      return date.getDay() === 3;
    };
  });
