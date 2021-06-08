var baseUrl = 'http://share-loc-static-content-open-air.s3-website.us-east-2.amazonaws.com/';
var POLYGON_LAYER_URL = "http://localhost:8080/geoserver/test/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=test%3Apolygons&maxFeatures=50&outputFormat=application%2Fjson";
var POINT_LAYER_URL = "http://localhost:8080/geoserver/test/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=test%3Apoints&maxFeatures=50&outputFormat=application%2Fjson";
var SERVER_URL = "http://127.0.0.1:8000/features";
var osrmRoutingRequestBaseUrl = 'http://router.project-osrm.org';
