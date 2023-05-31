<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <?php

            $con = mysqli_connect("localhost","root","","ratownictwo");
        
            $zap = mysqli_query($con,"INSERT INTO `zgloszenia`(`ratownicy_id`, `dyspozytorzy_id`, `adres`, `pilne`, `czas_zgloszenia`) VALUES ('1','4','Warszawa, Staszica 34/5','0','13:16:00');");

            $wyn = mysqli_fetch_array($zap)
        
        
            mysqli_close($con);
        ?>
    </table>
</body>
</html>