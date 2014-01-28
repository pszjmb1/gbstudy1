Template.header.helpers({
  grumbleurl: function() {
    if(Session.get('currentUser') && Session.get('interface')){
      var url = location.protocol + '//' + location.hostname + (location.port && ":" + location.port) + "/" + Session.get('interface') + '/' + Session.get('currentUser');
      console.log(url);
      return url;
    } else{
      return '#';
    }
  }
});