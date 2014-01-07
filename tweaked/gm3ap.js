var Gm3ap = {
	giveMeMyMap: function (chartConfig) {
		var myMap;

		Highcharts.data({
			svg: chartConfig.plotOptions.map.svg,
			complete: function (options) {
                        console.debug('chartConfig is ', chartConfig);
                        var key = 'World1';
			var data = options.series[0].data;//,

			//lines = identifyLines(data, key);
				
			// For the sake of the demo, add some random values
			/**$.each(data, function (i, point) {
				point.y = Math.round(Math.random() * 100);
			});**/
			
			//chartConfig.series[0].data = Highcharts.merge(options.series[0].data, chartConfig.series[0].data);
			chartConfig.series[0].data = options.series[0].data
			chartConfig.series[0].data.minX = null;
			chartConfig.series[0].data.maxX = null;
			chartConfig.series[0].data.minY = null;
			chartConfig.series[0].data.maxY = null;
			options = Highcharts.merge(options, chartConfig);
			options.series[0].data[0].y = 10;
			options.series[0].data[0].text = 'Something';
			// Merge the options from the Data module with our own settings
			/**options = Highcharts.merge(options, {
				chart : {
					renderTo: chartConfig.chart.renderTo,
                                	type: 'map',
					borderWidth : 1,
					zoomType: 'xy'
				},
							
				title: {
					text: key
				},
				
				legend: {
					enabled: false
				},
				
				plotOptions: {
					map: {
						name: 'Random',
						colorRange: {
							from: '#cedae8',
							to: '#1a416d'
						},
						dataLabels: {
							//enabled: true,
							format: '{point.name}',
							backgroundColor: 'rgba(255,255,255,0.4)'
						},
						tooltip: {
							valueSuffix: '%'
						},
						states: {
							hover: {
								color: '#FF7F00' // orange
							}
						}
					}
				}
			});**/
						
                        /**Add separator lines
						if (lines) {
							options.series.splice(0, 0, {
								color: 'none',
								borderColor: 'gray',
								enableMouseTracking: false,
								showInLegend: false,
								data: lines
							});	
						}**/
						
						// Create the map
			console.debug('chartConfig is ', chartConfig);
			myMap = new Highcharts.Map(options);
			console.debug('Your map is done...', myMap);
			}
		});

		return myMap;
	}
};

