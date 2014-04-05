// This is the Debian specific preferences file for Iceweasel
// You can make any change in here, it is the purpose of this file.
// You can, with this file and all files present in the
// /etc/iceweasel/pref directory, override any preference that is
// present in /usr/lib/iceweasel/defaults/preferences directory.
// While your changes will be kept on upgrade if you modify files in
// /etc/iceweasel/pref, please note that they won't be kept if you
// do make your changes in /usr/lib/iceweasel/defaults/preferences.
//
// Note that lockPref is allowed in these preferences files if you
// don't want users to be able to override some preferences.

pref("extensions.update.enabled", true);

// Use LANG environment variable to choose locale
pref("intl.locale.matchOS", true);

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);
pref("extensions.autoDisableScopes", 0);

user_pref("network.http.pipelining", true);
user_pref("network.http.pipelining.aggressive", true);
user_pref("network.http.pipelining.maxrequests", 12);
user_pref("network.http.pipelining.ssl", true);
user_pref("network.http.proxy.pipelining", true);
user_pref("security.ssl.enable_false_start", true);
user_pref("network.http.keep-alive.timeout", 20);
user_pref("network.http.connection-retry-timeout", 0);
user_pref("network.http.max-persistent-connections-per-proxy", 256);
user_pref("network.http.max-connections-per-server",20);
user_pref("network.http.pipelining.reschedule-timeout", 15000);
user_pref("network.http.pipelining.read-timeout", 60000);
user_pref("network.http.pipelining.max-optimistic-requests", 3);
user_pref("browser.tabs.warnOnClose", false);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value";1);
user_pref("browser.cache.disk_cache_ssl", true);
user_pref("browser.cache.memory.capacity", 65536);
user_pref("browser.display.show_image_placeholders", false);
user_pref("browser.safebrowsing.appRepURL", "https://sb-ssl.google.com/safebrowsing/clientreport/download");
user_pref("browser.xul.error_pages.enabled", true); 
user_pref("config.trim_on_minimize", true);
user_pref("content.interrupt.parsing", true);
user_pref("content.maxtextrun", 8191);
user_pref("content.max.tokenizing.time", 300000);
user_pref("content.notify.ontimer", true);
user_pref("content.notify.backoffcount", 5);
user_pref("content.notify.interval", 100000);
user_pref("general.smoothScroll", true);
user_pref("content.switch.threshold", 100000);
user_pref("gfx.font_rendering.opentype_svg.enabled", true);
user_pref("gfx.font_rendering.wordcache.charlimit", true);
user_pref("gfx.font_rendering.wordcache.maxentries", 1000);
user_pref("gfx.font_rendering.directwrite.enabled", true);
user_pref("ui.submenuDelay", 0);
user_pref("nglayout.initialpaint.delay", 100);
user_pref("security.default_personal_cert","Ask Every Time");
user_pref("plugin.expose_full_path", true);
user_pref("nglayout.initialpaint.delay", 250);
user_pref("network.http.spdy.push-allowance",65536);
user_pref("network.http.spdy.enabled.http2draf",true");
user_pref("network.http.spdy.enabled.v2",true);
user_pref("network.http.spdy.enabled.v3",true);
user_pref("network.http.spdy.ping-threshold",58);
user_pref("network.http.keep-alive",true);
user_pref("network.protocol-handler.warn-external.apt+http",false);
user_pref("network.protocol-handler.app.apt","/usr/bin/apturl");
user_pref("network.protocol-handler.warn-external.apt",false);
user_pref("network.protocol-handler.app.apt+http","/usr/bin/apturl");
user_pref("network.dns.disableIPv6", true);
user_pref("network.dnsCacheEntries", 200);
user_pref("network.dnsCacheExpiration", 3600); 
user_pref("network.cookie.thirdparty.sessionOnly",false);
user_pref("browser.cache.disk.smart_size_cached_value",358400);
