
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Final_Streetsmerged_streets_1": {
            "type": "geojson",
            "data": json_Final_Streetsmerged_streets_1
        }
                    ,
        "Parcels_Final_noduplicates_2": {
            "type": "geojson",
            "data": json_Parcels_Final_noduplicates_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_Final_Streetsmerged_streets_1_0",
            "type": "line",
            "source": "Final_Streetsmerged_streets_1",
            "layout": {},
            "paint": {'line-width': 0.982677165366, 'line-opacity': 1.0, 'line-color': '#d5b43c'}
        }
,
        {
            "id": "lyr_Parcels_Final_noduplicates_2_0",
            "type": "fill",
            "source": "Parcels_Final_noduplicates_2",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#f3a6b2'}
        }
],
}