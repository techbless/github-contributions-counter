<?php

  include('./simple_html_dom.php');

  $html = file_get_html('https://github.com/YunbinChang');

  foreach($html -> find('img') as $element)
    echo $element -> src . '<br>';


?>