const names = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve'];
const occupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Consultant'];

const freelancers = [
    { name: 'Alice', occupation: 'Writer', price: 30 },
    { name: 'Bob', occupation: 'Teacher', price: 50 }
];

function renderFreelancers() {
    const tableBody = document.getElementById('freelancerTable');
    tableBody.innerHTML = '';

    freelancers.forEach(freelancer => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${freelancer.name}</td><td>${freelancer.occupation}</td><td>$${freelancer.price}</td>`;
        tableBody.appendChild(row);
    });

    updateAveragePrice();
}

function updateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const average = (total / freelancers.length).toFixed(2);
    document.getElementById('averagePrice').textContent = `Average Starting Price: $${average}`;
}

function addRandomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = Math.floor(Math.random() * 100) + 20; // Random price between $20 and $120

    freelancers.push({ name: randomName, occupation: randomOccupation, price: randomPrice });
    renderFreelancers();
}

renderFreelancers();

setInterval(addRandomFreelancer, 3000);
