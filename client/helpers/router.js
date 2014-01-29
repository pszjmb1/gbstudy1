/**
 * map URLs to specific templates in the {{renderPage}} helper
 */
Meteor.Router.add({
	//'/': 'grumble',
	'/:interface/:id': function(interface, id){
    Session.set('currentUser', id);
    if(interface == 'wye'){
      Session.set('interface', 'wye');
      Session.set('started', new Date().getTime());
      return 'grumble';  
    } else if(interface == 'mmz'){
      Session.set('interface', 'mmz');
      Session.set('started', new Date().getTime());
      return 'grumble2';
    }    
  },
	'/submit': 'thankyou'
});