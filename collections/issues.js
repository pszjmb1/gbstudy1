/**
 * Grumble Button issues collection routines for client and server. Issues
 *	result from grumbling.
 */

Issues = new Meteor.Collection('issues');

/**
 * Server side function called by client to update Issues.
 */
Meteor.methods({
	grumble:function(grumbleAttribs) {
		// pick out the whitelisted keys
		var issue = _.extend(
			_.pick(grumbleAttribs,
			'date', 'time', 'dept',
			'unit', 'room', 'urgency',
			'category', 'shortdesc', 'details', 'user', 'interface', 'started'
			), {
					submitted: new Date().getTime(),
					commentsCount: 0
		});

		var issueId = Issues.insert(issue);
		return issueId;
	}
});
