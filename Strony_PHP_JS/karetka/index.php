<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   

    <section>
        <form method="post">
            <input type="number" min="1" max="5" name="liczba">
            <button>wyświetl</button>
        </form>
    </section>
     <?php
    $con = mysqli_connect('localhost','root','','baza2');
    $number = $_POST['liczba'];
    $zap = mysqli_query($con, "SELECT gatunek, wystepowanie FROM zwierzeta WHERE Gromady_id = '$number';");
    switch ($number) {
        case '1':
            echo '<h2>ryby</h2>';
            break;
            case '2':
                echo '<h2>płazy</h2>';
                break;
                case '3':
                echo '<h2>gady</h2>';
                break;
                case '4':
                    echo '<h2>ptaki</h2>';
                    break;
                    case '5':
                        echo '<h2>ssaki</h2>';
                        break;

        
            
        
        default:
            
            break;


    }


    while($wyn = mysqli_fetch_array($zap)) {
        
        echo $wyn['gatunek'].', '.$wyn['wystepowanie'];
        

    }


    ?>

    <?php
    $con = mysqli_connect('localhost', 'root', '' , 'baza2');

    $zap = mysqli_query($con, "SELECT zwierzeta.id, `gatunek`, `nazwa` FROM `zwierzeta`, `gromady` WHERE zwierzeta.Gromady_id = gromady.id;");

    while($wyn = mysqli_fetch_array($zap)) {   

        echo $wyn['id'].'.'.$wyn['gatunek'].', '.$wyn['nazwa'].'</br>';
    }





    mysqli_close($con);

    ?>
</body>
</html>