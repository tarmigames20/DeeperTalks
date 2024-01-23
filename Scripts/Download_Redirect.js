//<-- **** REDIRECT SCRIPT **** -->
	
//<script>
	function Try_Download_Redirect(){
		let os = getMobileOperatingSystem();
		if (os == "Android") {
			window.location.href = "https://play.google.com/store/apps/details?id=com.Tarmi.GetDeeperTalks"; 
		} else if (os == "iOS") {
			window.location.href = "https://apps.apple.com/us/app/deeper-talks-relationships/id1590680216";
		} else {
			window.location.href = "https://www.deepertalks.com";
		}
	}
	//</script>
		
	//<script>
	function getMobileOperatingSystem() {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;

		// Windows Phone must come first because its UA also contains "Android"
		if (/windows phone/i.test(userAgent)) {
			return "Windows Phone";
		}
		if (/android/i.test(userAgent)) {
			return "Android";
		}
		// iOS detection from: http://stackoverflow.com/a/9039885/177710
		if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
			return "iOS";
		}
		return "unknown";
	}
	//</script>

//<!-- **** REDIRECT SCRIPT **** -->