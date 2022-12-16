var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_nestysalueidenvrit_1 = new ol.format.GeoJSON();
var features_nestysalueidenvrit_1 = format_nestysalueidenvrit_1.readFeatures(json_nestysalueidenvrit_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nestysalueidenvrit_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nestysalueidenvrit_1.addFeatures(features_nestysalueidenvrit_1);
var lyr_nestysalueidenvrit_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nestysalueidenvrit_1, 
                style: style_nestysalueidenvrit_1,
                interactive: true,
    title: 'Äänestysalueiden värit<br />\
    <img src="styles/legend/nestysalueidenvrit_1_0.png" /> 1 - 3<br />\
    <img src="styles/legend/nestysalueidenvrit_1_1.png" /> 3 - 5,2<br />\
    <img src="styles/legend/nestysalueidenvrit_1_2.png" /> 5,2 - 8<br />\
    <img src="styles/legend/nestysalueidenvrit_1_3.png" /> 8 - 10<br />\
    <img src="styles/legend/nestysalueidenvrit_1_4.png" /> 10 - 20<br />'
        });
var format_nestysalueidenreunat_2 = new ol.format.GeoJSON();
var features_nestysalueidenreunat_2 = format_nestysalueidenreunat_2.readFeatures(json_nestysalueidenreunat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nestysalueidenreunat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nestysalueidenreunat_2.addFeatures(features_nestysalueidenreunat_2);
var lyr_nestysalueidenreunat_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nestysalueidenreunat_2, 
                style: style_nestysalueidenreunat_2,
                interactive: false,
                title: '<img src="styles/legend/nestysalueidenreunat_2.png" /> Äänestysalueiden reunat'
            });
var format_nestysalueennimi_3 = new ol.format.GeoJSON();
var features_nestysalueennimi_3 = format_nestysalueennimi_3.readFeatures(json_nestysalueennimi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nestysalueennimi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nestysalueennimi_3.addFeatures(features_nestysalueennimi_3);
var lyr_nestysalueennimi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nestysalueennimi_3, 
                style: style_nestysalueennimi_3,
                interactive: true,
                title: 'Äänestysalueen nimi'
            });

lyr_OSMStandard_0.setVisible(true);lyr_nestysalueidenvrit_1.setVisible(true);lyr_nestysalueidenreunat_2.setVisible(true);lyr_nestysalueennimi_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_nestysalueidenvrit_1,lyr_nestysalueidenreunat_2,lyr_nestysalueennimi_3];
lyr_nestysalueidenvrit_1.set('fieldAliases', {'tunnus': 'Tunnus', 'nimi': 'Nimi', 'Äänet': 'Äänet', });
lyr_nestysalueidenreunat_2.set('fieldAliases', {});
lyr_nestysalueennimi_3.set('fieldAliases', {'tunnus': 'Tunnus', 'nimi': 'Nimi', 'Äänet': 'Äänet', });
lyr_nestysalueidenvrit_1.set('fieldImages', {'tunnus': 'TextEdit', 'nimi': 'TextEdit', 'Äänet': 'TextEdit', });
lyr_nestysalueidenreunat_2.set('fieldImages', {});
lyr_nestysalueennimi_3.set('fieldImages', {'tunnus': 'TextEdit', 'nimi': 'TextEdit', 'Äänet': 'TextEdit', });
lyr_nestysalueidenvrit_1.set('fieldLabels', {'tunnus': 'header label', 'nimi': 'header label', 'Äänet': 'header label', });
lyr_nestysalueidenreunat_2.set('fieldLabels', {'id': 'no label', 'kuntanro': 'no label', 'tunnus': 'no label', 'nimi': 'no label', 'namn': 'no label', 'kunta': 'no label', 'vaalipiste': 'no label', 'osoite': 'no label', 'kommun': 'no label', 'vallokal': 'no label', 'adress': 'no label', 'municipal': 'no label', 'pollingsta': 'no label', 'address': 'no label', 'julkpvm': 'no label', 'Äänet': 'no label', });
lyr_nestysalueennimi_3.set('fieldLabels', {'tunnus': 'header label', 'nimi': 'header label', 'Äänet': 'header label', });
lyr_nestysalueennimi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});