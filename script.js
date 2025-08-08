document.addEventListener("DOMContentLoaded", function () {
    const statesCities = {
        "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur"],
        "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat"],
        "Assam": ["Guwahati", "Silchar", "Dibrugarh"],
        "Bihar": ["Patna", "Gaya", "Muzaffarpur"],
        "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur"],
        "Delhi": ["New Delhi", "Dwarka", "Rohini"],
        "Goa": ["Panaji", "Margao", "Vasco da Gama"],
        "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
        "Haryana": ["Gurgaon", "Faridabad", "Panipat"],
        "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala"],
        "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
        "Karnataka": ["Bangalore", "Mysore", "Hubli"],
        "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
        "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
        "Manipur": ["Imphal", "Thoubal", "Bishnupur"],
        "Meghalaya": ["Shillong", "Tura", "Jowai"],
        "Mizoram": ["Aizawl", "Lunglei", "Champhai"],
        "Nagaland": ["Kohima", "Dimapur", "Mokokchung"],
        "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
        "Punjab": ["Ludhiana", "Amritsar", "Jalandhar"],
        "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur"],
        "Sikkim": ["Gangtok", "Namchi", "Geyzing"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
        "Telangana": ["Hyderabad", "Warangal", "Karimnagar"],
        "Tripura": ["Agartala", "Dharmanagar", "Kailashahar"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
        "Uttarakhand": ["Dehradun", "Haridwar", "Rishikesh"],
        "West Bengal": ["Kolkata", "Howrah", "Durgapur"]
    };

    const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");

    // Populate states dropdown
    for (let state in statesCities) {
        let option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    }

    // Change cities based on selected state
    stateSelect.addEventListener("change", function () {
        citySelect.innerHTML = '<option value="">Select City</option>';
        let cities = statesCities[this.value] || [];
        cities.forEach(city => {
            let option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    });
});