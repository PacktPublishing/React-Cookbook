export function getCurrentDevice(ua) {
  return /mobile/i.test(ua) ? 'mobile' : 'desktop';
}

export function isDesktop(ua) {
  return !/mobile/i.test(ua);
}

export function isMobile(ua) {
  return /mobile/i.test(ua);
}
