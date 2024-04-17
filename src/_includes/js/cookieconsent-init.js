var cc = initCookieConsent();

// run plugin with config object
cc.run({
	current_lang: "es",
	autoclear_cookies: true, // default: false
	cookie_name: "cc_cookie", // default: 'cc_cookie'
	cookie_expiration: 365, // default: 182
	force_consent: true, // default: false
	autorun: "{{ page.url }}" !== "/cookies-usage/",

	// page_scripts: false,                         // default: false
	// auto_language: null,                     // default: null; could also be 'browser' or 'document'
	// autorun: true,                           // default: true
	// delay: 0,                                // default: 0
	// hide_from_bots: false,                   // default: false
	// remove_cookie_tables: false              // default: false
	// cookie_domain: location.hostname,        // default: current domain
	// cookie_path: '/',                        // default: root
	// cookie_same_site: 'Lax',
	// use_rfc_cookie: false,                   // default: false
	// revision: 0,                             // default: 0

	gui_options: {
		consent_modal: {
			layout: "cloud", // box,cloud,bar
			position: "middle center", // bottom,middle,top + left,right,center
			transition: "zoom", // zoom,slide
		},
		settings_modal: {
			layout: "bar", // box,bar
			position: "left", // right,left (available only if bar layout selected)
			transition: "slide", // zoom,slide
		},
	},

	/* 	onFirstAction: function () {
		console.log("onFirstAction fired");
	},

	onAccept: function () {
		console.log("onAccept fired!");

		// If analytics category is disabled => load all iframes automatically
		if (cc.allowedCategory("analytics")) {
			console.log("iframemanager: loading all iframes");
			manager.acceptService("all");
		}
	}, */

	onChange: function (cookie, changed_preferences) {
		/* 		console.log("onChange fired!");

		// If analytics category is disabled => ask for permission to load iframes
		if (!cc.allowedCategory("analytics")) {
			console.log("iframemanager: disabling all iframes");
			manager.rejectService("all");
		} else {
			console.log("iframemanager: loading all iframes");
			manager.acceptService("all");
		} */
	},

	languages: {
		en: {
			consent_modal: {
				title: "COOKIES  USAGE",
				description:
					"{{ client.siteName }} uses its own and third-party cookies to enable and improve your browsing experience, show you personalized advertising as well as to perform statistical analysis. You can choose whether to accept the cookies used by Premium Dental Clinics, or you can spend a few minutes customizing them by clicking 'Customize'. <br /><br />You will obtain more information in our <a href='/cookies-usage/' class='cc-link'>cookie policy</a>.",
				primary_btn: {
					text: "Accept and continue browsing",
					role: "accept_all", //'accept_selected' or 'accept_all'
				},
				secondary_btn: {
					text: "Personalize",
					role: "settings", //'settings' or 'accept_necessary'
				},
				revision_message:
					"<br><br>Dear user: the terms and conditions have changed since your last visit!",
			},
			settings_modal: {
				title: "Cookie Settings",
				save_settings_btn: "Save settings",
				accept_all_btn: "Accept all",
				reject_all_btn: "Reject everything",
				close_btn_label: "Close",
				cookie_table_headers: [
					{ col1: "Name" },
					{ col2: "Domain" },
					{ col3: "Description" },
				],
				blocks: [
					{
						title: "The protection of your data is our priority",
						description:
							"{{ client.siteName }} uses its own and third-party cookies to enable and improve your browsing experience, show you personalized advertising as well as to perform statistical analysis.",
					},
					{
						title: "Strictly necessary cookies",
						description:
							"They are those that allow the user to navigate through a web page, platform or application and the use of the different options or services that exist therein, including those that the editor uses to allow the management and operation of the web page and enable its functions and services.",
						toggle: {
							value: "necessary",
							enabled: true,
							readonly: true, //cookie categories with readonly=true are all treated as "necessary cookies"
						},
					},
					{
						title: "Statistical cookies",
						description:
							"Statistical cookies help website owners understand how visitors interact with those pages by collecting and providing information anonymously.",
						toggle: {
							value: "analytics",
							enabled: false,
							readonly: false,
						},
						cookie_table: [
							{
								col1: "^_ga",
								col2: "{{ client.domain }}",
								col3: "Registers a unique ID that is used to generate statistical data about how the visitor uses the website. It is of type HTTP and expires after two years.",
								is_regex: true,
							},
							{
								col1: "_gat",
								col2: "{{ client.domain }}",
								col3: "Used by Google Analytics to monitor request rate. It is of type HTTP and expires in one day.",
							},
							{
								col1: "_gid",
								col2: "{{ client.domain }}",
								col3: "Registers a unique ID that is used to generate statistical data about how the visitor uses the website. It is of type HTTP and expires in one day.",
							},
						],
					},
					{
						title: "Marketing cookies",
						description:
							"Marketing cookies are used to track visitors across web pages. The intention is to display advertisements that are relevant and engaging to the individual user, and therefore more valuable to publishers and third-party advertisers.",
						toggle: {
							value: "marketing",
							enabled: false,
							readonly: false,
						},
						cookie_table: [
							{
								col1: "_fbp",
								col2: "{{ client.domain }}",
								col3: "Used by Facebook to provide a series of advertising products, such as bids, in real time from third-party advertisers. It is of type HTTP and expires after three months.",
								is_regex: true,
							},
							{
								col1: "_gcl_au",
								col2: "{{ client.domain }}",
								col3: "Used by Google AdSense to experiment with advertising efficiency across websites using their services. It is of type HTTP and expires after three months.",
							},
							{
								col1: "fr",
								col2: "{{ client.domain }}",
								col3: "Used by Facebook to provide a series of advertising products such as real-time bidding, from third-party advertisers. It is of type HTTP and expires after three months.",
							},
						],
					},
					{
						title: "More information",
						description:
							"You can get more information in our <a href='/cookies-usage/' class='cc-link'>cookie policy</a>.",
					},
				],
			},
		},
	},
});
