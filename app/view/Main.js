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
		//
		me.callParent(arguments);
//		var mystore = Ext.create('Ext.data.Store',{
//			model: 'MVCAPP.model.Simplemodel'
//		});
//		Highcharts.data({
//			svg: 'http://upload.wikimedia.org/wikipedia/commons/7/76/World_V2.0.svg',
//			complete: function (options) {
//				mystore.loadData(options.series[0].data);
//				console.debug('mystore is ', mystore);
//			}
//		});
//		me.add({
//			xtype: 'highchart',
//
//			store: mystore,
//			
//			series: [
//				{type: 'map'}
//			],
//			chartConfig: {
//		
//				chart : {
//					type: 'map',
//					borderWidth : 1,
//					zoomType: 'xy'
//				},
//			
//				title: {
//					text: null
//				},
//			
//				legend: {
//					enabled: false
//				},
//
//				credits: {
//					enabled: false
//				},
//
//				plotOptions: {
//					map: {
//						name: 'Random',
//						svg: 'http://upload.wikimedia.org/wikipedia/commons/7/76/World_V2.0.svg',
//						colorRange: {
//							from: '#cedae8',
//							to: '#1a416d'
//						},
//						dataLabels: {
//							//enabled: true,
//							format: '{point.name}',
//							backgroundColor: 'rgba(255,255,255,0.4)'
//						},
//						tooltip: {
//							valueSuffix: '%'
//						},
//						states: {
//							hover: {
//								color: '#FF7F00' // orange
//							}
//						}
//					}
//				}
//			}
//		});
	}
});
