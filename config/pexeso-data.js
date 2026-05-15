// ============================================================
//  PEXESO – OBSAH HRY
//
//  Jak přidat obrázek:
//    1) Vložte soubor do složky images/words/
//    2) Přidejte nový řádek do pole "cards" níže
//
//  Každá karta má:
//    word:  anglické slovíčko
//    emoji: zobrazí se pokud obrázek chybí
//    image: cesta k obrázku (nepovinné)
//
//  Při každém spuštění hry se automaticky vybere náhodný
//  podmnožina karet dle zvolené obtížnosti.
// ============================================================

const CONFIG_PEXESO = {

  difficulties: {
    easy:   { pairs: 12,  label: '⭐ LEHKÁ - 4 ' },
    medium: { pairs: 24,  label: '⭐⭐ STŘEDNÍ - 8 ' },
    hard:   { pairs: 48, label: '⭐⭐⭐ TĚŽKÁ - 12 ' },
  },

  cards: [
    { word: 'Cat',        emoji: '🐱', image: 'images/words/cat.jpg' },
    { word: 'Dog',        emoji: '🐶', image: 'images/words/dog.jpg' },
    { word: 'Bird',       emoji: '🐦', image: 'images/words/bird.jpg' },            
    { word: 'Fish',       emoji: '🐟', image: 'images/words/fish.jpg' },
    { word: 'Rabbit',     emoji: '🐰', image: 'images/words/rabbit.jpg' },
    { word: 'Horse',      emoji: '🐴', image: 'images/words/horse.jpg' },
    { word: 'Lion',       emoji: '🦁', image: 'images/words/lion.jpg' },
    { word: 'Tiger',      emoji: '🐯', image: 'images/words/tiger.jpg' },
    { word: 'Elephant',   emoji: '🐘', image: 'images/words/elephant.jpg' },
    { word: 'Bear',       emoji: '🐻', image: 'images/words/bear.jpg' },
    { word: 'Monkey',     emoji: '🐒', image: 'images/words/monkey.jpg' },
    { word: 'Penguin',    emoji: '🐧', image: 'images/words/penguin.jpg' },
    { word: 'Giraffe',    emoji: '🦒', image: 'images/words/giraffe.jpg' },
    { word: 'Zebra',      emoji: '🦓', image: 'images/words/zebra.jpg' },
    { word: 'Crocodile',  emoji: '🐊', image: 'images/words/crocodile.jpg' },
    { word: 'Snake',      emoji: '🐍', image: 'images/words/snake.jpg' },
    { word: 'Frog',       emoji: '🐸', image: 'images/words/frog.jpg' },
    { word: 'Turtle',     emoji: '🐢', image: 'images/words/turtle.jpg' },
    { word: 'Owl',        emoji: '🦉', image: 'images/words/owl.jpg' },
    { word: 'Eagle',      emoji: '🦅', image: 'images/words/eagle.jpg' },
    { word: 'Parrot',     emoji: '🦜', image: 'images/words/parrot.jpg' },
    { word: 'Dolphin',    emoji: '🐬', image: 'images/words/dolphin.jpg' },
    { word: 'Whale',      emoji: '🐋', image: 'images/words/whale.jpg' },
    { word: 'Shark',      emoji: '🦈', image: 'images/words/shark.jpg' },
    { word: 'Octopus',    emoji: '🐙', image: 'images/words/octopus.jpg' },
    { word: 'Crab',       emoji: '🦀', image: 'images/words/crab.jpg' },
    { word: 'Butterfly',  emoji: '🦋', image: 'images/words/butterfly.jpg' },
    { word: 'Bee',        emoji: '🐝', image: 'images/words/bee.jpg' },
    { word: 'Ant',        emoji: '🐜', image: 'images/words/ant.jpg' },
    { word: 'Spider',     emoji: '🕷️', image: 'images/words/spider.jpg' },
    { word: 'Ladybug',    emoji: '🐞', image: 'images/words/ladybug.jpg' },
    { word: 'Snail',      emoji: '🐌', image: 'images/words/snail.jpg' },
    { word: 'Pig',        emoji: '🐷', image: 'images/words/pig.jpg' },
    { word: 'Cow',        emoji: '🐄', image: 'images/words/cow.jpg' },
    { word: 'Sheep',      emoji: '🐑', image: 'images/words/sheep.jpg' },
    { word: 'Goat',       emoji: '🐐', image: 'images/words/goat.jpg' },
    { word: 'Chicken',    emoji: '🐔', image: 'images/words/chicken.jpg' },
    { word: 'Duck',       emoji: '🦆', image: 'images/words/duck.jpg' },
    { word: 'Fox',        emoji: '🦊', image: 'images/words/fox.jpg' },
    { word: 'Wolf',       emoji: '🐺', image: 'images/words/wolf.jpg' },
    { word: 'Deer',       emoji: '🦌', image: 'images/words/deer.jpg' },
    { word: 'Panda',      emoji: '🐼', image: 'images/words/panda.jpg' },
    { word: 'Koala',      emoji: '🐨', image: 'images/words/koala.jpg' },
    { word: 'Kangaroo',   emoji: '🦘', image: 'images/words/kangaroo.jpg' },
    { word: 'Camel',      emoji: '🐫', image: 'images/words/camel.jpg' },
    { word: 'Hippo',      emoji: '🦛', image: 'images/words/hippo.jpg' },
    { word: 'Rhino',      emoji: '🦏', image: 'images/words/rhino.jpg' },
    { word: 'Gorilla',    emoji: '🦍', image: 'images/words/gorilla.jpg' },
    { word: 'Flamingo',   emoji: '🦩', image: 'images/words/flamingo.jpg' },
    { word: 'Peacock',    emoji: '🦚', image: 'images/words/peacock.jpg' },
    { word: 'Swan',       emoji: '🦢', image: 'images/words/swan.jpg' },
    { word: 'Hedgehog',   emoji: '🦔', image: 'images/words/hedgehog.jpg' },
    { word: 'Bat',        emoji: '🦇', image: 'images/words/bat.jpg' },
    { word: 'Rat',        emoji: '🐀', image: 'images/words/rat.jpg' },
    { word: 'Mouse',      emoji: '🐭', image: 'images/words/mouse.jpg' },
    { word: 'Hamster',    emoji: '🐹', image: 'images/words/hamster.jpg' },
    { word: 'Squirrel',   emoji: '🐿️', image: 'images/words/squirrel.jpg' },
    { word: 'Beaver',     emoji: '🦫', image: 'images/words/beaver.jpg' },
    { word: 'Otter',      emoji: '🦦', image: 'images/words/otter.jpg' },
    { word: 'Seal',       emoji: '🦭', image: 'images/words/seal.jpg' },
    { word: 'Polar Bear', emoji: '🐻‍❄️', image: 'images/words/polar_bear.jpg' },
    { word: 'Buffalo',    emoji: '🐃', image: 'images/words/buffalo.jpg' },
    { word: 'Donkey',     emoji: '🫏', image: 'images/words/donkey.jpg' },
    { word: 'Llama',      emoji: '🦙', image: 'images/words/llama.jpg' },
    { word: 'Raccoon',    emoji: '🦝', image: 'images/words/raccoon.jpg' },
    { word: 'Skunk',      emoji: '🦨', image: 'images/words/skunk.jpg' },
    { word: 'Lobster',    emoji: '🦞', image: 'images/words/lobster.jpg' },
    { word: 'Shrimp',     emoji: '🦐', image: 'images/words/shrimp.jpg' },
    { word: 'Jellyfish',  emoji: '🪼', image: 'images/words/jellyfish.jpg' },
    { word: 'Worm',       emoji: '🪱', image: 'images/words/worm.jpg' },
    { word: 'Turkey',     emoji: '🦃', image: 'images/words/turkey.jpg' },
    { word: 'Cheetah',    emoji: '🐆', image: 'images/words/cheetah.jpg' },
    { word: 'Moose',      emoji: '🫎', image: 'images/words/moose.jpg' },
    { word: 'Ox',         emoji: '🐂', image: 'images/words/ox.jpg' },
    { word: 'Rooster',    emoji: '🐓', image: 'images/words/rooster.jpg' },
    { word: 'Dove',       emoji: '🕊️', image: 'images/words/dove.jpg' },
    { word: 'Scorpion',   emoji: '🦂', image: 'images/words/scorpion.jpg' },
    { word: 'Dragonfly',  emoji: '🪲', image: 'images/words/dragonfly.jpg' },
    { word: 'Mosquito',   emoji: '🦟', image: 'images/words/mosquito.jpg' },
    { word: 'Cricket',    emoji: '🦗', image: 'images/words/cricket.jpg' },
  ],
};
