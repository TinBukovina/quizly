# Bilješke za 1. kolokvij

Svrha predmeta: Naučiti kako se softver planira, razvija, testira, dokumentira i modelira u praksi.

## Naslovi koje obrađujemo

## 1. Metode razvoja softvera

- One određuju kako tim planira, razvija i kontrolira rad.
- Cilj im je da razvoj bude uređen, učinkovit i predvidiv.
- Svaki softver se ne razvija isto nego to ovisi o vrsti proizvoda, korisnicima i timu

### 1.1. Metoda vodopada

#### Osnovna ideja i glavne karakteristike metode vodopada

- Najstarija metoda, 1970. Winston W. Royce
- Metoda vodopada je linearni i sekvencijalni model razvoja softvera.
- Razvoj ide korak po korak, kroz unaprijed definirane faze.
- Svaka faza mora biti završena prije prelaska na sljedeću.
- Promjene je teško uvoditi kad projekt odmakne.
- Model je pregledan i lako razumljiv, ali nije fleksibilan.
- Najviše odgovara projektima gdje su zahtjevi poznati unaprijed i ne mijenjaju se često.

#### Faze metode vodopada

- Metoda vodopada sastoji se od 6 faza. Faze se izvode redom, jedna nakon druge.

#### 1. Analiza zahtjeva

- Ova faza odgovara na pitanje: što sustav treba raditi?
- U ovoj fazi definiraju se korisnički zahtjevi, potrebe i očekivane funkcionalnosti sustava (analiziraju se i zapisuju)
- Sudjeluju naručitelj softvera i razvojni tim.
- Cilj je što preciznije razumjeti problem koji softver treba riješiti.
- Rezultat faze je dokument sa zahtjevima. Taj dokument služi kao osnova za daljnji razvoj softvera.

#### 2. Dizajn sustava

- Ova faza odgovara na pitanje: kako će sustav biti strukturiran i izveden?
- Pomaže specificirati potrebne hardverske komponente.
- Zahtjevi iz prethodne faze pretvaraju se u strukturu pogodnu za implementaciju.
- Rezultat ove faze je arhitektura sustava.

#### 3. Implementacija i testiranje jedinica

- Ova faza odgovara na pitanje: kako plan sustava pretvoriti u kod i provjeriti radi li svaki dio ispravno?
- U ovoj fazi plan sustava pretvara se u programski kod.
- Sustav se izrađuje po manjim cjelinama, odnosno jedinicama.
- Svaka jedinica se zasebno implementira i testira.
- Cilj je što ranije uočiti greške i nedostatke.
- Izrađuju se testne studije koje pomažu predvidjeti probleme tijekom razvoja.
- Krajnji rezultat ove faze je skup modula koji su testirani kao jedinice.

#### 4. Integracija i testiranje sustava

- Ova faza odgovara na pitanje: rade li sve jedinice zajedno kao cjelovit sustav?
- Jedinice, odnosno moduli iz prethodne faze, povezuju se u jedan sustav.
- Integracija je inkrementalna, provodi se u više koraka.
- Nakon povezivanja modula testira se cijeli sustav.
- Provjerava se zadovoljava li sustav zahtjeve i potrebe naručitelja.
- Testiranje može biti funkcionalno i nefunkcionalno.
- U testiranju sudjeluju naručitelj softvera i razvojni tim.
- Ako sustav ne zadovolji testiranje, vraća se u prethodnu fazu.

#### 5. Puštanje u pogon

- Ova faza odgovara na pitanje: je li sustav spreman za stvarnu uporabu?
- Ova faza provodi se nakon što su rezultati testiranja pozitivni.
- Sustav se može pustiti u pogon postupno, po dijelovima.
- U konačnici se program isporučuje naručitelju ili lansira na tržište.

#### 6. Održavanje

- Ova faza odgovara na pitanje: kako sustav održavati i prilagođavati nakon isporuke?
- Održavanje počinje nakon puštanja sustava u uporabu.
- U ovoj fazi prikupljaju se povratne informacije korisnika.
- Ispravljaju se greške koje nisu otkrivene ranije.
- Sustav se prilagođava novim zahtjevima i promjenama u okruženju.
- Rezultat ove faze su izmjene i nadogradnje sustava.

#### Vrste održavanja

