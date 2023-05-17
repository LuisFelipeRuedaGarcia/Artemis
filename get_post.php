<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>get post</title>
</head>
<body>
    <form action="get_post.php" method="post">
        <label>User</label>
        <input type="text" name="user">
        <label>Password</label>
        <input type="password" name="password" id="2">
        <input type="submit" value="enviar">
    </form>
</body>
</html>

<?php

if ($_POST){
    echo "{$_POST["user"]} <br>";
    echo "{$_POST["password"]} <br>";
}

?>