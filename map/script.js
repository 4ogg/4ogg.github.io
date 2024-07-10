const states = [
    { name: "AL", votes: 9 }, { name: "AK", votes: 3 }, { name: "AZ", votes: 11 },
    { name: "AR", votes: 6 }, { name: "CA", votes: 55 }, { name: "CO", votes: 9 },
    { name: "CT", votes: 7 }, { name: "DE", votes: 3 }, { name: "FL", votes: 29 },
    { name: "GA", votes: 16 }, { name: "HI", votes: 4 }, { name: "ID", votes: 4 },
    { name: "IL", votes: 20 }, { name: "IN", votes: 11 }, { name: "IA", votes: 6 },
    { name: "KS", votes: 6 }, { name: "KY", votes: 8 }, { name: "LA", votes: 8 },
    { name: "ME", votes: 4 }, { name: "MD", votes: 10 }, { name: "MA", votes: 11 },
    { name: "MI", votes: 16 }, { name: "MN", votes: 10 }, { name: "MS", votes: 6 },
    { name: "MO", votes: 10 }, { name: "MT", votes: 3 }, { name: "NE", votes: 5 },
    { name: "NV", votes: 6 }, { name: "NH", votes: 4 }, { name: "NJ", votes: 14 },
    { name: "NM", votes: 5 }, { name: "NY", votes: 29 }, { name: "NC", votes: 15 },
    { name: "ND", votes: 3 }, { name: "OH", votes: 18 }, { name: "OK", votes: 7 },
    { name: "OR", votes: 7 }, { name: "PA", votes: 20 }, { name: "RI", votes: 4 },
    { name: "SC", votes: 9 }, { name: "SD", votes: 3 }, { name: "TN", votes: 11 },
    { name: "TX", votes: 38 }, { name: "UT", votes: 6 }, { name: "VT", votes: 3 },
    { name: "VA", votes: 13 }, { name: "WA", votes: 12 }, { name: "WV", votes: 5 },
    { name: "WI", votes: 10 }, { name: "WY", votes: 3 }, { name: "DC", votes: 3 }
];

document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("grid");
    const demBar = document.getElementById("dem-bar");
    const repBar = document.getElementById("rep-bar");

    let demVotes = 0, repVotes = 0;

    states.forEach(state => {
        const div = document.createElement("div");
        div.className = "square";
        div.innerHTML = `<strong>${state.name}</strong><br><small>${state.votes}</small>`;
        div.data = { votes: state.votes, clicked: 0 };
        div.onclick = function() {
            this.data.clicked++;
            if (this.data.clicked === 1) {
                this.style.backgroundColor = "blue";
                demVotes += this.data.votes;
            } else if (this.data.clicked === 2) {
                this.style.backgroundColor = "red";
                repVotes += this.data.votes;
                demVotes -= this.data.votes;
            } else {
                this.style.backgroundColor = "#2c2f33"; // Reset to original color
                repVotes -= this.data.votes;
                this.data.clicked = 0;
            }
            updateBars();
        };
        grid.appendChild(div);
    });

	function updateBars() {
    demBar.style.height = `${(demVotes / 270) * 100}%`;
    demBar.textContent = `Dem: ${demVotes}`;
    demBar.style.backgroundColor = demVotes > 0 ? "blue" : "#2c2f33"; // Update color based on vote count
    repBar.style.height = `${(repVotes / 270) * 100}%`;
    repBar.textContent = `Rep: ${repVotes}`;
    repBar.style.backgroundColor = repVotes > 0 ? "red" : "#2c2f33"; // Update color based on vote count
	}

});
