/**
 * map URLs to specific templates in the {{renderPage}} helper
 */
Meteor.Router.add({
	//'/': 'grumble',
	'/:interface/:id': function(interface, id){
    Session.set('currentUser', id);
    if(interface == 'wye'){
      Session.set('interface', 'wye');
      return 'grumble';  
    } else if(interface == 'mmz'){
      Session.set('interface', 'mmz');
      return 'grumble2';
    }    
  },
	'/submit': 'thankyou'
});