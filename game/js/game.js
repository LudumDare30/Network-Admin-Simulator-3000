var money = 0,
    connections = 0,
    dataCenters = 1,
    currentBandwidth = 0,
    maxBandwidth = 10;

//easy function for updating resources
function updateRes(which) {
    if (which === "money") {
        $("#money").html(money);        
    } else if (which === "connections") {
        $("#connections").html(connections);
    } else if (which === "datacenters") {
        $("#dataCenters").html(dataCenters);
    } else if (which === "bandwidth") {
        $("#bandwidth").html(currentBandwidth + "/" + maxBandwidth);
    } else if (which === "all") {
        $("#money").html(money);
        $("#connections").html(connections);
        $("#dataCenters").html(dataCenters);
        $("#bandwidth").html(currentBandwidth + "/" + maxBandwidth);
    }

}

// function for placing data centers
function placeDC() {

}
// function for drawing connections from nodes
function drawNodes() {

}

$(document).ready(function(){
    $(function(){
       // $("#worldMap").vectorMap({backgroundColor: "#1D8CB9"});
        var map,
            markerIndex = 0,
            markersCoords = {};

        map = new jvm.WorldMap({
            map: "world_mill_en",
            backgroundColor: "#1D8CB9",
            markerStyle: {
                initial: {
                    fill: 'red'
                }
            },
            container: $("#worldMap"),
            onMarkerLabelShow: function(e, label, code) {
                map.label.text(markersCoords[code].lat.toFixed(2) + ", " + markersCoords[code].lng.toFixed(2));
            },
            onMarkerClick: function(e, code){
                map.removeMarkers([code]);
                map.label.hide();
            }

        });

        map.container.click(function(e){
            map.addMarker(markerIndex, {coords: [100, 100 ] });
            var latLng = map.pointToLatLng(e.offsetX, e.offsetY),
                targetCls = $(e.target).attr('class');
            
            if (latLng && (!targetCls || (targetCls && $(e.target).attr('class').indexOf('jvectormap-marker') === -1))) {
                markersCoords[markerIndex] = latLng;
                map.addMarker(markerIndex, {latLng: [latLng.lat, latLng.lng]});
                markerIndex += 1;
            }
        });

    });
    updateRes("all");
});



