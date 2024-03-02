export default function manifest() {
  return {
    name: 'Cake Shop',
    short_name: 'Cake Shop',
    description: 'Order cakes online',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#e4174f',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
