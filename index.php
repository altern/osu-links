<?php include('url.config.php'); ?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
    "http://www.w3.org/TR/html4/strict.dtd">
<html>
    <head>
        <title>
            Oregon State University links
        </title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="stylesheet" type="text/css" href="css/layout.css">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <script type="text/javascript" src="js/jquery/jquery-1.5.1.min.js"></script>
        <script type="text/javascript" src="js/index.js"></script>
    </head>

    <body>

    <div id="content">
        
        <?php 
        $rows_num = 4;
        for($i = 0; $i < $rows_num; $i++):
        ?>
        <div class="page_margins">    
            <div id="border-top" >
                <div id="edge-tl"></div>
                <div id="edge-tr"></div>
            </div>
            <div class="page" >
                <ul class="links_list" style="text-align: center">
                    <?php 
                        $URL = array_slice($URLS, $i*(ceil(count($URLS)/$rows_num)), ceil(count($URLS)/$rows_num));
                        foreach($URL as $key => $url) {
                            echo '<li'.(isset($url['shortcut']) ? ' shortcut="'.$url['shortcut'].'"': '' ).'>
                                <a target="_blank" href="'.$url['link'].'" >
                                    <img src="images/'.$url['image'].'" align="middle" '.(isset($url['top']) ? 'style="top:'.$url['top'].'px"' : '').'/>
                                    <span>'.$url['text'].'</span>
                                </a>
                            </li>'."\n";
                        }
                    ?>
                </ul>
            </div>
            <div id="border-bottom">
                <div id="edge-bl"></div>
                <div id="edge-br"></div>
            </div>
        </div>
        <?php endfor; ?>                
        <div style="height: 50px"></div> 
        <?php 
        $rows_num = 3;
        for($i = 0; $i < $rows_num; $i++):
        ?>
        <div class="page_margins">    
            <div id="border-top" >
                <div id="edge-tl"></div>
                <div id="edge-tr"></div>
            </div>
            <div class="page" >
                <ul class="links_list" style="text-align: center">
                    <?php 
                        $URL = array_slice($URLS_, $i*(ceil(count($URLS_)/$rows_num)), ceil(count($URLS_)/$rows_num));
                        foreach($URL as $key => $url) {
                            echo '<li'.(isset($url['shortcut']) ? ' shortcut="'.$url['shortcut'].'"': '' ).'>
                                <a target="_blank" href="'.$url['link'].'" >
                                    <img src="images/'.$url['image'].'" align="middle" '.(isset($url['top']) ? 'style="top:'.$url['top'].'px"' : '').'/>
                                    <span>'.$url['text'].'</span>
                                </a>
                            </li>'."\n";
                        }
                    ?>
                </ul>
            </div>
            <div id="border-bottom">
                <div id="edge-bl"></div>
                <div id="edge-br"></div>
            </div>
        </div>
        <?php endfor; ?>  
    </div>
    </body>
</html>
