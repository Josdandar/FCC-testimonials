import './App.css';
import  Testimony  from './components/testimony';
/*On self closing tags always leave one space before de slash*/
/*Separate by testimonies homework */
function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Dette er hva elevene våre sier om freeCodeCamp:</h1>
        <Testimony
        name="Shawn Wang"
        country="Singapore"
        image="shawn"
        position="programvare ingeniør"
        company="Amazon"
        testimony="Å bytte karriere er skummelt. Jeg har nettopp fått tilliten til at jeg kunne kode gjennom hundrevis av timer med gratis leksjoner på freeCodeCamp. I løpet av et år hadde jeg en sekssifret jobb som programvareingeniør. freeCodeCamp forandret livet mitt." />
        <Testimony
        name="Sarah Chima"
        country="Nigeria"
        image="sarah"
        position="programvare ingeniør"
        company="ChatDesk"
        testimony="freeCodeCamp var inngangsporten til min karriere som programvareutvikler. Den godt strukturerte læreplanen tok programmeringskunnskapen min fra et fullstendig nybegynnernivå til et veldig selvsikkert nivå. Det var alt jeg trengte for å få min første utviklerjobb i et fantastisk selskap." />
        <Testimony
        name="Emma Bostian"
        country="Sverige"
        image="emma"
        position="programvare ingeniør"
        company="Spotify"
        testimony="Jeg har alltid hatt problemer med å lære meg JavaScript. Jeg har tatt mange kurs, men freeCodeCamp-kurset var det som satt fast. Å studere JavaScript samt datastrukturer og algoritmer ved freeCodeCamp ga meg ferdighetene og selvtilliten jeg trengte for å få drømmejobben min som programvareingeniør hos Spotify." />
      </div>
    </div>
  );
}

export default App;
