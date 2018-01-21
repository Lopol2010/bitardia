<?php 

displaySongs();
			
function displaySongs()
{
	$list = array_diff(scandir('static/music/'), array('.', '..'));
	$list = array_values($list);
	for ($i=0; $i < count($list); $i++) { 

		$basename = $list[ $i ];
		$path = pathinfo($basename);
		$name = $path['filename'];

		if($i == 6 || $i == 3){
			$name = mb_detect_encoding($name);
		}

		echo songTemplate($name, $i);
	}

}
function songTemplate($text='', $id=0)
{
	return "<div class='song-name' song-id='". $id ."'>". $text ."</div>";
}

 ?>