# Moment_3_Test

Detta är min lösning till moment 3 i kursen Fullstacks utveckling med ramverk. Det är en single-page applikation som konsumerar en API skapad i tidigare moment med backendramverket laravel för att skriva ut musikalbum. 

Applikationen har tre sidor (i detta sammanhang "views") - en hemsida som mer eller mindre bara presenterar webbplatsen, en sida som sköter inläsning, uppladdning och radering av albumobjekt till API:n med hjälp av fetch-anrop. 

All CSS (förutom bodyns bakgrundsfärg) är scopad till de enskilda komponenterna. 

Navigeringen är skapad med Vue:s inbyggda routingsystem via "routerlinks". 

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
