//flushes & refills DB w/ "clean" data
var db = require('./models');

var animalList= [];
animalList.push({
  name: 'African Forest Elephant',
  Image: 'elephant.jpg',
  location: 'Central and Southern Africa',
  facts: [{fact: "An adult can eat 300 lbs. of food in a day, according to the National Geographic."},
  {fact: "An elephant's trunk has more than 100,000 muscles. They use it to breathe, pick things up, make noises, drink and smell."}]
});
animalList.push({
  name: 'Brown Bear',
  image: 'bear.jpg',
  location: 'North America, Europe and Asia',
  facts: [{fact: "During the fall, brown bears eat practically around the clock, stocking up for the next four to seven months. They may eat 90 pounds of food per day"},
  {fact: "Brown bears aren’t just brown. Some are cream or black."}]
});
animalList.push({
  name: 'Chameleon',
  image: 'chameleon.jpg',
  location: 'Africa, Asia and Southern Europe',
  facts: [{fact: "Chameleon eyes have a 360-degree arc of vision and can see two directions at once."},
  {fact: "Most chameleons change from brown to green and back, but some can turn almost any colour. A change can occur in as little as 20 seconds."}]
});
animalList.push({
  name: 'Dolphin',
  image: 'dolphin.jpg',
  location: 'lives in every ocean of the world except the Arctic and the Antarctic oceans',
  facts: [{fact: "Dolphins have several highly developed forms of communication. They have a signature whistle which allows other individuals to recognise them."},
  {fact: "Dolphins are altruistic animals. They are known to stay and help injured individuals, even helping them to the surface to breath."}]
});
animalList.push({
  name: 'Fishing Cat',
  image: 'fisherCat.jpg',
  location: 'Southern Asia',
  facts: [{fact: "Fishing cats are nocturnal."},
  {fact: "Unlike most cats, Fishing Cats cannot fully retract their claws."},
  {fact: "Humans are the only documented predators of Fishing Cats. "}]
});
animalList.push({
  name: 'Giant Panda',
  image: 'panda.jpg',
  location: 'Central and Southern Asia',
  facts: [{fact: "Pandas have lived on Earth for two to three million years"},
  {fact: "Pandas can stand upright, but their short hind legs aren’t strong enough to support their bodies. A panda’s bones are twice as heavy as the bones of other animals the same size."}]
});
animalList.push({
  name: 'Highland Cattle',
  image: 'cattle.jpg',
  location: 'Europe, North America and Australia',
  facts: [{fact: "Double-coated, Highland cattle withstand very cold temperatures and do not need additional feed until temperatures reach -18 degrees F. "},
  {fact: "Highlands originally came from Scotland. The black smaller Highland cattle developed on the west coast islands of northern Scotland and the red larger variety in the Scottish Highlands."}]
});
animalList.push({
  name: 'Koala',
  image: 'koala.jpg',
  location: 'Australia',
  facts: [{fact: "Koalas are not bears. They are not placental or 'eutherian' mammals, but marsupials, which means that their young are born immature and they develop further in the safety of a pouch"},
  {fact: " Koalas in the southern parts of Australia are considerably larger and have thicker fur than those in the north. This is thought to be an adaptation to keep them warm in the colder southern winters."}]
});
animalList.push({
  name: 'Keel-billed Toucan',
  image: 'toucan.jpeg',
  location: 'South American Rainforests',
  facts: [{fact: "The Keel Billed Toucan is known to be a playful bird.  They have often been spotted throwing berries at other birds or using their bills to jostle with their Toucan Friends. "},
  {fact: "The toucan is a poor flyer, moving from tree to tree mostly by hopping."}]
});
animalList.push({
  name: 'Liger',
  image: 'liger.jpg',
  location: 'Zoos (Ligers do not appear in the natural world)',
  facts: [{fact: "One reason as to why Ligers are rarely produced in the wild is that if a male Lion and a female Tiger came across one another, they are much more likely to fight to defend their territory or avoid one another completely in order to risk getting hurt."},
  {fact: "Ligers are believed to represent the largest known feline in the world. The largest non-obese Liger to have lived was name Hercules, weighing in at a whopping 912 lbs."}]
});
animalList.push({
  name: 'Red Panda',
  image: 'redPanda.jpg',
  location: 'Eastern Himalayas',
  facts: [{fact: "Red pandas measure in at just larger than a domestic cat, making them much smaller than the famous giant pandas."},
  {fact: "Red pandas sport a false thumb, which is actually an extension of the wrist bone."}]
});
animalList.push({
  name: 'Tazmanian Devil',
  image: 'devil.jpg',
  location: 'Island of Tasmania in Australia',
  facts: [{fact: "The Tasmanian devil is nocturnal; it sleeps during the day and is stays awake at night. During the night, they sometimes journey up to 10 miles to hunt, according to the San Diego Zoo."},
  {fact: " Mother Devil's will have up to 50 young at once. At birth, the imps must race to the mother's pouch, where they compete for one of her four teats. Only those four will have a chance of surviving; the others will die due to malnourishment."}]
});

db.Animal.remove({}, function(err, animals){
  console.log('removed all animals');

  db.Animal.create(animalList, function(err, animals){
    if (err) { return console.log('ERROR', err); }
    console.log("all animals:", animals);
    console.log("created", animals.length, "animals");
    process.exit();
  });
});
