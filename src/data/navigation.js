/**
 * MyLocationLab — SILO Navigation Architecture
 * Centralized registry of links across all 7 topic silos.
 */

export const mainNav = [
  { label: 'My Location', href: '/my-location/', id: 'my-location', icon: '📍' },
  { label: 'Tools', href: '/tools/', id: 'tools', icon: '🛠️' },
  { label: 'Maps', href: '/maps/', id: 'maps', icon: '🗺️' },
  { label: 'Guides', href: '/guides/', id: 'guides', icon: '📚' },
  { label: 'Comparisons', href: '/comparisons/', id: 'comparisons', icon: '⚖️' },
  { label: 'FAQ', href: '/faq/', id: 'faq', icon: '❓' },
];

export const moreNav = [
  { label: 'Share Location', href: '/share-location/', icon: '🔗' },
  { label: 'Glossary', href: '/glossary/', icon: '📖' },
  { label: 'HTML Sitemap', href: '/sitemap/', icon: '🗂️' },
  { label: 'About & Editorial', href: '/about/', icon: 'ℹ️' },
  { label: 'Contact', href: '/contact/', icon: '✉️' },
];

export const myLocationSubNav = [
  { label: 'Current Location', href: '/my-location/' },
  { label: 'My GPS Coordinates', href: '/my-location/gps/' },
  { label: 'My Coordinates', href: '/my-location/coordinates/' },
  { label: 'My Latitude & Longitude', href: '/my-location/latitude-longitude/' },
  { label: 'My Address', href: '/my-location/address/' },
  { label: 'My City', href: '/my-location/city/' },
  { label: 'My State', href: '/my-location/state/' },
  { label: 'My Country', href: '/my-location/country/' },
  { label: 'My IP Location', href: '/my-location/ip/' },
];

export const toolsNav = [
  { label: 'GPS Coordinates Finder', href: '/tools/gps-coordinates/' },
  { label: 'Latitude Longitude Finder', href: '/tools/latitude-longitude/' },
  { label: 'Address Finder', href: '/tools/address-finder/' },
  { label: 'Reverse Geocoder', href: '/tools/reverse-geocoding/' },
  { label: 'Geocoder', href: '/tools/geocoding/' },
  { label: 'Distance Calculator', href: '/tools/distance-calculator/' },
  { label: 'Coordinate Converter', href: '/tools/coordinate-converter/' },
  { label: 'Elevation Finder', href: '/tools/elevation-finder/' },
  { label: 'GPS Accuracy Checker', href: '/tools/gps-accuracy/' },
  { label: 'Location QR Code', href: '/tools/location-qr-code/' },
];

export const guidesNav = [
  { label: 'How GPS Works', href: '/guides/how-gps-location-works/' },
  { label: 'Improve GPS Accuracy', href: '/guides/improve-gps-accuracy/' },
  { label: 'Fix Wrong Location', href: '/guides/wrong-location/' },
  { label: 'Lat & Long Explained', href: '/guides/latitude-and-longitude-explained/' },
  { label: 'Share Location Safely', href: '/guides/how-to-share-location/' },
  { label: 'IP Geolocation Accuracy', href: '/guides/ip-geolocation-accuracy/' },
  { label: 'HTML5 Geolocation API', href: '/guides/browser-geolocation-api-guide/' },
  { label: 'UTM Coordinates & Datums', href: '/guides/utm-coordinates-and-datums/' },
  { label: 'GPS Privacy & Security', href: '/guides/gps-privacy-and-security/' },
  { label: 'Mock Locations & Testing', href: '/guides/how-to-fake-or-mock-location/' },
];

export const comparisonsNav = [
  { label: 'GPS vs IP Location', href: '/comparisons/gps-vs-ip-location/' },
  { label: 'Geocoding vs Reverse Geocoding', href: '/comparisons/geocoding-vs-reverse-geocoding/' },
  { label: 'Decimal Degrees vs DMS', href: '/comparisons/decimal-degrees-vs-dms/' },
];

export const footerCategoryIcons = {
  'My Location': '🎯',
  'Geospatial Tools': '🛠️',
  'Knowledge & Guides': '📚',
  'Comparisons & Reference': '⚖️',
};

