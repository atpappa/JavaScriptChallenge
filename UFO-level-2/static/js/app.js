// from data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// UFO Sighting values for every single column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append one table row 'tr' for each UFO sighting OBJECT
    var row = tbody.append("tr");

    // Use 'Object.entries' to console.log each UFO sighting VALUE
    Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date to get the raw HTML nodes
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    // console.log the input value
    console.log(inputValue);

    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    // console.log the filtered values
    console.log(filteredData);

    filteredData.forEach(function(selections) {
    console.log(selections);
    // Append one table row 'tr' for each UFO sighting OBJECT
    var row = tbody.append("tr");

    // Use object.entries to console.log the UFO sighting VALUES
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each VALUE
        var cell = row.append("td");
        cell.text(value);
        });
    });
});