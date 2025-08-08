<?php
$servername = "localhost";
$username = "root"; // Change if needed
$password = ""; // Set if applicable
$dbname = "user_data";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$phone = $_POST['phone'];
$state = $_POST['state'];
$city = $_POST['city'];
$email = $_POST['email'];

// Insert into database
$sql = "INSERT INTO users (first_name, last_name, phone, state, city, email)
        VALUES ('$first_name', '$last_name', '$phone', '$state', '$city', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "<script>
            alert('Registration Successful!');
            window.location.href = 'test.html'; // Redirect to the desired page
          </script>";
} else {
    echo "<script>
            alert('Error: " . $conn->error . "');
            window.location.href = 'test.html'; // Redirect back in case of error
          </script>";
}


$conn->close();
?>
