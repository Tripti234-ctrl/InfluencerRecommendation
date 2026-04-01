document.getElementById("influencerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get input values
    let productType = document.getElementById("productType").value;
    let audience = document.getElementById("audience").value;
    let platform = document.getElementById("platform").value;

    // Dummy influencer data
    let influencers = [
        {name: "A", category: "Beauty", platform: "Instagram", score: 92},
        {name: "B", category: "Tech", platform: "YouTube", score: 85},
        {name: "C", category: "Fitness", platform: "Instagram", score: 88},
        {name: "D", category: "Beauty", platform: "Instagram", score: 80}
    ];

    // Filter influencers
    let filtered = influencers.filter(inf => 
        inf.category === productType && inf.platform === platform
    );

    // Sort by score (descending)
    filtered.sort((a, b) => b.score - a.score);

    // Display result
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h3>Recommended Influencers:</h3>";

    if(filtered.length === 0) {
        resultDiv.innerHTML += "No influencers found.";
        return;
    }

    filtered.forEach((inf, index) => {
        resultDiv.innerHTML += 
            (index + 1) + ". " + inf.name + " (Score: " + inf.score + ")<br>";
    });
});