function openPage() {

	var getting= browser.proxy.settings.get({})
	getting.then((got) => {
    //console.log(got.value.proxyType)

	if (got.value.proxyType == "manual"){
	//		console.log("It is manual now")
		let proxySettings = {
			proxyType: "none"
		};
		browser.proxy.settings.set({value: proxySettings});
	}
        else if (got.value.proxyType == "none"){
	//	console.log("It is none now")
		let proxySettings = {
			proxyType: "manual",
			http: "http://127.0.0.1:8080",
			ssl: "http://127.0.0.1:8080",
			socksVersion: 5,
		};
		browser.proxy.settings.set({value: proxySettings});
	}

});
}

browser.browserAction.onClicked.addListener(openPage)
