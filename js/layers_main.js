


  var metarea2 = new ol.layer.Vector({
    title: 'Earthquakes',
    source: new ol.source.Vector({
      url: 'D:/Organizado/HTML/html/openlayer/js/milhas_line.json',
      format: new ol.format.GeoJSON()
    }),
    style: new ol.style.Style({
      image: new ol.style.Circle({
        radius: 3,
        fill: new ol.style.Fill({color: 'balck'})
      })
    })
  });
var metarea = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url:'http://localhost:8080/geoserver/server_limite_ws/wms',
        params:{'LAYERS':'server_limite_ws:v_metarea'},
        serverType:'geoserver'
    })
});

var milhas12 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url:'http://localhost:8080/geoserver/server_limite_ws/wms',
        params:{'LAYERS':'server_limite_ws:linha_12milhas'},
        serverType:'geoserver'
    })
});

function change_meta() {
    var decider1 = document.getElementById('metarea')
    if(decider1.checked){

      map.addLayer(metarea);
      }else{
          map.removeLayer(metarea);
      }
  }

function change_12() {
    var decider = document.getElementById('milhas12')
    if(decider.checked){

    map.addLayer(milhas12);
    }else{
        map.removeLayer(milhas12);
    }
}