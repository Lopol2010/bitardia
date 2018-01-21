<!-- <!DOCTYPE html> -->
<html>
<head>
	<meta charset="UTF-8">
	<title>Bitardia</title>
	<title></title>
	<!-- <link rel="stylesheet" type="text/css" href="style.sass"> -->
</head>
<body>
	<div class="middle-col">
		<div class="mcbox logo">
			<img src="client/assets/images/mad2.png">
		</div>


		<div class="mcbox server-block">
			<div class="status"></div>
			<div class="title">Bitardia - здесь все твои друзья.</div>
			<div class="ip">178.32.99.95:25917</div>
		</div>

		<div class="mcbox players">
			<div class="title">ИГРОКИ ОНЛАЙН</div>
			<div class="list"></div>
		</div>

		<div class="music-block">

			<!-- <div class="mcbox"> -->
				
				
			<!-- </div> -->
			<div class="mcbox">
				<div class="control-wrap">
					<div class="control volume">
						громкость
						<div class="pisya"></div>
					</div>
					<button class=" control button">ЗАКАЗАТЬ ПЕСНЮ</button>
				</div>
				<?php include 'server/song-list.php'; ?>
				


			</div>
		</div>

		<div class="credits">
			Сайт сделан degenerat™. При поддержке Boshy Inc. А так же KaPaCb Studios.
			Душевный заказ Душевных песен в чате дискорда.
		</div>

	</div>
	

	<audio>
		<!-- <source src='' type="audio/mpeg"></source> -->
	</audio>
	<script type="text/javascript" src="client/bundle.js"></script>
	
</body>
</html>

