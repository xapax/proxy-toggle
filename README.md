# proxy-toggle


Simple firefox extension to enable toggle between no proxy settings and manually set proxy settings. Useful when using burp. 


If you click the little icon firefox will toggle between `none` and `manual`. When `manual` it will hold the following settings:

```javascript
		let proxySettings = {
			proxyType: "manual",
			http: "http://127.0.0.1:8080",
			ssl: "http://127.0.0.1:8080",
			socksVersion: 5,
		};
```

If you want other settings you need to disable the extension.

It will not work in version below 60 in firefox.

Can be installed here:
https://addons.mozilla.org/en-US/firefox/addon/ptoggle/

Or from here:
wget https://github.com/xapax/proxy-toggle/raw/master/proxy_toggle-1.0-an+fx.xpi
