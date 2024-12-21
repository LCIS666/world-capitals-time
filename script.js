// 定义主要世界首都及其时区
const capitals = [
    { name: '北京', timezone: 'Asia/Shanghai' },
    { name: '伦敦', timezone: 'Europe/London' },
    { name: '纽约', timezone: 'America/New_York' },
    { name: '东京', timezone: 'Asia/Tokyo' },
    { name: '巴黎', timezone: 'Europe/Paris' },
    { name: '悉尼', timezone: 'Australia/Sydney' }
];

// Function to create capital cards
function createCapitalCards() {
    const container = document.getElementById('capitals-container');
    capitals.forEach(capital => {
        const card = document.createElement('div');
        card.className = 'capital-card';
        card.innerHTML = `
            <div class="capital-name">${capital.name}</div>
            <div class="capital-time" id="${capital.name.toLowerCase()}-time"></div>
        `;
        container.appendChild(card);
    });
}

// Function to update times
function updateTimes() {
    capitals.forEach(capital => {
        const timeElement = document.getElementById(`${capital.name.toLowerCase()}-time`);
        const time = new Date().toLocaleTimeString('en-US', {
            timeZone: capital.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        timeElement.textContent = time;
    });
}

// Initialize the app
createCapitalCards();
updateTimes();
// Update times every second
setInterval(updateTimes, 1000);