export const footerNav = {
  'My Location': [
    { label: 'Where Am I Right Now?', href: '/my-location/', icon: '🎯' },
    { label: 'My GPS Coordinates', href: '/my-location/gps/', icon: '🛰️' },
    { label: 'My Coordinates (Multi-format)', href: '/my-location/coordinates/', icon: '🧭' },
    { label: 'My Latitude & Longitude', href: '/my-location/latitude-longitude/', icon: '🌐' },
    { label: 'My Street Address', href: '/my-location/address/', icon: '🏠' },
    { label: 'What City Am I In?', href: '/my-location/city/', icon: '🏙️' },
    { label: 'What State Am I In?', href: '/my-location/state/', icon: '🏛️' },
    { label: 'What Country Am I In?', href: '/my-location/country/', icon: '🗺️' },
    { label: 'My IP Geolocation', href: '/my-location/ip/', icon: '📡' },
  ],
  'Geospatial Tools': [
    { label: 'GPS Coordinates Finder', href: '/tools/gps-coordinates/', icon: '📍' },
    { label: 'Latitude Longitude Map', href: '/tools/latitude-longitude/', icon: '🌐' },
    { label: 'Street Address Finder', href: '/tools/address-finder/', icon: '🔍' },
    { label: 'Reverse Geocoder (Lat/Lng to Addr)', href: '/tools/reverse-geocoding/', icon: '🔄' },
    { label: 'Forward Geocoder (Addr to Lat/Lng)', href: '/tools/geocoding/', icon: '🗺️' },
    { label: 'Distance Calculator (Haversine)', href: '/tools/distance-calculator/', icon: '📏' },
    { label: 'Coordinate Converter (DD/DMS/UTM)', href: '/tools/coordinate-converter/', icon: '🧭' },
    { label: 'Elevation & Altitude Finder', href: '/tools/elevation-finder/', icon: '⛰️' },
    { label: 'GPS Accuracy Monitor', href: '/tools/gps-accuracy/', icon: '🎯' },
    { label: 'Location QR Code Generator', href: '/tools/location-qr-code/', icon: '📱' },
  ],
  'Knowledge & Guides': [
    { label: 'All Guides Hub', href: '/guides/', icon: '📑' },
    { label: 'How GPS Location Works', href: '/guides/how-gps-location-works/', icon: '🛰️' },
    { label: 'How to Improve GPS Accuracy', href: '/guides/improve-gps-accuracy/', icon: '⚡' },
    { label: 'Fixing Wrong Location Issues', href: '/guides/wrong-location/', icon: '🔧' },
    { label: 'Latitude & Longitude Explained', href: '/guides/latitude-and-longitude-explained/', icon: '📐' },
    { label: 'How to Share Location Safely', href: '/guides/how-to-share-location/', icon: '🔗' },
    { label: 'IP Geolocation Accuracy Limits', href: '/guides/ip-geolocation-accuracy/', icon: '📡' },
    { label: 'HTML5 Geolocation API Guide', href: '/guides/browser-geolocation-api-guide/', icon: '💻' },
    { label: 'UTM Coordinates & Geodetic Datums', href: '/guides/utm-coordinates-and-datums/', icon: '🗺️' },
    { label: 'GPS Privacy & Security Audit', href: '/guides/gps-privacy-and-security/', icon: '🔒' },
    { label: 'Mock Locations & Testing', href: '/guides/how-to-fake-or-mock-location/', icon: '🧪' },
  ],
  'Comparisons & Reference': [
    { label: 'All Comparisons Hub', href: '/comparisons/', icon: '📊' },
    { label: 'GPS vs IP Geolocation', href: '/comparisons/gps-vs-ip-location/', icon: '🛰️' },
    { label: 'Geocoding vs Reverse Geocoding', href: '/comparisons/geocoding-vs-reverse-geocoding/', icon: '🔄' },
    { label: 'Decimal Degrees vs DMS vs UTM', href: '/comparisons/decimal-degrees-vs-dms/', icon: '📐' },
    { label: 'Master Geolocation FAQ', href: '/faq/', icon: '❓' },
    { label: 'Geodesy & GIS Glossary', href: '/glossary/', icon: '📖' },
    { label: 'Share Your Location', href: '/share-location/', icon: '🔗' },
    { label: 'HTML Sitemap (All Pages)', href: '/sitemap/', icon: '🗂️' },
  ],
};
