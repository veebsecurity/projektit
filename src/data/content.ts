// Sisustruktuur — kogutud algselt VeebSecurity sisust.
// Iga teema on slug-iga URL-is: /teemad/{slug}

export type Subsection = {
  title: string;
  content: string;
  list?: string[];
};

export type Topic = {
  slug: string;
  category: string;
  title: string;
  intro: string;
  readMinutes: number;
  sections: Subsection[];
};

export type Category = {
  slug: string;
  title: string;
  description: string;
  topics: string[]; // topic slugs
};

export const categories: Category[] = [
  {
    slug: "alused",
    title: "Küberturvalisuse alused",
    description:
      "Mis on küberturvalisus, miks see on oluline ja millised on tänapäeva levinumad ohud.",
    topics: ["mis-on-kuberturvalisus", "cia-triaad", "levinumad-ohud", "uuenduste-tahtsus"],
  },
  {
    slug: "paroolid",
    title: "Paroolid ja autentimine",
    description: "Tugevad paroolid, paroolihaldurid, kahefaktoriline autentimine ja andmelekete kontroll.",
    topics: ["tugevad-paroolid", "paroolihaldurid", "kuidas-paroole-hoitakse"],
  },
  {
    slug: "phishing",
    title: "Phishing ja pettused",
    description: "Tunne ära e-kirja, SMS-i ja kõnepettused enne kui on hilja.",
    topics: ["mis-on-phishing", "kuidas-tunda-ara", "reaalsed-naited"],
  },
  {
    slug: "pahavara",
    title: "Pahavara ja viirused",
    description: "Viirused, troojad, lunavara — kuidas need levivad ja kuidas end kaitsta.",
    topics: ["mis-on-pahavara", "kuidas-levib", "viirusetorjed"],
  },
  {
    slug: "vorgud",
    title: "Võrguturvalisus",
    description: "Wi-Fi, ruuter, tulemüür ja avalikud võrgud.",
    topics: ["tulemuur", "koduvork", "avalikud-wifi"],
  },
  {
    slug: "vpn",
    title: "VPN ja privaatsus",
    description: "Mis on VPN, millal seda kasutada ja millised on levinud müüdid.",
    topics: ["mis-on-vpn", "millal-vpn", "vpn-mutid"],
  },
  {
    slug: "krupto",
    title: "Krüpteerimine",
    description: "Kuidas krüpteerimine kaitseb sinu sõnumeid, faile ja paroole.",
    topics: ["mis-on-krupto", "miks-oluline", "sammeetriline-vs-asummeetriline"],
  },
  {
    slug: "mobiil",
    title: "Mobiiliseadmete turvalisus",
    description: "Android, iOS, rakenduste õigused ja varastatud telefoni kaitse.",
    topics: ["android-vs-ios", "rakenduste-oigused", "varastatud-telefon"],
  },
  {
    slug: "privaatsus",
    title: "Privaatsus veebis",
    description: "Sotsiaalmeedia, jälgimine ja igapäevased harjumused.",
    topics: ["sotsiaalmeedia", "jalgijate-blokeerimine", "hea-digikaitumine"],
  },
  {
    slug: "mutid",
    title: "Levinud müüdid",
    description: "Müüdid, mis panevad inimesi end kaitsetuks jätma.",
    topics: ["pole-sihtmark", "mac-ei-saa-viirusi", "tugev-parool-piisab"],
  },
];

