		var apple_guides = document.getElementById('apple_guides');
		var android_guide = document.getElementById('android_guide');
		var roku_guides = document.getElementById('roku_guides');
		var webkit_guide = document.getElementById('webkit_guide');
		var ad_ops_guide = document.getElementById('ad_ops_guide');
		
		function goto(name){
			this.location.href = name;
		}

		document.getElementById('apple_guides').addEventListener('click', function(){
			goto('/sdk/gen2/guides/apple.html');
		});

		document.getElementById('android_guide').addEventListener('click', function(){
			goto('/sdk/gen2/guides/android.html');
		});

		document.getElementById('roku_guides').addEventListener('click', function(){
			goto('/sdk/gen2/guides/ios.html');
		});

		document.getElementById('webkit_guide').addEventListener('click', function(){
			goto('/sdk/gen2/guides/webkit.html');
		});

		document.getElementById('ad_ops_guide').addEventListener('click', function(){
			goto('/sdk/gen2/guides/ad-ops.html');
		});
