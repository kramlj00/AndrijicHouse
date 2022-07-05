import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          homeCard: {
            title: "Welcome!",
            description:
              "Vacation House for 4 persons in place Zaglav/Karbuni Blato. House has fully equipped kitchen, living room, bathroom, two bedrooms and big covered terrace. Guests can use private barbecue, canoe and rent a boat. House is in the first row near sea and has private beach with beach umbrella, deck chairs and outdoor shower. Gravel public beach is 150 m from house. Private parking for 3 cars and free WiFi are available for our guests.",
          },
          navLinks: {
            link1: "Rooms",
            link2: "Exterior",
            link3: "Contact us",
          },
          bookBtn: "Book now",
          locationTitle: "Location",
          imageTitle: {
            homeImage: {
              partOne: "Enjoy a luxury",
              partTwo: "experience"
            },
            roomsImage: {
              partOne: "Enjoy your dream",
              partTwo: "vacation"
            },
            exteriorImage: {
              partOne: "Luxury by the",
              partTwo: "sea"
            },
          },
          rightsFooter: "All rights reserved.",
          contactUs: "Contact us",
          contactPage: {
            address: "Address",
            phoneNo: "Phone Number",
            emailAdr: "Email Address",
            sendEmailMsg: "Send us an email:",
            name: "Name",
            msg: "Message",
            sendBtn: "Send"
          }
        },
      },
      hr: {
        translation: {
          homeCard: {
            title: "Dobrodošli!",
            description:
              "Kuća za odmor za četiri osobe u mjestu Zaglav/Karbuni, Blato. Kuća ima potpuno opremljenu kuhinju, dnevni boravak, kupaonicu, dvije spavaće sobe i veliku natkrivenu terasu. Gosti mogu koristiti privatni roštilj, kanu i iznajmiti čamac. Kuća se nalazi u prvom redu do mora i ima privatnu plažu sa suncobranom, ležaljkama i vanjskim tušem. Šljunčana javna plaža udaljena je 150 m od kuće. Gostima je na raspolaganju privatni parking za 3 automobila i besplatni WiFi.",
          },
          navLinks: {
            link1: "Interijer",
            link2: "Eksterijer",
            link3: "Kontakt",
          },
          bookBtn: "Rezerviraj",
          locationTitle: "Lokacija",
          imageTitle: {
            homeImage: {
              partOne: "Uživajte u luksuznom",
              partTwo: "iskustvu"
            },
            roomsImage: {
              partOne: "Uživajte u odmoru",
              partTwo: "iz snova"
            },
            exteriorImage: {
              partOne: "Luksuz uz",
              partTwo: "more"
            }
          },
          rightsFooter: "Sva prava pridržana.",
          contactUs: "Kontakrirajte nas",
          contactPage: {
            address: "Adresa",
            phoneNo: "Broj mobitela",
            emailAdr: "Email adresa",
            sendEmailMsg: "Pošaljite nam email:",
            name: "Ime i prezime",
            msg: "Poruka",
            sendBtn: "Pošalji"
          }
        },
      },
    },
  });

export default i18n;
