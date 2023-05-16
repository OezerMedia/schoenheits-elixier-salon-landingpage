import React from "react";
import "./Services.css";
import CardItem from "../CardItem";

export default function Services() {
  return (
    <div className="cards" id="services">
      <h1>Das sind meine Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/AsLifeStyle-1_Page_03.jpg"
              text="Diamond Peel:


                  Die sanfte Art der Hauterneuerung.
                  Bei der Mikrodermabrasion werden durch die Behandlung mit feinsten Diamandkristallen
                  die oberen Hautschichten sanft und schonend abgetragen. Die Haut wird dadurch geöffnet
                  und für eine optimierte Wirkstoffaufnahme vorbereitet. Die Folge ist eine sichtbar verbesserte 
                  Hautstruktur."
              label="Für 99,00 €"
              path="/services"
            />
            <CardItem
              src="images/AsLifeStyle-1_Page_04.jpg"
              text="Microneedling: Microneedling für ästhetisch höchste Anti Aging Ansprüche und maximale Resultate.
                  Die Haut wird neu aufgebaut und remodelliert. 
                  Microneedling Gesichtsbehandlung für eine vitalisierte und strahlend verjüngte Haut. 
                  Die Alternative zu Injektionen und Fillerbehandlungen."
              label="Für 129,00 €"
              path="/contact"
            />
            <CardItem
              src="images/AsLifeStyle-1_Page_05.jpg"
              text="Gold Collagen Fadenlifting: Ohne Nadel wird durch die Behandlung ein feuchtigkeitsspendendes Polster
                  unter die Haut gebracht. Dies geschieht, indem die Inhaltsstoffe der
                  Collagenfäden sich in kleinste Teilchen auflösen und in die untere Hautschicht
                  transportiert werden, wo sie ihre Wirkung entfalten. Dies dient zur Stärkung der
                  Hautbarriere und des vorhandenen Collagen Gerüstes, mildert Falten ab und stärkt
                  die Spannkraft. Die Fäden können um ein Vielfaches ihres eigenen Volumens an
                  Feuchtigkeit speichern, dies hilft der Haut wieder ein frisches Volumen aufzubauen."
              label="Eine Behandlung 199,00 € 

                  3er Power Paket: 477,00 €
                  6er Power Paket: 894,00 €"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/AsLifeStyle-1_Page_06.jpg"
              text="Permanent Make-Up Augenbrauen in
                  Powder Technik: Die sanfte Art der Hauterneuerung.
                  Powder Brows. NACHBEHANDLUNG"
              label="Für 249,00 €"
              path="/services"
            />
            <CardItem
              src="images/AsLifeStyle-1_Page_07.jpg"
              text="Plasma Pen: Oberliedstraffung ab 250€
                  - Unterlidstraffung ab 250€
                  - Lippenfalten ab 170€
                  - Krähenfüsse 200€
                  - Nasolabial 200€
                  - Ohrfalte 150€
                  - Stirnfalten ab 150€
                  - Zornesfalte 120€
                  - Halsfalten 350€
                  - Dekolleté ab 170€
                  - Dehnungsstreifen ab 70€"
              label=""
              path="/contact"
            />
            <CardItem
              src="images/AsLifeStyle-1_Page_08.jpg"
              text=" Natürliche Schönheit: Lash Lifting mit Färben 55€
                  - Brow Lifting mit Färben 45€
                  - Kombiepaket Wimpern +
                  Augenbrauen 85€
                  - Brown Färben und Zupfen 35 €
                  - Lash Färben 25€"
              label=""
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/AsLifeStyle-1_Page_09.jpg"
              text="Frauen-Qigong: Die Übungen im Frauen Qigong kombinieren spezielle und sehr effektive Übungen aus dem Stillen Qigong. Die Frauen Qigong-Übungen wirken harmonisierend auf Brust-, Bauch- und Beckenbereich und sind unterstützend in den weiblichen Lebenszyklen. 
                  Zudem nähren diese feinen Übungen das Empfinden und die Präsenz des innersten Frauseins und der inneren Schönheit."
              label="Probestunde für 45,00 €
                  Einzelunterricht 65,00 € Online 45,00€"
              path="/services"
            />
            <CardItem
              src="images/AsLifeStyle-1_Page_10.jpg"
              text="Detox Kur: Eine regelmässige Detox Kur (Entgiftung/Ausleiten) stellt für den Organismus eine grosse Erleichterung dar. Denn Gifte sind überall um uns herum. In der Luft, der Nahrung, dem Wasser, der Wohnung und in der Kleidung. Viele Gifte kann der Körper selbst ausleiten, aber nicht alle. 
                  Die verbleibenden Gifte werden eingelagert und können zu Zellschäden, chronischen Krankheiten führen."
              label="Für 85,00 € wird durch Mineral - Check Labor
                  durchgeführt
                  Für 80,00 € Anamnese - Beratung- Empfehlung"
              path="/contact"
            />
          </ul>
          <p className="footer-subscription-heading">
            Alle Preise sind inklusive der gesetzlichen 19% MwSt.
          </p>
          <p className="footer-subscription-heading">
            Die Termine werden immer individuell für jeden Kunden abgestimmt und
            vergeben. Sollte ein Termin nicht zustande kommen, bitte ich Sie, 48
            Stunden vorher abzusagen, damit der Termin noch für Kunden zur
            Verfügung steht und Ihnen keine Stornogebühr berechnet wird.
          </p>
        </div>
      </div>
    </div>
  );
}
