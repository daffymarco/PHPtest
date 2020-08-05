<!-- Index da Página -->
<?php
    require_once "config/connect.php";

    require "modal/modal_alert.php";
    
?>
<html>
    <head>
        <!-- Required meta tags-->
        <meta charset="UTF-8">

        <title>PHPtest</title>

        <!-- CSS-->
        <link rel="stylesheet" type="text/css" href="style/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="style/css/phptest.css">
        
        <!-- Jquery JS-->
        <script src="style/js/jquery.min.js"></script>
        <script src="style/js/bootstrap.min.js"></script>
        <script src="js/register.js"></script>
        
    </head>

    <body>
        <!-- *** Top Bar *** -->
        <div class="row container">
            <div class="col-md-12 topbar">
                <img class="topbar-logo" src="style/img/logo.png" alt="PHPtest"/>
            </div> 
                <div class="col-md-8 content">
                    <div style="display:flex;flex-direction:row;height: 40px;">
                        <input type="text" class="form-control input" maxlength="9" id="inputCEP" placeholder="cep" aria-label="CEP" aria-describedby="basic-addon2">
                        <input class="btn btn-success button-send button" type="button" id="consult" value="Consultar CEP">
                    </div>
                     <div id="result"></div>
                    
                    </div>
                    
                </div>
            </div>
           
        </div>
            
    </body>
</html>
