

var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.XYZ({
        url: 'https://server.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', 
        })
      })
    ],
    view: new ol.View({
        center: ol.proj.transform([-50,-13], 'EPSG:4326', 'EPSG:3857'),
        zoom: 4
    })
});