const db = require('./connection');
const { User, Product, Category } = require('../models');
db.once('open', async () => {
  await Category.deleteMany();
  const categories = await Category.insertMany([
    { name: 'Golden Retriever' },
    { name: 'French Bulldog' },
    { name: 'Maltipoos' },
    { name: 'English Shepherd' },
    { name: 'Pitbull' }
  ]);
  console.log('categories seeded');
  await Product.deleteMany();
  const products = await Product.insertMany([
    {
      name: 'English Shepherd',
      category: categories[4]._id,
      sex: 'female',
      age: '3 months',
      description: 'Bella is a friendly and intelligent English Shepherd dog. She loves playing fetch and is great with kids. She is always ready for an adventure!',
      image: 'bella.jpg',
      quantity: 1,
      price: 799.99
    },
    {
      name: 'English Shepherd',
      category: categories[4]._id,
      sex: 'male',
      age: '6 months',
      description: 'Max is a loyal and energetic English Shepherd dog. He enjoys long walks and learning new tricks. He will be a great companion for an active family!',
      image: 'max.jpg',
      quantity: 1,
      price: 899.99
    },
    {
      name: 'English Shepherd',
      category: categories[4]._id,
      sex: 'female',
      age: '6 months',
      description: 'Lucy is a playful and affectionate English Shepherd dog. She loves cuddling and enjoys being around people. She will bring lots of joy to your home!',
      image: 'lucy.jpg',
      quantity: 1,
      price: 999.99
    },
    {
      name: 'English Shepherd',
      category: categories[4]._id,
      sex: 'male',
      age: '9 months',
      description: 'Cooper is a smart and obedient English Shepherd dog. He excels in obedience training and can learn new commands quickly. He will be a great working companion!',
      image: 'cooper.jpg',
      quantity: 1,
      price: 1199.99
    },
    {
      name: "English Shepherd",
      category: categories[4]._id,
      sex: 'emale',
      age: '7 months',
      description: 'Daisy is a gentle and protective English Shepherd dog. She is great with children and has a calm demeanor. She will be a loving and loyal family pet!',
      image: 'daisy.jpg',
      quantity: 1,
      price: 999.99
    },
    {
      name: 'Golden Retriever',
      category: categories[1]._id,
      sex: 'male',
      age: '6 months',
      image: 'cooper.png',
      description: 'Cooper is a friendly and playful Golden Retriever with a golden coat that shines in the sun. He loves swimming and has a talent for fetching frisbees. Coopers fun fact is that he once set a record for the longest frisbee catch by a Golden Retriever, covering an impressive distance of 100 meters!',
      quantity: 1,
      price: 1199.99,
    },
    {
      name: 'Golden Retriever',
      category: categories[1]._id,
      sex: 'male',
      age: '3 months',
      image: 'bentley.jpg',
      description: 'Bentley is a loyal and playful Golden Retriever with a golden coat that shines in the sunlight. He is a natural at finding hidden treasures and has an incredible knack for discovering buried bones in the backyard. Fun fact His talent for sniffing out buried goodies never fails to impress his family and friends!',
      quantity: 1,
      price: 999.99,
    },
    {
      name: 'Golden Retriever',
      category: categories[1]._id,
      sex: 'male',
      age: '8 months',
      image: 'max-2.jpg',
      description: 'Max is a spirited and adventurous Golden Retriever with a golden coat that shines. He is an excellent swimmer and has a knack for catching objects in mid-air with impressive agility. Fun fact: Maxwell holds the title for the highest jump by a Golden Retriever in his local dog competition, soaring an incredible 5 feet into the air!',
      quantity: 1,
      price: 1099.99,
    },
    {
      name: 'Golden Retriever',
      category: categories[1]._id,
      sex: 'female',
      age: '12 months',
      image: 'Ruby.png',
      description: 'Ruby is a loving and playful Golden Retriever with a golden coat that shimmers. She has a talent for finding hidden toys and treasures around the house, making playtime an exciting adventure for everyone! Fun fact: Ruby cannot resist singing along whenever she hears her favorite tunes, often surprising her family with her adorable and melodious howls of joy!',
      quantity: 1,
      price: 1199.99,
    },
    {
      name: 'Golden Retriever',
      category: categories[1]._id,
      sex: 'male',
      age: '10 months',
      image: 'kodi.jpg',
      description: 'Kodi is an adventurous and friendly Golden Retriever with a golden coat that sparkles. He is a natural-born retriever and can fetch objects with impressive precision. Fun fact: Kodi has an extraordinary talent for balancing objects on his nose, mesmerizing everyone with his impeccable poise and focus!',
      quantity: 1,
      price: 1299.99,
    },
    {
      name: 'French Bulldog',
      category: categories[2]._id,
      sex: 'male',
      age: '4 months',
      image: 'rocky_fb.jpg',
      description: 'Rocky is a playful and energetic French Bulldog. He loves cuddling and enjoys going for long walks.',
      quantity: 1,
      price: 1499.99,
    },
    {
      name: 'French Bulldog',
      category: categories[2]._id,
      sex: 'female',
      age: '3 months',
      image: 'luna_fb.jpg',
      description: 'Luna is a sweet and gentle French Bulldog. She gets along well with children and other pets.',
      quantity: 1,
      price: 1799.99,
    },
    {
      name: 'French Bulldog',
      category: categories[2]._id,
      sex: 'male',
      age: '7 months',
      image: 'max_fb.jpg',
      description: 'Max is a friendly and outgoing French Bulldog. He loves playing fetch and going on adventures.',
      quantity: 1,
      price: 1599.99,
    },
    {
      name: 'French Bulldog',
      category: categories[2]._id,
      sex: 'female',
      age: '10 months',
      image: 'bella_fb.jpg',
      description: 'Bella is a loyal and affectionate French Bulldog. She enjoys spending time with her family and relaxing in the sun.',
      quantity: 1,
      price: 1699.99,
    },
    {
      name: 'French Bulldog',
      category: categories[2]._id,
      sex: 'male',
      age: '2.5 years',
      image: 'oscar_fb.jpg',
      description: 'Oscar is an intelligent and playful French Bulldog. He learns quickly and enjoys learning new tricks.',
      quantity: 1,
      price: 1899.99,
    },
    {
      name: 'Maltipoos',
      category: categories[3]._id,
      sex: 'female',
      age: '16 weeks',
      image: 'stella.jpg',
      description: 'Stella is an enchanting female Maltipoo puppy with a silky, multicolored coat that glistens in the sunlight. She is incredibly intelligent and picks up new tricks in no time. Stella loves to sing along to your favorite tunes, and her howling harmonies will have you convinced shes the next rising star of the doggy world!',
      quantity: 1,
      price: 2999.99,
    },
    {
      name: 'Maltipoos',
      category: categories[3]._id,
      sex: 'female',
      age: '12 weeks',
      image: 'sunshine.jpg',
      description: 'Sunshine is a charming female Maltipoo puppy with a soft, fluffy coat that resembles a cloud. She loves to cuddle up in your lap and shower you with sweet puppy kisses. Sunshine has a hidden talent for doing somersaults when she gets excited, and it is guaranteed to make you smile!',
      quantity: 1,
      price: 2899.99,
    },
    {
      name: 'Maltipoos',
      category: categories[3]._id,
      sex: 'female',
      age: '19 weeks',
      image: 'princess.jfif',
      description: 'Meet Princess, an adorable female Maltipoo puppy with eyes that sparkle like stars. She has a playful and mischievous nature, always keeping you on your toes. Princess has a unique talent for balancing treats on her nose and catching them in mid-air. Get ready for some entertaining snack time with this little acrobat!',
      quantity: 1,
      price: 2599.99,
    },
    {
      name: 'Maltipoos',
      category: categories[3]._id,
      sex: 'male',
      age: '16 weeks',
      image: 'Chonks.jpeg',
      description: 'Chinks is a dashing male Maltipoo puppy with an irresistible teddy bear face that melts hearts wherever he goes. He is a social butterfly and adores meeting new people and furry friends. Chonks has a remarkable talent for playing hide-and-seek and can find the most clever hiding spots. Get ready for hours of fun and laughter with this little explorer!',
      quantity: 1,
      price: 2799.99,
    },
    {
      name: 'Maltipoos',
      category: categories[3]._id,
      sex: 'male',
      age: '12 weeks',
      image: 'gunther.jpg',
      description: 'Gunther is a charismatic male Maltipoo puppy with a luxurious, wavy coat that is perfect for snuggling. Gunther loves playing dress-up, and his fashion sense is off the charts. You will have a blast dressing him up in adorable outfits and capturing the most Instagram-worthy moments!',
      quantity: 1,
      price: 2999.99,
    },
    {
      name: 'Pitbull',
      category: categories[0]._id,
      sex: 'male',
      age: '6 months',
      description: 'Say hello to Stella! She is a very friendly girl who will likely fit well in most homes, so long as she can get plenty of daily exercise, playtime, love and attention! She is super smart and food-motivated, and will be a total blast to do some all-positive, treat-based training with. She may even pair well with another social and easygoing dog!',
      image: 'stella-2.jpg',
      price: 500.00,
      },
      
      {
      name: 'Pitbull',
      category: categories[0]._id,
      sex: 'male',
      age: '3 months',
      description: 'Meet Milo, an affectionate male Pitbull searching for his forever home. With a handsome coat and captivating eyes, Milo is a gentle pup who adores cuddles and belly rubs. This intelligent pup thrives on companionship, making him the perfect addition to an active and loving family ready for adventure.',
      image: 'milo.jpg',
      price: 500.00,
      },
      
      {
      name: 'Pitbull',
      category: categories[0]._id,
      sex: 'male',
      age: '3 months',
      description: 'Introducing Otis, a lovable and playful male Pitbull puppy eagerly awaiting his forever family. With a charming light brown and white coat that perfectly complements his striking blue eyes, Otis is simply irresistible. Despite his small size, Otis possesses a big heart full of love and a playful spirit that will bring endless joy to any home. If you are seeking a delightful and adorable companion who will shower you with affection and brighten your days with his boundless energy, look no further than Otis.',
      image: 'otis.jpg',
      price: 750.00,
      },
      
      {
      name: 'Pitbull',
      category: categories[0]._id,
      sex: 'female',
      age: '6 years',
      description: 'Meet Gracie, a beautiful and mature 6-year-old female Pitbull seeking her forever family. With her stunning grayish brown coat, Gracie exudes elegance and grace wherever she goes. This sweet and gentle soul is the epitome of loyalty, always ready to shower her humans with unconditional love and affection. If you are looking for a devoted companion who will bring warmth and serenity to your home, Gracie is the perfect match.',
      image: 'gracie.jpg',
      price: 450.00
      },
      {
        name: 'Pitbull',
        category: categories[0]._id,
        sex: 'female',
        age: '1.5 years',
        description: 'Meet Lola, a delightful and affectionate tan Pitbull with a heart full of love just waiting to find her forever family. This sweet-natured girl is hoping to capture your heart and become the perfect addition to your home. If you are searching for a devoted and loyal companion who will brighten your days with endless love and loyalty, Lola is eagerly waiting to meet you. Bring this tan beauty into your life, and you will experience the boundless joy that comes from opening your heart to a special canine friend.',
        image: 'lola.jpg',
        price: 300.00,
        },
        
      
  ]);
  console.log('products seeded');
  await User.deleteMany();
  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });
  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });
  console.log('users seeded');
  process.exit();
});