export const topics: Topic[] = [
  // ALUSED
  {
    slug: "mis-on-kuberturvalisus",
    category: "alused",
    title: "Mis on küberturvalisus?",
    intro:
      "Küberturvalisus on praktikate, tehnoloogiate ja harjumuste kogum, mis kaitseb sinu seadmeid, andmeid ja identiteeti.",
    readMinutes: 4,
    sections: [
      {
        title: "Miks see on oluline?",
        content:
          "Igal aastal kannatavad miljonid inimesed identiteedivarguse, andmelekete ja finantspettuste tõttu. 2023. aastal registreeriti üle 2200 küberrünnaku päevas. Isegi tavakasutajad on sihtmärgid — automaatsed rünnakud ei vali ohvreid käsitsi. Üks nõrk parool või vale klikk võib viia pangakonto tühjendamiseni, isikuandmete lekkimiseni või seadme lukustamiseni lunavaraga.",
      },
      {
        title: "Kolm sammast",
        content:
          "Küberturvalisus tugineb kolmele põhimõttele, mida nimetatakse CIA triaadiks: konfidentsiaalsus, terviklikkus ja kättesaadavus. Iga turvameede teenib vähemalt ühte neist eesmärkidest.",
      },
    ],
  },
  {
    slug: "cia-triaad",
    category: "alused",
    title: "CIA triaad",
    intro: "Konfidentsiaalsus, terviklikkus ja kättesaadavus — küberturvalisuse kolm tugisammast.",
    readMinutes: 3,
    sections: [
      {
        title: "Confidentiality (Konfidentsiaalsus)",
        content:
          "Tagab, et andmetele pääsevad ligi ainult volitatud isikud. Näide: krüpteeritud e-kirjad, parooliga kaitstud failid, juurdepääsukontroll. Rikkumine: keegi loeb sinu privaatseid sõnumeid või varastab kliendiandmeid.",
      },
      {
        title: "Integrity (Terviklikkus)",
        content:
          "Tagab, et andmeid ei muudeta volitamatult. Näide: digitaalallkirjad, kontrollsummad, versioonihaldus. Rikkumine: häkker muudab pangaülekande summat või võltsib arsti retsepti.",
      },
      {
        title: "Availability (Kättesaadavus)",
        content:
          "Tagab, et süsteemid ja andmed on kättesaadavad, kui neid vajatakse. Näide: varukoopiad, DDoS-kaitse, redundantsed serverid. Rikkumine: veebileht on maas rünnaku tõttu, haigla IT-süsteem on lukustatud lunavaraga.",
      },
    ],
  },
  {
    slug: "levinumad-ohud",
    category: "alused",
    title: "Levinumad ohud tänapäeval",
    intro: "Tänapäeva küberohtude maastik — millega iga internetikasutaja igapäevaselt kokku puutub.",
    readMinutes: 4,
    sections: [
      {
        title: "Phishing",
        content:
          "Petlikud e-kirjad, SMS-id ja võltsveebilehed, mis meelitavad ohvrit avaldama paroole või pangaandmeid. Vastutab üle 80% andmelekete eest.",
      },
      {
        title: "Lunavara (ransomware)",
        content:
          "Pahavara, mis krüpteerib sinu failid ja nõuab lunaraha. Üks juhtum võib hävitada kogu pere fotoarhiivi või ettevõtte andmebaasi.",
      },
      {
        title: "Andmelekked",
        content:
          "Suurte teenuste serveritest varastatud kasutajaandmed satuvad pimedasse võrku. Sama parooli korduvkasutus tähendab, et üks leke avab paljude kontode ukse.",
      },
    ],
  },
  {
    slug: "uuenduste-tahtsus",
    category: "alused",
    title: "Uuenduste tähtsus",
    intro: "Miks tarkvarauuenduste edasilükkamine on kõige levinum turvaviga.",
    readMinutes: 3,
    sections: [
      {
        title: "Miks uuendada kohe?",
        content:
          "Tarkvarauuendused parandavad teadaolevaid turvanõrkusi. Ründajad kasutavad avalikustatud nõrkusi kiiresti ära — sageli päevade jooksul. WannaCry ransomware (2017) nakatas 230 000+ arvutit, kuigi parandus oli saadaval kuid enne rünnakut. Reegel: uuenda kohe, kui uuendus on saadaval.",
      },
    ],
  },

  // PAROOLID
  {
    slug: "tugevad-paroolid",
    category: "paroolid",
    title: "Tugevad paroolid",
    intro: "Pikkus võidab keerukuse. Iga konto vajab unikaalset parooli.",
    readMinutes: 4,
    sections: [
      {
        title: "Mis on tugev parool?",
        content:
          'Hea parool on vähemalt 12 tähemärki pikk ja sisaldab suuri/väikseid tähti, numbreid ja erimärke. Ära kasuta isiklikku infot (sünnipäev, lemmiklooma nimi). Kasuta fraase: "kollanealune-traktor-19!Suvi" on tugev ja meeldejääv. Iga konto vajab unikaalset parooli — kui üks lekib, ei ole teised ohus.',
      },
      {
        title: "Levinumad vead",
        list: [
          "Sama parool mitmes kohas",
          "123456, qwerty, password ja muud klassikud",
          "Parooli jagamine kolmandate osapooltega",
          "Pärisnimi + sünniaasta (kergesti arvatav)",
        ],
        content:
          "Need vead muudavad isegi pika parooli väärtusetuks. Üks andmeleke ja ründaja proovib sama parooli kohe kõigis sinu kontodes (credential stuffing).",
      },
    ],
  },
  {
    slug: "paroolihaldurid",
    category: "paroolid",
    title: "Paroolihaldurid",
    intro: "Üks tugev peaparool, sajad unikaalsed paroolid — automaatselt.",
    readMinutes: 3,
    sections: [
      {
        title: "Kuidas need töötavad?",
        content:
          "Paroolihaldur (nt Bitwarden, 1Password, KeePass) salvestab kõik paroolid krüpteeritult. Sa pead meeles pidama ainult ühe tugeva peaparooli. Haldurid genereerivad ka tugevaid juhuslikke paroole. See on kõige praktilisem viis unikaalsete paroolide haldamiseks sadade kontode jaoks.",
      },
      {
        title: "Soovitatud valikud",
        list: [
          "Bitwarden — avatud lähtekoodiga, tasuta versioon piisav",
          "1Password — perekonna plaanid, mugav kasutajaliides",
          "KeePassXC — täielikult lokaalne, ilma pilveteenuseta",
        ],
        content: "Kõik need on auditeeritud ja krüpteerivad andmed enne pilve saatmist.",
      },
    ],
  },
  {
    slug: "kuidas-paroole-hoitakse",
    category: "paroolid",
    title: "Kuidas teenused paroole hoiavad?",
    intro: "Räsifunktsioonid, soolad ja punased lipud paroolide salvestamisel.",
    readMinutes: 3,
    sections: [
      {
        title: "Räsifunktsioonid (hashing)",
        content:
          "Korralikud teenused ei salvesta paroole selge tekstina — nad kasutavad räsifunktsioone. Parool → räsifunktsioon (bcrypt, Argon2) → räsi. Räsi on ühesuunaline — sellest ei saa parooli tagasi tuletada. Sool (salt) lisatakse unikaalsuse jaoks. Kui teenus saab sulle parooli meili teel saata, on see punane lipp — nad salvestavad seda selge tekstina.",
      },
    ],
  },

  // PHISHING
  {
    slug: "mis-on-phishing",
    category: "phishing",
    title: "Mis on phishing?",
    intro: "Inimese usalduse ärakasutamine on ründajate kõige levinum tööriist.",
    readMinutes: 3,
    sections: [
      {
        title: "Definitsioon",
        content:
          "Phishing on pettus, kus ründaja esineb usaldusväärse isiku või organisatsioonina, et meelitada ohvrit avaldama tundlikku infot (paroolid, krediitkaardinumbrid). See on kõige levinum küberrünnaku tüüp ja põhineb inimese usalduse ärakasutamisel, mitte tehnilistel nõrkustel.",
      },
    ],
  },
  {
    slug: "kuidas-tunda-ara",
    category: "phishing",
    title: "Kuidas phishingut ära tunda?",
    intro: "Märgid, mis peaksid panema sind enne klikkimist mõtlema.",
    readMinutes: 4,
    sections: [
      {
        title: "Hoiatusmärgid",
        list: [
          "Kiireloomulisus — \"sinu konto suletakse 24 tunni jooksul\"",
          "Üldine tervitus — \"Lugupeetud klient\" õige nime asemel",
          "Kahtlane saatja aadress — pank@paypa1.com (üks tähtnumber)",
          "Õigekirjavead ja kohmakas eesti keel",
          "Lingid, mis viivad teisele domeenile kui paistab",
          "Manused, mida sa ei oodanud (.zip, .exe, .docm)",
        ],
        content:
          "Kui kasvõi üks neist tunnustest on olemas, ära kliki. Helista teenuse ametlikule numbrile ja küsi, kas kiri tuli neilt.",
      },
    ],
  },
  {
    slug: "reaalsed-naited",
    category: "phishing",
    title: "Reaalsed näited",
    intro: "Phishing-laused, mida Eestis igapäevaselt kasutatakse.",
    readMinutes: 3,
    sections: [
      {
        title: "Tüüpilised petulaused",
        list: [
          "Helistame pangast, teie kontol on kahtlane tegevus",
          "Teie konto on blokeeritud, logige sisse siit",
          "Teil on tagasimakse, sisestage pangaandmed",
          "Keegi vaatas teie profiili, logige sisse",
          "Võitsite iPhone'i! Klikkige siia",
        ],
        content:
          "Kõik need on klassikalised algatuslaused. Pangad ei küsi kunagi telefoni teel parooli ega PIN-i. Kahtluse korral lõpeta kõne ja helista ise panga ametlikule numbrile.",
      },
    ],
  },

  // PAHAVARA
  {
    slug: "mis-on-pahavara",
    category: "pahavara",
    title: "Mis on pahavara?",
    intro: "Katustermin igasugusele tarkvarale, mis on loodud kahju tegema.",
    readMinutes: 3,
    sections: [
      {
        title: "Definitsioon",
        content:
          "Pahavara (malware) on igasugune tarkvara, mis on loodud kahju tekitamiseks, andmete varastamiseks või süsteemi ülevõtmiseks. See on katustermin, mis hõlmab viirusi, troojaneid, lunavara, nuhkvara ja palju muud. Pahavara võib jõuda seadmesse e-kirja manuse, nakatunud veebilehe, USB-mälupulga või petliku tarkvara kaudu.",
      },
    ],
  },
  {
    slug: "kuidas-levib",
    category: "pahavara",
    title: "Kuidas pahavara levib?",
    intro: "Levinumad nakatumiskanalid ja kuidas neid vältida.",
    readMinutes: 3,
    sections: [
      {
        title: "Peamised levikuteed",
        list: [
          "E-kirja manused (eriti makrod Office failides)",
          "Nakatunud veebilehed ja drive-by allalaadimised",
          "Piraatlik tarkvara ja võtmegeneraatorid",
          "USB-mälupulgad ja välised draivid",
          "Reklaamivõrgustike kaudu (malvertising)",
        ],
        content:
          "Suurim kaitse on terve mõistus: ära ava ootamatuid manuseid, ära installi tarkvara ebausaldusväärsetest allikatest, hoia süsteem uuendatud.",
      },
    ],
  },
  {
    slug: "viirusetorjed",
    category: "pahavara",
    title: "Viirusetõrjed",
    intro: "Kas viirusetõrje on tänapäeval üldse vajalik?",
    readMinutes: 3,
    sections: [
      {
        title: "Soovitused",
        content:
          "Windowsi sisseehitatud Microsoft Defender on enamiku kasutajate jaoks piisav. Maci ja Linuxi puhul on viirusetõrje vähem kriitiline, aga Malwarebytes-i tüüpi tööriist on hea sekundaarne kontrollija. Tasuta tooted nagu Avast on minevikus kasutajate andmeid müünud — eelista ametlikku Defenderit või tasulist toodet.",
      },
    ],
  },

  // VÕRGUD
  {
    slug: "tulemuur",
    category: "vorgud",
    title: "Mis on tulemüür (firewall)?",
    intro: "Sinu võrgu turvatöötaja, kes kontrollib igat sisenevat ja väljuvat ühendust.",
    readMinutes: 3,
    sections: [
      {
        title: "Kuidas töötab",
        content:
          "Tulemüür on nagu turvatöötaja sinu võrgu sissepääsul — kontrollib, milline liiklus pääseb sisse ja välja. Riistvaraline tulemüür (ruuteris) kaitseb kogu võrku, tarkvaraline (Windowsi tulemüür) kaitseb üksikut seadet. Mõlemad on olulised ja peaksid olema alati sisse lülitatud.",
      },
    ],
  },
  {
    slug: "koduvork",
    category: "vorgud",
    title: "Koduvõrgu turvalisus",
    intro: "Ruuter on kogu sinu kodu digitaalne väravavaht — kohtle teda vastavalt.",
    readMinutes: 4,
    sections: [
      {
        title: "Ruuteri turvaseaded",
        list: [
          "Vaheta vaikeparool kohe pärast paigaldust",
          "Kasuta WPA3 või vähemalt WPA2 krüpteeringut",
          "Lülita välja WPS (PIN-koodiga ühendus)",
          "Hoia ruuteri tarkvara uuendatud",
          "Loo külalisvõrk külalistele ja IoT-seadmetele",
        ],
        content:
          "Vaikeparoolid (admin/admin) on avalikult teada ja esimene asi, mida ründaja proovib.",
      },
    ],
  },
  {
    slug: "avalikud-wifi",
    category: "vorgud",
    title: "Avalikud Wi-Fi võrgud",
    intro: "Tasuta Wi-Fi kohvikus võib maksta sulle pangakonto.",
    readMinutes: 3,
    sections: [
      {
        title: "Riskid ja kaitse",
        content:
          "Avalikus Wi-Fi võrgus on kogu krüpteerimata liiklus pealtkuulatav. Pahatahtlik kasutaja samas võrgus võib näha sinu paroole, sõnumeid ja sirvimisajalugu. Kasuta avalikus võrgus alati VPN-i ja väldi panganduse, e-poodide ning oluliste kontode kasutamist ilma VPN-ita.",
      },
    ],
  },

  // VPN
  {
    slug: "mis-on-vpn",
    category: "vpn",
    title: "Mis on VPN ja kuidas see töötab?",
    intro: "Krüpteeritud tunnel sinu seadme ja interneti vahel.",
    readMinutes: 3,
    sections: [
      {
        title: "Selgitus",
        content:
          "VPN (Virtual Private Network) loob krüpteeritud tunneli sinu seadme ja VPN-serveri vahel. Kogu internetiliiklus suunatakse läbi selle tunneli, varjates sinu tegelikku IP-aadressi ja krüpteerides andmed. Veebilehed näevad VPN-serveri IP-d, mitte sinu oma. See on nagu salajane tunnel läbi avaliku tänava.",
      },
    ],
  },
  {
    slug: "millal-vpn",
    category: "vpn",
    title: "Millal VPN on kasulik?",
    intro: "VPN ei ole hõbekuul, aga teatud olukordades hädavajalik.",
    readMinutes: 3,
    sections: [
      {
        title: "Õige aeg VPN-iks",
        list: [
          "Avalikus Wi-Fi võrgus (kohvik, lennujaam, hotell)",
          "Reisil maades, kus internet on tsenseeritud",
          "Geo-piiratud sisu vaatamiseks",
          "Kui ei taha, et internetiteenuse pakkuja näeks sinu sirvimisajalugu",
        ],
        content: "Igapäevasel kodusel kasutamisel on VPN-i kasu piiratud — eelista HTTPS-i ja tugevaid paroole.",
      },
    ],
  },
  {
    slug: "vpn-mutid",
    category: "vpn",
    title: "VPN-i piirangud ja müüdid",
    intro: "Mida VPN ei tee, kuigi reklaamid lubavad.",
    readMinutes: 3,
    sections: [
      {
        title: "Levinud müüdid",
        content:
          "VPN ei tee sind anonüümseks — VPN-teenuse pakkuja näeb sinu liiklust. VPN ei kaitse phishingu, pahavara ega nõrkade paroolide eest. VPN aeglustab ühendust veidi. Tasuta VPN võib müüa sinu andmeid. VPN ei asenda viirusetõrjet ega tervet mõistust.",
      },
      {
        title: "Kas VPN teeb anonüümseks?",
        content:
          "Ei. VPN peidab sinu IP-aadressi veebilehtede eest, aga VPN-teenuse pakkuja näeb sinu liiklust. Sa logid endiselt sisse oma kontodele, kasutad sama brauserit ja jätad digitaalseid jälgi. VPN on privaatsuse tööriist, mitte nähtamatuse keep. Tõeliseks anonüümsuseks oleks vaja Tor'i + VPN + eraldi seade + käitumise muutmine.",
      },
    ],
  },

  // KRÜPTO
  {
    slug: "mis-on-krupto",
    category: "krupto",
    title: "Mis on krüpteerimine?",
    intro: "Salakeel, mida ainult saatja ja saaja mõistavad.",
    readMinutes: 3,
    sections: [
      {
        title: "Põhimõte",
        content:
          "Krüpteerimine muudab loetava teksti šifreeritud vormiks, mida saab lugeda ainult õige võtmega. See on nagu salakeel, mida ainult saatja ja saaja mõistavad. Ilma krüpteerimiseta oleks kogu internetiliiklus (paroolid, pangaandmed, e-kirjad) kõigile loetav.",
      },
    ],
  },
  {
    slug: "miks-oluline",
    category: "krupto",
    title: "Miks krüpto on oluline?",
    intro: "HTTPS, krüpteeritud sõnumid ja kettakrüpteerimine kaitsevad sind iga päev.",
    readMinutes: 3,
    sections: [
      {
        title: "Kus seda kasutatakse",
        list: [
          "HTTPS — kõik tundlikud veebilehed",
          "Signal, WhatsApp — sõnumiside otsast otsani",
          "BitLocker, FileVault — kõvaketta krüpteerimine",
          "VPN — kogu internetiliikluse krüpteerimine",
        ],
        content: "Igapäevane internet ei töötaks ilma krüpteerimiseta — see on nähtamatu, kuid kõikjal.",
      },
    ],
  },
  {
    slug: "sammeetriline-vs-asummeetriline",
    category: "krupto",
    title: "Sümmeetriline vs asümmeetriline krüpteerimine",
    intro: "Kaks põhilist lähenemist, mis töötavad koos.",
    readMinutes: 3,
    sections: [
      {
        title: "Erinevus",
        content:
          "Sümmeetriline krüpteerimine kasutab sama võtit nii krüpteerimiseks kui ka dekrüpteerimiseks (nt AES). See on kiire, aga võtme jagamine on probleem. Asümmeetriline krüpteerimine kasutab võtmepaari: avaliku ja privaatse võtme (nt RSA). Igaüks võib avalikku võtit kasutada, et sulle krüpteeritud sõnumit saata, aga ainult sina saad seda privaatvõtmega lugeda. Praktikas kasutatakse mõlemat koos.",
      },
    ],
  },

  // MOBIIL
  {
    slug: "android-vs-ios",
    category: "mobiil",
    title: "Android vs iOS turvalisus",
    intro: "Kaks ökosüsteemi, kaks erinevat turvamudelit.",
    readMinutes: 3,
    sections: [
      {
        title: "Võrdlus",
        content:
          "iOS: suletud ökosüsteem, rangem App Store kontroll, automaatsed uuendused kõigile seadmetele korraga. Turvalisem keskmise kasutaja jaoks. Android: avatum, võimaldab installida mujalt, killustunud uuenduste maastik. Tipptasemel seadmed (Pixel, Samsung S-seeria) on uuendustega kiired, odavamad mudelid jäävad sageli aastate võrra maha.",
      },
    ],
  },
  {
    slug: "rakenduste-oigused",
    category: "mobiil",
    title: "Rakenduste õigused",
    intro: "Iga lubatud õigus on potentsiaalne andmeleke.",
    readMinutes: 3,
    sections: [
      {
        title: "Kontrolli regulaarselt",
        content:
          'Kui taskulambi rakendus küsib ligipääsu kontaktidele ja asukohale, on midagi mäda. Anna ainult vajalikud õigused ja kasuta "ainult kasutamise ajal" valikut asukoha jaoks. Vaata üle õigused regulaarselt: Seaded → Rakendused → Õigused.',
      },
    ],
  },
  {
    slug: "varastatud-telefon",
    category: "mobiil",
    title: "Varastatud telefoni kaitse",
    intro: "Eelnev valmistumine teeb kaotatud telefoni vähem hävitavaks.",
    readMinutes: 3,
    sections: [
      {
        title: "Sammud nüüd",
        list: [
          "Lülita sisse ekraanilukk (PIN, sõrmejälg, näotuvastus)",
          "Aktiveeri \"Find My iPhone\" / \"Leia minu seade\"",
          "Lülita sisse seadme krüpteerimine (vaikimisi sees)",
          "Tee regulaarseid varukoopiaid",
        ],
        content: "Pärast varastamist saad seadme kaugjuhtimisega kustutada ja tundlikud kontod taastada.",
      },
    ],
  },

  // PRIVAATSUS
  {
    slug: "sotsiaalmeedia",
    category: "privaatsus",
    title: "Sotsiaalmeedia turvalisus",
    intro: "Iga jagatud detail on potentsiaalne tööriist ründaja käes.",
    readMinutes: 3,
    sections: [
      {
        title: "Hea tava",
        content:
          "Piira avalikult jagatavat infot — sünnipäev, asukoht, reisiplaanid on kasulikud ründajatele. Kontrolli privaatsusseadeid regulaarselt. Ära aktsepteeri tundmatute inimeste sõbrakutseid. Kasuta tugevaid paroole ja 2FA-d. Ära jaga infot, mida saab kasutada turvaküsimuste vastamiseks.",
      },
    ],
  },
  {
    slug: "jalgijate-blokeerimine",
    category: "privaatsus",
    title: "Jälgijate blokeerimine",
    intro: "Brauseri laiendid, mis vähendavad sinu digitaalset jälge.",
    readMinutes: 3,
    sections: [
      {
        title: "Soovitatud tööriistad",
        list: [
          "uBlock Origin — reklaamide ja jälgijate blokeerija",
          "Privacy Badger — automaatne jälgijate tuvastamine",
          "Firefox koos Multi-Account Containers laiendiga",
          "Brave brauser — jälgimisvastane vaikimisi",
        ],
        content: "Tasuta tööriistad, mis vähendavad oluliselt brauseri kaudu kogutavaid andmeid.",
      },
    ],
  },
  {
    slug: "hea-digikaitumine",
    category: "privaatsus",
    title: "Hea digikäitumine",
    intro: "Igapäevased harjumused, mis hoiavad sind turvalisena.",
    readMinutes: 3,
    sections: [
      {
        title: "Põhireeglid",
        list: [
          "Mõtle enne kui klikid",
          "Uuenda tarkvara kohe kui võimalik",
          "Tee regulaarseid varukoopiaid",
          "Kasuta unikaalseid paroole + paroolihaldurit",
          "Lülita sisse 2FA kõigis olulistes kontodes",
          "Kontrolli regulaarselt andmelekete andmebaase",
        ],
        content:
          "Need kuus harjumust hoiavad ära enamiku küberohte. Mitte ükski tehnoloogia ei asenda terve mõistuse kasutamist.",
      },
    ],
  },

  // MÜÜDID
  {
    slug: "pole-sihtmark",
    category: "mutid",
    title: "Ma pole piisavalt oluline sihtmärk",
    intro: "Kõige ohtlikum müüt küberturvalisuses.",
    readMinutes: 2,
    sections: [
      {
        title: "Tegelikkus",
        content:
          "Enamik rünnakuid on automatiseeritud — robotid skaneerivad miljoneid IP-aadresse ja proovivad sadu paroole sekundis. Sa ei pea olema oluline sihtmärk, et sinu andmed väärtuslikuks osutuks. Pangakontod, e-posti kontod sotsiaalse manipulatsiooni jaoks, krüptoraha rahakotid — kõik on müüdav pimedas võrgus.",
      },
    ],
  },
  {
    slug: "mac-ei-saa-viirusi",
    category: "mutid",
    title: "Mac ei saa viirusi",
    intro: "Mac on turvalisem, aga mitte puutumatu.",
    readMinutes: 2,
    sections: [
      {
        title: "Reaalsus",
        content:
          "macOS on hästi disainitud, aga viiruseid macOS-ile on rohkem kui kunagi varem. Adware, lunavara ja nuhkvara macOS-ile eksisteerivad. Viirusetõrje pole nii kriitiline kui Windowsil, aga terve mõistus, uuendused ja paroolihaldur on Maci kasutajale sama olulised kui kõigile teistele.",
      },
    ],
  },
  {
    slug: "tugev-parool-piisab",
    category: "mutid",
    title: "Tugev parool piisab",
    intro: "Parool on esimene, mitte ainus kaitserivi.",
    readMinutes: 2,
    sections: [
      {
        title: "Mida lisaks vaja on",
        content:
          "Tugev parool ei aita, kui ründaja saab selle phishingu või andmelekke kaudu kätte. Lisaks paroolile on vaja: kahefaktorilist autentimist (2FA), unikaalseid paroole iga konto kohta, regulaarset uuendamist ja andmelekete kontrollimist (haveibeenpwned.com).",
      },
    ],
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "Kas viirusetõrje on tänapäeval vajalik?",
    answer:
      "Windowsi sisseehitatud Microsoft Defender on enamikule kasutajatest piisav. Maci ja Linuxi puhul on viirusetõrje vähem kriitiline. Tähtsam kui viirusetõrje on tarkvara uuendamine ja terve mõistus.",
  },
  {
    question: "Kas tasuta VPN-id on ohutud?",
    answer:
      "Enamasti mitte. Tasuta VPN-teenused finantseerivad end andmete müügi või reklaamiga. Kui sa tahad VPN-i, eelista tasulist (ProtonVPN, Mullvad) või kasuta tasuta plaane vaid hädaolukorras.",
  },
  {
    question: "Kuidas teada saada, kas mu andmed on lekkinud?",
    answer:
      "Kontrolli oma e-posti aadressi haveibeenpwned.com lehel. See näitab, millistest andmelekketest sinu konto on tabandunud. Kui leiad lekke — vaheta kohe paroolid neis teenustes.",
  },
  {
    question: "Mis on 2FA ja kas see on tüütu?",
    answer:
      "Kahefaktoriline autentimine lisab paroolile teise kaitserivi (kood telefonist või turvavõti). Esimestel päevadel võib tunduda tüütu, kuid kasuta autentijat (Authy, 2FAS) ja see muutub sekunditeks. Mõned kontod säästsid sind miljoneid, kui parool lekkis.",
  },
  {
    question: "Kuidas teha turvalisi varukoopiaid?",
    answer:
      "Kasuta 3-2-1 reeglit: 3 koopiat, 2 erineval andmekandjal, 1 väljaspool kodu (pilv või eraldi koht). Krüpteeri varukoopiad. Testi taastamist kord aastas.",
  },
  {
    question: "Kas inkognito režiim teeb mind anonüümseks?",
    answer:
      "Ei. Inkognito ainult ei salvesta sirvimisajalugu sinu seadmesse. Internetiteenuse pakkuja, tööandja ja külastatud veebilehed näevad sinu tegevust nagu tavaliselt.",
  },
];

