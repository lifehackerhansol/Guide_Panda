import { en_US as localeData } from './strings'

const sidebar_common = {
	text: localeData.other,
	items: [
		{ text: localeData.pages["contribute"], link: `/contribute` },
		{ text: localeData.pages["credits"], link: `/credits` },
		{ text: localeData.pages["privacy-policy"], link: `/privacy-policy` },
		{ text: localeData.pages["site-navigation"], link: `/site-navigation` }
	]
}

const themeConfig = {
	langMenuLabel: localeData.langMenuLabel,
	darkModeSwitchLabel: localeData.darkModeSwitchLabel,
	darkModeSwitchTitle: localeData.darkModeSwitchTitle,
	lightModeSwitchTitle: localeData.lightModeSwitchTitle,
	sidebarMenuLabel: localeData.sidebarMenuLabel,
	returnToTopLabel: localeData.returnToTopLabel,

	nav: [
		{ text: localeData.pages["troubleshooting"], link: `/troubleshooting` },
		{ text: localeData.pages["godmode9-usage"], link: `/godmode9-usage` }
	],
	sidebar: {
		[`/ntrboot`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["ntrboot"], link: `/ntrboot` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/flashing-ntrboot-(3ds-single-system)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["ntrboot"], link: `/ntrboot` },
					{ text: localeData.pages["flashing-ntrboot-(3ds-single-system)"], link: `/flashing-ntrboot-(3ds-single-system)` },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/flashing-ntrboot-(3ds-multi-system)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["ntrboot"], link: `/ntrboot` },
					{ text: localeData.pages["flashing-ntrboot-(3ds-multi-system)"], link: `/flashing-ntrboot-(3ds-multi-system)` },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/flashing-ntrboot-(dsi)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["ntrboot"], link: `/ntrboot` },
					{ text: localeData.pages["flashing-ntrboot-(dsi)"], link: `/flashing-ntrboot-(dsi)` },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/flashing-ntrboot-(nds)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["ntrboot"], link: `/ntrboot` },
					{ text: localeData.pages["flashing-ntrboot-(nds)"], link: `/flashing-ntrboot-(nds)` },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/installing-boot9strap-(ntrboot)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["ntrboot"], link: `/ntrboot` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/installing-boot9strap-(uloader)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["installing-boot9strap-(uloader)"], link: `/installing-boot9strap-(uloader)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		/*
		 	The `/` path needs to be at the bottom as a catch all! If it is placed anywhere above,
			it will select the first matching one and not parse the rest!
		*/
		[`/`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
	},
	footer: {
		copyright: 'Copyright © 2024 Nintendo Homebrew',
		items: [
			{ text: localeData.pages["contribute"], link: `/contribute` },
			{ text: localeData.pages["credits"], link: `/credits` },
			{ text: localeData.pages["privacy-policy"], link: `/privacy-policy` },
			{ text: localeData.pages["site-navigation"], link: `/site-navigation` }
		]
	}
};

export default {
	lang: "en",
	label: localeData.language,
    title: localeData.title,
    description: localeData.description,
    themeConfig: themeConfig
}
