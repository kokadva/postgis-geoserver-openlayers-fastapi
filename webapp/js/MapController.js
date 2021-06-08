class MapController {


    constructor() {
        this.view = this.initView();
        this.layers = this.initLayers();
        this.map = this.initMap();
        this.drawController = new DrawController(this.map);
    }

    initView() {
        return new ol.View({
            center: [-8908887.277395891, 5381918.072437216],
            maxZoom: 19,
            zoom: 10,
        });
    }

    initLayers() {
        let defaultOSMLayer = new ol.layer.Tile({source: new ol.source.OSM()});
        let baseLayer = new ol.layer.MapboxVector({
            styleUrl: 'mapbox://styles/mapbox/bright-v9',
            accessToken:
                'pk.eyJ1Ijoia29rYWR2YWxpIiwiYSI6ImNrcGp2eHl3dzA5MDUyb28xOW9ndGVybzkifQ.yq83dhgG1S5tpY5qWWGFCg',
        });
        this.polygonLayer = getVectorLayerFrom(POLYGON_LAYER_URL);
        this.pointLayer = getVectorLayerFrom(POINT_LAYER_URL, defaultPointStyle);
        // this.pointLayerA = getVectorLayerFrom(POINT_LAYER_URL + "&CQL_FILTER=category='A'", defaultPointStyle);
        // this.pointLayerB = getVectorLayerFrom(POINT_LAYER_URL + "&CQL_FILTER=category='B'", defaultPointStyle);
        this.drawingLayerSource = new ol.source.Vector();
        let drawingLayer = new ol.layer.Vector({
            source: this.drawingLayerSource,
        });

        return [defaultOSMLayer, this.polygonLayer, this.pointLayer, drawingLayer];
    }

    initMap() {
        return new ol.Map({
            layers: this.layers,
            target: 'map',
            view: this.view
        });
    }

    filter_features(category = null, value) {
        this.pointLayer.getSource().getFeatures().forEach(function (f) {
            if (f.getProperties()['category'] === category && value)
                f.setStyle(defaultPointStyle);
            if (f.getProperties()['category'] === category && !value)
                f.setStyle(invisiblePointStyle);
            if (category == null)
                f.setStyle(defaultPointStyle);
        });

    }

}


