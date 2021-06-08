function getVectorLayerFrom(url, style) {
    var wfsLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: url
        }),
        updateWhileAnimating: false,
        updateWhileInteracting: false,
    });
    if (style) {
        wfsLayer.setStyle(style)
    }
    return wfsLayer;
}