- Postoje 4 vrste održavanja.
- `Usavršavanje` znači nadogradnju funkcionalnosti i izdavanje novih verzija proizvoda.
- `Korektivno održavanje` znači ispravljanje grešaka i nedostataka koji nisu otkriveni tijekom razvoja.
- `Adaptivno održavanje` znači prilagodbu novim uvjetima, npr. novom uređaju, operacijskom sustavu ili novim poslovnim i zakonskim pravilima.
- `Preventivno održavanje` znači sprječavanje budućih i predvidivih grešaka.

#### Prednosti metode vodopada

- Metoda vodopada je jednostavna i lako razumljiva.
- Faze su jasno definirane i izvode se redom.
- Zahtjevi, zadaci i kriteriji mogu se lakše pratiti.
- Dokumentacija je dobro strukturirana.
- Pogodna je za manje projekte.
- Pogodna je i za projekte s jasno definiranim i stabilnim zahtjevima.

#### Nedostaci metode vodopada

- Model nije fleksibilan kada se zahtjevi mijenjaju.
- Faze se ne odvijaju paralelno, što može usporiti razvoj.
- Ako se pojavi problem, često se treba vraćati na prethodne faze.
- Softver je gotov tek u kasnijoj fazi razvoja.
- Problemi i rizici često postaju vidljivi tek kasno.
- Testiranje se provodi tek pri kraju razvoja, što može biti vremenski i financijski neisplativo.
- Nije pogodan za kompleksne i dugotrajne projekte.

### 1.2. Agilne metode

- Nastao 2001. godine kao odgovor na sve spore i neuspješne klasične metode razvoja.
- Agilne metode su pristup razvoju softvera koji u prvi plan stavlja korisnika.
- One su iterativne i fleksibilne.
- Provode se česta testiranja i prilagodbe tijekom razvoja.
- Naglašavaju timski rad i stalnu suradnju.
- Korisnik je uključen tijekom cijelog razvojnog ciklusa.
- Zbog stalnih provjera greške se otkrivaju ranije i brže ispravljaju.
- Gotov proizvod može biti završen ranije i često je financijski povoljniji od klasičnih metoda.
- Agilni razvoj temelji se na Agilnom manifestu.

#### Temeljne vrijednosti Agilnog manifesta

- Skup osnovnih pravila i načina razmišljanja za razvoj softvera (filozofija), a ona glase:
- Prednost se daje pojedincima i interakciji u odnosu na procese i alate.
- Prednost se daje funkcionalnom softveru u odnosu na opsežnu dokumentaciju.
- Prednost se daje suradnji s korisnikom.
- Prednost se daje odgovoru na promjene u odnosu na strogo praćenje unaprijed zadanog plana.

#### 1.2.1. Scrum

- Scrum je razvojni okvir i prvi put se spominje spominje 1986. godine. Naziv dolazi iz ragbija i naglašava važnost timskog rada.
- Koristi se za rješavanje složenih i dinamičnih problema.
- Posebno je učinkovit u iterativnom i inkrementalnom razvoju.
- Koristi preklapajući model rada, gdje se kroz cijeli projekt radi pomalo na više stvari.
- Temelji se na malom timu koji je samostalan, fleksibilan i prilagodljiv.
- Scrum se sastoji od uloga, događaja, artefakata i pravila.
- Jednostavan je za razumjeti, ali težak za savladati.

##### 1.2.1.1. Uloge u scrum timu

- Scrum tim čine: `Scrum Master`, `vlasnik proizvoda` i `razvojni tim`.
- Svaki član ima jasno definiranu ulogu u vođenju i razvoju projekta.

###### Scrum Master

- Scrum Master je voditelj tima i najbolje poznaje Scrum.
- Odgovoran je za pravilno i neometano odvijanje Scrum procesa.
- Pomaže vlasniku proizvoda da ostvari ciljeve kroz Scrum.
- Potiče razvojni tim na kreativnost, samostalnost i donošenje odluka.
- Radi na povećanju produktivnosti tima.
- Brine se da ništa ne ometa razvojni tim u radu.
- Prati napredak tima i čini ga vidljivim svima uključenima u projekt.

###### Vlasnik proizvoda

- Vlasnik proizvoda usko surađuje s razvojnim timom.
- Određuje zahtjeve i ključne značajke proizvoda.
- Određuje redoslijed implementacije segmenata proizvoda.
- Odgovoran je za viziju proizvoda.
- Odlučuje kada nastaviti razvoj, a kada proizvod pustiti na tržište.
- Održava popis zadataka koje treba ispuniti.
- Donosi završnu odluku zadovoljava li proizvod tražene zahtjeve i kvalitetu.

