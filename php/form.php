<?php
// Set database credentials
$servername = "sql7.freesqldatabase.com";
$username = "sql7615873";
$password = "uvedfqWAN1";
$dbname = "sql7615873";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Process form data
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Insert data into the database
    $sql = "INSERT INTO about (full_name, email, message) VALUES ('$name', '$email', '$message')";

    if (mysqli_query($conn, $sql)) {
        echo "<p style='
        background-color: #d4edda;
        color: #155724;
        padding: 10px;
        border: 1px solid #c3e6cb;
        border-radius: 5px;
        font-size: 1rem;
        width: 27%;
        margin-left: 320px;'
        >Your message are successfully sent!</p>";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}

// Close connection
mysqli_close($conn);
?>
