class DrawController {


    constructor(map) {
        this.map = map;
        this.drawingLayerSource = new ol.source.Vector();
        this.drawInteraction = null;
        this.drawingLayer = new ol.layer.Vector({
            source: this.drawingLayerSource,
        });
        this.map.addLayer(this.drawingLayer);

    }

    draw(type = 'Point') {
        this.stop();
        this.drawInteraction = new ol.interaction.Draw({
            source: this.drawingLayerSource,
            type: type,
        });
        this.drawInteraction.on('drawend', function (x) {
            let newCoordinates = x.feature.getGeometry().getCoordinates();
            let cateogry = 'B';
            if (type === 'Point') {
                openModal(newCoordinates);
            } else {
                let xhr = new XMLHttpRequest();
                xhr.open("POST", SERVER_URL, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify({
                    coordinates: newCoordinates,
                    type: type,
                    category: cateogry
                }));
            }
        });
        this.map.addInteraction(this.drawInteraction);
    }

    stop() {
        this.map.removeInteraction(this.drawInteraction);
    }
}


