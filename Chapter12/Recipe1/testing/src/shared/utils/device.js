export function getCurrentDevice(ua) {
  return /mobile/i.test(ua) ? 'mobile' : 'desktop';
}

export function isDesktop(ua) {
  return !/mobile/i.test(ua);
}

export function isMobile(ua) {
  return /mobile/i.test(ua);
}

export function isBot(ua) {
  const b = /curl|bot|googlebot|google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex|crawler|spider|robot|crawling/i;
  return b.test(ua);
}
