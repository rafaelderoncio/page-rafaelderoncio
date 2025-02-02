let agent = navigator.userAgent;
let platform = navigator.platform;
let ipv4, ipv6, geo;
let language = navigator.language || navigator.userLanguage;
let screenWidth = window.screen.width;
let screenHeight = window.screen.height;
let screenRefreshRate = window.screen.refreshRate || 'Não disponível';
let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
let plugins = navigator.plugins.length ? Array.from(navigator.plugins).map(plugin => plugin.name) : 'Nenhum plugin';
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

const getIPv4 = fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => ipv4 = data.ip)
    .catch(() => ipv4 = 'Não encontrado');

const getIPv6 = fetch('https://api64.ipify.org?format=json')
    .then(res => res.json())
    .then(data => ipv6 = data.ip)
    .catch(() => ipv6 = 'Não encontrado');

// Espera todas as promessas finalizarem antes de exibir no console
Promise.all([getIPv4, getIPv6]).then(() => {
    console.log(`User Agent: ${agent}`);
    console.log(`Platform: ${platform}`);
    console.log(`Language: ${language}`);
    console.log(`Screen Resolution: ${screenWidth}x${screenHeight}`);
    console.log(`Screen Refresh Rate: ${screenRefreshRate}`);
    console.log(`Time Zone: ${timeZone}`);
    console.log(`Plugins: ${plugins}`);
    console.log(`Window Size: ${windowWidth}x${windowHeight}`);
    console.log(`IPv4: ${ipv4}`);
    console.log(`IPv6: ${ipv6}`);

    console.log(`
        Mr. Robot – Eps1.0_hellofriend.mov:
        O problema não é o que você sabe, é o que você acha que sabe. E o que você acha que sabe é a coisa mais perigosa de todas.
        `);
        
});
