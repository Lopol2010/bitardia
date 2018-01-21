<?php 

	$name = $_GET["getSong"];

	if(isset($_GET["getSong"])){

		$name = 'assets/music/' . $name . '.mp3';

	}

	die($name);

 ?>