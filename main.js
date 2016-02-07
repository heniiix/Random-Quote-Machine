$(document).ready(function() {
  
  $(".btn").click(function() {
    $(this).blur();
  });
  
  var quotes = getQuotes();
  var currentQuote = {};
  
  setButtons();
  
  function setButtons() {
    $("#citation").click(setRandomQuote);
    $(".tweet-this").click(tweetCurrentQuote);
}
  
  function setRandomQuote(evt) {
    // Get clicked button id
    var topic = evt.target.id;
    var quote = getRandomQuote(topic);
    
    // Set current quote
    currentQuote = quote;
    $(".quote").text(currentQuote.text);
  }
  
  function getRandomQuote(topic) {
    if (!topic) return;
    var len = quotes[topic].length -1;
    var randomNum = Math.ceil(Math.random() * len);
    var randomQuote = quotes[topic][randomNum];
    if (currentQuote.text && randomQuote.text === currentQuote.text)
    return getRandomQuote(topic);
    return randomQuote;
  }
  
  var author = "#XiaoPongChin";
  function tweetCurrentQuote() {
    if (!currentQuote.text) return false;
    var tweet = "https://twitter.com/intent/tweet?text=" + currentQuote.text + " " + "- Xiao Pong Chin" + " " + "@heniiix" + author;
    window.open(tweet, ".tweet-this", "location=1, status=1, scrollbars=1, width=600, height=400");
  }
  
  function getQuotes() {
    return {
      citation: [{text:"Tout bonheur commence par un petit-déjeuner tranquille."}, {text:"La jeune fille est soumise à ses parents, l’épouse à son mari, la mère à son fils."},{text:"Rejeter l'essentiel pour s'attacher aux détails insignifiants."},{text:"Sourire trois fois par jours rend inutile tout médicament."},{text:"Le courage de la goutte d'eau, c'est qu'elle ose tomber dans le désert."},{text:"Ayez du thé, du vin, vos amis seront nombreux : soyez dans l’adversité, un seul homme vous visitera-t-il ?"},{text:"Dans la sécheresse on découvre les bonnes sources, dans la détresse, les bons amis."},{text:"La fleur s'est fanée mais son parfum demeure."},{text:"Ne danse pas tout ce qu'on te chante."},{text:"Les professeurs ouvrent la porte, mais vous devez entrer par vous-même."},{text:"Le seigneur est le bateau, les gens ordinaires l'eau : l'eau porte le bateau ou le fait chavirer."},{text:"La joie est une saine nourriture."},{text:"Un homme pauvre en bonne santé est déjà à moitié riche."},{text:"L'eau renversée est difficile à rattraper."},{text:"Un tout petit caillou peut briser une grande jarre."},{text:"C’est au cours d’un long trajet que s'éprouve la force d'un coursier, et avec le temps qu'on connaît le coeur d'un homme."},{text:"Personne n'a jamais tout à fait tord. Même une horloge arrêtée donne l'heure juste deux fois par jour."},{text:"Si tu as entendu parler de Pékin, il ne faut pas aller voir Pékin."},{text:"Qui élargit son cœur rétrécit sa bouche."},{text:"Connaître autrui n'est que science; se connaître soi-même, c'est intelligence."},{text:"Pour connaître la route devant toi, demande à ceux qui en reviennent."},{text:"Une parole venue du cœur tient chaud pendant trois hivers."},{text:"Le voyage est un retour vers l'essentiel."},{text:"La langue des femmes est leur épée ; elle ne la laisse jamais rouiller."},{text:"La femme, c'est extraordinaire ; quand on ne l'a pas, on la désire ; quand on l'a, on en souffre."},{text:"Un jour de loisir, c'est un jour d'immortalité."},{text:"La vie d'un vieillard ressemble à la flamme d'une bougie dans un courant d'air."},{text:"Les gens heureux ne sont pas obligés de se presser."},{text:"Ne pas craindre d'aller lentement, craindre seulement de s'arrêter !"},{text:"Le cœur ne parle pas, mais il faut savoir l'écouter."},{text:"Nul n'a plus besoin d'un sourire que celui qui n'en a plus à offrir."},{text:"Mieux vaut être endurant que conciliant."},{text:"L’homme de bien est comme l’eau."},{text:"Le chemin du devoir est toujours proche ; mais l’homme le cherche loin de lui."},{text:"Qui connaît son cœur se défie de ses yeux."},{text:"Gouverne-toi bien pour gouverner le monde."},{text:" La garde de soi-même est la plus importante des gardes."},{text:"C'est toujours le plus mauvais danseur qui se plaint de la pente de la colline."},{text:"Le fruit mûr tombe de lui-même, mais il ne tombe pas dans la bouche."},{text:"La rose n’a d’épines que pour qui veut la ceuillir."},{text:"Quand l’enfant quitte la maison, il emporte la main de sa mère."},{text:"La volonté permet de grimper sur les cimes ; sans volonté on reste au pied de la montagne."},{text:"L'échec est la mère du succès."},{text:"Rendre service aux autres c'est se rendre service à soi-même."},{text:"Pour capturer des bandits il faut commencer par capturer leur roi."},{text:"Qui ose traverser les grands fleuves ne craint pas les petites rivières."},{text:"Des amis pour faire la fête, on en trouve des milliers, mais dès que l'on tombe dans la misère, il n'y a plus personne."},{text:"Une route peut prendre mille directions, la vérité n'en connaît qu'une."},{text:"Celui qui sait ne parle pas, celui qui parle ne sait pas."},{text:"S'il n'est pas soutenu par un tuteur, le jeune arbre se courbe facilement."},{text:"Oublier ses ancêtres, c'est être un ruisseau sans source, un arbre sans racines."},{text:"On ne polit pas une pierre précieuse sans frotter, pas plus qu'on ne devient un homme accompli sans se frotter aux difficultés."},{text:"Il y a des choses que l'on ne peut savoir, faire ou expliquer. Savoir s'arrêter devant l'incompréhensible est la suprême sagesse."},{text:"Il faut toujours laisser la cage ouverte pour le retour de l'oiseau."},{text:"Il faut d'abord faire ce qui nous coûte, ensuite ce qui nous plaît. C'est la vertu d'humanité."},{text:"Faites en sorte que les vaincus puissent se féliciter de vous avoir pour vainqueur."},{text:"Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés."},{text:"Etre humain, c'est aimer les hommes. Etre sage, c'est les connaître."},{text:"Entre hommes polis et sincéres, il n'y a pas de classes."},{text:"Dans la colère, le sage pense à ses suites."},{text:"Connaître son ignorance est la meilleure part de la connaissance."}]

    };
  }
  
});
