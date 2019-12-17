  var map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: 'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2FsaWFhYSIsImEiOiJjazJzd3cwNXowcGJmM2RudnNiaXYyOHU1In0.P2EP-Xewl1qp3onIMwTo7w'
        })
      })
    ],
    target: 'map',
    view: new ol.View({
      center: [1884631.369399, 6874440.575856],
      zoom: 11
    })
  });


  const punkty = {
    "type": "FeatureCollection",
    "name": "alepunkty",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 1 }, "geometry": { "type": "Point", "coordinates": [ 18.521865983562616, 52.588523646497229 ] } },
    { "type": "Feature", "properties": { "id": 2 }, "geometry": { "type": "Point", "coordinates": [ 17.841949595552013, 53.370058103459442 ] } },
    { "type": "Feature", "properties": { "id": 3 }, "geometry": { "type": "Point", "coordinates": [ 20.115724177973068, 51.768080556753695 ] } },
    { "type": "Feature", "properties": { "id": 4 }, "geometry": { "type": "Point", "coordinates": [ 18.971454501754682, 51.583520931557182 ] } }
    ]
    }
