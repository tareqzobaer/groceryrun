// ───────────────────────────────────────────────────────────────
//  Category dictionary
//  Order matters: first match wins.
//
//  This is the file to edit when adding new grocery items or
//  categories — it's kept separate from index.html since it's
//  updated far more often than the app logic.
// ───────────────────────────────────────────────────────────────
const DEFAULT_CATEGORIES = [

  ['Pantry', '🥫', [
    'rice', 'chal', 'chaal', 'polao chal', 'flour', 'cornflour','atta', 'maida', 'suji', 'semolina', 'sugar',
    'salt', 'oil', 'vinegar', 'soy sauce', 'ketchup', 'semai', 'lachcha', 'shemai',
    'mustard', 'jam', 'honey', 'peanut butter', 'pasta', 'noodle',
    'spaghetti', 'macaroni', 'lentil', 'dal', 'daal',
    'chickpea', 'chola', 'tea', 'coffee', 'chana daal',
    'cornstarch', 'corn starch', 'soup', 'broth',
    'sauce', 'tomato paste', 'canned', 'tinned', 'pickle', 'achar', 'cereal',
    'oat', 'oatmeal', 'granola', 'tin', 'can', 'custard', 'seed', 'besan',
	  'muri', 'chira', 'chiura', 'khoi', 'gur', 'molasses', 'jaggery', 'mishri',
		'lobon', 'chini', 'tel', 'payesh',
		'condensed milk', 'powdered milk', 'milk powder', 'vermicelli',
		'rava', 'dalda', 'vanaspati', 'tapioca', 'sabudana', 'arrowroot', 'sagoo', 'haleem'
  ]],
  ['Dairy & Eggs', '🥛', [
    'milk', 'cheese', 'butter', 'yogurt', 'tok doi',
    'cream', 'ghee', 'paneer', 'chana', 'egg'
  ]],
  ['Meat & Fish', '🐟', [
    'chicken', 'beef', 'mutton', 'khasi', 'lamb',
    'fish', 'mach', 'shrimp', 'prawn',
    'salmon', 'tuna', 'ilish', 'hilsa', 'rui', 'katla', 'tilapia', 'pomfret',
    'rupchanda', 'pangash', 'pangas', 'koi', 'magur', 'shing', 'goat', 'duck',
	  'liver', 'mince', 'keema',
	  'chingri', 'galda', 'baim', 'pabda', 'tengra', 'boal', 'shoal', 'bhetki',
	  'air mach'
  ]],
  ['Snacks', '🍪', [
    'biscuit', 'cookie', 'cracker', 'chip',
    'chocolate', 'candy', 'sweet', 'mishti', 'chanachur',
    'jhalmuri', 'popcorn', 'nut', 'almond', 'cashew',
    'peanut', 'pistachio', 'walnut', 'raisin', 'naru',
	  'murali', 'moa', 'laddu', 'pitha', 'wafer',
    'dried fruit', 'trail mix', 'energy bar', 'protein bar'
  ]],
  ['Personal Care & Toiletries', '🧴', [
	  'soap', 'shampoo', 'toothpaste', 'toothbrush', 'body wash', 'bodywash',
	  'razor', 'deodorant', 'lotion', 'comb', 'brush', 'odomos',
	  'liquid soap', 'hand wash', 'handwash', 'sanitizer', 'sanitary pad',
	  'napkin', 'cotton', 'bandage', 'perfume', 'aftershave',
	  'veet', 'shower', 'wash'
	]],
	['Household & Cleaning', '🧹', [
	  'detergent', 'surf', 'tissue', 'paper towel', 'toilet paper', 'cleaner',
	  'bleach', 'sponge', 'foil', 'plastic bag', 'trash bag', 'garbage bag','Rin powder',
	  'battery', 'bulb', 'match', 'candle', 'mosquito', 'harpic',
	  'vim', 'vim bar', 'lizol', 'floor cleaner', 'air freshener',
	  'jharu', 'broom', 'mop', 'wiper', 'glove', 'insecticide', 'coil'
	]],
	['Baby & Kids', '🍼', [
	  'diaper', 'nappy', 'pampers',
	  'baby wipes', 'wet wipes',
	  'baby food', 'baby cereal', 'cerelac', 'formula',
	  'milk formula', 'infant formula', 'baby milk',
	  'feeding bottle', 'baby bottle', 'bottle nipple',
	  'pacifier', 'soother', 'teether',
	  'baby lotion', 'baby cream', 'baby oil',
	  'baby shampoo', 'baby soap', 'baby powder',
	  'rash cream', 'diaper rash cream',
	  'bib', 'burp cloth', 'baby towel',
	  'baby toothbrush', 'baby toothpaste',
	  'kids toothpaste', 'kids shampoo',
	  'kids soap', 'kids snacks', 'kids drink',
	  'suji for baby', 'huggies',
	  'nestle nan', 'lactogen', 'dexolac',
	  'baby diaper', 'training pants'
	]],

  ['Spices', '🧂', [
    'spice', 'masala', 'turmeric',
    'cumin', 'jeera', 'coriander', 'dhonia', 'cardamom',
    'elach', 'cinnamon', 'daruchini', 'clove', 'lobongo', 'paprika',
    'bay leaf', 'tej pata', 'saffron', 'jafran', 'panch foron', 'oregano', 'chilli powder',
    'herb', 'pepper', 'biryani masala', 'ready mix', 'methi', 'fenugreek', 'ajwain',
	  'shukna morich', 'dried chilli', 'black pepper', 'gol morich',
    'white pepper', 'mace', 'star anise', 'fennel', 'mouri', 'asafoetida', 'hing',
	  'tamarind powder', 'chat masala', 'jira'
  ]],
	['Baking', '🧁', [
	  'baking powder', 'baking soda', 'yeast', 'vanilla essence',
	  'food color', 'food colour', 'icing sugar', 'icing', 'fondant',
	  'chocolate chip', 'sprinkle', 'cocoa powder',
	  'whipped cream', 'cream cheese', 'cocoa'
	]],
  ['Bakery', '🥖', [
    'bread', 'loaf', 'bun', 'roll', 'bagel', 'croissant', 'cake', 'pastry',
    'muffin', 'donut', 'tortilla', 'naan', 'paratha', 'butter bun',
    'ruti', 'toast'
  ]],
  ['Fruit', '🍎', [
    'apple', 'banana', 'orange', 'grape', 'strawberry',
    'blueberry', 'raspberry', 'mango', 'pineapple',
    'watermelon', 'melon', 'papaya', 'kiwi', 'peach', 'pear',
    'plum', 'cherry', 'avocado', 'sofeda',
    'pomegranate', 'guava', 'peyara', 'lichi', 'lychee', 'jackfruit',
    'date', 'fig', 'apricot', 'tangerine', 'mosambi',
    'gooseberry', 'mandarin', 'malta',
	  'bel', 'tetul', 'tamarind', 'jambura', 'pomelo', 'starfruit',
	  'dragon fruit', 'passion fruit', 'coconut', 'narikel', 'dab'
  ]],
  ['Vegetable', '🥕', [
    'tomato', 'potato', 'onion', 'ada',
    'garlic', 'roshun', 'ginger', 'carrot', 'cabbage',
    'cauliflower', 'broccoli', 'spinach', 'lettuce',
    'cucumber', 'capsicum', 'eggplant', 'brinjal',
    'chili', 'chilli', 'lady finger', 'okra', 'pumpkin',
    'gourd', 'lau', 'kakrol', 'patal', 'shim', 'bean',
    'pea', 'corn', 'mushroom', 'celery', 'radish', 'beet', 'beetroot',
    'kale', 'asparagus', 'zucchini', 'shak', 'puishak', 'data', 'kachu',
    'sweet potato', 'mishti aloo', 'cilantro', 'lemon', 'lime',
	  'dhundul', 'jhinga', 'chichinga', 'korola', 'bitter gourd',
    'kacha morich', 'dhonia pata', 'palong shak', 'lal shak',
    'kochu shak', 'fulkopi', 'badhakopi', 'misti kumra', 'pepe',
    'shosha', 'lebu', 'sheem', 'sim', 'barbati', 'borboti', 'yard long bean',
    'taro', 'yam', 'raw banana', 'kachkola', 'kacha kola'

  ]],
  ['Frozen', '❄', [
    'ice cream', 'frozen', 'kulfi', 'frozen fish', 'frozen paratha', 'frozen ruti',
	  'frozen fries', 'french fries', 'nugget','frozen vegetable', 'frozen pea'
  ]],
  ['Drinks', '🥤', [
    'apple juice', 'orange juice', 'mango juice', 'fruit juice', 'mixed juice',
	  'water', 'juice', 'coke', 'pepsi', 'sprite', 'fanta',
    '7up', '7Up', 'mountain dew', 'tang', 'mojo', 'frutika',
    'glucose', 'rooh afza'
  ]]


];
const OTHER_ICON = '📦';
