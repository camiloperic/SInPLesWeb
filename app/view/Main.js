Ext.define('SInPLes.view.Main' ,{
    extend: 'Ext.panel.Panel',
	alias: 'widget.main',
    title: 'SInPLes - Sistema de Iniciativa Popular Legislativa',

    region: 'center',
	layout: 'fit',
	width: 1000,
	height: 500,
	maxWidth: 1000,

	header: {
		
	},
	
	initComponent: function() {
		var me = this;
		console.debug('this.store', this.store);
		//SOAP CLIENT IN ACTION
		var pl = new SOAPClientParameters();
		pl.add('idProject', 3);
		pl.add('idCitizen', 1);
		var url = 'http://localhost:8080/DBAccessWS/services/DBAccessWSI';
		SOAPClient.invoke(url, "getProjectView", pl, true, function(r){console.log('SOAP response', r);});
		pl = new SOAPClientParameters();
                pl.add('username', 'zedasilva');
                pl.add('password', '0f98sh');
                url = 'http://localhost:8080/IdentityWS/services/IdentityWSI';
                SOAPClient.invoke(url, "login", pl, true, function(r){console.log('SOAP response', r);});
		//
		me.callParent(arguments);
	}
});
