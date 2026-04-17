const iconMap = {
  globe:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 0c2.5 2.4 3.8 5.5 3.8 9S14.5 18.6 12 21m0-18C9.5 5.4 8.2 8.5 8.2 12s1.3 6.6 3.8 9m-8.8-9h17.6M4.9 7.5h14.2M4.9 16.5h14.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  megaphone:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10v4a1 1 0 0 0 1 1h2.8l2.7 4.2A1 1 0 0 0 10.3 20h1.4a1 1 0 0 0 1-1.3L11.6 15H14l5.6 2.2A1 1 0 0 0 21 16.3V7.7a1 1 0 0 0-1.4-.9L14 9H4a1 1 0 0 0-1 1Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  spark:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 9.8 8.8 4 11l5.8 2.2L12 19l2.2-5.8L20 11l-5.8-2.2L12 3Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  target:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a8 8 0 1 0 8 8m0-8-4 4m4-4v4m-8 1a3 3 0 1 0 3 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  analytics:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h16M7 16v-4m5 4V8m5 8v-6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  flash:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 5 13h6l-1 9 8-11h-6l1-9Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  commerce:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18l-2 10H5L3 7Zm4 0V5a5 5 0 0 1 10 0v2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  health:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.6-7 10-7 10Zm0-10v4m-2-2h4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  finance:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20h18M7 16v-3m5 3V9m5 7V6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

export function createIcon(name, className = "icon") {
  const wrapper = document.createElement("span");
  wrapper.className = className;
  wrapper.innerHTML = iconMap[name] || iconMap.spark;
  return wrapper;
}
