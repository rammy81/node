function createVisualization() {
  const data = [4, 8, 15, 16, 23, 42];

  const width = 420;
  const barHeight = 20;

  const x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

  const chart = d3.select("#bar1")
    .append("svg")
      .attr("width", width)
      .attr("height", barHeight * data.length);

  const bar = chart.selectAll("g")
    .data(data)
    .enter().append("g")
      .attr("transform", (d, i) => `translate(0,${i * barHeight})`);

  bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1);

  bar.append("text")
    .attr("x", d => x(d) - 3)
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(d => d);
}

createVisualization();


function createInteractiveBarChart() {
  const data = [4, 8, 15, 16, 23, 42];

  const width = 420;
  const barHeight = 20;

  const x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

  const chart = d3.select("#barc")
    .append("svg")
      .attr("width", width)
      .attr("height", barHeight * data.length);

  const bar = chart.selectAll("g")
    .data(data)
    .enter().append("g")
      .attr("transform", (d, i) => `translate(0,${i * barHeight})`);

  bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1)
    .on("mouseover", function() {
      d3.select(this).style("fill", "orange");
    })
    .on("mouseout", function() {
      d3.select(this).style("fill", "steelblue");
    });

  bar.append("text")
    .attr("x", d => x(d) - 3)
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(d => d);
}

createInteractiveBarChart();

function createInteractiveBarChart() {
  // Your D3 code to create the interactive bar chart with a tooltip


// Call the function to create the bar chart
create400px();

const data = [
  { label: 'A', value: 10 },
  { label: 'B', value: 15 },
  { label: 'C', value: 20 },
  { label: 'D', value: 25 },
  { label: 'E', value: 30 },
];

const width = 400;
const height = 200;
const margin = { top: 20, right: 20, bottom: 40, left: 40 };

const x = d3.scaleBand()
  .domain(data.map(d => d.label))
  .range([margin.left, width - margin.right])
  .padding(0.1);

const y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)]).nice()
  .range([height - margin.bottom, margin.top]);

const xAxis = g => g
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x).tickSizeOuter(0));

const yAxis = g => g
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y))
  .call(g => g.select(".domain").remove());

const tooltip = d3.select("#tooltip");

const svg = d3.select("fourhun").append("svg")
  .attr("width", width)
  .attr("height", height);

svg.append("g")
  .attr("fill", "steelblue")
  .selectAll("rect")
  .data(data)
  .join("rect")
    .attr("x", d => x(d.label))
    .attr("y", d => y(d.value))
    .attr("height", d => y(0) - y(d.value))
    .attr("width", x.bandwidth())
    .on("mouseover", (event, d) => {
      tooltip.style("opacity", 1)
        .html(`Label: ${d.label}<br>Value: ${d.value}`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px");
    })
    .on("mousemove", (event, d) => {
      tooltip.style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px");
    })
    .on("mouseout", () => {
      tooltip.style("opacity", 0);
    });

svg.append("g")
  .call(xAxis);

svg.append("g")
  .call(yAxis);
}

// Call the function to create the bar chart
create400px();
