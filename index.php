<?php

$verzeichnis = "img/slider/";
// Array initialisieren
$bildArray = array();
// Verzeichnis öffnen
$verzeichnisinhalt = scandir($verzeichnis);

// Durch Verzeichnisinhalt iterieren
foreach ($verzeichnisinhalt as $datei) {
	// Nur Dateien berücksichtigen (keine Verzeichnisse)
	if (is_file($verzeichnis . $datei) && pathinfo($verzeichnis . $datei, PATHINFO_EXTENSION) === 'jpg') {
		// Pfad und Dateiname zum Array hinzufügen
		$bildArray[] = $verzeichnis . $datei;
	}
}
$bildlength = count($bildArray);

$csvSlider = "img/slider/slider.csv";
$arrayInhalt = [];

if (file_exists($csvSlider)) {
	$csvSlider = fopen($csvSlider, "r");

	while (($csvInhalt = fgetcsv($csvSlider, 1000, ";")) !== FALSE) {
		$arrayInhalt[] = [
			"id" => $csvInhalt[0],
			"titel" => $csvInhalt[1],
			"beschreibung" => $csvInhalt[2]
		];
	}

	fclose($csvSlider);
} else {
	print_r("Datei nicht gefunden!");
}

// Ausgabe des Arrays
//echo $arrayInhalt[1]["id"];
//echo $arrayInhalt[1]["titel"];
//echo $arrayInhalt[1]["beschreibung"];

function bildID($value)
{
	$pattern = "/img\/slider\/slider-/";
	$replace = "";
	$value = preg_replace($pattern, $replace, $value);
	$pattern2 = "/.jpg/";
	$replace2 = "";
	$value = preg_replace($pattern2, $replace2, $value);
	return $value;

}

?>



<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>NieR Automata</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
	<link rel="icon" href="img/dog-fav-icon.png">
	<link rel="stylesheet" type="text/css" href="css/index-css.css">

</head>

<body>
	<header>
		<div class="headerSlider">
			<?php foreach ($bildArray as $bild) { ?>
				<div class="slides fade">
				<p class="test"><?php echo $arrayInhalt[bildID($bild)]["titel"]; ?></p>
					<img src="<?php echo $bild; ?>">
				</div>
			<?php } ?>
		</div>
		<a class="prev">&#10094;</a>
		<a class="next">&#10095;</a>
	</header>


	<!-- Header element -->


	<!-- The dots/circles -->
	<div style="text-align:center">
		<?php foreach ($bildArray as $bild) { ?>
			<span class="dot"></span>
		<?php } ?>
	</div>

	<!-- Main element -->
	<main>
		<h2>About NieR Automata</h2>

		<p>Im Jahr 11.945 setzt die Geschichte von Nier: Automata an. Fremdartige Wesen überfielen mit einer Armee aus
			Maschinen die Erde und vernichten seitdem sämtliches humanoides Leben. Der überlebende Teil der Menschheit
			zieht sich auf den Mond zurück und organisiert von dort den Widerstand.</p>
		<div class="mainImg">
			<img src="img/about-nier-automata.jpg">
			<p class="img-txt">Artwork</p>
		</div>

		<!-- Accordion -->
		<!-- Inhalt 1 -->
		<button class="accordion">2B</button>
		<div class="panel">
			<div>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum voluptatum debitis ullam
					commodi alias id magnam non hic cum. Id ducimus, optio rem deleniti ea ipsa soluta ipsum non!</p>
			</div>
			<div class="accImg">
				<img src="img/2b-dust-art.jpg" alt="2b-dust-art">
			</div>
		</div>

		<!-- Inhalt 2 -->
		<button class="accordion">9S</button>
		<div class="panel">
			<div>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum voluptatum debitis ullam
					commodi alias id magnam non hic cum. Id ducimus, optio rem deleniti ea ipsa soluta ipsum non!</p>
			</div>
			<div class="accImg">
				<img src="img/9s-art.jpg" alt="2b-dust-art">
			</div>
		</div>

		<!-- Inhalt 2 -->
		<button class="accordion">A2</button>
		<div class="panel">
			<div>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum voluptatum debitis ullam
					commodi alias id magnam non hic cum. Id ducimus, optio rem deleniti ea ipsa soluta ipsum non!</p>
			</div>
			<div class="accImg">
				<img src="img/a2-art.jpg" alt="2b-dust-art">
			</div>
		</div>



		<!-- 2B Characteristics -->
		<h2>2B Characteristics</h2>
		<ol>
			<li><b>Determination</b>: 2B is extremely determined and focused on her mission. She goes to great lengths
				to fulfill her tasks and demonstrates a willingness to make sacrifices for the betterment of humanity.
			</li>
			<li><b>Composure</b>: 2B often displays a calm and composed demeanor, even in dangerous or stressful
				situations. This cool composure helps her make wise decisions and effectively deal with challenges in
				her environment.</li>
			<li><b>Aura</b>: 2B carries a mysterious aura around her. Her character conceals deeper emotions and
				backgrounds that are gradually unveiled as the story progresses. This mysterious aspect makes her
				intriguing for players and adds depth to her personality.</li>
		</ol>

		<!-- Dog breeds -->
		<h2>Side Characters</h2>
		<p>Here are some Side Charakters:</p>
		<ul>
			<li>Commander</li>
			<li>Operator 6O</li>
			<li>Operator 21O</li>
			<li>Pascal</li>
			<li>Emil</li>
			<li>Adam</li>
			<li>Eve</li>
		</ul>
	</main>

	<!-- Footer element -->
	<footer>
		<p>This Site was created by: &copy; Marcel</p>


</body>
<script language="javascript" type="text/javascript" src="javascript/index-js.js"></script>

</html>