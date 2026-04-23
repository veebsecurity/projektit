import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/miks")({
  component: WhyPage,
  head: () => ({
    meta: [
      { title: "Miks digiturvalisus on oluline — VeebSecurity" },
      {
        name: "description",
        content:
          "Miks iga tavaline inimene peaks netis end kaitsma — ohud, eetika ja privaatsuse põhjused lihtsas keeles.",
      },
    ],
  }),
});

function WhyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Miks see üldse on oluline?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Enamik inimesi mõtleb küberturvalisusest siis, kui midagi on juba
            juhtunud. Siin on kokkuvõte sellest, miks tasub mõelda varem — ja
            miks see ei puuduta ainult „tähtsaid” inimesi.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16 space-y-14">
        <Section title={"1. Sa oled sihtmärk, ka kui sa pole keegi „tähtis”"}>
          <p>
            Filmides häkkerid valivad ohvri ja tegelevad temaga päevi. Päriselus
            töötab see vastupidi. Suurem osa rünnakuid on automaatsed: skriptid,
            mis proovivad lekkinud paroole miljonites kontodes või saadavad
            sama phishing-kirja sajandadele inimestele korraga.
          </p>
          <p>
            See tähendab, et sind ei „valita”. Sa langed lihtsalt sõela, kui sa
            pole minimaalseid ettevaatusabinõusid võtnud. Tugev ja unikaalne
            parool + 2FA viib sind kohe enamiku ohvrite hulgast välja.
          </p>
        </Section>

        <Section title="2. Sinu konto on raha väärt — isegi kui sa nii ei mõtle">
          <p>
            Pangakonto puhul on see selge. Aga ka muud kontod on turul väärt:
          </p>
          <ul className="mt-3 space-y-2 border-l-2 border-primary/40 pl-5">
            <li>
              E-posti konto annab juurdepääsu paljudele teistele teenustele
              („unustasid parooli?” e-kiri tuleb sinna).
            </li>
            <li>
              Sotsiaalmeedia kontot kasutatakse pettusteks sinu sõprade vastu —
              „hei, saadan sulle lingi, vaata kiiresti”.
            </li>
            <li>
              Mängude kontod (Steam, Riot, EA) sisaldavad sageli tegelikku
              raha väärtuses esemeid, mida saab maha müüa.
            </li>
            <li>
              Toidu- või transpordiäpid sisaldavad salvestatud kaarte ja
              aadresse.
            </li>
          </ul>
        </Section>

        <Section title={"3. Privaatsus ei ole „varjamine”"}>
          <p>
            Levinud vastuväide on: „Mul pole midagi varjata, miks ma peaks
            hoolima?” See lause aetakse segamini sõnaga „varjama”, aga tegu on
            millegi muuga.
          </p>
          <p>
            Sa lukustad vannitoa ukse, paned kardinad ette, ei räägi oma
            arstivisiitidest võõrastele. Mitte sellepärast, et midagi
            kahtlast oleks, vaid sellepärast, et see, mis on isiklik, on
            isiklik. Privaatsus on vaikimisi seisund — see, et anname seda
            hoolimatusest ära, ei muuda asja loomulikuks.
          </p>
          <p>
            Andmed, mida tasuta teenused sinust koguvad, kasutatakse hindade
            isikupärastamiseks, kindlustuste arvutamiseks, sihitud reklaamide
            ja sageli ka poliitilise mõjutamise jaoks. Sa ei pruugi seda näha,
            aga otsuseid sinu kohta tehakse pidevalt.
          </p>
        </Section>

        <Section title="4. Sinu turvalisus mõjutab teisi">
          <p>
            Üks lekkinud konto pole isiklik probleem. Kui sinu e-post on
            häkkerite käes, hakkavad nad saatma phishing-kirju sinu pere ja
            kolleegide aadressidele. Kui sinu telefon on nakatunud, võib see
            saata pahatahtlikke linke su kontaktidele.
          </p>
          <p>
            Selles mõttes on digihügieen sarnane päris hügieenile — see ei ole
            ainult sinu jaoks, vaid kõigi jaoks su ümber.
          </p>
        </Section>

        <Section title="5. Eetiline pool — õigus mitte olla jälgitud">
          <p>
            On vahe selle vahel, kas sa annad kellelegi millegi vabatahtlikult
            ja kas see võetakse sult vaikselt. Enamik tasuta teenuseid
            töötab teise mudeli järgi — sa ei loe 40-leheküljelist
            kasutustingimust ja sellepärast „nõustud” sellega, et su asukoht,
            kontaktid ja kõnetajad lähevad andmebaasidesse.
          </p>
          <p>
            Kaitsta ennast ei tähenda paranoiat. See tähendab teadlikku
            otsust, et sa ise valid, mida jagada ja kellega. See on sama
            põhimõte nagu õigus oma keha üle, õigus arvamusele või õigus
            erapooletule kohtuotsusele.
          </p>
        </Section>

        <Section title="6. Mida lihtsam, seda parem">
          <p>
            Hea uudis: sa ei pea õppima krüptograafiat. 90% ohtudest katavad
            ära paar harjumust:
          </p>
          <ul className="mt-3 space-y-2 border-l-2 border-primary/40 pl-5">
            <li>Iga konto jaoks unikaalne parool (paroolihaldur teeb selle lihtsaks).</li>
            <li>2FA tähtsates kontodes — eriti e-postil ja pangal.</li>
            <li>Tarkvara uuendused, kui need tulevad.</li>
            <li>Mõtle korraks enne, kui klõpsad kahtlasel lingil.</li>
            <li>Varukoopia tähtsatest failidest.</li>
          </ul>
          <p className="mt-4">
            Need on kõik asjad, mis võtavad kokku paar tundi seadistamist ja
            mida pärast peaaegu ei märkagi.
          </p>
        </Section>

        <div className="surface-card mt-12 flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            Valmis vaatama, kuidas neid asju praktikas teha?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/teemad"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Vaata teemasid →
            </Link>
            <Link
              to="/tooriistad"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-4 py-2.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Vaata tööriistu
            </Link>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-[1.75] text-foreground/85">
        {children}
      </div>
    </section>
  );
}
