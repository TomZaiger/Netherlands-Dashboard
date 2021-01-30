mapboxgl.accessToken = 'pk.eyJ1IjoidG9temFpZ2VyIiwiYSI6ImNra2N6MHZwMjA0czYycHF0bmZucXg5cGcifQ.PjhgRlgtU0VA1cVoiMfP9Q';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [5, 52.3],
  zoom: 7,
  interactive: false,
});

var farlandNorth = "Active since 1989\nCable length: 150km\nOwner: BT\nLanding Points:\n- Aldeburgh, United Kingdom\n- Domburg, Netherlands"
var concerto = "Active since 1999\nCable length: 550km\nOwner: GTT\nLanding Points:\n- Sizewell, United Kingdom\n- Thorpeness, United Kingdom\n- Zandvoort, Netherlands\n- Zeebrugge, Belgium"
var ulysses2 = "Active since 1997\nCable length: 150km\nOwner: Verzion\nLanding Points:\n- Ijmuiden, Netherlands\n- Lowestoft, United Kingdom"
var btNorthSea = "Active since 1999\nCable length: 203km\nOwner: VTLWavenet, euNetworks\nLanding Points:\n- Lowestoft, United Kingdom\n- Zandvoort, Netherlands"
var atlanticCrossing1 = "Active since 1998\nCable length: 14,301km\nOwner: Luman\nLanding Points:\n- Beverwijk, Netherlands\n- Brookhaven, NY, United States\n- Sylt, Germany\n- Whitesands Bay, United Kingdom"


map.on('load', function () {
  map.addSource('Farland North', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [3.49437, 51.562165],

              [2.656663, 51.635526],

              [1.601548, 52.152362]
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [4.530762, 52.371339],

              [1.753764, 52.476631]
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [6.846503, 53.448402],

              [8.331346, 54.901777]
            ]
          }
        }
      ]
    }
  });
  map.addLayer({
    'id': 'Farland North',
    'type': 'line',
    'source': 'Farland North',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'transparent',
      'line-width': 5
    }
  });

  map.addSource('Concerto', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [4.530762, 52.371339],

              [4.030762, 52.221339],
              [3.330762, 51.671339],

              [3.207561, 51.331221]
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [4.530762, 52.371339],

              [4.030762, 52.355339],

              [1.601548, 52.152362]
            ]
          }
        }
      ]
    }
  });
  map.addLayer({
    'id': 'Concerto',
    'type': 'line',
    'source': 'Concerto',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'transparent',
      'line-width': 5
    }
  });

  map.addSource('Ulysses 2', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [4.611064, 52.457344],

              [4.030762, 52.575339],
              [3.030762, 52.575339],

              [1.753764, 52.476631]
            ]
          }
        }
      ]
    }
  });
  map.addLayer({
    'id': 'Ulysses 2',
    'type': 'line',
    'source': 'Ulysses 2',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'transparent',
      'line-width': 5
    }
  });

  map.addSource('BT North Sea', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [4.697045, 52.836222],

              [3.97045, 52.906222],
              [3.37045, 52.686222],
              [2.37045, 52.806222],

              [1.690947, 52.7154]
            ]
          }
        }
      ]
    }
  });
  map.addLayer({
    'id': 'BT North Sea',
    'type': 'line',
    'source': 'BT North Sea',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'transparent',
      'line-width': 5
    }
  });

  map.addSource('Atlantic Crossing-1', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [4.66035, 52.487637],

              [3.030762, 52.155339],
              [0.700762, 50.155339],

              [0.799065, 49.872203]
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [4.66035, 52.487637],

              [4.07045, 53.006222],
              [4.22045, 53.306222],
              [4.57045, 53.506222],

              [8.331346, 54.901777]
            ]
          }
        }
      ]
    }
  });
  map.addLayer({
    'id': 'Atlantic Crossing-1',
    'type': 'line',
    'source': 'Atlantic Crossing-1',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'transparent',
      'line-width': 5
    }
  });
})


var btns = document.getElementById('btns');
var layers = [
  "Farland North",
  "Concerto",
  "Atlantic Crossing-1",
  "Ulysses 2",
  "BT North Sea"
]

var btn = document.createElement('button');
btn.innerHTML = "Farland North";
btn.style.backgroundColor = 'green';
btn.addEventListener('click', function () {
  layers.forEach(function (layer) {
    map.setPaintProperty(layer, 'line-color', 'transparent');
  });
  map.setPaintProperty("Farland North", 'line-color', 'green');
  document.getElementById('information').innerText = farlandNorth;
});
btns.appendChild(btn);

var btn = document.createElement('button');
btn.innerHTML = "Concerto";
btn.style.backgroundColor = 'cyan';
btn.addEventListener('click', function () {
  layers.forEach(function (layer) {
    map.setPaintProperty(layer, 'line-color', 'transparent');
  });
  map.setPaintProperty("Concerto", 'line-color', 'cyan');
  document.getElementById('information').innerText = concerto;
});
btns.appendChild(btn);

var btn = document.createElement('button');
btn.innerHTML = "Atlantic Crossing-1";
btn.style.backgroundColor = 'purple';
btn.addEventListener('click', function () {
  layers.forEach(function (layer) {
    map.setPaintProperty(layer, 'line-color', 'transparent');
  });
  map.setPaintProperty("Atlantic Crossing-1", 'line-color', 'purple');
  document.getElementById('information').innerText = atlanticCrossing1;
});
btns.appendChild(btn);

var btn = document.createElement('button');
btn.innerHTML = "Ulysses 2";
btn.style.backgroundColor = 'orange';
btn.addEventListener('click', function () {
  layers.forEach(function (layer) {
    map.setPaintProperty(layer, 'line-color', 'transparent');
  });
  map.setPaintProperty("Ulysses 2", 'line-color', 'orange');
  document.getElementById('information').innerText = ulysses2;
});
btns.appendChild(btn);

var btn = document.createElement('button');
btn.innerHTML = "BT North Sea";
btn.style.backgroundColor = 'grey';
btn.addEventListener('click', function () {
  layers.forEach(function (layer) {
    map.setPaintProperty(layer, 'line-color', 'transparent');
  });
  map.setPaintProperty("BT North Sea", 'line-color', 'grey');
  document.getElementById('information').innerText = btNorthSea;
});
btns.appendChild(btn);
