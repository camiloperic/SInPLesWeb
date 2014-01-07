Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'SInPLes',
	
    appFolder: 'app',

	views: ['Main'],
	
//	models: ['Simplemodel'],
//	
//	stores: ['DataStore'],
	
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: {
            	type: 'vbox',
            	align: 'center'
            },
            items: [
                {
                    xtype: 'main'
                }
            ]
        });
    }
});