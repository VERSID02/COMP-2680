// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Function to filter property listings based on price and location
    function filterListings() {
        // Get selected values from the price and location dropdowns
        const priceFilter = document.getElementById("price").value;
        const locationFilter = document.getElementById("location").value;

        // Get all property cards
        const properties = document.querySelectorAll(".property-card");

        // Loop through each property card
        properties.forEach((property) => {
            // Get the price and location attributes of the property
            const priceCategory = property.getAttribute("data-price");
            const locationCategory = property.getAttribute("data-location");

            // Check if the property matches the selected filters
            const priceMatch = priceFilter === "all" || priceFilter === priceCategory;
            const locationMatch = locationFilter === "all" || locationFilter === locationCategory;

            // Show or hide the property based on the filter match
            property.style.display = priceMatch && locationMatch ? "block" : "none";
        });
    }

    // Attach the filterListings function to the button's click event
    document.querySelector("button").addEventListener("click", filterListings);
});
