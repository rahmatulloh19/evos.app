const product = [
  {
    id: 1,
    product_image: "https://cp.ectn.uz/files//0622/lavash_s_govyadinoy_evos.png",
    product_name: "Лаваш с говядиной",
    product_recipe: "Сочные кусочки говядины гриль и спелых помидоров, золотистые картофельные чипсы, томатный восточный соус со свежим луком и зеленью в свежайшем классическом лаваше.",
    product_price: 28000,
    total: 28000,
    ordered_time: "",
    product_count: 1
  },
  {
    id: 2,
    product_image: "https://cp.ectn.uz/files//web/lavash_kur.png",
    product_name: "Лаваш с курицей",
    product_recipe: "Куриное мясо гриль, маринованное по фирменному рецепту с восточными специями, кусочки свежего спелого помидора, натуральные картофельные чипсы, томатный восточный соус со свежим луком и зеленью в свежайшем классическом лаваше.",
    product_price: 26000,
    total: 26000,
    ordered_time: "",
    product_count: 1
  },
  {
    id: 3,
    product_image: "https://cp.ectn.uz/files//web/lavash_kur_mini_evos.png",
    product_name: "Лаваш с курицей Мини",
    product_recipe: "Куриное мясо гриль, маринованное по фирменному рецепту с восточными специями, кусочки свежего спелого помидора, натуральные картофельные чипсы, томатный восточный соус с кусочками лука и пряными травами в свежайшем классическом лаваше. Мини-версия - идеально в качестве легкого перекуса!",
    product_price: 21000,
    total: 21000,
    ordered_time: "",
    product_count: 1
  },
  {
    id: 4,
    product_image: "https://cp.ectn.uz/files//0622/lavash_s_govyadinoy_s_sirom_evos.png",
    product_name: "Лаваш с говядиной и сыром",
    product_recipe: `Сочные кусочки говядины гриль и спелых помидоров, золотистые картофельные чипсы, сыр "Чеддер" и томатный восточный соус со свежим луком и зеленью в свежайшем классическом лаваше`,
    product_price: 31000,
    total: 31000,
    ordered_time: "",
    product_count: 1
  },
  {
    id: 5,
    product_image: "https://cp.ectn.uz/files//0622/lavash_s_kurochkoy_s_sirom_evos.png",
    product_name: "Лаваш с курицей и сыром",
    product_recipe: `Куриное мясо гриль, маринованное по фирменному рецепту с восточными специями, кусочки свежего спелого помидора, натуральные картофельные чипсы, ломтик сыра "Чеддер", томатный восточный соус со свежим луком и зеленью в свежайшем сырном лаваше.`,
    product_price: 29000,
    total: 29000,
    ordered_time: "",
    product_count: 1
  },
  {
    id: 6,
    product_image: "https://cp.ectn.uz/files//0622/lavash_s_govyadinoy_s_sirom_mini_evos.png",
    product_name: "Лаваш с говядиной и сыром Мини",
    product_recipe: `Сочные кусочки говядины гриль и спелых помидоров, золотистые картофельные чипсы, сыр "Чеддер" и томатный восточный соус со свежим луком и зеленью в свежайшем сырном лаваше. Мини-версия - идеально в качестве легкого перекуса!`,
    product_price: 26000,
    total: 26000,
    ordered_time: "",
    product_count: 1
  },
  {
    id: 7,
    product_image: "https://cp.ectn.uz/files//0622/lavash_s_kurochkoy_s_sirom_mini_evos.png",
    product_name: "Лаваш с курицей и сыром Мини",
    product_recipe: `Куриное мясо гриль, маринованное по фирменному рецепту с восточными специями, кусочки свежего спелого помидора, натуральные картофельные чипсы, ломтик сыра "Чеддер", томатный восточный соус со свежим луком и зеленью в свежайшем сырном лаваше. Мини-версия - идеально в качестве легкого перекуса!`,
    product_price: 24000,
    total: 24000,
    ordered_time: "",
    product_count: 1
  },
  {
    id: 8,
    product_image: "https://cp.ectn.uz/files//0622/shaurma_s_govyadinoy_sredniy_evos.png",
    product_name: "Шаурма с говядиной Мини",
    product_recipe: `Сочные кусочки говядины гриль, свежего огрурца и сочного помидора, хрустящие картофельные чипсы, томатный восточный соус со свежим луком и зеленью в ароматной полукруглой булочке с кунжутными семечками. Мини-версия - идеально для легкого перекуса!`,
    product_price: 22000,
    total: 22000,
    ordered_time: "",
    product_count: 1
  },
  {
    id: 9,
    product_image: "https://cp.ectn.uz/files//0622/shaurma_s_govyadinoy_big_evos.png",
    product_name: "Шаурма с говядиной",
    product_recipe: `Сочные кусочки говядины гриль, свежего огурцы и сочного помидора, хрустящие картофельные чипсы, томатный восточный соус со свежим луком и зеленью в ароматной полукруглой булочке с кунжутными семечками.`,
    product_price: 26000,
    total: 26000,
    ordered_time: "",
    product_count: 1
  },
  {
    id: 10,
    product_image: "https://cp.ectn.uz/files//0622/shaurma_s_kurochkoy_sredniyi_evos.png",
    product_name: "Шаурма с курицей Мини",
    product_recipe: `Румяное куриное мясо гриль, ломтики свежего огурцы и сочного помидора, хрустящие чипсы, томатный восточный соус со свежим луком и зеленью в ароматной полукруглой булочке с кунжутными семечками. Мини-версия - идеально в качестве легкого перекуса!`,
    product_price: 21000,
    total: 21000,
    ordered_time: "",
    product_count: 1
  },
  {
    id: 11,
    product_image: "https://cp.ectn.uz/files//donar_box_beef.png",
    product_name: "Донар-бокс с говядиной",
    product_recipe: `Необычайно вкусное сочетание нового фирменного соуса терияки, говядины гриль, хрустящей картошки фри и рассыпчатого риса. Удобная компактная, но сытная упаковка!`,
    product_price: 36000,
    total: 36000,
    ordered_time: "",
    product_count: 1
  },
  {
    id: 12,
    product_image: "https://cp.ectn.uz/files//donar_box_chicken.png",
    product_name: "Донар-бокс с курицей",
    product_recipe: `Аппетитная комбинация слоев сочного куриного мяса гриль, хрустящей картошки фри, рассыпчатого риса, свежего салата из красной капусты с соком лимона под белым кунжутным соусом. Удобная компактная, но сытная упаковка!`,
    product_price: 34000,
    total: 34000,
    ordered_time: "",
    product_count: 1
  },
]