import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>HERZLICH WILLKOMMEN!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/AsLifeStyle-1_Page_03.jpg'
              text='Die sanfte Art der Hauterneuerung.
              Bei der Mikrodermabrasion werden durch die Behandlung mit feinsten Diamandkristallen
              die oberen Hautschichten sanft und schonend abgetragen. Die Haut wird dadurch geöffnet
              und für eine optimierte Wirkstoffaufnahme vorbereitet. Die Folge ist eine sichtbar verbesserte 
              Hautstruktur.'
              label='Diamond Peel'
              path='/services'
            />
            <CardItem
              src='images/AsLifeStyle-1_Page_04.jpg'
              text='Microneedling für ästhetisch höchste Anti Aging Ansprüche und maximale Resultate.
              Die Haut wird neu aufgebaut und remodelliert. 
              Microneedling Gesichtsbehandlung für eine vitalisierte und strahlend verjüngte Haut. 
              Die Alternative zu Injektionen und Fillerbehandlungen.'
              label='Microneedling'
              path='/products'
            />
            <CardItem
              src='images/AsLifeStyle-1_Page_05.jpg'
              text='Ohne Nadel wird durch die Behandlung ein feuchtigkeitsspendendes Polster
              unter die Haut gebracht. Dies geschieht, indem die Inhaltsstoffe der
              Collagenfäden sich in kleinste Teilchen auflösen und in die untere Hautschicht
              transportiert werden, wo sie ihre Wirkung entfalten. Dies dient zur Stärkung der
              Hautbarriere und des vorhandenen Collagen Gerüstes, mildert Falten ab und stärkt
              die Spannkraft. Die Fäden können um ein Vielfaches ihres eigenen Volumens an
              Feuchtigkeit speichern, dies hilft der Haut wieder ein frisches Volumen aufzubauen.'
              label='Gold Collagen Fadenlifting'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/AsLifeStyle-1_Page_06.jpg'
              text='Die sanfte Art der Hauterneuerung.
              Powder Brows. NACHBEHANDLUNG'
              label='Permanent Make-Up'
              path='/services'
            />
            <CardItem
              src='images/AsLifeStyle-1_Page_07.jpg'
              text='PLASMA PEN.'
              label='Plasma Pen'
              path='/products'
            />
            <CardItem
              src='images/AsLifeStyle-1_Page_08.jpg'
              text=' Oberliedstraffung - Unterlidstraffung - Lippenfalten - Krähenfüsse - Nasolabial - Ohrfalte - Stirnfalten - Zornesfalte - Halsfalten - Dekolleté - Dehnungsstreifen'
              label='Natürliche Schönheit'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/AsLifeStyle-1_Page_09.jpg'
              text='Die Übungen im Frauen Qigong kombinieren spezielle und sehr effektive Übungen aus dem Stillen Qigong. Die Frauen Qigong-Übungen wirken harmonisierend auf Brust-, Bauch- und Beckenbereich und sind unterstützend in den weiblichen Lebenszyklen. 
              Zudem nähren diese feinen Übungen das Empfinden und die Präsenz des innersten Frauseins und der inneren Schönheit.'
              label='Frauen-Qigong'
              path='/services'
            />
            <CardItem
              src='images/AsLifeStyle-1_Page_10.jpg'
              text='Eine regelmässige Detox Kur (Entgiftung/Ausleiten) stellt für den Organismus eine grosse Erleichterung dar. Denn Gifte sind überall um uns herum. In der Luft, der Nahrung, dem Wasser, der Wohnung und in der Kleidung. Viele Gifte kann der Körper selbst ausleiten, aber nicht alle. 
              Die verbleibenden Gifte werden eingelagert und können zu Zellschäden, chronischen Krankheiten führen.'
              label='Detox Kur'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;