//----------------------------- STRINGS -----------------------------
const textBlock = `
Yaeko Vigue
Breann Nye
Juanita Caca
Melodie August
Assunta Askey
Edda Thompkins
Russel Tippin
Juanita Alpaugh
Romaine Pothier
Suzanne Thorpe
Cherrie Ostrowski
Lucille Dooley
Dale Marchand
Tricia Cannella
Gordon Wilcox
Quinton Mcmullan
Rolande Ulery
Ivonne Kral
Juanita Karenn
Adelina Plewa
Lady Dick
Shon Clavette
Cedrick Holzman
Leonore Caba
Magaret Claiborne
Eliana Crupi
Jayne Meidinger
Corliss Marts
Shanelle Mcvicker
Ed Rourke
Keira Van
Shana Badgett
Armand Besse
Juanita Joeson
`;

const juanitas = textBlock
    .match(/\nJuanita.+\n/g)
    .map((name) => name.replace(/\n/g, ""));
console.log(juanitas);

const words = textBlock.match(/[a-zA-Z]+/g);
console.log(words);
