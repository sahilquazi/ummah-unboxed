// ── Ummah Unboxed Product Catalog & Matching Engine ──
// 100+ products across 5 regions, 6 categories

const CATALOG = [
  // ═══════════════════════════════════════════
  // PALESTINE — Textiles & Fashion
  // ═══════════════════════════════════════════
  { id: 1, name: "Traditional Keffiyeh — Black & White", region: "palestine", category: "textiles", price: 45, img: "keffiyeh.png", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["keffiyeh", "scarf", "woven", "heritage", "resistance", "identity", "cotton", "traditional", "black", "white", "wrap", "palestinian", "symbol", "wearable"], desc: "Woven on one of the last mechanical looms in Hebron. A symbol of Palestinian identity and resistance." },
  { id: 2, name: "Keffiyeh — Olive Green", region: "palestine", category: "textiles", price: 48, img: "keffiyeh.png", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["keffiyeh", "scarf", "green", "olive", "woven", "heritage", "wearable", "traditional"], desc: "Olive green keffiyeh woven in Hebron. Same loom, same tradition, different color." },
  { id: 3, name: "Tatreez Embroidered Tote Bag", region: "palestine", category: "textiles", price: 85, img: "bracelets.jpeg", link: "https://www.darzah.org", brand: "Darzah", keywords: ["tatreez", "embroidery", "tote", "bag", "handmade", "women", "fashion", "carry", "everyday", "colorful", "crossbody"], desc: "Hand-stitched tatreez panels on natural canvas. Fair-wage collaboration between designers and Palestinian embroiderers." },
  { id: 4, name: "Handmade Palestinian Bracelet Set", region: "palestine", category: "jewelry", price: 22, img: "bracelets.jpeg", link: "https://www.darzah.org", brand: "Darzah", keywords: ["bracelet", "jewelry", "handmade", "beaded", "knotted", "flag", "colors", "wearable", "daily", "small", "gift", "affordable", "women", "men", "unisex"], desc: "Keffiyeh-patterned bracelets in four colors. Handcrafted by women artisans in Ramallah and Bethlehem." },
  { id: 5, name: "Tatreez Embroidered Clutch", region: "palestine", category: "textiles", price: 55, img: "bracelets.jpeg", link: "https://www.darzah.org", brand: "Darzah", keywords: ["tatreez", "embroidery", "clutch", "purse", "bag", "women", "fashion", "evening", "handmade"], desc: "Small evening clutch with traditional tatreez cross-stitch. Each motif represents a Palestinian village." },
  { id: 6, name: "Hand-Loomed Linen Pouch", region: "palestine", category: "textiles", price: 38, img: "wooden-art.jpeg", link: "https://nolcollective.com", brand: "Nöl Collective", keywords: ["linen", "pouch", "woven", "handloom", "natural", "indigo", "minimal", "simple", "everyday"], desc: "Woven in a family-run studio using traditional floor looms. Natural linen with indigo block-print border." },
  { id: 7, name: "Hand-Loomed Table Runner", region: "palestine", category: "textiles", price: 62, img: "wooden-art.jpeg", link: "https://nolcollective.com", brand: "Nöl Collective", keywords: ["table", "runner", "linen", "home", "dining", "woven", "handloom", "kitchen", "decor", "natural"], desc: "Traditional floor-loom table runner. Natural linen with hand-dyed border patterns." },
  { id: 8, name: "Embroidered Pillow Cover", region: "palestine", category: "textiles", price: 72, img: "bracelets.jpeg", link: "https://www.darzah.org", brand: "Darzah", keywords: ["pillow", "cushion", "cover", "embroidery", "tatreez", "home", "decor", "living room", "bedroom", "colorful"], desc: "Tatreez-embroidered pillow cover. Each pattern documents a regional tradition unique to a Palestinian village." },
  { id: 9, name: "Keffiyeh Scarf — Red & White", region: "palestine", category: "textiles", price: 45, img: "keffiyeh.png", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["keffiyeh", "scarf", "red", "white", "woven", "heritage", "wearable"], desc: "Red and white keffiyeh, traditionally associated with Palestinian nationalism. Woven in Hebron." },
  { id: 10, name: "Tatreez Embroidered Dress Panel", region: "palestine", category: "textiles", price: 120, img: "bracelets.jpeg", link: "https://www.darzah.org", brand: "Darzah", keywords: ["tatreez", "dress", "panel", "embroidery", "traditional", "thobe", "formal", "special", "women", "heritage"], desc: "A full embroidered panel for a traditional thobe dress. Over 100 hours of handwork." },

  // PALESTINE — Food & Spices
  { id: 11, name: "Za'atar Signature Blend (2.3oz)", region: "palestine", category: "food", price: 14, img: "wooden-art.jpeg", link: "https://canaanpalestine.com", brand: "Canaan Palestine", keywords: ["zaatar", "spice", "herb", "thyme", "sesame", "sumac", "cooking", "kitchen", "food", "organic", "fair trade", "family farm"], desc: "Wild thyme, sesame, sumac. Blended by women cooperatives in Jenin. Certified fair trade." },
  { id: 12, name: "Extra Virgin Olive Oil (500ml)", region: "palestine", category: "food", price: 22, img: "wooden-art.jpeg", link: "https://canaanpalestine.com", brand: "Canaan Palestine", keywords: ["olive oil", "cooking", "food", "organic", "cold pressed", "ancient", "kitchen", "healthy", "fair trade"], desc: "Single-origin, organic, cold-pressed from olive trees hundreds of years old." },
  { id: 13, name: "Freekeh Roasted Green Wheat", region: "palestine", category: "food", price: 16, img: "wooden-art.jpeg", link: "https://canaanpalestine.com", brand: "Canaan Palestine", keywords: ["freekeh", "grain", "wheat", "cooking", "food", "healthy", "traditional", "kitchen", "ancient"], desc: "Smoke-roasted green wheat. A Palestinian staple with a nutty, earthy flavor." },
  { id: 14, name: "Medjool Dates (1lb)", region: "palestine", category: "food", price: 18, img: "wooden-art.jpeg", link: "https://canaanpalestine.com", brand: "Canaan Palestine", keywords: ["dates", "medjool", "food", "sweet", "snack", "natural", "healthy", "ramadan", "iftar"], desc: "Premium Medjool dates from the Jordan Valley. Sweet, soft, and naturally sun-dried." },
  { id: 15, name: "Sumac Ground Spice (4oz)", region: "palestine", category: "food", price: 10, img: "wooden-art.jpeg", link: "https://canaanpalestine.com", brand: "Canaan Palestine", keywords: ["sumac", "spice", "tart", "cooking", "food", "salad", "middle eastern", "kitchen"], desc: "Deep red sumac ground from wild-harvested berries. Adds a tart, lemony flavor to salads and meats." },
  { id: 16, name: "Palestinian Maftoul (Couscous)", region: "palestine", category: "food", price: 12, img: "wooden-art.jpeg", link: "https://canaanpalestine.com", brand: "Canaan Palestine", keywords: ["maftoul", "couscous", "food", "cooking", "grain", "traditional", "dinner", "kitchen"], desc: "Hand-rolled Palestinian couscous. Made from bulgur wheat by women cooperatives." },
  { id: 17, name: "Nabulsi Soap Bar", region: "palestine", category: "skincare", price: 8, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["soap", "nabulsi", "olive oil", "natural", "skincare", "bath", "traditional", "gentle", "handmade"], desc: "Traditional Nabulsi soap made from virgin olive oil. A 1,000-year-old recipe from Nablus." },
  { id: 18, name: "Olive Oil Soap Gift Set (3 bars)", region: "palestine", category: "skincare", price: 24, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["soap", "gift", "olive oil", "natural", "skincare", "bath", "set", "handmade"], desc: "Three varieties of traditional Palestinian olive oil soap. Lavender, plain, and sage." },

  // PALESTINE — Home & Ceramics
  { id: 19, name: "Hand-Painted Ceramic Bowl", region: "palestine", category: "ceramics", price: 62, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["ceramic", "bowl", "painted", "pottery", "home", "kitchen", "decor", "hebron", "colorful", "traditional", "handmade"], desc: "Traditional Hebron glasswork patterns adapted to clay. Glazed and kiln-fired by a single artisan family." },
  { id: 20, name: "Ceramic Serving Plate — Blue", region: "palestine", category: "ceramics", price: 48, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["ceramic", "plate", "serving", "blue", "home", "kitchen", "dining", "entertaining", "decor"], desc: "Hand-painted serving plate with traditional blue geometric patterns from Hebron." },
  { id: 21, name: "Wooden Arabic Calligraphy Artwork", region: "palestine", category: "art", price: 55, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["wood", "calligraphy", "arabic", "art", "wall", "decor", "home", "burned", "pyrography", "faith", "islamic", "quran", "prayer", "handmade", "oak"], desc: "Hand-burned Arabic calligraphy on natural oak with floral motifs. Each piece takes ~6 hours." },
  { id: 22, name: "Gold Allah Coin", region: "palestine", category: "jewelry", price: 18, img: "gold-coin.jpeg", link: "https://handmadepalestine.com", brand: "Palestinian Artisan Collective", keywords: ["coin", "gold", "allah", "faith", "islamic", "keepsake", "pocket", "reminder", "prayer", "geometric", "engraved", "gift", "small", "meaningful"], desc: "Gold-tone coin engraved with 'Allah' in Arabic script. Islamic geometric border patterns." },
  { id: 23, name: "Olive Wood Nativity Set", region: "palestine", category: "art", price: 95, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["olive wood", "nativity", "christmas", "carved", "bethlehem", "religious", "gift", "spiritual", "interfaith"], desc: "Hand-carved olive wood nativity set from Bethlehem. A centuries-old local craft tradition." },
  { id: 24, name: "Olive Wood Rosary", region: "palestine", category: "jewelry", price: 15, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["olive wood", "rosary", "prayer", "beads", "spiritual", "faith", "christian", "interfaith", "carved"], desc: "Hand-carved olive wood prayer beads from Bethlehem workshops." },
  { id: 25, name: "Ceramic Spice Jar Set (3)", region: "palestine", category: "ceramics", price: 45, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["ceramic", "jar", "spice", "kitchen", "storage", "home", "colorful", "set", "painted"], desc: "Three hand-painted ceramic jars for spice storage. Traditional Hebron patterns." },
  { id: 26, name: "Palestinian Flag Enamel Pin", region: "palestine", category: "jewelry", price: 8, img: "sticker.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["pin", "enamel", "flag", "palestinian", "small", "accessory", "solidarity", "wearable", "affordable", "gift"], desc: "Small enamel pin featuring the Palestinian flag. Wear it on a jacket, bag, or lanyard." },
  { id: 27, name: "Solidarity Sticker Pack", region: "palestine", category: "art", price: 6, img: "sticker.jpeg", link: "https://handmadepalestine.com", brand: "Palestinian Artists Collective", keywords: ["sticker", "solidarity", "art", "laptop", "affordable", "gift", "small", "graphic", "design", "youth"], desc: "Pack of 5 solidarity stickers designed by Palestinian graphic artists." },
  { id: 28, name: "Hebron Glass Vase", region: "palestine", category: "ceramics", price: 78, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["glass", "vase", "hebron", "blown", "home", "decor", "colorful", "traditional", "artisan", "flowers"], desc: "Hand-blown Hebron glass vase. A 700-year-old tradition of glass-making in the Old City." },
  { id: 29, name: "Tatreez Bookmark Set (3)", region: "palestine", category: "art", price: 18, img: "bracelets.jpeg", link: "https://www.darzah.org", brand: "Darzah", keywords: ["bookmark", "tatreez", "embroidery", "reading", "small", "gift", "affordable", "book", "literary"], desc: "Three hand-embroidered tatreez bookmarks. Each features a different village pattern." },
  { id: 30, name: "Olive Wood Cutting Board", region: "palestine", category: "ceramics", price: 42, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["olive wood", "cutting board", "kitchen", "home", "cooking", "serving", "natural", "durable"], desc: "Solid olive wood cutting and serving board. Grain patterns are unique to each piece." },

  // PALESTINE — More items
  { id: 31, name: "Handmade Tasbih (Prayer Beads)", region: "palestine", category: "jewelry", price: 20, img: "gold-coin.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["tasbih", "prayer beads", "islamic", "faith", "dhikr", "meditation", "spiritual", "handmade", "olive wood", "gift"], desc: "33-bead olive wood tasbih for dhikr. Hand-turned on a lathe in Bethlehem." },
  { id: 32, name: "Palestinian Thobe Fabric (1 yard)", region: "palestine", category: "textiles", price: 35, img: "bracelets.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["fabric", "thobe", "textile", "sewing", "traditional", "dress", "material", "craft"], desc: "Traditional thobe fabric with pre-printed embroidery guidelines. For crafters and sewers." },
  { id: 33, name: "Map of Palestine Wall Print", region: "palestine", category: "art", price: 28, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Palestinian Artists Collective", keywords: ["map", "print", "wall", "art", "poster", "decor", "home", "geographic", "educational"], desc: "Illustrated map of historic Palestine. Hand-drawn by a Palestinian artist in Ramallah." },
  { id: 34, name: "Ceramic Coffee Cup — Arabic Script", region: "palestine", category: "ceramics", price: 22, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["cup", "mug", "coffee", "arabic", "ceramic", "kitchen", "daily", "morning", "calligraphy"], desc: "Hand-painted ceramic coffee cup with Arabic calligraphy. Hebron pottery tradition." },
  { id: 35, name: "Keffiyeh Pattern Phone Case", region: "palestine", category: "jewelry", price: 18, img: "keffiyeh.png", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["phone", "case", "keffiyeh", "pattern", "tech", "accessory", "modern", "daily", "youth"], desc: "Phone case printed with traditional keffiyeh fishnet pattern. Available for most models." },
  { id: 36, name: "Olive Oil Hand Cream", region: "palestine", category: "skincare", price: 16, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["hand cream", "moisturizer", "olive oil", "skincare", "natural", "gentle", "daily", "women"], desc: "Rich hand cream made with Palestinian olive oil and beeswax. Naturally moisturizing." },
  { id: 37, name: "Embroidered Keychain", region: "palestine", category: "jewelry", price: 10, img: "bracelets.jpeg", link: "https://www.darzah.org", brand: "Darzah", keywords: ["keychain", "embroidery", "small", "gift", "affordable", "accessory", "daily", "tatreez"], desc: "Mini tatreez embroidered keychain. A small daily reminder of Palestinian craft." },
  { id: 38, name: "Palestinian Cookbook", region: "palestine", category: "food", price: 32, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["cookbook", "recipes", "food", "cooking", "kitchen", "traditional", "family", "heritage", "book", "reading"], desc: "Collection of traditional Palestinian recipes from families across the West Bank and Gaza." },

  // ═══════════════════════════════════════════
  // LEBANON
  // ═══════════════════════════════════════════
  { id: 39, name: "Saboun Baladi Soap Set (3 bars)", region: "lebanon", category: "skincare", price: 28, img: "wooden-art.jpeg", link: "https://makersoflebanon.com", brand: "Makers of Lebanon", keywords: ["soap", "saboun", "olive oil", "laurel", "natural", "skincare", "bath", "traditional", "handmade", "gift"], desc: "Traditional cold-process Lebanese soap. 90-year-old recipe with olive oil and laurel berry oil." },
  { id: 40, name: "Lebanese Cedar Candle", region: "lebanon", category: "ceramics", price: 34, img: "wooden-art.jpeg", link: "https://makersoflebanon.com", brand: "Makers of Lebanon", keywords: ["candle", "cedar", "scented", "home", "decor", "relaxation", "natural", "gift", "aromatherapy"], desc: "Hand-poured soy candle scented with Lebanese cedar. Made by a small workshop in Beirut." },
  { id: 41, name: "Hand-Painted Lebanese Mug", region: "lebanon", category: "ceramics", price: 34, img: "wooden-art.jpeg", link: "https://byroots.com", brand: "Byroots", keywords: ["mug", "cup", "ceramic", "painted", "coffee", "kitchen", "daily", "morning", "colorful"], desc: "Crafted using traditional Lebanese pottery techniques. Hand-thrown and painted with regional motifs." },
  { id: 42, name: "Dried Herb Foraging Set", region: "lebanon", category: "food", price: 32, img: "wooden-art.jpeg", link: "https://makersoflebanon.com", brand: "Zaatar Road", keywords: ["herbs", "dried", "zaatar", "sumac", "chamomile", "sage", "tea", "cooking", "natural", "foraged", "mountain"], desc: "Wild Lebanese za'atar, sumac, chamomile, and sage. Hand-harvested from mountain farms." },
  { id: 43, name: "Lebanese Rose Water (250ml)", region: "lebanon", category: "food", price: 14, img: "wooden-art.jpeg", link: "https://makersoflebanon.com", brand: "Makers of Lebanon", keywords: ["rose water", "cooking", "baking", "skincare", "natural", "floral", "traditional", "dessert"], desc: "Distilled from Damask roses in the Bekaa Valley. For cooking, baking, and skincare." },
  { id: 44, name: "Handwoven Basket — Large", region: "lebanon", category: "ceramics", price: 52, img: "wooden-art.jpeg", link: "https://makersoflebanon.com", brand: "Makers of Lebanon", keywords: ["basket", "woven", "storage", "home", "decor", "natural", "handmade", "functional"], desc: "Large handwoven basket from Lebanese village cooperatives. Palm leaf and dried grass." },
  { id: 45, name: "Lebanese Mosaic Coasters (Set of 4)", region: "lebanon", category: "ceramics", price: 28, img: "wooden-art.jpeg", link: "https://byroots.com", brand: "Byroots", keywords: ["coasters", "mosaic", "home", "kitchen", "decor", "gift", "set", "colorful", "tile"], desc: "Ceramic coasters with traditional Lebanese mosaic tile patterns. Cork-backed." },
  { id: 46, name: "Orange Blossom Water (250ml)", region: "lebanon", category: "food", price: 12, img: "wooden-art.jpeg", link: "https://makersoflebanon.com", brand: "Makers of Lebanon", keywords: ["orange blossom", "cooking", "baking", "floral", "dessert", "natural", "traditional"], desc: "Pure orange blossom water from Tripoli. Essential for Lebanese desserts and drinks." },
  { id: 47, name: "Lebanese Pomegranate Molasses", region: "lebanon", category: "food", price: 15, img: "wooden-art.jpeg", link: "https://makersoflebanon.com", brand: "Makers of Lebanon", keywords: ["pomegranate", "molasses", "cooking", "sauce", "tart", "sweet", "food", "kitchen", "salad"], desc: "Thick, tart pomegranate molasses. A staple in Lebanese cooking for dressings and marinades." },
  { id: 48, name: "Handmade Brass Incense Burner", region: "lebanon", category: "ceramics", price: 45, img: "wooden-art.jpeg", link: "https://makersoflebanon.com", brand: "Makers of Lebanon", keywords: ["incense", "burner", "brass", "bakhoor", "home", "spiritual", "decor", "traditional", "aromatic"], desc: "Hand-hammered brass incense burner from a Beirut metalworker. For bakhoor and oud." },
  { id: 49, name: "Cedar Wood Essential Oil", region: "lebanon", category: "skincare", price: 18, img: "wooden-art.jpeg", link: "https://makersoflebanon.com", brand: "Makers of Lebanon", keywords: ["essential oil", "cedar", "aromatherapy", "natural", "wellness", "skincare", "relaxation"], desc: "Pure Lebanese cedar essential oil. Steam-distilled from Atlas cedar wood." },
  { id: 50, name: "Lebanese Embroidered Table Napkins (4)", region: "lebanon", category: "textiles", price: 36, img: "wooden-art.jpeg", link: "https://byroots.com", brand: "Byroots", keywords: ["napkins", "embroidered", "table", "linen", "dining", "home", "kitchen", "set", "elegant"], desc: "Hand-embroidered linen napkins with Lebanese floral border designs." },
  { id: 51, name: "Baklava Gift Box (24 pieces)", region: "lebanon", category: "food", price: 42, img: "wooden-art.jpeg", link: "https://makersoflebanon.com", brand: "Makers of Lebanon", keywords: ["baklava", "sweets", "pastry", "gift", "pistachio", "dessert", "special", "celebration", "eid"], desc: "Assorted Lebanese baklava — pistachio, walnut, and cashew varieties. Hand-layered." },
  { id: 52, name: "Olive Oil & Laurel Shampoo Bar", region: "lebanon", category: "skincare", price: 14, img: "wooden-art.jpeg", link: "https://makersoflebanon.com", brand: "Makers of Lebanon", keywords: ["shampoo", "bar", "soap", "hair", "natural", "olive oil", "laurel", "sustainable", "zero waste"], desc: "Solid shampoo bar with olive oil and laurel berry oil. Traditional Lebanese formulation." },

  // ═══════════════════════════════════════════
  // SUDAN
  // ═══════════════════════════════════════════
  { id: 53, name: "Hand-Woven Jute Market Bag", region: "sudan", category: "textiles", price: 42, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Sudanese Artisan Collective", keywords: ["jute", "bag", "market", "woven", "basket", "natural", "sustainable", "everyday", "shopping"], desc: "Natural jute market bag using traditional Sudanese weaving techniques. Takes a full day to weave." },
  { id: 54, name: "Sudanese Dukkah Blend (80g)", region: "sudan", category: "food", price: 18, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Nile Valley Spice Co.", keywords: ["dukkah", "spice", "nuts", "coriander", "cumin", "sesame", "cooking", "food", "kitchen"], desc: "Roasted nuts, coriander, cumin, and sesame. A Sudanese kitchen staple, ground by hand." },
  { id: 55, name: "Sudanese Coffee Spice (Jebena)", region: "sudan", category: "food", price: 14, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Nile Valley Spice Co.", keywords: ["coffee", "spice", "jebena", "ginger", "cinnamon", "cardamom", "drink", "traditional", "morning"], desc: "Spiced coffee blend for traditional Sudanese jebena coffee. Ginger, cinnamon, and cardamom." },
  { id: 56, name: "Handwoven Palm Leaf Basket", region: "sudan", category: "ceramics", price: 35, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Sudanese Artisan Collective", keywords: ["basket", "palm", "woven", "storage", "home", "decor", "natural", "handmade"], desc: "Tightly woven palm leaf basket from Omdurman cooperatives. Multi-purpose storage or display." },
  { id: 57, name: "Sudanese Henna Kit", region: "sudan", category: "skincare", price: 20, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Sudanese Artisan Collective", keywords: ["henna", "body art", "natural", "traditional", "celebration", "wedding", "eid", "women", "beauty"], desc: "Natural henna powder with applicator and design templates. Traditional Sudanese patterns." },
  { id: 58, name: "Toob Fabric (Traditional Wrap)", region: "sudan", category: "textiles", price: 55, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Sudanese Artisan Collective", keywords: ["toob", "wrap", "fabric", "traditional", "dress", "women", "colorful", "wearable", "cultural"], desc: "Traditional Sudanese toob wrap fabric. Worn daily by Sudanese women as an outer garment." },
  { id: 59, name: "Sudanese Black Seed Oil (100ml)", region: "sudan", category: "skincare", price: 16, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Nile Valley Spice Co.", keywords: ["black seed", "oil", "natural", "health", "skincare", "wellness", "traditional", "prophetic", "islamic"], desc: "Cold-pressed black seed (Nigella sativa) oil. Used in traditional medicine for centuries." },
  { id: 60, name: "Handmade Leather Journal", region: "sudan", category: "art", price: 38, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Sudanese Artisan Collective", keywords: ["journal", "leather", "notebook", "writing", "handmade", "gift", "book", "diary", "personal"], desc: "Hand-stitched leather journal with handmade paper. From leather workers in Khartoum." },
  { id: 61, name: "Sudanese Hibiscus Tea (Karkade)", region: "sudan", category: "food", price: 12, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Nile Valley Spice Co.", keywords: ["hibiscus", "tea", "karkade", "drink", "cold", "hot", "natural", "healthy", "refreshing", "red"], desc: "Dried hibiscus flowers for karkade tea. Sweet-tart and refreshing, served hot or iced." },
  { id: 62, name: "Beaded Necklace — Dinka Style", region: "sudan", category: "jewelry", price: 32, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Sudanese Artisan Collective", keywords: ["necklace", "beaded", "colorful", "jewelry", "traditional", "bold", "statement", "women", "tribal"], desc: "Multi-strand beaded necklace inspired by Dinka beadwork traditions. Bold and colorful." },
  { id: 63, name: "Woven Wall Hanging", region: "sudan", category: "art", price: 48, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Sudanese Artisan Collective", keywords: ["wall hanging", "woven", "decor", "home", "art", "textile", "natural", "bohemian", "living room"], desc: "Handwoven wall hanging using natural fibers and dyes. Traditional Sudanese geometric patterns." },
  { id: 64, name: "Peanut Butter — Sudanese Style", region: "sudan", category: "food", price: 10, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Nile Valley Spice Co.", keywords: ["peanut butter", "food", "spread", "natural", "snack", "cooking", "simple", "everyday"], desc: "Stone-ground peanut butter made the traditional Sudanese way. Just peanuts, salt, and patience." },

  // ═══════════════════════════════════════════
  // IRAN
  // ═══════════════════════════════════════════
  { id: 65, name: "Handwoven Wool Table Runner", region: "iran", category: "textiles", price: 78, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["wool", "table runner", "woven", "handmade", "natural dye", "geometric", "rust", "blue", "cream", "home", "decor"], desc: "Woven by craftswomen from Ardabil using natural-dyed wool. Traditional Iranian geometric patterns." },
  { id: 66, name: "Persian Saffron (1g)", region: "iran", category: "food", price: 18, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["saffron", "spice", "cooking", "luxury", "persian", "food", "kitchen", "rice", "special"], desc: "Premium grade saffron threads from Khorasan province. Hand-harvested at dawn." },
  { id: 67, name: "Minakari Enamel Plate", region: "iran", category: "ceramics", price: 85, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["enamel", "plate", "minakari", "decorative", "home", "art", "blue", "gold", "Isfahan", "traditional", "luxury"], desc: "Hand-painted minakari (enamel) plate from Isfahan. A UNESCO-recognized Iranian craft." },
  { id: 68, name: "Persian Tea Set — Glass & Metal", region: "iran", category: "ceramics", price: 65, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["tea", "set", "glass", "persian", "serving", "hosting", "kitchen", "elegant", "traditional", "gift"], desc: "Traditional Iranian tea serving set with carved metal holders and slim glass cups." },
  { id: 69, name: "Ghalamzani Brass Tray", region: "iran", category: "ceramics", price: 92, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["brass", "tray", "engraved", "serving", "home", "decor", "traditional", "metalwork", "luxury", "hosting"], desc: "Hand-engraved brass serving tray (ghalamzani). Intricate floral patterns hammered by Isfahan metalworkers." },
  { id: 70, name: "Rose & Pistachio Nougat (Gaz)", region: "iran", category: "food", price: 22, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["nougat", "gaz", "sweets", "pistachio", "rose", "dessert", "gift", "candy", "Isfahan", "special"], desc: "Isfahan's famous gaz nougat with pistachios and rose water. A centuries-old confection." },
  { id: 71, name: "Kilim Cushion Cover", region: "iran", category: "textiles", price: 55, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["kilim", "cushion", "pillow", "woven", "home", "decor", "colorful", "geometric", "living room", "bohemian"], desc: "Cushion cover cut from vintage kilim rugs. Each one is unique with traditional tribal patterns." },
  { id: 72, name: "Persian Dried Lime (Limoo Amani)", region: "iran", category: "food", price: 10, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["lime", "dried", "spice", "cooking", "persian", "stew", "food", "kitchen", "tart", "unique"], desc: "Sun-dried Persian limes for stews and rice dishes. A distinctive sour, smoky flavor." },
  { id: 73, name: "Hand-Knotted Wool Coaster Set (4)", region: "iran", category: "textiles", price: 28, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["coasters", "wool", "knotted", "home", "kitchen", "set", "small", "gift", "colorful", "handmade"], desc: "Mini hand-knotted wool coasters using traditional Persian rug techniques and natural dyes." },
  { id: 74, name: "Khatam Jewelry Box", region: "iran", category: "art", price: 68, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["jewelry box", "khatam", "inlay", "wood", "decorative", "storage", "gift", "luxury", "geometric", "special"], desc: "Micro-mosaic inlaid jewelry box (khatam-kari). Thousands of tiny wood, bone, and metal pieces." },
  { id: 75, name: "Persian Calligraphy Print", region: "iran", category: "art", price: 35, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["calligraphy", "print", "art", "wall", "persian", "poetry", "rumi", "hafez", "decor", "home", "literary"], desc: "Giclée print of hand-drawn Persian calligraphy. Features verses from Rumi or Hafez." },
  { id: 76, name: "Iranian Turquoise Ring", region: "iran", category: "jewelry", price: 45, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["turquoise", "ring", "jewelry", "stone", "silver", "handmade", "blue", "traditional", "Nishapur", "women"], desc: "Nishapur turquoise set in hand-forged silver. Iran produces some of the world's finest turquoise." },
  { id: 77, name: "Rosewater Face Mist", region: "iran", category: "skincare", price: 16, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["rosewater", "face", "mist", "skincare", "natural", "beauty", "refreshing", "gentle", "daily"], desc: "Pure Damask rosewater from Kashan distilleries. A natural toner and refreshing face mist." },

  // ═══════════════════════════════════════════
  // IRAQ
  // ═══════════════════════════════════════════
  { id: 78, name: "Iraqi Date Syrup (Dibis)", region: "iraq", category: "food", price: 14, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iraqi Heritage Collective", keywords: ["date syrup", "dibis", "cooking", "sweet", "natural", "food", "traditional", "breakfast", "spread"], desc: "Thick, dark date syrup (dibis) from Basra. A staple Iraqi sweetener for centuries." },
  { id: 79, name: "Hand-Embroidered Iraqi Scarf", region: "iraq", category: "textiles", price: 48, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iraqi Heritage Collective", keywords: ["scarf", "embroidered", "wearable", "traditional", "woven", "women", "colorful", "cultural"], desc: "Lightweight embroidered scarf from Kurdish-Iraqi women's cooperatives in Erbil." },
  { id: 80, name: "Mesopotamian Ceramic Tile", region: "iraq", category: "ceramics", price: 35, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iraqi Heritage Collective", keywords: ["ceramic", "tile", "decorative", "wall", "art", "blue", "mesopotamian", "ancient", "historical"], desc: "Decorative ceramic tile inspired by ancient Mesopotamian patterns. Glazed by hand in Baghdad." },
  { id: 81, name: "Iraqi Cardamom Coffee (200g)", region: "iraq", category: "food", price: 16, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iraqi Heritage Collective", keywords: ["coffee", "cardamom", "arabic", "drink", "morning", "traditional", "spiced", "hosting"], desc: "Finely ground Arabic coffee with crushed cardamom. Roasted in small batches in Baghdad." },
  { id: 82, name: "Kurdish Kilim Rug (Small)", region: "iraq", category: "textiles", price: 120, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iraqi Heritage Collective", keywords: ["kilim", "rug", "kurdish", "woven", "floor", "home", "decor", "colorful", "handmade", "large", "investment"], desc: "Small hand-woven kilim from Kurdish weavers in northern Iraq. Natural wool and vegetable dyes." },
  { id: 83, name: "Copper Dallah (Coffee Pot)", region: "iraq", category: "ceramics", price: 75, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iraqi Heritage Collective", keywords: ["dallah", "coffee pot", "copper", "serving", "traditional", "hosting", "arabic", "metalwork", "elegant"], desc: "Hand-hammered copper dallah for serving Arabic coffee. A centerpiece of Iraqi hospitality." },
  { id: 84, name: "Iraqi Amber Incense (Oud)", region: "iraq", category: "skincare", price: 28, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iraqi Heritage Collective", keywords: ["oud", "incense", "amber", "bakhoor", "fragrance", "home", "aromatic", "spiritual", "luxury"], desc: "Premium oud chips and amber resin incense blend. From traditional perfumeries in Baghdad." },
  { id: 85, name: "Handmade Silver Cuff Bracelet", region: "iraq", category: "jewelry", price: 58, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iraqi Heritage Collective", keywords: ["silver", "cuff", "bracelet", "jewelry", "handmade", "engraved", "bold", "statement", "women", "men"], desc: "Hand-forged silver cuff with geometric engravings. Made by silversmiths in Erbil's old bazaar." },

  // ═══════════════════════════════════════════
  // MORE CROSS-REGION ITEMS (to reach 100+)
  // ═══════════════════════════════════════════
  { id: 86, name: "Olive Wood Serving Spoons (Set of 3)", region: "palestine", category: "ceramics", price: 28, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["olive wood", "spoons", "serving", "kitchen", "cooking", "natural", "utensils", "set"], desc: "Hand-carved olive wood serving spoons. Each with unique grain patterns." },
  { id: 87, name: "Palestinian Embroidered Headband", region: "palestine", category: "textiles", price: 16, img: "bracelets.jpeg", link: "https://www.darzah.org", brand: "Darzah", keywords: ["headband", "embroidered", "tatreez", "hair", "accessory", "women", "wearable", "small", "affordable"], desc: "Fabric headband with tatreez embroidery. Comfortable for daily wear." },
  { id: 88, name: "Cedar & Olive Soap Bar", region: "lebanon", category: "skincare", price: 12, img: "wooden-art.jpeg", link: "https://makersoflebanon.com", brand: "Makers of Lebanon", keywords: ["soap", "cedar", "olive", "natural", "skincare", "bath", "forest", "masculine", "fresh"], desc: "Cold-process soap with Lebanese cedar oil and olive oil. A forest-fresh scent." },
  { id: 89, name: "Sudanese Woven Bracelet Set", region: "sudan", category: "jewelry", price: 15, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Sudanese Artisan Collective", keywords: ["bracelet", "woven", "colorful", "affordable", "small", "gift", "daily", "beaded", "unisex"], desc: "Set of three woven bracelets in Sudanese patterns. Bright natural dyes on cotton cord." },
  { id: 90, name: "Persian Pistachio Brittle", region: "iran", category: "food", price: 18, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["pistachio", "brittle", "candy", "sweet", "snack", "gift", "persian", "crunchy", "nuts"], desc: "Thin, crispy pistachio brittle (sohan) from Isfahan. Saffron-infused with cardamom." },
  { id: 91, name: "Arabic Calligraphy Notebook", region: "palestine", category: "art", price: 22, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Palestinian Artists Collective", keywords: ["notebook", "calligraphy", "arabic", "writing", "journal", "gift", "stationery", "art", "literary"], desc: "Lined notebook with Arabic calligraphy cover art. Designed by a Palestinian graphic artist." },
  { id: 92, name: "Handmade Beeswax Candles (3)", region: "palestine", category: "ceramics", price: 26, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["candle", "beeswax", "natural", "home", "decor", "gift", "set", "warm", "handmade", "relaxation"], desc: "Pure beeswax candles hand-dipped by Palestinian beekeepers. Natural honey scent." },
  { id: 93, name: "Lebanese Seven Spice Blend", region: "lebanon", category: "food", price: 12, img: "wooden-art.jpeg", link: "https://makersoflebanon.com", brand: "Makers of Lebanon", keywords: ["seven spice", "baharat", "cooking", "food", "kitchen", "blend", "savory", "meat", "traditional"], desc: "Classic Lebanese seven-spice blend (baharat). Allspice, pepper, cinnamon, and more." },
  { id: 94, name: "Handwoven Wool Socks", region: "iran", category: "textiles", price: 22, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["socks", "wool", "warm", "woven", "handmade", "colorful", "cozy", "winter", "wearable"], desc: "Hand-knit wool socks with traditional Iranian patterns. Warm, thick, and colorful." },
  { id: 95, name: "Tatreez Embroidered Coasters (4)", region: "palestine", category: "textiles", price: 24, img: "bracelets.jpeg", link: "https://www.darzah.org", brand: "Darzah", keywords: ["coasters", "embroidered", "tatreez", "home", "kitchen", "set", "gift", "small", "decor"], desc: "Hand-embroidered coasters featuring four different Palestinian village patterns." },
  { id: 96, name: "Iraqi Tahini (Rashi)", region: "iraq", category: "food", price: 12, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iraqi Heritage Collective", keywords: ["tahini", "rashi", "sesame", "cooking", "food", "spread", "natural", "kitchen", "healthy"], desc: "Stone-ground sesame tahini from Mosul. Rich, creamy, and full of flavor." },
  { id: 97, name: "Hand-Painted Ceramic Tile — Palestine", region: "palestine", category: "ceramics", price: 30, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["tile", "ceramic", "painted", "wall", "decor", "art", "home", "traditional", "colorful", "single"], desc: "Single decorative ceramic tile with traditional Palestinian patterns. Mount on a wall or display on a shelf." },
  { id: 98, name: "Lebanese Arak (Non-Alcoholic Anise)", region: "lebanon", category: "food", price: 14, img: "wooden-art.jpeg", link: "https://makersoflebanon.com", brand: "Makers of Lebanon", keywords: ["anise", "drink", "non-alcoholic", "traditional", "refreshing", "lebanese", "beverage"], desc: "Non-alcoholic anise drink inspired by Lebanese arak tradition. Refreshing with ice." },
  { id: 99, name: "Handmade Leather Wallet", region: "sudan", category: "textiles", price: 35, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Sudanese Artisan Collective", keywords: ["wallet", "leather", "handmade", "men", "everyday", "functional", "durable", "gift", "pocket"], desc: "Hand-stitched leather wallet from Khartoum leatherworkers. Slim design with card slots." },
  { id: 100, name: "Persian Dried Rose Buds (50g)", region: "iran", category: "food", price: 10, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iranian Craftswomen Network", keywords: ["rose", "dried", "tea", "baking", "cooking", "floral", "natural", "aromatherapy", "beautiful", "gift"], desc: "Dried Damask rose buds from Kashan. For tea, baking, potpourri, or simply display." },
  { id: 101, name: "Olive Wood Chess Set", region: "palestine", category: "art", price: 88, img: "wooden-art.jpeg", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["chess", "game", "olive wood", "carved", "gift", "luxury", "special", "men", "home", "intellectual"], desc: "Full hand-carved olive wood chess set from Bethlehem. Each piece individually turned on a lathe." },
  { id: 102, name: "Keffiyeh Tote Bag", region: "palestine", category: "textiles", price: 32, img: "keffiyeh.png", link: "https://handmadepalestine.com", brand: "Handmade Palestine", keywords: ["tote", "bag", "keffiyeh", "fabric", "everyday", "carry", "shopping", "wearable", "casual"], desc: "Canvas tote bag with keffiyeh pattern fabric panels. Everyday carry with a purpose." },
  { id: 103, name: "Aleppo Soap (Traditional)", region: "lebanon", category: "skincare", price: 10, img: "wooden-art.jpeg", link: "https://makersoflebanon.com", brand: "Makers of Lebanon", keywords: ["aleppo", "soap", "olive oil", "laurel", "traditional", "natural", "skincare", "gentle", "ancient"], desc: "Traditional Aleppo-style soap now made by Syrian refugees in Lebanon. Olive and laurel oil." },
  { id: 104, name: "Hand-Stamped Copper Bookmark", region: "iraq", category: "art", price: 12, img: "wooden-art.jpeg", link: "marketplace.html", brand: "Iraqi Heritage Collective", keywords: ["bookmark", "copper", "stamped", "reading", "book", "literary", "small", "gift", "affordable", "metal"], desc: "Thin copper bookmark hand-stamped with Mesopotamian motifs. From a Baghdad metalworker." },
  { id: 105, name: "Tatreez Wall Art (Framed)", region: "palestine", category: "art", price: 95, img: "bracelets.jpeg", link: "https://www.darzah.org", brand: "Darzah", keywords: ["wall art", "tatreez", "embroidery", "framed", "decor", "home", "art", "large", "statement", "colorful", "living room"], desc: "Large framed tatreez embroidery panel. Museum-quality framing. A statement piece for any wall." },
];


// ── Matching Engine ──

function extractKeywords(text) {
  const lower = text.toLowerCase();
  const words = lower.replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(w => w.length > 2);
  // Also extract multi-word phrases
  const phrases = [];
  const phraseList = [
    'olive oil', 'olive wood', 'prayer beads', 'wall art', 'home decor',
    'black seed', 'rose water', 'orange blossom', 'date syrup', 'hand cream',
    'phone case', 'cutting board', 'table runner', 'essential oil', 'face mist',
    'coffee pot', 'chess set', 'jewelry box', 'gift set', 'pillow cover',
    'fair trade', 'zero waste', 'self care', 'skin care', 'hand made',
    'every day', 'living room', 'home office', 'wall hanging', 'natural dye'
  ];
  for (const p of phraseList) {
    if (lower.includes(p)) phrases.push(p);
  }
  return { words, phrases };
}

function scoreProduct(product, preferences) {
  let score = 0;
  let reasonParts = [];
  const regionLabels = { palestine: 'Palestine', lebanon: 'Lebanon', sudan: 'Sudan', iran: 'Iran', iraq: 'Iraq' };
  const categoryLabels = { textiles: 'textiles & embroidery', ceramics: 'ceramics & home goods', food: 'food & spices', jewelry: 'jewelry & accessories', skincare: 'skincare & soap', art: 'art & paper goods' };

  // 1. Region match
  if (preferences.regions.length > 0 && !preferences.regions.includes('no_pref')) {
    if (preferences.regions.includes(product.region)) {
      score += 30;
      reasonParts.push('You wanted to support ' + regionLabels[product.region] + ' — this comes directly from artisans there');
    } else {
      score -= 15;
    }
  }

  // 2. Category match
  if (preferences.productTypes.length > 0) {
    if (preferences.productTypes.includes(product.category)) {
      score += 25;
      reasonParts.push('You said you love ' + categoryLabels[product.category]);
    }
  }

  // 3. Budget match
  if (preferences.budget) {
    const b = preferences.budget;
    let inBudget = false;
    if (b === 'Under $25' && product.price <= 25) inBudget = true;
    else if (b === '$25 \u2013 $50' && product.price >= 25 && product.price <= 50) inBudget = true;
    else if (b === '$50 \u2013 $100' && product.price >= 50 && product.price <= 100) inBudget = true;
    else if (b === '$100+' && product.price >= 100) inBudget = true;
    else if (b === 'No preference') inBudget = true;
    if (inBudget) {
      score += 15;
      if (b !== 'No preference') reasonParts.push('Fits your ' + b + ' budget');
    }
  }

  // 4. Keyword matching from free text
  let matchedWords = [];
  if (preferences.keywords) {
    const { words, phrases } = preferences.keywords;
    let keywordHits = 0;

    for (const phrase of phrases) {
      const phraseWords = phrase.split(' ');
      if (phraseWords.every(pw => product.keywords.some(kw => kw.includes(pw)))) {
        keywordHits += 3;
        matchedWords.push(phrase);
      }
    }

    for (const word of words) {
      let hit = false;
      for (const kw of product.keywords) {
        if (kw.includes(word) || word.includes(kw)) { hit = true; break; }
      }
      if (!hit && product.name.toLowerCase().includes(word)) hit = true;
      if (!hit && product.desc.toLowerCase().includes(word)) hit = true;
      if (hit) { keywordHits++; matchedWords.push(word); }
    }

    if (keywordHits > 0) {
      score += Math.min(keywordHits * 5, 45);
      const unique = [...new Set(matchedWords)].slice(0, 4);
      if (unique.length > 0) {
        reasonParts.push('You mentioned "' + unique.join('", "') + '" — this matches');
      }
    }
  }

  // 5. Avoid keywords
  if (preferences.avoidKeywords && preferences.avoidKeywords.length > 0) {
    for (const avoid of preferences.avoidKeywords) {
      if (product.keywords.some(kw => kw.includes(avoid)) ||
          product.name.toLowerCase().includes(avoid) ||
          product.desc.toLowerCase().includes(avoid)) {
        score -= 30;
        break;
      }
    }
  }

  // 6. Gift context
  if (preferences.isGift === 'yes') {
    if (product.keywords.includes('gift') || product.keywords.includes('set') || product.keywords.includes('special')) {
      score += 10;
      reasonParts.push('Great as a gift');
    }
  }

  // 7. Wearable preference
  if (preferences.clothingSize === 'Skip \u2014 no wearables please') {
    if (product.keywords.includes('wearable') || product.category === 'textiles') {
      score -= 20;
    }
  }

  // Build the "why" sentence
  const why = reasonParts.length > 0 ? reasonParts.join('. ') + '.' : '';

  return { product, score, why };
}

function matchProducts(preferences) {
  const scored = CATALOG.map(p => scoreProduct(p, preferences));
  scored.sort((a, b) => b.score - a.score);
  return scored;
}

function summarizePreferences(data) {
  const parts = [];

  if (data.idealBox) {
    // Extract the key phrases from their description
    const text = data.idealBox.trim();
    if (text.length > 0) {
      parts.push('"' + (text.length > 150 ? text.substring(0, 150) + '...' : text) + '"');
    }
  }

  if (data.productTypes && data.productTypes.length > 0) {
    const typeLabels = {
      'textiles': 'textiles & embroidery',
      'ceramics': 'ceramics & home goods',
      'food': 'food & spices',
      'jewelry': 'jewelry & accessories',
      'skincare': 'skincare & soap',
      'art': 'art & paper goods'
    };
    const types = data.productTypes.map(t => typeLabels[t] || t);
    parts.push('You love: ' + types.join(', '));
  }

  if (data.regions && data.regions.length > 0 && !data.regions.includes('no_pref')) {
    const regionLabels = {
      'palestine': 'Palestine',
      'lebanon': 'Lebanon',
      'sudan': 'Sudan',
      'iran': 'Iran',
      'iraq': 'Iraq'
    };
    const regions = data.regions.map(r => regionLabels[r] || r);
    parts.push('Regions: ' + regions.join(', '));
  }

  if (data.budget && data.budget !== 'No preference') {
    parts.push('Budget: ' + data.budget + ' per item');
  }

  if (data.isGift === 'yes') {
    parts.push('This is a gift' + (data.recipientName ? ' for ' + data.recipientName : ''));
  }

  if (data.avoid) {
    parts.push('Avoiding: ' + data.avoid);
  }

  return parts;
}

function buildMatchResult(data) {
  // Build preference object for the scorer
  const preferences = {
    regions: data.regions || [],
    productTypes: data.productTypes || [],
    budget: data.budget || '',
    keywords: extractKeywords((data.idealBox || '') + ' ' + (data.giftPrefs || '')),
    avoidKeywords: data.avoid ? data.avoid.toLowerCase().split(/[,\s]+/).filter(w => w.length > 2) : [],
    isGift: data.isGift || 'no',
    clothingSize: data.clothingSize || ''
  };

  const results = matchProducts(preferences);
  const topMatches = results.filter(r => r.score > 0).slice(0, 4);
  const prefSummary = summarizePreferences(data);

  return { topMatches, prefSummary, totalScored: results.length };
}