###### Razvojni tim

- Razvojni tim izrađuje proizvod.
- Tim samostalno odlučuje kako podijeliti posao na manje zadatke.
- Članovi tima preuzimaju i izvršavaju pojedine zadatke.
- Preporučena veličina tima je od 3 do 9 članova.
- Najčešće se kao idealan broj navodi 7 članova.
- Prevelik tim otežava komunikaciju, a premalen smanjuje produktivnost.

##### 1.2.1.2. Artefakti

- Artefakti su konkretni radni element koji omogućavaju `transparentnost`, `uvid` i `prilagodbu`, tko što treba raditi i što je napravljeno.
- Oni su dinamični, što znači da se mijenjaju kada se promijene zahtjevi, tržište ili tehnologija.
- Glavni artefakti u Scrumu su:
- `Vizija proizvoda`
- `Cilj ciklusa`
- `Popis stavki za proizvod (Product Backlog)`
- `Rafiniranje popisa stavki za proizvod (Product Backlog Refinement)`
- `Popis stavki za ciklus (Sprint Backlog)`
- `Inkrement`
- `Definicija gotovog`
- `Burn-down grafikon`

###### Vizija proizvoda

- Definira dugoročni cilj proizvoda ili projekta.
- Mora biti jasno definirana, kratka i precizna.

###### Cilj ciklusa

- Predstavlja cilj koji se treba postići tijekom jednog ciklusa.
- Ostvaruje se implementacijom odabranih stavki za proizvod.

###### Popis stavki za proizvod (Product Backlog)

- Odgovara na pitanje: `što je sljedeće najvažnije za izraditi?`
- To je dinamičan popis svega potrebnog za izradu i prilagodbu proizvoda.
- Stavke su poredane po prioritetu.
- Za sadržaj, dostupnost i redoslijed stavki odgovoran je `vlasnik proizvoda`.

###### Rafiniranje popisa stavki za proizvod

- Provodi se neprekidno tijekom cijelog životnog ciklusa popisa.
- Stavkama se dodaju detalji, procjene i redoslijed.
- Stavke se pregledavaju i po potrebi mijenjaju.

###### Popis stavki za ciklus (Sprint Backlog)

- To je plan razvojnog tima za jedan ciklus.
- Sadrži odabrane stavke s popisa za proizvod i plan njihove realizacije.
- Prikazuje što tim planira dovršiti tijekom ciklusa.
- Pripada isključivo razvojnom timu.
- Ažurira se tijekom ciklusa i daje uvid u preostali posao.

###### Inkrement

- Inkrement je zbroj dovršenih stavki iz svih ciklusa.
- Na kraju svakog ciklusa novi inkrement mora biti `gotov`.
- Mora biti u upotrebljivom stanju.

###### Definicija gotovog

- Definicija gotovog određuje kada se nešto smatra završenim.
- Daje jasan kriterij kvalitete koji inkrement mora zadovoljiti.
- Ako radi više timova, svi moraju imati zajedničku definiciju gotovog.

###### Burn-down grafikon

- Prikazuje napredak projekta kroz vrijeme.
- Pokazuje kako se smanjuje količina preostalog posla.
- Po završetku zadataka vrijednost grafikona dolazi na nulu.
- Pomaže timu pratiti radi li u skladu s planiranim tempom.
- Ažurira se redovito i služi kao vizualni prikaz napretka.

##### 1.2.1.3. Događaji u Scrumu

- Događaji u Scrumu služe za redovitost rada i smanjenje potrebe za dodatnim sastancima.
- Svaki događaj je formalna prilika za `kontrolu` i `prilagodbu`.
- Svaki događaj ima ograničeno maksimalno trajanje.
- Ako se događaji preskaču, smanjuju se transparentnost, kontrola i mogućnost prilagodbe.

###### Ciklus (Sprint)

- Sprint je srce Scruma.
- Traje od `2 do 4 tjedna`.
- Svaki sprint ima cilj, plan rada i rezultat u obliku proizvoda.
- Najbolje je da svi sprintovi u projektu imaju jednako trajanje.
- Sprint se može otkazati prije kraja, ali samo odlukom vlasnika proizvoda.

###### Planiranje ciklusa (Sprint Planning)

