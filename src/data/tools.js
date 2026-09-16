/**
 * MyLocationLab — Tools Metadata
 * Central registry of all location tools with metadata for navigation, cards, and SEO
 */

export const tools = [
  {
    id: 'gps-coordinates',
    title: 'GPS Coordinates Finder',
    description: 'Find your exact GPS coordinates including latitude, longitude, and altitude in real-time.',
    icon: '📍',
    url: '/tools/gps-coordinates/',
    category: 'location',
    featured: true,
    keywords: ['gps coordinates', 'find gps', 'my gps coordinates'],
  },
  {
    id: 'latitude-longitude',
    title: 'Latitude Longitude Finder',
    description: 'Get your precise latitude and longitude coordinates with interactive map selection.',
    icon: '🌐',
    url: '/tools/latitude-longitude/',
    category: 'location',
    featured: true,
    keywords: ['latitude longitude', 'lat long finder', 'coordinates'],
  },
  {
    id: 'address-finder',
    title: 'Address Finder',
    description: 'Find the full street address for any location or your current position using reverse geocoding.',
    icon: '🏠',
    url: '/tools/address-finder/',
    category: 'location',
    featured: true,
    keywords: ['address finder', 'find address', 'my address'],
  },
  {
    id: 'reverse-geocoding',
    title: 'Reverse Geocoder',
    description: 'Convert GPS coordinates into a human-readable street address instantly.',
    icon: '🔄',
    url: '/tools/reverse-geocoding/',
    category: 'conversion',
    featured: true,
    keywords: ['reverse geocoding', 'coordinates to address'],
  },
  {
    id: 'geocoding',
    title: 'Geocoder',
    description: 'Convert any address, city, or place name into GPS coordinates.',
    icon: '🎯',
    url: '/tools/geocoding/',
    category: 'conversion',
    featured: true,
    keywords: ['geocoding', 'address to coordinates'],
  },
  {
    id: 'distance-calculator',
    title: 'Distance Calculator',
    description: 'Calculate the exact distance between two points on Earth using the Haversine formula.',
    icon: '📏',
    url: '/tools/distance-calculator/',
    category: 'calculation',
    featured: true,
    keywords: ['distance calculator', 'distance between coordinates'],
  },
  {
    id: 'coordinate-converter',
    title: 'Coordinate Converter',
    description: 'Convert coordinates between Decimal Degrees, DMS, UTM, and other formats.',
    icon: '🔀',
    url: '/tools/coordinate-converter/',
    category: 'conversion',
    featured: true,
    keywords: ['coordinate converter', 'dms to decimal', 'utm converter'],
  },
  {
    id: 'elevation-finder',
    title: 'Elevation Finder',
    description: 'Find the elevation (altitude above sea level) for any location on Earth.',
    icon: '⛰️',
    url: '/tools/elevation-finder/',
    category: 'location',
    featured: true,
    keywords: ['elevation finder', 'altitude', 'height above sea level'],
  },
  {
    id: 'gps-accuracy',
    title: 'GPS Accuracy Checker',
    description: 'Monitor your GPS signal accuracy in real-time and get tips to improve it.',
    icon: '🎯',
    url: '/tools/gps-accuracy/',
    category: 'utility',
    featured: false,
    keywords: ['gps accuracy', 'location accuracy', 'gps signal'],
  },
  {
    id: 'location-qr-code',
    title: 'Location QR Code Generator',
    description: 'Generate a scannable QR code for any GPS coordinates or address.',
    icon: '📱',
    url: '/tools/location-qr-code/',
    category: 'sharing',
    featured: false,
    keywords: ['location qr code', 'qr code generator', 'share location qr'],
  },
];

export const toolCategories = [
  { id: 'location', name: 'Location Finders', icon: '📍' },
  { id: 'conversion', name: 'Converters', icon: '🔀' },
  { id: 'calculation', name: 'Calculators', icon: '🔢' },
  { id: 'sharing', name: 'Sharing Tools', icon: '🔗' },
  { id: 'utility', name: 'Utilities', icon: '🛠️' },
];

export function getToolById(id) {
  return tools.find(t => t.id === id);
}

export function getFeaturedTools() {
  return tools.filter(t => t.featured);
}

export function getToolsByCategory(category) {
  return tools.filter(t => t.category === category);
}

export function getRelatedTools(currentId, limit = 5) {
  const current = getToolById(currentId);
  if (!current) return tools.slice(0, limit);
  return tools
    .filter(t => t.id !== currentId)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, limit);
}
