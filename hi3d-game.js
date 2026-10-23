(() => {
  'use strict';

  const durationMs = 5000;
  const rounds = [{
    answer: 'amertume',
    definition: 'L’amertume, c’est la peine ou la déception qui reste dans le cœur, même après un moment.',
    artwork: 'art-amertume',
    artCaption: 'Observe son visage. Que peut-il se passer dans son cœur ?',
    cards: [
      { letter: 'A', word: 'Affliction' },
      { letter: 'M', word: 'Mélancolie' },
      { letter: 'E', word: 'Écœurement', spoken: 'écoeurement' },
      { letter: 'R', word: 'Rancœur', spoken: 'rancoeur' },
      { letter: 'T', word: 'Tristesse' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'M', word: 'Mélancolie' },
      { letter: 'E', word: 'Écœurement', spoken: 'écoeurement' }
    ]
  }, {
    answer: 'abaisser',
    definition: 'Abaisser, c’est faire descendre quelque chose ou en diminuer le niveau. Rabaisser une personne, c’est la faire se sentir moins importante.',
    artwork: 'art-abaisser',
    artCaption: 'Observe le geste et le drapeau. Dans quel sens se déplace-t-il ?',
    cards: [
      { letter: 'A', word: 'Atténuer' },
      { letter: 'B', word: 'Baisser' },
      { letter: 'A', word: 'Amoindrir' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'S', word: 'Soumettre' },
      { letter: 'S', word: 'Soumettre' },
      { letter: 'E', word: 'Écraser' },
      { letter: 'R', word: 'Rabaisser' }
    ]
  }, {
    answer: 'abandonner',
    definition: 'Abandonner, c’est laisser quelque chose ou quelqu’un, ou arrêter de poursuivre une activité ou un projet. On peut aussi dire : renoncer.',
    artwork: 'art-abandonner',
    artCaption: 'Observe la construction inachevée et l’enfant qui s’éloigne. Que se passe-t-il ?',
    cards: [
      { letter: 'A', word: 'Abdiquer' },
      { letter: 'B', word: 'Baisser les bras' },
      { letter: 'A', word: 'Abdiquer' },
      { letter: 'N', word: 'Négliger' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'O', word: 'Oublier' },
      { letter: 'N', word: 'Négliger' },
      { letter: 'N', word: 'Négliger' },
      { letter: 'E', word: 'Évacuer' },
      { letter: 'R', word: 'Renoncer à' }
    ]
  }, {
    answer: 'abbé',
    definition: 'Un abbé est un prêtre catholique. Ce mot peut aussi désigner le responsable d’une abbaye.',
    artwork: 'art-abbe',
    artCaption: 'Observe sa tenue, son livre et la petite église. Quel est son rôle ?',
    mysteryHint: 'C’est la même lettre à deviner deux fois.',
    cards: [
      { letter: 'A', word: 'Aumônier' },
      { letter: '?', word: 'Lettre à deviner', spoken: 'C’est la même lettre à deviner deux fois.' },
      { letter: '?', word: 'Lettre à deviner', spoken: 'C’est la même lettre à deviner deux fois.' },
      { letter: 'É', word: 'Ecclésiastique' }
    ]
  }, {
    answer: 'abattement',
    definition: 'L’abattement, c’est une grande fatigue ou un découragement qui donne l’impression de ne plus avoir d’énergie.',
    artwork: 'art-abattement',
    artCaption: 'Observe sa posture et ses épaules. Comment cet enfant semble-t-il se sentir ?',
    cards: [
      { letter: 'A', word: 'Accablement' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'A', word: 'Affaiblissement' },
      { letter: 'T', word: 'Torpeur' },
      { letter: 'T', word: 'Tristesse' },
      { letter: 'E', word: 'Effondrement' },
      { letter: 'M', word: 'Mollesse' },
      { letter: 'E', word: 'Effondrement' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'T', word: 'Torpeur' }
    ]
  }, {
    answer: 'abattre',
    definition: 'Abattre, c’est faire tomber quelque chose, comme une tour de cubes. Ce mot peut aussi vouloir dire décourager.',
    artwork: 'art-abattre',
    artCaption: 'Observe le ballon et la tour de cubes qui tombe. Quel verbe décrit cette action ?',
    cards: [
      { letter: 'A', word: 'Anéantir' },
      { letter: 'B', word: 'Briser' },
      { letter: 'A', word: 'Accabler' },
      { letter: 'T', word: 'Trancher' },
      { letter: 'T', word: 'Trancher' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Écraser' }
    ]
  }, {
    answer: 'abîme',
    definition: 'Un abîme est un trou très profond. On emploie aussi ce mot pour parler d’une très grande différence.',
    artwork: 'art-abime',
    artCaption: 'Observe la profondeur entre les deux falaises. Comment nommer ce grand creux ?',
    cards: [
      { letter: 'A', word: 'Abysse' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'I', word: 'Immensité' },
      { letter: 'M', word: 'Monde' },
      { letter: 'E', word: 'Écart' }
    ]
  }, {
    answer: 'abîmé',
    definition: 'Abîmé signifie endommagé : un objet abîmé n’est plus en bon état.',
    artwork: 'art-abime-endommage',
    artCaption: 'Observe la couverture déchirée et les pages froissées. Dans quel état est ce livre ?',
    cards: [
      { letter: 'A', word: 'Altérer' },
      { letter: 'B', word: 'Bousillé' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'M', word: 'Moisi' },
      { letter: 'E', word: 'Endommagé' }
    ]
  }, {
    answer: 'abîmer',
    definition: 'Abîmer, c’est endommager quelque chose et le mettre en mauvais état.',
    artwork: 'art-abimer',
    artCaption: 'Une tasse intacte et une tasse fêlée : que peut-on faire à un objet fragile ?',
    cards: [
      { letter: 'A', word: 'Altérer' },
      { letter: 'B', word: 'Bousiller' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'M', word: 'Massacrer' },
      { letter: 'E', word: 'Esquinter' },
      { letter: 'R', word: 'Ruiner' }
    ]
  }, {
    answer: 'abrupt',
    definition: 'Abrupt signifie brusque ou sans transition. Une falaise abrupte est très escarpée.',
    artwork: 'art-abrupt',
    artCaption: 'Observe le sentier qui s’arrête brusquement au bord d’une falaise. Comment est cette pente ?',
    cards: [
      { letter: 'A', word: 'Acerbe' },
      { letter: 'B', word: 'Brusque' },
      { letter: 'R', word: 'Rude' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: '?', word: 'Autre lettre à deviner' },
      { letter: 'T', word: 'Tranchant' }
    ]
  }, {
    answer: 'absorber',
    definition: 'Absorber, c’est faire entrer un liquide dans une matière, comme une éponge qui boit de l’eau.',
    artwork: 'art-absorber',
    artCaption: 'Observe l’eau versée sur l’éponge. Où disparaissent les gouttes ?',
    cards: [
      { letter: 'A', word: 'Avaler' },
      { letter: 'B', word: 'Boire' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'O', word: 'Occuper' },
      { letter: 'R', word: 'Retenir' },
      { letter: 'B', word: 'Boire' },
      { letter: 'E', word: 'Engloutir' },
      { letter: 'R', word: 'Retenir' }
    ]
  }, {
    answer: 'absurde',
    definition: 'Absurde veut dire déraisonnable ou contraire au bon sens, comme une situation complètement illogique.',
    artwork: 'art-absurde',
    artCaption: 'Un poisson ouvre son parapluie sous l’eau. Qu’est-ce qui semble étrange dans cette scène ?',
    cards: [
      { letter: 'A', word: 'Aberrant' },
      { letter: 'B', word: 'Bête' },
      { letter: 'S', word: 'Sot' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'R', word: 'Ridicule' },
      { letter: 'D', word: 'Déraisonnable' },
      { letter: 'E', word: 'Extravagant' }
    ]
  }, {
    answer: 'abuser',
    definition: 'Abuser peut vouloir dire profiter de la confiance de quelqu’un ou faire quelque chose de façon excessive.',
    artwork: 'art-abuser',
    artCaption: 'Un enfant prend presque tous les biscuits qu’on lui offre. Est-ce qu’il en prend trop ?',
    cards: [
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'B', word: 'Berner' },
      { letter: '?', word: 'Autre lettre à deviner' },
      { letter: 'S', word: 'Se jouer de' },
      { letter: 'E', word: 'Exagérer' },
      { letter: 'R', word: 'Rouler' }
    ]
  }, {
    answer: 'acariâtre',
    definition: 'Une personne acariâtre est de mauvaise humeur et se montre désagréable avec les autres.',
    artwork: 'art-acariatre',
    artCaption: 'Observe les sourcils froncés et les bras croisés. De quelle humeur semble être cette personne ?',
    cards: [
      { letter: 'A', word: 'Aigre' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'A', word: 'Acrimonieux' },
      { letter: 'R', word: 'Rogue' },
      { letter: 'I', word: 'Insociable' },
      { letter: 'A', word: 'Atrabilaire' },
      { letter: 'T', word: 'Teigneux' },
      { letter: 'R', word: 'Rogue' },
      { letter: '?', word: 'Autre lettre à deviner' }
    ]
  }, {
    answer: 'accessible',
    definition: 'Accessible signifie facile à atteindre, à comprendre ou à obtenir. Une rampe rend une entrée plus facile à atteindre.',
    artwork: 'art-accessible',
    artCaption: 'Une rampe mène à la bibliothèque. Comment peut-on y entrer facilement ?',
    cards: [
      { letter: 'A', word: 'Abordable' },
      { letter: 'C', word: 'Compréhensible' },
      { letter: 'C', word: 'Clair' },
      { letter: 'E', word: 'Engageant' },
      { letter: 'S', word: 'Simple' },
      { letter: 'S', word: 'Simple' },
      { letter: 'I', word: 'Intelligible' },
      { letter: 'B', word: 'Bon marché' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Engageant' }
    ]
  }, {
    answer: 'accidenté',
    definition: 'Un véhicule accidenté a été endommagé par un accident. On dit aussi qu’un terrain est accidenté lorsqu’il est irrégulier.',
    artwork: 'art-accidente',
    artCaption: 'Observe le capot déformé et la carrosserie cabossée. Dans quel état est cette voiture ?',
    cards: [
      { letter: 'A', word: 'Amoché' },
      { letter: 'C', word: 'Cabossé' },
      { letter: 'C', word: 'Cabossé' },
      { letter: 'I', word: 'Irrégulier' },
      { letter: 'D', word: 'Détérioré' },
      { letter: 'E', word: 'Esquinté' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'T', word: 'Touché' },
      { letter: 'E', word: 'Esquinté' }
    ]
  }, {
    answer: 'accorder',
    definition: 'Accorder, c’est donner ou accepter de donner quelque chose, comme une permission ou une récompense.',
    artwork: 'art-accorder',
    artCaption: 'Une récompense est remise à cet enfant. Que lui donne-t-on ?',
    cards: [
      { letter: 'A', word: 'Attribuer' },
      { letter: 'C', word: 'Consentir' },
      { letter: 'C', word: 'Consentir' },
      { letter: 'O', word: 'Offrir' },
      { letter: 'R', word: 'Reconnaître' },
      { letter: 'D', word: 'Décerner' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'R', word: 'Reconnaître' }
    ]
  }, {
    answer: 'accroc',
    definition: 'Un accroc est un petit problème imprévu qui gêne le déroulement de quelque chose. Ce mot peut aussi désigner une déchirure dans un tissu.',
    artwork: 'art-accroc',
    artCaption: 'Un rocher gêne le passage du petit chariot. Quel imprévu vient interrompre son trajet ?',
    cards: [
      { letter: 'A', word: 'Anicroche' },
      { letter: 'C', word: 'Complication' },
      { letter: 'C', word: 'Contretemps' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'O', word: 'Obstacle' },
      { letter: 'C', word: 'Contretemps' }
    ]
  }, {
    answer: 'achever',
    definition: 'Achever, c’est mener quelque chose jusqu’à sa fin, comme terminer un puzzle. Ce mot peut aussi vouloir dire épuiser ou ruiner.',
    artwork: 'art-achever',
    artCaption: 'Un enfant pose la dernière pièce de son puzzle. Que fait-il de son travail ?',
    cards: [
      { letter: 'A', word: 'Accomplir' },
      { letter: 'C', word: 'Conduire à sa fin' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Exécuter' },
      { letter: '?', word: 'Autre lettre à deviner' },
      { letter: 'E', word: 'Épuiser' },
      { letter: 'R', word: 'Ruiner' }
    ]
  }, {
    answer: 'acide',
    definition: 'Acide peut décrire le goût piquant d’un citron. Une remarque acide peut aussi être blessante ou caustique.',
    artwork: 'art-acide',
    artCaption: 'Un enfant goûte une tranche de citron et grimace légèrement. Quel goût ressent-il ?',
    cards: [
      { letter: 'A', word: 'Acidulé' },
      { letter: 'C', word: 'Caustique' },
      { letter: 'I', word: 'Incisif' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: '?', word: 'Autre lettre à deviner' }
    ]
  }, {
    answer: 'âcre',
    definition: 'Âcre décrit une odeur ou un goût fort, piquant et désagréable, comme l’odeur d’une tartine brûlée.',
    artwork: 'art-acre',
    artCaption: 'Une tartine brûlée dégage une fumée piquante. Quelle odeur pourrait-elle avoir ?',
    cards: [
      { letter: 'Â', word: 'Âpre' },
      { letter: 'C', word: 'Cuisant' },
      { letter: 'R', word: 'Râpeux' },
      { letter: '?', word: 'Lettre à deviner' }
    ]
  }, {
    answer: 'acte',
    definition: 'Un acte peut être un document écrit qui atteste quelque chose. Ce mot peut aussi désigner une action que l’on accomplit.',
    artwork: 'art-acte',
    artCaption: 'Observe ce document, ses lignes et son sceau. Que peut-il servir à attester ?',
    cards: [
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'C', word: 'Certificat' },
      { letter: 'T', word: 'Titre' },
      { letter: 'E', word: 'Entreprise' }
    ]
  }, {
    answer: 'adresse',
    definition: 'L’adresse, c’est l’habileté à faire quelque chose avec précision. Ce mot peut aussi désigner la manière de se comporter avec les autres ou le lieu où l’on habite.',
    artwork: 'art-adresse',
    artCaption: 'Un enfant jongle avec trois balles sans les laisser tomber. Quelle qualité montre-t-il ?',
    cards: [
      { letter: 'A', word: 'Agilité' },
      { letter: 'D', word: 'Dextérité' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Entregent' },
      { letter: 'S', word: 'Science' },
      { letter: 'S', word: 'Subtilité' },
      { letter: 'E', word: 'Entregent' }
    ]
  }, {
    answer: 'affaire',
    definition: 'Une affaire peut être une activité commerciale, une occasion intéressante ou une histoire à résoudre.',
    artwork: 'art-affaire',
    artCaption: 'Une petite boutique vend des fruits. Quel mot peut désigner cette activité ?',
    cards: [
      { letter: 'A', word: 'Aubaine' },
      { letter: 'F', word: 'Firme' },
      { letter: 'F', word: 'Firme' },
      { letter: 'A', word: 'Aubaine' },
      { letter: 'I', word: 'Intrigue' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Entreprise' }
    ]
  }, {
    answer: 'affamé',
    definition: 'Affamé signifie avoir très faim. On peut aussi être affamé de découvertes : avoir très envie d’apprendre.',
    artwork: 'art-affame',
    artCaption: 'Observe cet enfant après une longue promenade. De quoi a-t-il besoin ?',
    cards: [
      { letter: 'A', word: 'Avide' },
      { letter: 'F', word: 'Famélique' },
      { letter: 'F', word: 'Famélique' },
      { letter: 'A', word: 'Assoiffé', spoken: 'assouafé' },
      { letter: 'M', word: 'Misérable' },
      { letter: '?', word: 'Lettre à deviner' }
    ]
  }, {
    answer: 'affecté',
    definition: 'Dans ce sens, affecté décrit une manière de parler ou de se comporter peu naturelle, comme si on jouait un rôle.',
    artwork: 'art-affecte',
    artCaption: 'Observe cette salutation très exagérée. Semble-t-elle naturelle ?',
    cards: [
      { letter: 'A', word: 'Artificiel' },
      { letter: 'F', word: 'Factice' },
      { letter: 'F', word: 'Faux' },
      { letter: 'E', word: 'Étudié' },
      { letter: 'C', word: 'Cérémonieux' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Emprunté' }
    ]
  }, {
    answer: 'affecter',
    definition: 'Affecter peut vouloir dire faire semblant de ressentir quelque chose ou adopter une attitude que l’on ne ressent pas vraiment.',
    artwork: 'art-affecter',
    artCaption: 'Observe le masque de théâtre. Le personnage montre-t-il forcément ce qu’il ressent ?',
    cards: [
      { letter: 'A', word: 'Afficher' },
      { letter: 'F', word: 'Feindre', spoken: 'findre' },
      { letter: 'F', word: 'Feindre', spoken: 'findre' },
      { letter: 'E', word: 'Étaler' },
      { letter: 'C', word: 'Contrefaire' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Étaler' },
      { letter: '?', word: 'Autre lettre à deviner' }
    ]
  }, {
    answer: 'affecter',
    definition: 'Dans ce sens, affecter signifie toucher une personne dans ses émotions, souvent en lui causant de la peine.',
    artwork: 'art-affecter-emotion',
    artCaption: 'Observe son visage après cette nouvelle. Que ressent-il ?',
    mysteryHint: 'C’est la même lettre à deviner deux fois.',
    cards: [
      { letter: 'A', word: 'Affliger' },
      { letter: '?', word: 'Lettre à deviner', spoken: 'C’est la même lettre à deviner deux fois.' },
      { letter: '?', word: 'Lettre à deviner', spoken: 'C’est la même lettre à deviner deux fois.' },
      { letter: 'E', word: 'Émouvoir' },
      { letter: 'C', word: 'Chagriner' },
      { letter: 'T', word: 'Troubler' },
      { letter: 'E', word: 'Émouvoir' },
      { letter: 'R', word: 'Remuer' }
    ]
  }, {
    answer: 'affermir',
    definition: 'Affermir, c’est rendre plus solide, plus ferme ou plus assuré. On peut affermir un appui, une décision ou le courage de quelqu’un.',
    artwork: 'art-affermir',
    artCaption: 'Observe le jeune arbre et son tuteur. Comment le rendre plus solide ?',
    cards: [
      { letter: 'A', word: 'Affirmer' },
      { letter: 'F', word: 'Fortifier' },
      { letter: 'F', word: 'Fortifier' },
      { letter: 'E', word: 'Encourager' },
      { letter: 'R', word: 'Raffermir' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: '?', word: 'Autre lettre à deviner' },
      { letter: 'R', word: 'Renforcer' }
    ]
  }, {
    answer: 'âge',
    definition: 'L’âge indique depuis combien de temps une personne, un animal ou une chose existe. Il peut aussi désigner une période de l’histoire.',
    artwork: 'art-age',
    artCaption: 'Observe les cernes du tronc. Que racontent-ils sur le temps passé ?',
    cards: [
      { letter: 'A', word: 'Ancienneté' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Ère' }
    ]
  }, {
    answer: 'aggraver',
    definition: 'Aggraver, c’est rendre une situation ou un problème plus grave, plus difficile à résoudre.',
    artwork: 'art-aggraver',
    artCaption: 'Ajouter encore de l’eau fait grandir la flaque. Que devient le problème ?',
    cards: [
      { letter: 'A', word: 'Amplifier' },
      { letter: 'G', word: 'Grossir' },
      { letter: 'G', word: 'Grossir' },
      { letter: 'R', word: 'Redoubler' },
      { letter: 'A', word: 'Augmenter' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Envenimer' },
      { letter: 'R', word: 'Renforcer' }
    ]
  }, {
    answer: 'agitation',
    definition: 'L’agitation, c’est beaucoup de mouvements, d’activité ou de nervosité. Elle peut se voir autour de nous ou se ressentir en nous.',
    artwork: 'art-agitation',
    artCaption: 'Observe les mouvements et les visages. Tout semble-t-il calme ?',
    cards: [
      { letter: 'A', word: 'Animation' },
      { letter: 'G', word: 'Grouillement' },
      { letter: 'I', word: 'Inquiétude' },
      { letter: 'T', word: 'Tourmente' },
      { letter: 'A', word: 'Affairement' },
      { letter: 'T', word: 'Turbulence' },
      { letter: 'I', word: 'Inquiétude' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'N', word: 'Nervosité' }
    ]
  }, {
    answer: 'agité',
    definition: 'Agité décrit quelqu’un ou quelque chose qui bouge beaucoup ou manque de calme. On peut aussi être agité sous le coup d’une émotion.',
    artwork: 'art-agite',
    artCaption: 'Observe les mouvements de ses mains et de ses jambes. Semble-t-il calme ?',
    cards: [
      { letter: 'A', word: 'Animé' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'I', word: 'Instable' },
      { letter: 'T', word: 'Turbulent' },
      { letter: 'E', word: 'Ému' }
    ]
  }, {
    answer: 'agiter',
    definition: 'Dans ce sens, agiter signifie troubler quelqu’un, l’inquiéter ou le remuer intérieurement.',
    artwork: 'art-agiter',
    artCaption: 'Observe son visage et les pensées qui tournent dans sa tête. Quel effet cette nouvelle a-t-elle sur lui ?',
    cards: [
      { letter: 'A', word: 'Affoler' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'I', word: 'Inquiéter' },
      { letter: 'T', word: 'Tracasser' },
      { letter: 'E', word: 'Ébranler' },
      { letter: 'R', word: 'Remuer' }
    ]
  }, {
    answer: 'agrafe',
    definition: 'Une agrafe est une petite pièce qui sert à attacher ou à fermer. Elle peut maintenir des feuilles ensemble ou fermer un vêtement.',
    artwork: 'art-agrafe',
    artCaption: 'Observe la petite pièce métallique. À quoi sert-elle entre ces feuilles ?',
    cards: [
      { letter: 'A', word: 'Attache' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: '?', word: 'Autre lettre à deviner' },
      { letter: 'A', word: 'Attache' },
      { letter: 'F', word: 'Fermoir' },
      { letter: 'E', word: 'Épingle' }
    ]
  }, {
    answer: 'aide',
    definition: 'L’aide, c’est ce que l’on fait ou donne pour soutenir quelqu’un, lui rendre service ou lui permettre de surmonter une difficulté.',
    artwork: 'art-aide',
    artCaption: 'Observe ces deux enfants et le carton. Que fait l’un pour l’autre ?',
    cards: [
      { letter: 'A', word: 'Assistance' },
      { letter: 'I', word: 'Intervention' },
      { letter: 'D', word: 'Don', spoken: 'dont' },
      { letter: '?', word: 'Lettre à deviner' }
    ]
  }, {
    answer: 'aider',
    definition: 'Aider, c’est soutenir quelqu’un ou lui rendre service pour qu’il puisse faire quelque chose plus facilement.',
    artwork: 'art-aider',
    artCaption: 'Un enfant ramasse les livres tombés de son camarade. Que fait-il pour lui ?',
    cards: [
      { letter: 'A', word: 'Assister' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'D', word: 'Donner un coup de pouce' },
      { letter: 'E', word: 'Épauler' },
      { letter: 'R', word: 'Rendre service à' }
    ]
  }, {
    answer: 'aigre',
    definition: 'Aigre décrit un goût acide, une odeur piquante ou une humeur désagréable.',
    artwork: 'art-aigre',
    artCaption: 'Observe la grimace devant le citron. Quel goût peut-il avoir ?',
    cards: [
      { letter: 'A', word: 'Aigrelet' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'G', word: 'Grinçant' },
      { letter: 'R', word: 'Revêche', spoken: 'reuvèche' },
      { letter: '?', word: 'Autre lettre à deviner' }
    ]
  }, {
    answer: 'air',
    definition: 'Dans ce sens, l’air désigne l’allure ou l’apparence de quelqu’un. Avoir un air de famille, c’est se ressembler.',
    artwork: 'art-air',
    artCaption: 'Observe les traits de ces deux visages. Que remarques-tu en les comparant ?',
    cards: [
      { letter: 'A', word: 'Allure' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'R', word: 'Ressemblance' }
    ]
  }, {
    answer: 'alerte',
    definition: 'Alerte décrit quelqu’un de vif, agile et bien éveillé, qui réagit rapidement.',
    artwork: 'art-alerte',
    artCaption: 'Observe son regard et son geste pour attraper la balle. Comment réagit cet enfant ?',
    cards: [
      { letter: 'A', word: 'Agile' },
      { letter: 'L', word: 'Léger' },
      { letter: 'E', word: 'Éveillé' },
      { letter: 'R', word: 'Rapide' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Éveillé' }
    ]
  }, {
    answer: 'allègre',
    definition: 'Allègre signifie joyeux, plein d’entrain et de vivacité.',
    artwork: 'art-allegre',
    artCaption: 'Observe son sourire et ses mouvements. Comment cet enfant se sent-il ?',
    cards: [
      { letter: 'A', word: 'Alerte', spoken: 'alèrte' },
      { letter: 'L', word: 'Léger' },
      { letter: 'L', word: 'Leste' },
      { letter: 'E', word: 'Enjoué' },
      { letter: 'G', word: 'Gai' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Enjoué' }
    ]
  }, {
    answer: 'abattu',
    definition: 'Abattu décrit quelqu’un qui se sent très fatigué, découragé ou accablé.',
    artwork: 'art-abattu',
    artCaption: 'Observe ses épaules baissées et son visage. Comment se sent cet enfant ?',
    cards: [
      { letter: 'A', word: 'Accablé' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'A', word: 'Anéanti' },
      { letter: 'T', word: 'Terne' },
      { letter: 'T', word: 'Très fatigué' },
      { letter: '?', word: 'Autre lettre à deviner' }
    ]
  }, {
    answer: 'abcès',
    definition: 'Un abcès est un amas de pus.',
    artwork: 'art-abces',
    artCaption: 'Observe la petite bosse et le dessin agrandi. Que contient-elle ?',
    cards: [
      { letter: 'A', word: 'Amas de pus' },
      { letter: 'B', word: 'Bouton' },
      { letter: 'C', word: 'Clou' },
      { letter: 'E', word: 'Empyème' },
      { letter: '?', word: 'Lettre à deviner' }
    ]
  }, {
    answer: 'abêti',
    definition: 'Abêti décrit quelqu’un dont l’esprit semble engourdi et qui a du mal à réfléchir.',
    artwork: 'art-abeti',
    artCaption: 'Observe son expression et le petit nuage de pensées. Semble-t-il avoir les idées claires ?',
    cards: [
      { letter: 'A', word: 'Abruti' },
      { letter: 'B', word: 'Bête' },
      { letter: 'E', word: 'Ensuqué', audio: 'hi3d-ensuque-prononciation.wav' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'I', word: 'Idiot' }
    ]
  }, {
    answer: 'abject',
    definition: 'Abject qualifie ce qui est profondément méprisable, indigne ou avilissant.',
    artwork: 'art-abject',
    artCaption: 'Observe le dessin déchiré et la peine de l’autre personnage. Que penses-tu de ce comportement ?',
    cards: [
      { letter: 'A', word: 'Avilissant' },
      { letter: 'B', word: 'Bas' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Effrayant' },
      { letter: 'C', word: 'Crapuleux' },
      { letter: 'T', word: 'Taré' }
    ]
  }, {
    answer: 'abrégé',
    definition: 'Un abrégé est une version plus courte d’un texte qui en garde les idées principales.',
    artwork: 'art-abrege',
    artCaption: 'Regarde le grand livre et le petit carnet. Lequel garde seulement les idées importantes ?',
    cards: [
      { letter: 'A', word: 'Aperçu' },
      { letter: 'B', word: 'Bref' },
      { letter: 'R', word: 'Résumé' },
      { letter: 'E', word: 'Épitomé' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Extrait' }
    ]
  }, {
    answer: 'abri',
    definition: 'Un abri est un endroit où l’on peut se protéger, par exemple de la pluie ou du vent.',
    artwork: 'art-abri',
    artCaption: 'Dehors, il pleut. Où cet enfant peut-il rester au sec ?',
    cards: [
      { letter: 'A', word: 'Asile' },
      { letter: 'B', word: 'Baraquement' },
      { letter: 'R', word: 'Refuge' },
      { letter: '?', word: 'Lettre à deviner' }
    ]
  }, {
    answer: 'abscons',
    definition: 'Abscons veut dire difficile à comprendre, comme une explication très compliquée ou obscure.',
    artwork: 'art-abscons',
    artCaption: 'Cet enfant essaie de comprendre une explication pleine de signes et de flèches emmêlées. Est-elle claire ?',
    cards: [
      { letter: 'A', word: 'Abstrus' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'S', word: 'Sibyllin' },
      { letter: 'C', word: 'Compliqué' },
      { letter: 'O', word: 'Obscur' },
      { letter: 'N', word: 'Nébuleux' },
      { letter: 'S', word: 'Sibyllin' }
    ]
  }, {
    answer: 'absence',
    definition: 'L’absence, c’est le fait de ne pas être dans un lieu, par exemple de ne pas être en classe un jour où les autres y sont.',
    artwork: 'art-absence',
    artCaption: 'Dans la classe, deux enfants sont là et une chaise reste vide. Qui manque aujourd’hui ?',
    cards: [
      { letter: 'A', word: 'Absentéisme' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'S', word: 'Séparation' },
      { letter: 'E', word: 'Éloignement' },
      { letter: 'N', word: 'Ne pas être dans un lieu où l’on devrait être' },
      { letter: 'C', word: 'Cesser de paraître' },
      { letter: 'E', word: 'Éloignement' }
    ]
  }, {
    answer: 'absurde',
    definition: 'Absurde veut dire déraisonnable ou contraire au bon sens, comme une situation complètement illogique.',
    artwork: 'art-absurde',
    artCaption: 'Un poisson ouvre son parapluie sous l’eau. Qu’est-ce qui semble étrange dans cette scène ?',
    cards: [
      { letter: 'A', word: 'Aberrant' },
      { letter: 'B', word: 'Bête' },
      { letter: 'S', word: 'Saugrenu' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'R', word: 'Ridicule' },
      { letter: 'D', word: 'Déraisonnable' },
      { letter: 'E', word: 'Extravagant' }
    ]
  }, {
    answer: 'accabler',
    definition: 'Accabler, c’est faire peser trop de soucis, de fatigue ou de reproches sur quelqu’un.',
    artwork: 'art-accabler',
    artCaption: 'Cet enfant reçoit beaucoup de reproches et baisse la tête. Quel effet toutes ces paroles ont-elles sur lui ?',
    cards: [
      { letter: 'A', word: 'Abattre' },
      { letter: 'C', word: 'Calomnier' },
      { letter: 'C', word: 'Charger' },
      { letter: 'A', word: 'Accuser lourdement' },
      { letter: 'B', word: 'Bombarder' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Excéder' },
      { letter: 'R', word: 'Reprocher' }
    ]
  }, {
    answer: 'accéder',
    definition: 'Accéder, c’est pouvoir entrer dans un lieu ou parvenir à quelque chose.',
    artwork: 'art-acceder',
    artCaption: 'La porte est ouverte. Observe cet enfant qui entre dans la bibliothèque. Que peut-il faire maintenant ?',
    mysteryHint: 'C’est la même lettre à deviner deux fois.',
    cards: [
      { letter: 'A', word: 'Avoir accès à' },
      { letter: '?', word: 'Lettre à deviner', spoken: 'C’est la même lettre à deviner deux fois.' },
      { letter: '?', word: 'Lettre à deviner', spoken: 'C’est la même lettre à deviner deux fois.' },
      { letter: 'E', word: 'Entrer' },
      { letter: 'D', word: 'Déboucher sur' },
      { letter: 'E', word: 'Entrer' },
      { letter: 'R', word: 'Réussir à entrer' }
    ]
  }, {
    answer: 'accent',
    definition: 'Un accent peut être un signe ajouté à une lettre, comme dans é ou ê, ou une façon de faire ressortir un son en parlant. La cédille et le tréma sont d’autres signes qui accompagnent des lettres.',
    artwork: 'art-accent',
    artCaption: 'Observe les petits signes autour des lettres et la voix qui monte. Qu’est-ce qui change ?',
    cards: [
      { letter: 'A', word: 'Aigu' },
      { letter: 'C', word: 'Circonflexe' },
      { letter: 'C', word: 'Cédille' },
      { letter: 'E', word: 'Élévation de la voix sur un son' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'T', word: 'Tréma' }
    ]
  }, {
    answer: 'accepter',
    definition: 'Accepter, c’est dire oui à une proposition, recevoir quelque chose volontiers ou reconnaître qu’une idée est vraie.',
    artwork: 'art-accepter',
    artCaption: 'Un enfant propose un livre. L’autre sourit et tend les mains pour le recevoir. Que décide-t-il de faire ?',
    cards: [
      { letter: 'A', word: 'Admettre' },
      { letter: 'C', word: 'Consentir' },
      { letter: 'C', word: 'Considérer comme vrai' },
      { letter: 'E', word: 'Embrasser' },
      { letter: 'P', word: 'Prendre volontiers' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Embrasser' },
      { letter: 'R', word: 'Recevoir' }
    ]
  }, {
    answer: 'amer',
    definition: 'Amer peut décrire le goût du cacao pur, ou une personne triste et pleine de déception.',
    artwork: 'art-amer',
    artCaption: 'Cet enfant goûte du cacao sans sucre et fait une grimace. Quel goût peut-il découvrir ?',
    cards: [
      { letter: 'A', word: 'Âpre' },
      { letter: 'M', word: 'Morose' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'R', word: 'Rude' }
    ]
  }, {
    answer: 'ameuter',
    definition: 'Ameuter, c’est rassembler des personnes en les appelant ou en attirant vivement leur attention.',
    artwork: 'art-ameuter',
    artCaption: 'Cet enfant appelle tout le monde. Observe les personnes qui se rapprochent. Que fait-il ?',
    cards: [
      { letter: 'A', word: 'Attrouper' },
      { letter: 'M', word: 'Mener à l’action' },
      { letter: 'E', word: 'Exciter' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: '?', word: 'Autre lettre à deviner' },
      { letter: 'E', word: 'Échauffer les esprits', spoken: 'Échauffé les esprits' },
      { letter: 'R', word: 'Rameuter' }
    ]
  }, {
    answer: 'amortir',
    definition: 'Amortir, c’est rendre un choc ou un effet moins fort. Ce mot peut aussi signifier récupérer peu à peu le coût d’un achat.',
    artwork: 'art-amortir',
    artCaption: 'Un ballon tombe sur un coussin moelleux. Que fait le coussin pour rendre le choc moins fort ?',
    cards: [
      { letter: 'A', word: 'Atténuer un effet' },
      { letter: 'M', word: 'Modérer' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'R', word: 'Rentabiliser' },
      { letter: 'T', word: 'Tempérer' },
      { letter: '?', word: 'Autre lettre à deviner' },
      { letter: 'R', word: 'Rentabiliser' }
    ]
  }, {
    answer: 'âne',
    definition: 'Un âne est un animal aux longues oreilles, proche du cheval. Son petit est un ânon.',
    artwork: 'art-ane',
    artCaption: 'Observe cet animal aux grandes oreilles et à la crinière courte. Quel est son nom ?',
    cards: [
      { letter: 'A', word: 'Ânon' },
      { letter: 'N', word: 'Niais' },
      { letter: '?', word: 'Lettre à deviner' }
    ]
  }, {
    answer: 'ange',
    definition: 'Dans certaines croyances, un ange est un être spirituel, messager ou protecteur. Il est souvent représenté avec des ailes.',
    artwork: 'art-ange',
    artCaption: 'Observe les ailes, la lumière au-dessus de la tête et la tenue de ce personnage. Qui peut-il représenter ?',
    cards: [
      { letter: 'A', word: 'Archange' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'G', word: 'Gardien' },
      { letter: 'E', word: 'Esprit céleste' }
    ]
  }, {
    answer: 'animer',
    definition: 'Animer, c’est donner de la vie, de l’énergie ou du mouvement à quelque chose, comme une fête ou une marionnette.',
    artwork: 'art-animer',
    artCaption: 'La marionnette se met en mouvement grâce aux fils. Que fait la personne qui tire sur ces fils ?',
    cards: [
      { letter: 'A', word: 'Aviver un feu' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'I', word: 'Inspirer' },
      { letter: 'M', word: 'Mouvoir' },
      { letter: 'E', word: 'Exciter' },
      { letter: '?', word: 'Autre lettre à deviner' }
    ]
  }, {
    answer: 'altérer',
    definition: 'Altérer, c’est modifier ou abîmer quelque chose, en changeant son aspect ou sa qualité. Par exemple, la rouille peut abîmer le métal.',
    artwork: 'art-alterer',
    artCaption: 'Observe les deux arrosoirs : avec le temps et la pluie, le métal a changé. Que lui est-il arrivé ?',
    cards: [
      { letter: 'A', word: 'Abîmer' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'T', word: 'Transformer' },
      { letter: 'E', word: 'Endommager' },
      { letter: 'R', word: 'Rouiller' },
      { letter: 'E', word: 'Estropier' },
      { letter: 'R', word: 'Rouiller' }
    ]
  }, {
    answer: 'amas',
    definition: 'Un amas, c’est un ensemble de choses réunies en tas, comme des pierres ou des feuilles.',
    artwork: 'art-amas',
    artCaption: 'Regarde toutes ces pierres réunies au même endroit. Comment appelle-t-on ce tas ?',
    cards: [
      { letter: 'A', word: 'Amoncellement' },
      { letter: 'M', word: 'Monceau' },
      { letter: 'A', word: 'Accumulation' },
      { letter: '?', word: 'Lettre à deviner' }
    ]
  }, {
    answer: 'amasser',
    definition: 'Amasser, c’est réunir peu à peu beaucoup de choses au même endroit, par exemple en ramassant et en empilant des cubes.',
    artwork: 'art-amasser',
    artCaption: 'Regarde les cubes que l’enfant rassemble dans sa boîte. Que fait-il ?',
    mysteryHint: 'C’est la même lettre à deviner deux fois.',
    cards: [
      { letter: 'A', word: 'Accumuler' },
      { letter: 'M', word: 'Masser' },
      { letter: 'A', word: 'Amonceler', spoken: 'Amoncelé' },
      { letter: '?', word: 'Lettre à deviner', spoken: 'C’est la même lettre à deviner deux fois.' },
      { letter: '?', word: 'Lettre à deviner', spoken: 'C’est la même lettre à deviner deux fois.' },
      { letter: 'E', word: 'Empiler' },
      { letter: 'R', word: 'Ramasser' }
    ]
  }, {
    answer: 'amusant',
    definition: 'Amusant, c’est ce qui divertit, donne du plaisir ou fait rire, comme un jeu ou une scène drôle.',
    artwork: 'art-amusant',
    artCaption: 'Observe le chien qui essaie d’attraper les bulles et le visage de l’enfant. Comment est ce jeu ?',
    cards: [
      { letter: 'A', word: 'Agréable' },
      { letter: 'M', word: 'Marrant' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'S', word: 'Singulier' },
      { letter: 'A', word: 'Agréable' },
      { letter: '?', word: 'Autre lettre à deviner' },
      { letter: 'T', word: 'Tordant' }
    ]
  }, {
    answer: 'ânerie',
    definition: 'Une ânerie, c’est une parole ou une action absurde ou peu réfléchie. Tout le monde peut se tromper et apprendre de son erreur.',
    artwork: 'art-anerie',
    artCaption: 'Cette fleur est dessinée sur du papier. Que penses-tu de l’idée de l’arroser pour la faire pousser ?',
    cards: [
      { letter: 'A', word: 'Absurdité' },
      { letter: 'N', word: 'Niaiserie' },
      { letter: 'E', word: 'Erreur' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'I', word: 'Ineptie' },
      { letter: 'E', word: 'Erreur' }
    ]
  }, {
    answer: 'anicroche',
    definition: 'Une anicroche, c’est un petit incident ou un obstacle imprévu qui gêne le déroulement de quelque chose.',
    artwork: 'art-anicroche',
    artCaption: 'Le petit train s’arrête : un cube bloque les rails. Ce petit problème empêche le jeu de continuer. Comment le nommer ?',
    cards: [
      { letter: 'A', word: 'Accroc' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'I', word: 'Incident' },
      { letter: 'C', word: 'Complication' },
      { letter: '?', word: 'Autre lettre à deviner' },
      { letter: 'O', word: 'Obstacle' },
      { letter: 'C', word: 'Contretemps' },
      { letter: 'H', word: 'Hic' },
      { letter: 'E', word: 'Ennui' }
    ]
  }, {
    answer: 'annonce',
    definition: 'Une annonce, c’est un message qui fait connaître une nouvelle ou une information au public.',
    artwork: 'art-annonce',
    artCaption: 'Une affiche sur le panneau informe les enfants d’un atelier de dessin. Comment appelle-t-on ce message ?',
    cards: [
      { letter: 'A', word: 'Avis' },
      { letter: 'N', word: 'Nouvelle' },
      { letter: 'N', word: 'Notification' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'N', word: 'Nouvelle' },
      { letter: 'C', word: 'Communiqué' },
      { letter: 'E', word: 'Enchère' }
    ]
  }, {
    answer: 'annoncer',
    definition: 'Annoncer, c’est faire connaître une nouvelle ou une information à quelqu’un.',
    artwork: 'art-annoncer',
    artCaption: 'Une personne parle dans un porte-voix pour faire connaître une fête aux enfants. Que fait-elle ?',
    cards: [
      { letter: 'A', word: 'Avertir' },
      { letter: 'N', word: 'Notifier' },
      { letter: 'N', word: 'Notifier' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'N', word: 'Notifier' },
      { letter: 'C', word: 'Communiquer' },
      { letter: '?', word: 'Autre lettre à deviner' },
      { letter: 'R', word: 'Révéler' }
    ]
  }, {
    answer: 'apaiser',
    definition: 'Apaiser, c’est calmer, rendre plus doux ou soulager, comme lorsqu’on rassure quelqu’un qui a peur.',
    artwork: 'art-apaiser',
    artCaption: 'Un enfant inquiet retrouve le calme grâce à une personne qui le rassure doucement. Que fait cette personne ?',
    cards: [
      { letter: 'A', word: 'Atténuer' },
      { letter: 'P', word: 'Pacifier' },
      { letter: 'A', word: 'Adoucir' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'S', word: 'Soulager' },
      { letter: 'E', word: 'Étancher', spoken: 'Étanché' },
      { letter: 'R', word: 'Rasséréner' }
    ]
  }, {
    answer: 'appeler',
    definition: 'Appeler, c’est s’adresser à quelqu’un pour attirer son attention, le joindre au téléphone ou l’inviter à agir.',
    artwork: 'art-appeler',
    artCaption: 'Cet enfant utilise un téléphone pour parler à une personne éloignée. Quel verbe décrit son action ?',
    cards: [
      { letter: 'A', word: 'Apostropher' },
      { letter: 'P', word: 'Passer un coup de téléphone' },
      { letter: 'P', word: 'Passer un coup de fil' },
      { letter: 'E', word: 'Exhorter' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Engager' },
      { letter: '?', word: 'Autre lettre à deviner' }
    ]
  }, {
    answer: 'anneau',
    definition: 'Un anneau est un objet en forme de cercle, comme une bague ou un grand rond de métal.',
    artwork: 'art-anneau',
    artCaption: 'Observe l’objet rond accroché à la corde. Quelle forme a-t-il ?',
    cards: [
      { letter: 'A', word: 'Alliance' },
      { letter: 'N', word: 'Nœud d’une corde', spoken: 'Neux d’une corde' },
      { letter: 'N', word: 'Nœud d’une corde', spoken: 'Neux d’une corde' },
      { letter: 'E', word: 'Embout' },
      { letter: 'A', word: 'Alliance' },
      { letter: '?', word: 'Lettre à deviner' }
    ]
  }, {
    answer: 'aperçu',
    definition: 'Un aperçu, c’est une idée rapide ou une première vue de quelque chose, sans en découvrir tous les détails.',
    artwork: 'art-apercu',
    artCaption: 'La porte s’entrouvre : l’enfant ne voit qu’une petite partie du jardin. Qu’en a-t-il ?',
    cards: [
      { letter: 'A', word: 'Appréciation' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Exposé sommaire' },
      { letter: 'R', word: 'Résumé' },
      { letter: 'C', word: 'Coup d’œil' },
      { letter: '?', word: 'Autre lettre à deviner' }
    ]
  }, {
    answer: 'aplanir',
    definition: 'Aplanir, c’est rendre une surface plane ou rendre une difficulté plus facile à surmonter.',
    artwork: 'art-aplanir',
    artCaption: 'Le petit engin tasse les bosses d’un terrain pour le rendre plat. Que fait-il ?',
    cards: [
      { letter: 'A', word: 'Aplatir' },
      { letter: 'P', word: 'Passer au bulldozer' },
      { letter: 'L', word: 'Lever des difficultés' },
      { letter: 'A', word: 'Aplatir' },
      { letter: 'N', word: 'Niveler' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'R', word: 'Régaler un terrain' }
    ]
  }, {
    answer: 'apparence',
    definition: 'L’apparence, c’est l’aspect extérieur d’une personne ou d’une chose, ce que l’on voit au premier regard.',
    artwork: 'art-apparence',
    artCaption: 'Cet enfant observe son visage, ses cheveux et ses vêtements dans un miroir. Comment appelle-t-on ce que l’on voit de lui ?',
    cards: [
      { letter: 'A', word: 'Aspect' },
      { letter: 'P', word: 'Physionomie' },
      { letter: 'P', word: 'Physionomie' },
      { letter: 'A', word: 'Aspect' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Extérieur' },
      { letter: '?', word: 'Autre lettre à deviner' },
      { letter: 'C', word: 'Contenance' },
      { letter: 'E', word: 'Extérieur' }
    ]
  }, {
    answer: 'appât',
    definition: 'Un appât, c’est ce que l’on utilise pour attirer un animal, par exemple un asticot pour attirer un poisson.',
    artwork: 'art-appat',
    artCaption: 'Un poisson s’approche du petit asticot placé au bout de la ligne. Comment appelle-t-on ce qui sert à l’attirer ?',
    cards: [
      { letter: 'A', word: 'Amorce' },
      { letter: 'P', word: 'Piège' },
      { letter: 'P', word: 'Piège' },
      { letter: 'A', word: 'Asticot' },
      { letter: '?', word: 'Lettre à deviner' }
    ]
  }, {
    answer: 'appel',
    definition: 'Un appel, c’est une demande adressée à une ou plusieurs personnes pour qu’elles viennent, répondent ou agissent.',
    artwork: 'art-appel',
    artCaption: 'Cette personne utilise un porte-voix pour demander aux habitants de se rassembler. Que lance-t-elle ?',
    cards: [
      { letter: 'A', word: 'Assignation' },
      { letter: 'P', word: 'Proclamation' },
      { letter: 'P', word: 'Proclamation' },
      { letter: 'E', word: 'Exhortation' },
      { letter: 'L', word: 'Levée de troupes' }
    ]
  }, {
    answer: 'âpre',
    definition: 'Âpre signifie rugueux au toucher, rude ou pénible.',
    artwork: 'art-apre',
    artCaption: 'Cette pierre présente des creux, des bosses et des aspérités sous les doigts. Quel adjectif décrit cette surface ?',
    cards: [
      { letter: 'A', word: 'Austère' },
      { letter: 'P', word: 'Pénible' },
      { letter: 'R', word: 'Rugueux' },
      { letter: '?', word: 'Lettre à deviner' }
    ]
  }, {
    answer: 'après',
    definition: 'Après signifie plus tard, à la suite d’un événement ou derrière dans un ordre.',
    artwork: 'art-apres',
    artCaption: 'On sème une graine, puis la plante pousse. Quand pousse-t-elle par rapport au moment où l’on a semé ?',
    cards: [
      { letter: 'A', word: 'À la suite de' },
      { letter: 'P', word: 'Par la suite de' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Ensuite' },
      { letter: 'S', word: 'Subséquemment', spoken: 'Subsécamment' }
    ]
  }, {
    answer: 'aptitude',
    definition: 'Une aptitude est une capacité ou une facilité à faire quelque chose.',
    artwork: 'art-aptitude',
    artCaption: 'Cet enfant construit facilement une tour de cubes. Quelle capacité montre-t-il pour cette activité ?',
    cards: [
      { letter: 'A', word: 'Adresse' },
      { letter: 'P', word: 'Prédisposition' },
      { letter: 'T', word: 'Talent' },
      { letter: 'I', word: 'Intelligence' },
      { letter: 'T', word: 'Talent' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'D', word: 'Disposition' },
      { letter: 'E', word: 'Excellence' }
    ]
  }, {
    answer: 'arbre',
    definition: 'Un arbre est une grande plante avec des racines, un tronc et des branches.',
    artwork: 'art-arbre',
    artCaption: 'Ses racines tiennent dans la terre, son tronc porte des branches et des feuilles. Qu’est-ce que c’est ?',
    cards: [
      { letter: 'A', word: 'Arbuste' },
      { letter: 'R', word: 'Ramure' },
      { letter: 'B', word: 'Bonsaï', spoken: 'Bonzaï' },
      { letter: 'R', word: 'Racine' },
      { letter: '?', word: 'Lettre à deviner' }
    ]
  }, {
    answer: 'arrêt',
    definition: 'Un arrêt est une pause ou une interruption momentanée.',
    artwork: 'art-arret',
    artCaption: 'Un bus s’immobilise à son panneau pour laisser descendre des voyageurs. Que fait-il ?',
    cards: [
      { letter: 'A', word: 'Arrêté' },
      { letter: 'R', word: 'Répit' },
      { letter: 'R', word: 'Repos' },
      { letter: 'E', word: 'Escale' },
      { letter: '?', word: 'Lettre à deviner' }
    ]
  }, {
    answer: 'arrêter',
    definition: 'Arrêter signifie immobiliser quelque chose ou empêcher une action de continuer.',
    artwork: 'art-arreter',
    artCaption: 'Le marin jette l’ancre et son bateau ne bouge plus. Que fait-il ?',
    cards: [
      { letter: 'A', word: 'Ancrer un navire' },
      { letter: 'R', word: 'Retenir' },
      { letter: 'R', word: 'Retenir' },
      { letter: 'E', word: 'Empêcher d’avancer' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Entraver une action' },
      { letter: 'R', word: 'Retenir' }
    ]
  }, {
    answer: 'arriver',
    definition: 'Arriver signifie atteindre un lieu ou parvenir à un résultat.',
    artwork: 'art-arriver',
    artCaption: 'Après avoir suivi le chemin, cet enfant atteint enfin la maison. Que vient-il de faire ?',
    cards: [
      { letter: 'A', word: 'Atteindre' },
      { letter: 'R', word: 'Réussir' },
      { letter: 'R', word: 'Réussir' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'V', word: 'Venir' },
      { letter: '?', word: 'Autre lettre à deviner' },
      { letter: 'R', word: 'Réussir' }
    ]
  }, {
    answer: 'arroser',
    definition: 'Arroser signifie répandre de l’eau sur quelque chose, par exemple sur des plantes.',
    artwork: 'art-arroser',
    artCaption: 'Cet enfant verse doucement de l’eau sur les fleurs avec un arrosoir. Que fait-il ?',
    cards: [
      { letter: 'A', word: 'Asperger' },
      { letter: 'R', word: 'Répandre la rosée' },
      { letter: 'R', word: 'Répandre la rosée' },
      { letter: 'O', word: 'Ondoyer', spoken: 'On doyé' },
      { letter: 'S', word: 'Seringuer', spoken: 'Seringué' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'R', word: 'Répandre la rosée' }
    ]
  }, {
    answer: 'art',
    definition: 'L’art permet de créer et de partager des œuvres, comme une peinture ou une sculpture.',
    artwork: 'art-art',
    artCaption: 'Une enfant peint un tableau coloré avec un pinceau. Quel mot désigne cette activité créative ?',
    cards: [
      { letter: 'A', word: 'Adresse' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'T', word: 'Talent' }
    ]
  }, {
    answer: 'artifice',
    definition: 'Un artifice est un procédé habile qui crée une illusion ou une fausse apparence.',
    artwork: 'art-artifice',
    artCaption: 'Un jeune magicien utilise un chapeau à double fond pour faire disparaître un foulard. Quel procédé emploie-t-il ?',
    mysteryHint: 'C’est la même lettre à deviner deux fois.',
    cards: [
      { letter: 'A', word: 'Apparence' },
      { letter: 'R', word: 'Ruse' },
      { letter: 'T', word: 'Tromperie' },
      { letter: '?', word: 'Lettre à deviner', spoken: 'C’est la même lettre à deviner deux fois.' },
      { letter: 'F', word: 'Fausse apparence' },
      { letter: '?', word: 'Lettre à deviner', spoken: 'C’est la même lettre à deviner deux fois.' },
      { letter: 'C', word: 'Combine' },
      { letter: 'E', word: 'Éblouissement' }
    ]
  }, {
    answer: 'artificiel',
    definition: 'Artificiel signifie fabriqué ou imité, plutôt que naturel.',
    artwork: 'art-artificiel',
    artCaption: 'Cette fleur ressemble à une vraie fleur, mais elle est fabriquée en tissu. Comment la qualifier ?',
    cards: [
      { letter: 'A', word: 'Affecté' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'T', word: 'Truqué' },
      { letter: 'I', word: 'Inventé' },
      { letter: 'F', word: 'Faux' },
      { letter: 'I', word: 'Imité' },
      { letter: 'C', word: 'Contraint' },
      { letter: 'I', word: 'Inventé' },
      { letter: 'E', word: 'Emprunté' },
      { letter: '?', word: 'Autre lettre à deviner' }
    ]
  }, {
    answer: 'ascendant',
    definition: 'L’ascendant est l’influence ou l’autorité qu’une personne exerce sur d’autres.',
    artwork: 'art-ascendant',
    artCaption: 'Les musiciens suivent les gestes de cette cheffe d’orchestre. Quel mot décrit son influence sur le groupe ?',
    mysteryHint: 'C’est la même lettre à deviner deux fois.',
    cards: [
      { letter: 'A', word: 'Autorité' },
      { letter: 'S', word: 'Supériorité' },
      { letter: 'C', word: 'Charme' },
      { letter: 'E', word: 'Emprise' },
      { letter: '?', word: 'Lettre à deviner', spoken: 'C’est la même lettre à deviner deux fois.' },
      { letter: 'D', word: 'Domination' },
      { letter: 'A', word: 'Autorité' },
      { letter: '?', word: 'Lettre à deviner', spoken: 'C’est la même lettre à deviner deux fois.' },
      { letter: 'T', word: 'Tyrannie' }
    ]
  }, {
    answer: 'asservir',
    definition: 'Asservir signifie placer quelqu’un sous une domination et lui retirer sa liberté de décider.',
    artwork: 'art-asservir',
    artCaption: 'Cette marionnette ne peut pas bouger comme elle veut : chaque ficelle est dirigée par une main. Quel verbe évoque cette perte de liberté ?',
    cards: [
      { letter: 'A', word: 'Assujettir' },
      { letter: 'S', word: 'Soumettre' },
      { letter: 'S', word: 'Subjuguer' },
      { letter: 'E', word: 'Enchaîner' },
      { letter: 'R', word: 'Régner sur' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: '?', word: 'Autre lettre à deviner' },
      { letter: 'R', word: 'Régir' }
    ]
  }, {
    answer: 'apprêté',
    definition: 'Apprêté signifie arrangé avec beaucoup de soin, parfois de façon un peu recherchée ou trop élégante.',
    artwork: 'art-apprete',
    artCaption: 'Observe la tenue et les accessoires soigneusement choisis. Comment cette personne s’est-elle préparée ?',
    cards: [
      { letter: 'A', word: 'Arrangé' },
      { letter: 'P', word: 'Précieux' },
      { letter: 'P', word: 'Précieux' },
      { letter: 'R', word: 'Recherché' },
      { letter: 'E', word: 'Étudié' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Étudié' }
    ]
  }, {
    answer: 'âpre',
    definition: 'Âpre peut décrire un terrain rude et difficile à parcourir. Ce mot peut aussi qualifier une attitude agressive ou un effort pénible.',
    artwork: 'art-apre-raboteux',
    artCaption: 'Observe les rochers et le sentier qui monte. Ce terrain semble-t-il doux et facile à parcourir ?',
    cards: [
      { letter: 'A', word: 'Agressif' },
      { letter: 'P', word: 'Pénible' },
      { letter: 'R', word: 'Raboteux' },
      { letter: 'E', word: 'Escarpé' }
    ]
  }, {
    answer: 'après',
    definition: 'Après indique ce qui vient à la suite de quelque chose, dans le temps ou dans un ordre.',
    artwork: 'art-apres-suite',
    artCaption: 'Observe la graine, la pousse et la plante fleurie. Quelle image vient à la suite de la graine ?',
    cards: [
      { letter: 'A', word: 'Au-delà de' },
      { letter: 'P', word: 'Puis' },
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'E', word: 'Ensuite' },
      { letter: 'S', word: 'Suite à' }
    ]
  }, {
    answer: 'argent',
    definition: 'L’argent sert à payer des objets et des services. On peut le garder dans une tirelire ou le déposer à la banque.',
    artwork: 'art-argent',
    artCaption: 'Observe les pièces, les billets et la tirelire. À quoi servent-ils ?',
    cards: [
      { letter: '?', word: 'Lettre à deviner' },
      { letter: 'R', word: 'Ressources' },
      { letter: '?', word: 'Autre lettre à deviner' },
      { letter: 'E', word: 'Espèces' },
      { letter: 'N', word: 'Numéraire' },
      { letter: 'T', word: 'Trésorerie' }
    ]
  }];
  const byId = identifier => document.getElementById(identifier);
  const panels = ['welcome', 'observe', 'answer', 'success'];
  const synthesis = window.speechSynthesis;
  const requestedLevel = Number(new URLSearchParams(window.location.search).get('niveau'));

  const storageKey = 'hi3d-memory-progress-v1:' + new URL('.', location.href).pathname;
  let saved = {};
  function storageWarning() {
    const message = document.getElementById('save-status');
    if (message) message.textContent = 'La sauvegarde locale est indisponible. Tu peux continuer à jouer ; ta progression ne sera pas conservée.';
  }
  try {
    const candidate = JSON.parse(localStorage.getItem(storageKey) || '{}');
    if (candidate && candidate.version === 1 && Array.isArray(candidate.solved)) saved = candidate;
  } catch { storageWarning(); }
  const solvedRounds = new Set((saved.solved || []).filter(index => Number.isInteger(index) && index >= 0 && index < rounds.length));
  const restoredIndex = Number.isInteger(saved.level) && saved.level >= 0 && saved.level < rounds.length ? saved.level : 0;
  function saveProgress() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ version: 1, level: roundIndex, solved: [...solvedRounds], sound: soundEnabled }));
      document.getElementById('save-status').textContent = `${solvedRounds.size} niveau${solvedRounds.size > 1 ? 'x' : ''} réussi${solvedRounds.size > 1 ? 's' : ''} sur ${rounds.length} · progression enregistrée sur cet appareil`;
    } catch { storageWarning(); }
  }

  let roundIndex = Number.isInteger(requestedLevel) && requestedLevel >= 1 && requestedLevel <= rounds.length ? requestedLevel - 1 : restoredIndex;
  let round = rounds[roundIndex];
  let phase = 'welcome';
  let cardIndex = 0;
  let paused = false;
  let remainingMs = durationMs;
  let deadline = 0;
  let frameHandle = 0;
  let soundEnabled = saved.sound !== false;
  let frenchVoice = null;
  let speechTicket = 0;
  let activeUtterance = null;
  let activeAudio = null;
  const normalized = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLocaleLowerCase('fr');
  const voiceAvailable = () => Boolean(frenchVoice && window.SpeechSynthesisUtterance);

  function notice(message) {
    byId('voice-notice').textContent = message;
    byId('voice-notice').hidden = !message;
  }

  function refreshVoices() {
    let voices = [];
    try {
      voices = synthesis ? synthesis.getVoices() : [];
    } catch {
      voices = [];
    }
    frenchVoice = voices.find(voice => /^fr(?:[-_]|$)/i.test(voice.lang) && voice.localService) || null;
    if (voiceAvailable() || !soundEnabled) byId('voice-choice').hidden = true;
    if (!soundEnabled) {
      notice('Le son est désactivé. Tu peux le réactiver avec le bouton en haut de la page.');
    } else if (!synthesis || !window.SpeechSynthesisUtterance) {
      notice('La lecture vocale n’est pas disponible dans ce navigateur. Essaie un autre navigateur pour entendre les cartes, ou choisis de jouer sans le son.');
    } else if (!frenchVoice) {
      notice('Aucune voix française locale n’est disponible pour l’instant. Pour entendre les cartes, active une voix française dans les réglages vocaux de ton appareil, puis recharge la page. Tu peux aussi choisir de jouer sans le son.');
    } else {
      notice('');
    }
  }

  function stopSpeech() {
    speechTicket += 1;
    activeUtterance = null;
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
      activeAudio = null;
    }
    if (synthesis) synthesis.cancel();
  }

  function speak(text, audioUrl) {
    stopSpeech();
    if (!soundEnabled || !voiceAvailable() || !synthesis) return;
    const ticket = speechTicket;
    if (audioUrl) {
      activeAudio = new Audio(audioUrl);
      activeAudio.play().catch(() => {
        if (ticket === speechTicket) speak(text);
      });
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    activeUtterance = utterance;
    utterance.lang = 'fr-FR';
    utterance.voice = frenchVoice;
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utterance.onend = () => { if (ticket === speechTicket) activeUtterance = null; };
    utterance.onerror = event => {
      if (ticket !== speechTicket || ['canceled', 'interrupted'].includes(event.error)) return;
      activeUtterance = null;
      notice('La voix n’a pas pu lire cette carte. Utilise « Réécouter la carte » ou vérifie les réglages vocaux de ton appareil.');
    };
    try {
      synthesis.speak(activeUtterance);
    } catch {
      activeUtterance = null;
      notice('La lecture vocale a été bloquée. Vérifie le son de ton appareil ou réessaie avec « Réécouter la carte ».');
    }
  }

  function showPhase(nextPhase) {
    phase = nextPhase;
    panels.forEach(identifier => { byId(identifier).hidden = identifier !== phase; });
    const labels = { welcome: 'À toi de jouer', observe: 'Observe et écoute', answer: 'À toi de trouver', success: 'Mot retrouvé !' };
    byId('phase-name').textContent = labels[phase];
    byId('level-picker').hidden = phase !== 'welcome' && phase !== 'success';
    byId('mystery-hint').hidden = !round.mysteryHint || phase === 'success';
    document.documentElement.dataset.phase = phase;
  }

  function syncRoundPresentation() {
    saveProgress();
    byId('level-choice').value = String(roundIndex + 1);
    byId('round-label').textContent = `Mot ${String(roundIndex + 1).padStart(2, '0')} sur ${String(rounds.length).padStart(2, '0')} · ${round.cards.length} cartes`;
    byId('observation-summary').textContent = `${round.cards.length} cartes · ${round.cards.length * durationMs / 1000} secondes d’observation · réponse sans chronomètre`;
    byId('guess-label').textContent = `Ton mot de ${round.answer.length} lettres`;
    byId('mystery-hint').textContent = round.mysteryHint || '';
    const missingLetterCount = round.cards.filter(card => card.letter === '?').length;
    byId('answer-instruction').textContent = missingLetterCount === 0 ? 'Retrouve le mot à partir des initiales et écris-le en entier.' : missingLetterCount > 1 ? 'Complète les deux cases « ? » et écris le mot entier.' : 'Il manque une lettre : à toi de la retrouver !';
    byId('answer-tiles').style.setProperty('--letter-count', String(round.cards.length));
    byId('game-summary').textContent = `${rounds.length} niveaux · dessins créés pour ce jeu · aucune publicité`;
    rounds.forEach(item => { byId(item.artwork).toggleAttribute('hidden', item.artwork !== round.artwork); });
    byId('art-caption-copy').textContent = round.artCaption;
    document.querySelectorAll('.mini-card').forEach((card, index) => {
      card.textContent = index < 2 ? round.cards[index].letter : '?';
    });
  }

  function updateTimer() {
    const seconds = Math.max(0, Math.ceil(remainingMs / 1000));
    byId('seconds-left').textContent = `${seconds} s`;
    byId('timer-progress').setAttribute('aria-valuenow', String(seconds));
    byId('timer-fill').style.transform = `scaleX(${Math.max(0, remainingMs / durationMs)})`;
  }

  function tick(now) {
    if (phase !== 'observe' || paused) return;
    remainingMs = Math.max(0, deadline - now);
    updateTimer();
    if (remainingMs <= 0) {
      if (cardIndex < round.cards.length - 1) {
        cardIndex += 1;
        showCard();
      } else {
        showAnswer();
      }
      return;
    }
    frameHandle = requestAnimationFrame(tick);
  }

  function showCard() {
    cancelAnimationFrame(frameHandle);
    remainingMs = durationMs;
    const card = round.cards[cardIndex];
    const cardElement = byId('word-card');
    cardElement.classList.remove('fresh', 'is-paused', 'mystery');
    cardElement.classList.toggle('mystery', card.letter === '?');
    cardElement.dataset.tone = ['lavender', 'mint', 'peach'][cardIndex % 3];
    byId('card-letter').textContent = card.letter;
    cardElement.classList.toggle('long-clue', card.word.length > 35);
    byId('card-word').textContent = card.word;
    byId('card-counter').textContent = `Carte ${cardIndex + 1} sur ${round.cards.length}`;
    byId('timer-instruction').textContent = card.letter === '?' ? 'Une lettre mystère se cache ici' : 'Regarde et retiens l’initiale';
    byId('paused-cover').hidden = true;
    byId('pause').textContent = 'Mettre en pause';
    byId('repeat').disabled = false;
    Array.from(byId('timeline').children).forEach((marker, index) => {
      marker.className = index < cardIndex ? 'done' : index === cardIndex ? 'current' : '';
    });
    void cardElement.offsetWidth;
    cardElement.classList.add('fresh');
    updateTimer();
    deadline = performance.now() + durationMs;
    speak(card.spoken || card.word, card.audio);
    frameHandle = requestAnimationFrame(tick);
  }

  function startRound() {
    syncRoundPresentation();
    refreshVoices();
    if (soundEnabled && !voiceAvailable()) {
      showPhase('welcome');
      byId('voice-choice').hidden = false;
      byId('play-without-voice').focus({ preventScroll: true });
      return;
    }
    stopSpeech();
    cancelAnimationFrame(frameHandle);
    cardIndex = 0;
    paused = false;
    byId('guess').value = '';
    byId('feedback').textContent = '';
    byId('guess').removeAttribute('aria-invalid');
    byId('timeline').replaceChildren(...round.cards.map(() => document.createElement('span')));
    showPhase('observe');
    showCard();
    byId('pause').focus({ preventScroll: true });
  }

  function togglePause() {
    if (phase !== 'observe') return;
    paused = !paused;
    if (paused) {
      remainingMs = Math.max(0, deadline - performance.now());
      cancelAnimationFrame(frameHandle);
      stopSpeech();
      updateTimer();
    } else {
      deadline = performance.now() + remainingMs;
      const card = round.cards[cardIndex];
      speak(card.spoken || card.word, card.audio);
      frameHandle = requestAnimationFrame(tick);
    }
    byId('word-card').classList.toggle('is-paused', paused);
    byId('paused-cover').hidden = !paused;
    byId('pause').textContent = paused ? 'Reprendre' : 'Mettre en pause';
    byId('repeat').disabled = paused;
  }

  function updateTiles() {
    const letters = Array.from(byId('guess').value.normalize('NFC').trim().toLocaleUpperCase('fr'));
    Array.from(byId('answer-tiles').children).forEach((tile, index) => {
      const mystery = round.cards[index].letter === '?';
      tile.textContent = letters[index] || (mystery ? '?' : '·');
      tile.classList.toggle('missing', mystery && !letters[index]);
    });
  }

  function showAnswer() {
    cancelAnimationFrame(frameHandle);
    stopSpeech();
    showPhase('answer');
    byId('answer-tiles').replaceChildren(...round.cards.map(() => document.createElement('span')));
    updateTiles();
    byId('guess').focus({ preventScroll: true });
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    byId('sound-toggle').setAttribute('aria-pressed', String(soundEnabled));
    byId('sound-label').textContent = soundEnabled ? 'Son activé' : 'Son coupé';
    saveProgress();
    refreshVoices();
    if (!soundEnabled) stopSpeech();
    else if (phase === 'observe' && !paused) {
      if (voiceAvailable()) showCard();
      else togglePause();
    }
  }

  byId('level-choice').addEventListener('change', event => {
    if (phase !== 'welcome' && phase !== 'success') return;
    const selectedIndex = Number(event.target.value) - 1;
    if (!Number.isInteger(selectedIndex) || selectedIndex < 0 || selectedIndex >= rounds.length) return;
    stopSpeech();
    cancelAnimationFrame(frameHandle);
    roundIndex = selectedIndex;
    round = rounds[roundIndex];
    syncRoundPresentation();
    showPhase('welcome');
    byId('start').focus({ preventScroll: true });
  });
  byId('start').addEventListener('click', startRound);
  byId('watch-again').addEventListener('click', startRound);
  byId('replay').addEventListener('click', startRound);
  byId('next-round').addEventListener('click', () => {
    if (phase !== 'success' || roundIndex >= rounds.length - 1) return;
    roundIndex += 1;
    round = rounds[roundIndex];
    startRound();
  });
  byId('restart-game').addEventListener('click', () => {
    if (phase !== 'success') return;
    solvedRounds.clear();
    roundIndex = 0;
    round = rounds[roundIndex];
    startRound();
  });
  byId('pause').addEventListener('click', togglePause);
  byId('repeat').addEventListener('click', () => { if (phase === 'observe' && !paused) showCard(); });
  byId('guess').addEventListener('input', () => {
    updateTiles();
    byId('feedback').textContent = '';
    byId('guess').removeAttribute('aria-invalid');
  });
  byId('answer-form').addEventListener('submit', event => {
    event.preventDefault();
    if (phase !== 'answer') return;
    const guess = normalized(byId('guess').value);
    if (!guess) {
      byId('feedback').textContent = 'Écris d’abord le mot que tu penses avoir trouvé.';
      byId('guess').setAttribute('aria-invalid', 'true');
      byId('guess').focus();
      return;
    }
    if (guess !== normalized(round.answer)) {
      byId('feedback').textContent = 'Ce n’est pas encore ce mot. Tu peux essayer à nouveau ou revoir les cartes !';
      byId('guess').setAttribute('aria-invalid', 'true');
      byId('guess').focus();
      return;
    }
    stopSpeech();
    byId('solved-word').textContent = round.answer.toLocaleUpperCase('fr');
    byId('word-definition').textContent = round.definition;
    solvedRounds.add(roundIndex);
    saveProgress();
    const lastRound = roundIndex === rounds.length - 1;
    byId('next-round').hidden = lastRound;
    byId('restart-game').hidden = !lastRound;
    byId('replay').className = lastRound ? 'primary' : 'secondary';
    byId('success-note').textContent = lastRound ? (solvedRounds.size === rounds.length ? `Bravo, tu as retrouvé les ${rounds.length} mots ! Tu peux rejouer.` : 'Bravo, tu as retrouvé ce mot ! Tu peux le rejouer ou choisir un autre niveau.') : 'Un nouveau mot t’attend. À toi de le découvrir !';
    showPhase('success');
    speak(`Bravo ! Tu as trouvé le mot ${round.answer}.`);
    byId(lastRound ? 'replay' : 'next-round').focus({ preventScroll: true });
  });
  byId('hear-answer').addEventListener('click', () => speak(round.answer));
  byId('sound-toggle').addEventListener('click', toggleSound);
  byId('play-without-voice').addEventListener('click', () => {
    if (soundEnabled) toggleSound();
    startRound();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && phase === 'observe' && !paused) togglePause();
    if (document.hidden) stopSpeech();
  });
  window.addEventListener('pagehide', () => { cancelAnimationFrame(frameHandle); stopSpeech(); });
  if (synthesis) synthesis.addEventListener('voiceschanged', refreshVoices);
  byId('level-choice').replaceChildren(...rounds.map((level, index) =>
    new Option(`Niveau ${index + 1} · ${level.cards.length} cartes`, String(index + 1))
  ));
  byId('sound-toggle').setAttribute('aria-pressed', String(soundEnabled));
  byId('sound-label').textContent = soundEnabled ? 'Son activé' : 'Son coupé';
  syncRoundPresentation();
  showPhase('welcome');
  refreshVoices();
  byId('load-error').hidden = true;
  byId('start').disabled = false;
  byId('level-choice').disabled = false;
  document.documentElement.dataset.gameReady = 'true';
  document.documentElement.dataset.phase = phase;
})();