- Održava se na početku svakog sprinta.
- Sudjeluju svi članovi Scrum tima.
- Dogovara se koje će se stavke iz `Product Backloga` raditi u sprintu.
- Vlasnik proizvoda objašnjava što je najvažnije i koji je cilj sprinta.
- Razvojni tim procjenjuje koliko zadataka može realno izvršiti.
- Rezultat su `cilj sprinta` i `Sprint Backlog`.

###### Dnevni sastanak (Daily Scrum)

- Održava se svaki dan u isto vrijeme i na istom mjestu.
- Traje oko `15 minuta`.
- To je interni sastanak razvojnog tima.
- Na sastanku se odgovara na 3 pitanja:
- `Što sam radio jučer?`
- `Što ću raditi danas?`
- `Postoje li prepreke?`
- Služi za bolju komunikaciju, kontrolu i prilagodbu rada.
- Nije namijenjen rješavanju problema, nego brzom usklađivanju.

###### Pregled ciklusa (Sprint Review)

- Održava se na kraju svakog sprinta.
- Cilj je pregledati inkrement i po potrebi prilagoditi `Product Backlog`.
- Sudjeluju Scrum tim i druge osobe koje pozove vlasnik proizvoda.
- Pokazuje se što je dovršeno, a što nije.
- Raspravlja se o problemima, rezultatima i sljedećim koracima.
- Rezultat je prilagođeni `Product Backlog`.

###### Osvrt na ciklus (Sprint Retrospective)

- Održava se na kraju sprinta, nakon pregleda ciklusa, a prije planiranja sljedećeg sprinta.
- Sudjeluje cijeli Scrum tim.
- Tim analizira svoj rad i kvalitetu proizvoda.
- Raspravlja se o tome što treba prestati raditi, a što nastaviti raditi.
- Cilj je unaprijediti rad u sljedećem sprintu.
- Rezultat su dogovorena poboljšanja za idući ciklus.

###### Rafiniranje stavki s popisa za proizvod (Product Backlog Refinement)

- Provodi se neprekidno tijekom cijelog životnog ciklusa proizvoda.
- Cilj je poboljšati i razjasniti `Product Backlog`.
- Velike stavke razrađuju se u manje.
- Stavkama se dodaju detalji, procjene i redoslijed.
- Time se olakšava planiranje budućih sprintova.

#### 1.2.2. Kanban

- Kanban je metoda upravljanja razvojem proizvoda.
- Naziv dolazi iz japanskog jezika i znači `vidljiva kartica`.
- Razvila ga je Toyota 1940-ih godina.
- Temelji se na ideji `upravo na vrijeme` (Just in Time, JIT).
- Cilj je smanjiti nepotreban posao bez smanjenja produktivnosti.
- Naglasak je na `neprekidnoj isporuci`.
- Kanban pomaže vizualizirati rad i poboljšati učinkovitost.
- Promiče suradnju, stalno učenje i završavanje započetog posla.

##### Tri glavna načela Kanbana

- `Vizualizirati rad`
- `Ograničiti količinu zadataka u radu (WIP)`
- `Unaprijediti tok rada`

##### Ključne komponente Kanbana

- `Kanban kartice`
- `Kanban stupci`
- `WIP`
- `Kanban staze sa zadacima`

##### Važne značajke Kanbana

- Rad se prikazuje na `Kanban ploči`.
- Svaki stupac ili redak može imati ograničen broj stavki.
- Nove stavke se ne dodaju dok se ne oslobodi mjesto.
- U čistom Kanbanu nema vremenski ograničenih ciklusa kao u Scrumu.
- Proizvod ili funkcionalnost pušta se u rad čim je dovršena.
- Kanban je posebno dobar kada često dolazi do promjena prioriteta.
- Tim se usredotočuje na završavanje trenutnog zadatka prije preuzimanja novog.
- Ograničavanje WIP-a smanjuje multitasking i povećava produktivnost.

##### Kanban kartica

- Kanban kartica predstavlja jednu stavku posla.
- Sadrži informacije o zadatku i njegovom statusu.
- Može sadržavati opis zadatka, odgovornu osobu, rok i druge podatke.
- Kartica prikazuje životni ciklus zadatka od početka do završetka.
- Povećava transparentnost i smanjuje potrebu za dodatnim sastancima.

##### Četiri temeljna načela Kanbana

- `Započeti s onim što je poznato`
- `Odluka o postupnoj, razvojnoj promjeni`
- `Poštovati aktualne postupke, uloge i zaduženja`
- `Poticati ljude da budu vođe na svim razinama`

##### Šest praksi Kanbana

