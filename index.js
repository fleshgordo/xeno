import data_a from './data/df_paginated_A.json' assert {type: "json"};
import data_b from './data/df_paginated_B.json' assert {type: "json"};
import data_c from './data/df_paginated_C.json' assert {type: "json"};

let newContainer = []

let color_A = [0, 255, 0, 25];
let color_B = [0, 255, 255, 25];
let color_C = [0, 0, 255, 25];


data_a.forEach(data => {
    let newArray = [data["lng"], data["lat"]]
    newContainer.push({
        "position": newArray,
        "normal": [-1, 0, 0],
        "color": color_A
    })
});


data_b.forEach(data => {
    let newArray = [data["lng"], data["lat"]]
    newContainer.push({
        "position": newArray,
        "normal": [-1, 0, 0],
        "color": color_B
    })
});

data_c.forEach(data => {
    let newArray = [data["lng"], data["lat"]]
    newContainer.push({
        "position": newArray,
        "normal": [-1, 0, 0],
        "color": color_C
    })
});
//console.log(newContainer[0])
new deck.DeckGL({
    //mapStyle: 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json',
    //mapStyle: '	https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
    mapStyle: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
    initialViewState: {
        longitude: newContainer[0]["position"][0],
        latitude: newContainer[0]["position"][1],
        zoom: 3
    },
    controller: true,
    layers: [
        new deck.PointCloudLayer({
            id: 'path-layer',
            data: newContainer,
            pickable: false,
            pointSize: 3,
            getPosition: d => d.position,
            getNormal: d => d.normal,
            getColor: d => d.color
        })
    ]
});