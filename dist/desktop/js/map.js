	// google.maps.event.addDomListener(window, 'load', init);

	function init_map() {
			var bounds = new google.maps.LatLngBounds();
			var center1 = new google.maps.LatLng(55.77556115429107, 37.671939364417965);
			var center2 = new google.maps.LatLng(55.77556115429107, 37.671939364417965);
			bounds.extend(center1);
			bounds.extend(center2);
			var loc1 = new google.maps.LatLng(55.77556115429107, 37.669339364417965);
			var loc2 = new google.maps.LatLng(55.77556115429107, 37.669339364417965);
			bounds.extend(loc1);
			bounds.extend(loc2);
			var mapOptions1 = {
				zoom: 5,
				scrollwheel: false,
				streetViewControl: false,
				panControl: true,
				panControlOptions: {
					position: google.maps.ControlPosition.TOP_RIGHT
				},
				mapTypeControl: false,
				zoomControl: true,
				zoomControlOptions: {
					position: google.maps.ControlPosition.RIGHT_BOTTOM
				},
					center: center1,
					styles:

					[{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]
				};
				var mapOptions2 = {
					zoom: 5,
					scrollwheel: false,
					streetViewControl: false,
					panControl: true,
					panControlOptions: {
						position: google.maps.ControlPosition.TOP_RIGHT
					},
					mapTypeControl: false,
					zoomControl: true,
					zoomControlOptions: {
						position: google.maps.ControlPosition.RIGHT_BOTTOM
					},
						center: center2,
						styles:

						[{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]
					};
			var mapElement1 = document.getElementById('map1');
			var mapElement2 = document.getElementById('map2');
			var map1 = new google.maps.Map(mapElement1, mapOptions1);
			var map2 = new google.maps.Map(mapElement2, mapOptions2);

			var marker1 = new google.maps.Marker({
				position: loc1,
				map: map1,
					icon: {
							url: 'img/map-marker.png'
							// size: new google.maps.Size(47, 71),
							// origin: new google.maps.Point(0, 0),
							// anchor: new google.maps.Point(23, 71)
						},
						title: 'Rehab'
					});
			var marker2 = new google.maps.Marker({
				position: loc2,
				map: map2,
					icon: {
							url: 'img/map-marker.png'
							// size: new google.maps.Size(47, 71),
							// origin: new google.maps.Point(0, 0),
							// anchor: new google.maps.Point(23, 71)
						},
						title: 'Rehab'
					});

			// map1.fitBounds(bounds);//autozoom
		}
	init_map();