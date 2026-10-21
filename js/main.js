// Embeds every chart. Each specification lives in its own JSON file in /js.
const theme = {
  background: null,
  font: "IBM Plex Sans, system-ui, sans-serif",
  view: {stroke: null},
  axis: {
    labelColor: "#57534a", titleColor: "#57534a", labelFontSize: 11.5, titleFontSize: 12,
    titleFontWeight: 600, gridColor: "#ece6d6", domainColor: "#c9c0aa", tickColor: "#c9c0aa"
  },
  legend: {labelColor: "#57534a", titleColor: "#1d1b16", labelFontSize: 11.5, titleFontSize: 12, titleFontWeight: 600},
  header: {labelFont: "IBM Plex Sans, system-ui, sans-serif"},
  text: {font: "IBM Plex Sans, system-ui, sans-serif"}
};

const charts = [
  ["#v01", "js/01_map_museums.vl.json"],
  ["#v02", "js/02_lollipop_size.vl.json"],
  ["#v03", "js/03_treemap_am.vg.json"],
  ["#v04", "js/04_heatmap_groups.vl.json"],
  ["#v05", "js/05_bar_types.vl.json"],
  ["#v06", "js/06_choropleth_states.vl.json"],
  ["#v07", "js/07_butterfly_home.vl.json"],
  ["#v08", "js/08_grid_density.vl.json"],
  ["#v09", "js/09_grid_leader.vl.json"],
  ["#v10", "js/10_stream_decades.vl.json"],
  ["#v11", "js/11_bump_rank.vl.json"],
  ["#v12", "js/12_waffle_digitised.vl.json"],
  ["#v13", "js/13_dot_images.vl.json"]
];

charts.forEach(([el, url]) => {
  vegaEmbed(el, url, {actions: false, config: theme, renderer: "svg"})
    .then(() => {
      // put any dropdown/radio controls above the chart rather than below it
      const host = document.querySelector(el);
      const bind = host.querySelector(".vega-bindings");
      if (bind) host.prepend(bind);
    })
    .catch(err => {
      console.error(url, err);
      document.querySelector(el).textContent = "Chart failed to load: " + url;
    });
});
