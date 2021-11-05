import AnyChart from 'anychart-react'
import { useEffect } from 'react';

const GeoChart3 = () => {
  
  const style = {
    width: "400px",
    margin: "0 auto",
  };

  useEffect(() => {
    anychart.onDocumentReady(function () {
      // The data used in this sample can be obtained from the CDN
      // https://cdn.anychart.com/samples/maps-general-features/world-bubble-map/data.json
      anychart.data.loadJsonFile(
        'https://cdn.anychart.com/samples/maps-general-features/world-bubble-map/data.json',
        function (data) {
          var map = anychart.map();
          map
            .credits()
            .enabled(true)
            .url(
              'https://en.wikipedia.org/wiki/List_of_sovereign_states_and_dependent_territories_by_population_density'
            )
            .logoSrc('https://en.wikipedia.org/static/favicon/wikipedia.ico')
            .text(
              'Data source: https://en.wikipedia.org/wiki/List_of_sovereign_states_and_dependent_territories_by_population_density'
            );

          map
            .title()
            .enabled(true)
            .useHtml(true)
            .padding([10, 0, 10, 0])
            .text(
              'Worlds Population by Country<br/>' +
              '<span  style="color:#929292; font-size: 12px;">' +
              '(Data was collected from Wikipedia, 2015)</span>'
            );

          map.geoData('anychart.maps.world');

          map.interactivity().selectionMode('none');
          map.padding(0);

          var dataSet = anychart.data.set(data);
          var densityData = dataSet.mapAs({ size: 'population' });
          var series = map.bubble(densityData);

          // set chart bubble settings
          map.maxBubbleSize('7%').minBubbleSize('0.3%');

          series.labels(false).selectionMode('none');

          var choropleth = map.choropleth(densityData);
          choropleth
            .selectionMode('none')
            .fill('#eaeaea')
            .stroke('#D2D2D2')
            .labels(false);

          choropleth.hovered().stroke('#eaeaea').fill('#D2D2D2');

          map
            .tooltip()
            .useHtml(true)
            .format(function () {
              return (
                '<span style="color: #d9d9d9">Density</span>: ' +
                parseFloat(this.getData('density')).toLocaleString() +
                ' pop./km² <br/>' +
                '<span style="color: #d9d9d9">Population</span>: ' +
                parseInt(this.getData('population')).toLocaleString() +
                '<br/>' +
                '<span style="color: #d9d9d9">Area</span>: ' +
                parseInt(this.getData('area')).toLocaleString() +
                ' km²'
              );
            });

          // create zoom controls
          var zoomController = anychart.ui.zoom();
          zoomController.render(map);

          // set container id for the chart
          map.container('container');
          // initiate chart drawing
          map.draw();
        }
      );
    });
  },[])

  return (
    <>
      <div style={style}>
        <div style="width: 1000px; height: 500px;" id="container"></div>
      </div>
    </>
  );
};

export default GeoChart3;
