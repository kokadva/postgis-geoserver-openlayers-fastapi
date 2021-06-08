let defaultPointStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 5,
        fill: new ol.style.Fill({
            color: [0, 153, 255, 1]
        })
    })
});

let invisiblePointStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 0,
        fill: new ol.style.Fill({
            color: [0, 153, 255, 1]
        })
    })
});