export const tools: { name: string; description: string; url: string }[] = [
  {
    name: "Have I Been Pwned",
    description: "Kontrolli, kas sinu e-posti aadress on andmelekete andmebaasis.",
    url: "https://haveibeenpwned.com",
  },
  {
    name: "Bitwarden",
    description: "Avatud lähtekoodiga paroolihaldur kõigile platvormidele.",
    url: "https://bitwarden.com",
  },
  {
    name: "VirusTotal",
    description: "Skaneeri kahtlasi faile ja URL-e 70+ viirusetõrjega korraga.",
    url: "https://virustotal.com",
  },
  {
    name: "Malwarebytes",
    description: "Pahavara eemaldamise tööriist Windowsile, Macile ja mobiilile.",
    url: "https://malwarebytes.com",
  },
  {
    name: "ProtonVPN",
    description: "Privaatsusele orienteeritud VPN, tasuta plaaniga ilma andmelimiidita.",
    url: "https://protonvpn.com",
  },
  {
    name: "Riigi Infosüsteemi Amet (RIA)",
    description: "Eesti küberturvalisuse meeskond — teated, juhised, intsidentide raporteerimine.",
    url: "https://ria.ee",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getTopicsForCategory(slug: string): Topic[] {
  return topics.filter((t) => t.category === slug);
}