- `Vizualizirati tok rada`
- `Ograničiti količinu posla na kojem se radi`
- `Upravljati tokom`
- `Jasno definirati politiku procesa`
- `Povratne informacije`
- `Unapređivati zajednički`

##### 1.2.2.1. Scrum ili Kanban?

- I Scrum i Kanban imaju cilj što brže završiti proizvod ili projekt i isporučiti funkcionalnosti.
- Glavna razlika je u tome što je Scrum organiziran oko `vremenski ograničenih ciklusa`, a Kanban oko `kontinuiranog toka rada`.
- | Značajka     | Scrum                             | Kanban                             |
  | ------------ | --------------------------------- | ---------------------------------- |
  | Način rada   | rad u sprintovima                 | kontinuirani tok rada              |
  | Vrijeme      | sprint traje `2 do 4 tjedna`      | nema vremenski ograničenih ciklusa |
  | Isporuka     | nakon jednog ili više ciklusa     | čim je funkcionalnost gotova       |
  | Uloge        | jasno definirane uloge            | nema zadanih uloga                 |
  | Promjene     | ne uvode se usred sprinta         | mogu se uvoditi bilo kada          |
  | Struktura    | strukturiraniji pristup           | fleksibilniji pristup              |
  | Prikladno za | rad u blokovima i stabilniji plan | česte promjene prioriteta          |

- Obje metode žele što brže završiti proizvod i isporučiti funkcionalnosti.
- Odabir ovisi o timu, organizaciji i načinu rada.
- Moguća je i kombinacija oba pristupa, odnosno `Scrumban`.

#### 1.2.3. Scrumban

- Scrumban je `hibrid` Scruma i Kanbana.
- Kombinira strukturu Scruma s fleksibilnošću i vizualnim pristupom Kanbana.
- Cilj mu je smanjiti količinu posla na kojem se radi istovremeno.
- Zadaci se preuzimaju prema prioritetu, u trenutku kada za njih postoji kapacitet.
- Tim tako ostaje fleksibilan i manje je preopterećen zadacima.
- Scrumban može služiti i kao prijelaz iz Scruma u Kanban.

##### Što preuzima od Scruma

- iterativno planiranje u čestim vremenskim razmacima
- osvrte i preglede
- procjenu koliko se posla može obaviti u ciklusu
- postavljanje prioriteta

##### Što preuzima od Kanbana

- preuzimanje zadataka prema prioritetu i neprekidni tok rada
- ograničenje količine preuzetih zadataka
- manje strogo definirane uloge članova tima
- planiranje i analiza neposredno prije izvođenja posla
- vizualni prikaz toka rada

- Scrumban je dobar za timove kojima trebaju i struktura i fleksibilnost.

#### 1.2.4. Scrum of Scrums

- Scrum of Scrums je sastanak predstavnika više Scrum timova čiji je cilj uskladiti se međusobno.
- Ne sudjeluju svi članovi timova, nego jedan ili više predstavnika svakog tima.
- Scrum tim je najučinkovitiji kada ima `3 do 9 članova`.
- Kada je projekt prevelik za jedan tim, formira se više Scrum timova.
- Svaki tim ima svoje sprintove, popise zadataka i dnevne sastanke.
- Da bi svi timovi radili usklađeno, održava se `Scrum of Scrums`.
- Sastanci se održavaju dnevno ili rjeđe, ovisno o potrebi.
- Traju oko `15 minuta`.
- Na sastanku se odgovara na 3 pitanja:
- `Što je vaš tim radio od prošlog sastanka što može utjecati na druge timove?`
- `Što će vaš tim raditi do idućeg sastanka što može utjecati na druge timove?`
- `Postoje li prepreke u radu u kojima drugi tim može pomoći?`

## 3. Dokumentacija

- Dokumentacija se dijeli na `dokumentaciju proizvoda` i `dokumentaciju procesa`.
- `Dokumentacija proizvoda` opisuje nastali proizvod i daje upute za rukovanje.
- `Dokumentacija procesa` odnosi se na aktivnosti vezane uz razvoj proizvoda.

### 3.1. Tipovi dokumentacije

#### 3.1.1. Sistemska dokumentacija

- Sistemska dokumentacija opisuje sustav, njegove dijelove i temeljnu tehnologiju.
- Namijenjena je ponajprije developerima i ostalim tehničkim sudionicima projekta.
- Obuhvaća: `dokument zahtjeva`, `opis dizajna i arhitekture`, `opis koda`, `validacijske dokumente`, `informacije o verifikaciji i testiranju` i `vodiče za pomoć`.

