/*
 * @class Alertify
 *
 * @todo  COMPLETE DOCUMENTATION FOR THE CLASS
 *
 * @constructor
 * @classdesc Dialog and notifications events.
 * @param {array} [options] - Please provide documentation
 * @author Umar [waliyullahu@proximity.bbdo.fr]
 *
 * @example
 * new instance:
 *     var instance = new Alertify();
 */
var Alertify = function() {

  var instance = this;

  //////////////////
  // PRIVATE VARS //
  //////////////////

  /////////////////
  // PUBLIC VARS //
  /////////////////

  /////////////////////
  // PRIVATE METHODS //
  /////////////////////
  /*
   * @function reset
   * @description Clear all the custom style that has been associated
   * @memberOf Alertify
   * @private
   *
   */
  var clicky = function() {
   var date = new Date();
   var params = JSON.stringify({ date:date });
   $.ajax({
      url: '/clickAction',
      type: 'POST',
      data: params,
      dataType: 'json',
      contentType: 'application/json',
      success: function(data) {
        $('.container').append('<div class="alert alert-success">' + data.message + ' '  + data.date + '</div>');
      }

    })

   ;
  }

  ;

  ////////////////////
  // PUBLIC METHODS //
  ////////////////////

  instance.clicky = clicky;
  };

///////////////
// PROTOTYPE //
///////////////

///////////////
// NAMESPACE //
///////////////
app._classes.Alertify = new Alertify(); // send prototype to namespace
