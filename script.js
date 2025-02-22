// Sample data (replace with data from an API or backend)
const phones = [
    {
        name: "iPhone 14",
        brand: "Apple",
        specs: "6.1-inch display, A15 Bionic chip, 128GB storage",
        image_url: "https://via.placeholder.com/300x200.png?text=iPhone+14"
    },
    {
        name: "Galaxy S22",
        brand: "Samsung",
        specs: "6.1-inch display, Snapdragon 8 Gen 1, 128GB storage",
        image_url: "https://via.placeholder.com/300x200.png?text=Galaxy+S22"
    },
    {
        name: "Pixel 7",
        brand: "Google",
        specs: "6.3-inch display, Tensor G2, 128GB storage",
        image_url: "https://via.placeholder.com/300x200.png?text=Pixel+7"
    }
];

// Function to display phones
function displayPhones(phones) {
    const phoneList = document.getElementById('phone-list');
    phoneList.innerHTML = phones.map(phone => `
        <div class="phone-card">
            <img src="${phone.image_url}" alt="${phone.name}">
            <h2>${phone.name}</h2>
            <h3>${phone.brand}</h3>
            <p>${phone.specs}</p>
        </div>
    `).join('');
}

// Display phones on page load
displayPhones(phones);

// Optional: Fetch data from an API
/*
async function fetchPhones() {
    try {
        const response = await fetch('https://api.example.com/phones'); // Replace with your API endpoint
        const data = await response.json();
        displayPhones(data);
    } catch (error) {
        console.error('Error fetching phones:', error);
    }
}

fetchPhones();
*/
