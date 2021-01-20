const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://developer:muvimo@v0.q0wxj.mongodb.net/V0?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected');
});

const kittySchema = new mongoose.Schema({
  name: String,
});

// kittySchema.methods.speak = () => {
//   const greeting = this.name
//     ? 'Meow name is ' + this.name
//     : "I don't have a name";
//   console.log(greeting);
// };

const Kitten = mongoose.model('Kitten', kittySchema);

// const silence = new Kitten({ name: 'Silence' });
// const fluffy = new Kitten({ name: 'Fluffy' });
// const pushok = new Kitten({ name: 'Pushok' });
// const bosya = new Kitten({ name: 'Bosya' });
// const misha = new Kitten({ name: 'Misha' });

// const cats = [silence, fluffy, pushok, bosya, misha];

// cats.forEach((kitten) =>
//   kitten.save(function (err) {
//     if (err) return console.error(err);
//     console.log('data saved to DB');
//   }),
// );

// async function deleteandfind() {
//   await Kitten.deleteOne({ name: 'Fluffy' });
//   Kitten.find(function (err, kittens) {
//     if (err) return console.error(err);
//     console.log(kittens);
//   });
// }

// deleteandfind();

async function update() {
  await Kitten.updateOne(
    { name: 'Dvor-terier' },
    { name: 'Mega-Pushok' },
  );
}
update();