##### Dokument zahtjeva

- Opisuje što proizvod treba raditi.
- Sadrži funkcionalnosti sustava, poslovna pravila, korisničke priče i korisničke slučajeve.
- Treba biti kratak, jasan i opisati svrhu proizvoda, značajke i ponašanje.
- Važno je navesti:
- `uloge i zaduženja`
- `ciljeve tima i poslovni cilj`
- `pozadinu i strateško uklapanje`
- `pretpostavke`
- `korisničke priče`
- `korisničku interakciju i dizajn`
- `pitanja i planirane poslove`

##### Dokumentacija arhitekture softvera

- Navodi najvažnije arhitekturne odluke.
- Treba sadržavati:
- `predložak dizajna dokumenta`
- `načela arhitekture i dizajna`
- `opis korisničkih priča`
- `detalje rješenja`
- `prikaz rješenja pomoću dijagrama`

##### Dokumentacija o kodu

- Opisuje način rada koda.
- Namijenjena je prvenstveno developerima.
- Treba sadržavati korištene programske okvire, povezivanje podataka, uzorke dizajna, sigurnosne mjere i druga važna tehnička načela.

##### Dokumentacija o testiranju

- Najčešće vrste su:
- `strategija testiranja`
- `plan testiranja`
- `specifikacija testnih slučajeva`
- `popis testova`
- Strategija testiranja opisuje pristup testiranju.
- Plan testiranja opisuje što se testira i kada.
- Specifikacija testnih slučajeva opisuje kako se provjerava svaka značajka.
- Popis testova pokazuje koja su testiranja dovršena, a koja nisu uspjela.

#### 3.1.2. Korisnička dokumentacija

- Korisnička dokumentacija namijenjena je krajnjim korisnicima i sistemskim administratorima.
- Mora biti prilagođena razini znanja i vještine korisnika.
- Sažeto objašnjava kako proizvod pomaže korisniku i kako se koristi.
- Kod online dokumentacije može sadržavati:
- `česta pitanja`
- `video upute`
- `ugrađenu pomoć`
- `portale za pomoć`
- Važno je stalno prikupljati povratne informacije korisnika kako bi se dokumentacija poboljšavala.

#### Dokumentacija procesa

- Odnosi se na aktivnosti tijekom razvoja proizvoda.
- Sastoji se od projektnih planova, rasporeda testiranja, izvještaja, standarda, bilješki sa sastanaka i poslovne korespondencije.
- Pomaže u boljoj organizaciji i planiranju procesa.
- Najčešće vrste su:
- `planovi, procjene i rasporedi`
- `izvještaji i metrika`

#### Važne napomene o dokumentaciji

- Dokumentacije treba biti `dovoljno`, ali ne previše.
- Ako je dokumentacija prekratka, dolazi do grešaka i slabije učinkovitosti.
- Ako je preopširna, dolazi do ponavljanja.
- Dokumentacija nikad nije konačna, stalno se nadopunjuje.
- Kvalitetna dokumentacija je `precizna`, `jasna` i `relevantna`.
- Dokumentacija je rezultat zajedničkog rada svih članova tima.

### 3.2. Generatori dokumentacije

- Generatori dokumentacije služe za lakše i brže stvaranje dokumentacije.
- Mogu biti namijenjeni programerima i krajnjim korisnicima.
- Često generiraju dokumentaciju iz komentara unutar izvornog koda.

#### Doxygen

- Doxygen je alat za generiranje dokumentacije, razvijen 1997. godine.
- Primarno je namijenjen za `C++`, ali podržava i druge jezike.
- Dokumentaciju generira iz komentara u kodu.
- Može se koristiti za:
- generiranje online dokumentacije i referentnih uputa
- prikaz strukture koda i odnosa među elementima
- generiranje uobičajene tehničke dokumentacije

#### JavaDoc

- JavaDoc generira dokumentaciju za `Java` iz komentara unutar koda.
- Dokumentacija se generira u `HTML` formatu.
- Postoje komentari na razini `klase` i na razini `članova klase`.
- Česti JavaDoc tagovi su:
- `@author`
- `@param`
- `@return`
- `@throws` / `@exception`
- `@version`

#### Ostali alati

- Ostali alati navedeni u skripti su:
- `Sphinx`
- `Dr. Explain`
- `PHPDocumentator`
