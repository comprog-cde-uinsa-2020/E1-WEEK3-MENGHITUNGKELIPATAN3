<!DOCTYPE html>
<html>
<head>
	<title>prokom week 4 </title>
</head>
<body>
	<h1>MENENTUKAN BANYAKNYA KELIPATAN 3 PADA BILANGAN 3-180</h1>
	<h2>kelompok 2 kelas E</h2>
 
 
	<button onclick="perulangan()">KLIK HERE!!!</button>	
 
	<!-- id hasil -->
	<div id="hasil"></div>
 
	<script>
		function perulangan() {
		    var text = "";
		    var x;
            for (x = 1; x <= 60; x++) 
            {
                i=3*x;
		        text += "Bilangan" + i + "<br>";
		    }
		    document.getElementById("hasil").innerHTML = text;
		}
	</script>	
</body>
</html>