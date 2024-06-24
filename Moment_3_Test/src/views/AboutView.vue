<template>
    <div>
        <article>
            <h2>Mina tankar om ramverket Vue</h2>
            <p>Till att börja med var tröskeln betydligt högre än för de båda föregående ramverken (laravel, bootstrap etc).
                När denna tröskeln klivits över kan jag dock verkligen säga att jag ser värdet i det här verktyget.
                När man skriver "ren" javascript utan ramverk blir det lätt väldigt mycket repetition i koden. <br><br>

                Trots att jag ännu bara hunnit "dutta fingret" i det här ramverket kan jag klart och tydligt se potentialen
                det har i att förenkla processen med att skapa webb-applikationer. <br><br>

                Till att börja med var det inte helt lätt att få kläm om själva routingen. För att illustrera - när man
                skapar en "undersida" som den här
                krävs att man skapar en view - som den du nu ser - importerar den till index.js i routing mappen, samt
                lägger till den i routes arrayen som ett objekt.
                personligen hade jag ett problem med det autoifyllningen man får med vue language features (volar) - den
                envisades med att autoifylla diverse filvägar med
                felaktiga versaler på fler platser vilket (känn dig fri att garva åt mig) fick mig att klia mig i huvudet på
                samtliga undersidor.
                <br><br>

                det var som sagt lite av en kulle att klättra över för att bli hyfsat bekväm i det här sättet att koda på
                men det var ingen mount everest och
                i nuläget känner jag mig såpass bekväm att jag utan vidare känner mig beredd på att ta mig an slutprojektet
                i kursen.

            </p>

            <p><b>P.S:</b> en sak med uppgiften som verkligen fick mig att stöna var när jag sekunden innan inlämning läser
                igenom uppgiftsbeskrivningen en gång Till
                och ser att jag har missat att använda något CSS ramverk. Det framstod dock inte som ett formellt krav så
                jag får helt enkelt vänta Till slutprojektet för att ta igen detta.
            </p>
        </article>
    </div>
</template>

<script>

</script>

<style>
div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

}

article {
    margin-top: 10px;
    width: 300px;
    padding: 25px;
    background-color: whitesmoke;
    border: solid black 2px;
    border-radius: 25px;
}</style>