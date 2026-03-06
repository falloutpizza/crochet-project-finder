const projects = [
    { title: "easy customisable cardigan", author: "Katieree", link: "https://youtu.be/Rp4aZaI3Hd0?si=xTquzEntL3aC7poe", tags: ["beginner", "clothing", "500+g"] },
    { title: "shrug/sleeves", author: "75 emma", link: "https://youtu.be/m265qgMjNBI?si=fckj3rWGAN9k0dpN", tags: ["beginner", "clothing", "300-500g"] },
    { title: "mesh cardigan/top", author: "mahum", link: "https://youtu.be/8xKtDYx1Yh8?si=rCnGfAtUq4N41wuz", tags: ["beginner", "clothing", "100-300g"] },
    { title: "babydoll top (with sleeves)", author: "Granny Gaia", link: "https://youtu.be/CoB8eNqalY8?si=7tcEJDUUBelXYghF", tags: ["beginner", "clothing", "100-300g", "300-500g"] },
    { title: "the skyla top", author: "The Yarnling", link: "https://youtu.be/urEdkiuiRNA?si=6H-MIw0FiM1hM39i", tags: ["beginner", "clothing", "100-300g"] },
    { title: "brown pathwork cardigan", author: "Yarnalina", link: "https://youtu.be/BMez0jj8c6s?si=7xJi_QzaGB1hituO", tags: ["beginner", "clothing", "300-500g", "500+g"] },
    { title: "very simple skirt", author: "LaDenser Crochets", link: "https://youtu.be/1ZPlRJWoF1s?si=UVSu4XY26OHOPPi8", tags: ["beginner", "clothing", "100-300g"] },
    { title: "crop top with tie straps", author: "forthefrills", link: "https://youtu.be/oMjIYuN6Ofw?si=aXOy590WAdKSFpXA", tags: ["beginner", "clothing", "100-300g"] },
    { title: "striped sweater", author: "mahum", link: "https://youtu.be/zIftudXrbbc?si=d_u5D4kEPXVhY-bs", tags: ["beginner", "clothing", "300-500g"] },
    { title: "buttercup top", author: "eleni jones", link: "https://youtu.be/ee41WlUh460?si=PW3aPB8YBWrJwJHp", tags: ["intermediate", "clothing", "100-300g"] },
    { title: "winter hood/balaclava", author: "yaejiyea", link: "https://youtu.be/C0piTF3QRIU?si=Um08NFOLp0HrqndV", tags: ["intermediate", "accessories", "100-300g"] },
    { title: "corset top", author: "Chenda DIY", link: "https://youtu.be/fU_QrJ9zB-U?si=6CPKe73MZqHVxANM", tags: ["beginner", "clothing", "100-300g"] },
    { title: "scallop tank top", author: "HayHay Crochet", link: "https://youtu.be/jg1I5j8QErQ?si=DOaQIi_TtLjUeruc", tags: ["beginner", "clothing", "100-300g", "300-500g"] },
    { title: "halter top", author: "Krystal Everdeen", link: "https://youtu.be/93Ao1JIniN8?si=05OUayqrsGBy2dhD", tags: ["beginner", "clothing", "100-300g"] },
    { title: "ruffle skirt", author: "AC Crochets", link: "https://youtu.be/KU6llS5WyIQ?si=nga5CYfn-LFZ_1jk", tags: ["beginner", "clothing", "100-300g", "300-500g"] },
    { title: "leaf drop top|bralette|boho gypsy coachella top", author: "Baecrochett by Lizzy & Becky", link: "https://youtu.be/L5KB232ndAc?si=0pt6QV_-iRruhYpU", tags: ["intermediate", "clothing", "100-300g"] },
    { title: "embroidered top", author: "WONDER NETTING", link: "https://youtu.be/ZDfh_OFq9es?si=65Ryky3nlMEj2hXg", tags: ["beginner", "clothing", "100-300g"] },
    { title: "baby mini dress", author: "Chenda DIY", link: "https://youtu.be/JJqpiUyJUl8?si=ujvMwxRKRFKk5i-8", tags: ["beginner", "clothing", "300-500g"] },
    { title: "shelly butterfly top", author: "Shyler crochets", link: "https://youtu.be/Dl-7UnyCnDs?si=QBMtj9y9GForvWiU", tags: ["intermediate", "clothing", "100-300g"] },
    { title: "mock neck top", author: "Granny Gaia", link: "https://youtu.be/fp-9fV3BKgo?si=OwTeFh0eVutLEb4k", tags: ["beginner", "clothing", "100-300g", "300-500g"] },
    { title: "petal dress", author: "Annoo  and The Unruly Stitch", link: "https://youtu.be/ARbisOfJJiQ?si=0l1Jg7wfXY-r2UVa", tags: ["intermediate", "clothing", "300-500g", "500+g"] },
    { title: "coquette top & dress", author: "WONDER NETTING", link: "https://youtu.be/RWELSxU3BF8?si=hxnAfb8CeYq3h_Lq", tags: ["intermediate", "clothing", "300-500g", "500+g"] },
    { title: "clam top", author: "Yarns and Fins", link: "https://youtu.be/DP01sYMIr-Q?si=atIoHErJpvYTdO5X", tags: ["intermediate", "clothing", "100-300g"] },
    { title: "caged halter top", author: "Made by BJax", link: "https://youtu.be/buVM2R0ag0Q?si=pYOXth0OIuMuifzF", tags: ["beginner", "clothing", "100-300g", "300-500g"] },
    { title: "crochet your own top: in-depth tutorial", author: "mahum", link: "https://youtu.be/RjuVriAokkY?si=KbYYJ8ZZx7FrT6ac", tags: ["beginner", "clothing", "100-300g", "300-500g"] },
    { title: "lilith top", author: "Made by BJax", link: "https://youtu.be/sjY9wFO0sU8?si=5OeZE-N4MIpKFvG8", tags: ["advanced", "clothing", "100-300g"] },
    { title: "flower tank top", author: "Anna Greene", link: "https://youtu.be/VK-ffuuWkDY?si=uKQ7L_EDc0jVTS3l", tags: ["beginner", "clothing", "100-300g"] },
    { title: "coquette top", author: "WONDER NETTING", link: "https://youtu.be/VUWvGh1mHsU?si=AGqvf-J7O2CyJZ3n", tags: ["beginner", "clothing", "100-300g"] },
    { title: "riley mesh sweater", author: "Brianna", link: "https://youtu.be/tjCw1stRBmY?si=yaTj-lt7V2ToncT5", tags: ["beginner", "clothing", "100-300g", "300-500g"] },
    { title: "seiz crochet top", author: "Yarns and Fins", link: "https://youtu.be/WMw-ZDQlhdY?si=0jF9I_j6hpLeRKAT", tags: ["beginner", "clothing", "100-300g"] },
    { title: "the botanical bralette", author: "Baecrochett by Lizzy & Becky", link: "https://youtu.be/6IJPy4fXhAQ?si=BaXXm3rJfzMZ_hIR", tags: ["beginner", "clothing", "100-300g"] },
    { title: "the lilly top", author: "PassioKnit Kelsie", link: "https://youtu.be/nzLZjXviWdw?si=9P-GwVzDzJWO-TYZ", tags: ["beginner", "clothing", "100-300g"] },
    { title: "the vera top", author: "Kamryn Cain", link: "https://youtu.be/Zz1b4W4BAf4?si=zTzIy_tLkbwZLSWh", tags: ["beginner", "clothing", "100-300g"] },
    { title: "savannah bralette", author: "Baecrochett by Lizzy & Becky", link: "https://youtu.be/avowhG7oW1E?si=NPkLYsZTgZTefHOi", tags: ["intermediate", "clothing", "100-300g"] },
    { title: "lily of the valley crochet skirt", author: "Hannah Drapinski", link: "https://youtu.be/Rrv7pqILFm0?si=JRX5PyKZ3ZIIiuVK", tags: ["beginner", "clothing", "500+g"] },
    { title: "ribbed a-line skirt with button suspenders", author: "TCDDIY", link: "https://youtu.be/z7KkHTuX-mQ?si=gH3JFz2p7IjPt4Zs", tags: ["beginner", "clothing", "500+g",] },
    { title: "flower sweater", author: "Kamryn Cain", link: "https://youtu.be/721Nw8UPxG8?si=zZAvJuu7DAd4QcFw", tags: ["beginner", "clothing", "300-500g"] },
    { title: "granny square dress (with slit)", author: "Shyler crochets", link: "https://youtu.be/0mw4eS2zR6g?si=2WmKLliPls_Wlq16", tags: ["beginner", "clothing", "500+g"] },
    { title: "oversized crochet hoodie", author: "Dana B", link: "https://youtu.be/sDpOts1OCTY?si=UzEsex8Y2sgKZXjb", tags: ["beginner", "intermediate", "clothing", "500+g",] },
    { title: "elegant dress", author: "Marion Crochets", link: "https://youtu.be/OXu8skLtaFY?si=G8PUzd9SUxQsPd77", tags: ["beginner", "clothing", "500+g"] },
    { title: "spiral sweater", author: "Hannah Drapinski", link: "https://youtu.be/hPHFH5gV_vk?si=y2fpOR9gpEoIgeJy", tags: ["beginner", "clothing", "300-500g"] },
    { title: "the morticia dress", author: "Made by BJax", link: "https://youtu.be/u5FBFEUyolA?si=hC0lZI8jNzBYUOu6", tags: ["intermediate", "advanced", "clothing", "500+g"] },
    { title: "off the shoulder top", author: "yaejiyea", link: "https://youtu.be/3BKoKme1B3k?si=W5Jhyf7BNQHeKw1X", tags: ["beginner", "clothing", "100-300g"] },
    { title: "angelica dress", author: "Made by BJax", link: "https://youtu.be/_Qz8i5WydtQ?si=Y0uPSJkfsWBDliVE", tags: ["intermediate", "clothing", "300-500g"] },
    { title: "off the shoulder mesh top", author: "Twilescrochet", link: "https://youtu.be/_HNBcFxx3A8?si=QYsUZLGb8uaUyzHg", tags: ["beginner", "clothing", "100-300g"] },
    { title: "hibiscus top", author: "Chloe Crafts", link: "https://youtu.be/WBFTUOf5ePY?si=xeowtuSZHXsXigzL", tags: ["beginner", "clothing", "100-300g"] },
    { title: "ivy dress", author: "Janice // @__seratt", link: "https://youtu.be/aiULJZIZ2Zw?si=PheKSgZxHFB6_Tpk", tags: ["beginner", "clothing", "300-500g", "500+g"] },
    { title: "spiderlace poncho", author: "yaejiyea", link: "https://youtu.be/cxmGJAJ0d80?si=G6e05KFWYrHNbF9G", tags: ["intermediate", "advanced", "clothing", "100-300g"] },
    { title: "fitted cardigan", author: "yaejiyea", link: "https://youtu.be/bOezIIMO-p4?si=YNbDk6OfI0b4aqi1", tags: ["intermediate", "advanced", "clothing", "300-500g", "500+g"] },
    { title: "halloween accessories", author: "yaejiyea", link: "https://youtu.be/ChC4S1UeHAQ?si=gmJwVYWNzxM7WvIr", tags: ["beginner", "accessories", "<50g", "50-100g"] },
    { title: "dune inspired crochet rave top", author: "yaejiyea", link: "https://youtu.be/3o_VhYVFGnE?si=bSp-i8yu8MjxCQhh", tags: ["intermediate", "beginner", "clothing", "100-300g"] },
    { title: "summer tube top", author: "yaejiyea", link: "https://youtu.be/p9KgKsn7u_A?si=RSULknO7OWuhJOCA", tags: ["beginner", "clothing", "100-300g"] },
    { title: "lera top", author: "yaejiyea", link: "https://youtu.be/_8Z5bQ9xHh8?si=yX3pFaRkZdiSKcpm", tags: ["beginner", "clothing", "100-300g"] },
    { title: "shrug/bolero", author: "yaejiyea", link: "https://youtu.be/jSlpYPj2kRI?si=E4aunfcFK5zV6INl", tags: ["beginner", "clothing", "300-500g"] },
    { title: "bow mockneck tank top", author: "yaejiyea", link: "https://youtu.be/Lqp7efjXNxs?si=7vwIWuAydG1fYlXN", tags: ["intermediate", "advanced", "clothing", "50-100g"] },
    { title: "bow off shoulder top", author: "yaejiyea", link: "https://youtu.be/8xsYyflRxeA?si=F7oLeaOWkczIX4oK", tags: ["intermediate", "clothing", "300-500g"] },
    { title: "summer shorts", author: "yaejiyea", link: "https://youtu.be/4y0D2Kef_X8?si=eayKsJ4jW4EbFo4U", tags: ["intermediate", "clothing", "100-300g"] },
    { title: "above knee skirt", author: "yaejiyea", link: "https://youtu.be/bUkwnfp7G8c?si=DZR1AM4i-iSNR-ey", tags: ["beginner", "clothing", "100-300g"] },
    { title: "ruffle corset top", author: "yaejiyea", link: "https://youtu.be/2Pv4DYY-yQE?si=OIcbG3ap6KC3I6Sv", tags: ["intermediate", "clothing", "100-300g"] },
    { title: "backless crochet top", author: "yaejiyea", link: "https://youtu.be/x08bfnQqrsY?si=cES54CiV8CarmR2G", tags: ["intermediate", "clothing", "100-300g"] },
    { title: "sweetheart crochet top", author: "yaejiyea", link: "https://youtu.be/NBZldevwS9k?si=rhoFXpnWBc40CzBP", tags: ["beginner", "clothing", "100-300g"] },
    { title: "beginner friendly form fitting dress", author: "Made by BJax", link: "https://youtu.be/rDyLXXTs0Nk?si=D_uykxVu1mqIw0Rm", tags: ["beginner", "clothing", "300-500g"] },
    { title: "mesh hairband", author: "VivCrochets", link: "https://youtu.be/yudRUESZ-io", tags: ["beginner", "accessories", "<50g"] },
    { title: "crochet bow keychain", author: "VivCrochets", link: "https://youtu.be/GaTBLmiAFq0", tags: ["beginner", "accessories", "<50g"] },
    { title: "heart trinket tray", author: "Ant", link: "https://youtu.be/SPi3596MHHI", tags: ["beginner", "accessories", "50-100g"] },
    { title: "flower hair clip & multicolor headband", author: "mahum", link: "https://youtu.be/LCCuM1Z56eM", tags: ["beginner", "accessories", "<50g"] },
    { title: "crochet headphone sprout", author: "lilthings", link: "https://youtu.be/jbMKDhgx4eM", tags: ["beginner", "accessories", "<50g"] },
    { title: "granny triangle bandana", author: "Littlejohn's Yarn", link: "https://youtu.be/iVGCFKPoGg8?si=brVrSgshNZSLCKEA", tags: ["beginner", "accessories", "granny squares", "50-100g"] },
    { title: "wrist warmers/fingerless gloves", author: "ElyseCrochets", link: "https://youtu.be/xaAv9G-WmD0?si=Gc0MQxkwQTU1aA12", tags: ["beginner", "accessories", "50-100g"] },
    { title: "cat paw fingerless gloves", author: "lilthings", link: "https://youtu.be/mQS9jwoMbKg?si=1of-lmjzbcZiMvvE", tags: ["beginner", "accessories", "100-300g"] },
    { title: "daisy hair band", author: "Plakshi Jain | Crochet", link: "https://youtu.be/LZ9KmeU11f0?si=7DlelYK7mNgDrsF7", tags: ["beginner", "accessories", "<50g"] },
    { title: "flower hair clip", author: "atar crochet", link: "https://youtu.be/zksoYXxmSTk?si=ZLr2fwcl3Jon1_TD", tags: ["beginner", "accessories", "<50g"] },
    { title: "hair clip", author: "Lamy Crochet", link: "https://youtu.be/8SxhLGZKe10?si=y_BjR3Ol0v70sdQh", tags: ["beginner", "accessories", "<50g"] },
    { title: "a Rapunzel-inspired hair tie", author: "Crochet by Jhinuk", link: "https://youtu.be/YZ83zIVMrXA?si=FV7Qm-iNNZ8ospiV", tags: ["beginner", "accessories", "<50g"] },
    { title: "bow hair clip", author: "atar crochet", link: "https://youtu.be/ne76GyNkGgc?si=RtAr8mncNOwNldWe", tags: ["beginner", "accessories", "<50g"] },
    { title: "calachuchi flower hair clip", author: "Gail Cabreira", link: "https://youtu.be/52GQkRIoldI?si=DJbqoBRBzwhOgimA", tags: ["beginner", "accessories", "<50g"] },
    { title: "bookmark charms, eyeglasses pouch, neck ties", author: "ikoxun", link: "https://youtu.be/hl0ULp2nj_U?si=nZ7wzspil3pVoKEb", tags: ["beginner", "accessories", "<50g"] },
    { title: "crochet moon & star", author: "lilthings", link: "https://youtu.be/Y4GNCPae61E?si=2UY-_VzGS0yIOFhY", tags: ["beginner", "accessories", "<50g"] },
    { title: "basic hairband", author: "VivCrochets", link: "https://youtu.be/uQI6rhZTaXE?si=n-jp-e-HsMQlvJ9W", tags: ["beginner", "accessories", "<50g"] },
    { title: "crochet scrunchie", author: "Daniela ♡", link: "https://youtu.be/n4O-sckVyRo?si=FyOVyO5NJ6x5goEy", tags: ["beginner", "accessories", "<50g"] },
    { title: "flower hair clips", author: "Samia Alexan crochet", link: "https://youtu.be/j9Ow0EkrqIc?si=LQ5_kd3S8I95vqzc", tags: ["beginner", "accessories", "<50g"] },
    { title: "wednesday crochet vest", author: "ABoC Studio", link: "https://youtu.be/rKWnAVdCjRQ", tags: ["intermediate", "clothing", "100-300g"] },
    { title: "cardigan sweater", author: "ABoC Studio", link: "https://youtu.be/P85PKUs3uUU", tags: ["beginner", "clothing", "300-500g"] },
    { title: "trumpet sweater", author: "ABoC Studio", link: "https://youtu.be/LoFVyuQ4lQU?si=XZ29OYe9-Kf7wwar", tags: ["beginner", "clothing", "300-500g"] },
    { title: "granny square hat", author: "ABoC Studio", link: "https://youtu.be/PZ8oWNez-jg?si=4bB1205BlSW5A0kc", tags: ["beginner", "accessories", "granny squares", "50-100g", "100-300g"] },
    { title: "shrug", author: "ABoC Studio", link: "https://youtu.be/lbu4xgGCVXo?si=cOOCPC_rq7Ioh41p", tags: ["intermediate", "clothing", "100-300g"] },
    { title: "top-down crop top", author: "ABoC Studio", link: "https://youtu.be/AO8dluzOw_w?si=6QCptdnDh1iU8HKN", tags: ["beginner", "clothing", "100-300g"] },
    { title: "solomon mesh skirt", author: "ABoC Studio", link: "https://youtu.be/gRNrsOOriT8", tags: ["beginner", "clothing", "300-500g"] },
    { title: "shorts", author: "ABoC Studio", link: "https://youtu.be/nfSIKvQA6ts", tags: ["beginner", "clothing", "100-300g"] },
    { title: "corset top", author: "ABoC Studio", link: "https://youtu.be/Il5fqIx2NnE", tags: ["intermediate", "clothing", "100-300g"] },
    { title: "skirt", author: "ABoC Studio", link: "https://youtu.be/9akSANd-3UQ?si=nTOzp00Trwm4r9Uh", tags: ["beginner", "clothing", "300-500g"] },
    { title: "heart top", author: "ABoC Studio", link: "https://youtu.be/60VhMm0TneI?si=NllGmxXdhSlirzd7", tags: ["beginner", "clothing", "100-300g"] },
    { title: "half-moon top", author: "ABoC Studio", link: "https://youtu.be/nnVoSlwC5ZU?si=CWrR-4V31wBHymbc", tags: ["intermediate", "clothing", "100-300g"] },
    { title: "taylor swift dress", author: "ABoC Studio", link: "https://youtu.be/LoHu73wZw20?si=Fpo94Nl5BuVBLEdf", tags: ["beginner", "clothing", "300-500g"] },
    { title: "brat beanie", author: "ABoC Studio", link: "https://youtu.be/TKWwIRn1yQ0?si=zywGbSq7nAbgn3B0", tags: ["beginner", "accessories", "50-100g"] },
    { title: "turtleneck sweater", author: "ABoC Studio", link: "https://youtu.be/GF1_1W4EKHg?si=E_ifM9Ncl6SCqbzg", tags: ["intermediate", "clothing", "300-500g"] },
    { title: "pinterest snowflake", author: "ABoC Studio", link: "https://youtu.be/7muctLt7ikU?si=53ux0VlpdpkBv-FT", tags: ["intermediate", "accessories", "<50g"] },
    { title: "jasmine hat", author: "ABoC Studio", link: "https://youtu.be/8CBSagtvf5o?si=rET6Yg2ro6uiivpH", tags: ["beginner", "accessories", "50-100g"] },
    { title: "treble crochet mesh top", author: "ABoC Studio", link: "https://youtu.be/CVQLtgMRwSI?si=DZeI76DoLcWx4WCB", tags: ["intermediate", "clothing", "100-300g"] },
    { title: "rose bouquet blanket", author: "ABoC Studio", link: "https://youtu.be/-NWmipxZLwM?si=134GWsQdaS2zPvb5", tags: ["beginner", "room decor", "500+g"] },
    { title: "tulip cardigan", author: "The Yarnling", link: "https://youtu.be/SCJnD_4pqCI?si=Z1z5zb09J4b2xaQm", tags: ["beginner", "clothing", "300-500g"] },
    { title: "amigurumi heart", author: "VivCrochets", link: "https://youtu.be/DeLv-kO4HJk?si=8k092iks3ke6UEv5", tags: ["beginner", "amigurumi", "<50g", "<1hr"] },
    { title: "cute octopus", author: "Artisan Gift Collection", link: "https://youtu.be/gyAym-kZFhk?si=PyrWdRGdbAsGaFRm", tags: ["beginner", "amigurumi", "<50g", "<1hr"] },
    { title: "sea turtle", author: "CJ Design", link: "https://youtu.be/Q2aIpN8gqfM?si=l8OCQD1Z8ZNVhGhj", tags: ["beginner", "amigurumi", "<50g"] },
    { title: "teddy bear", author: "Avocado Handmade", link: "https://youtu.be/tPd8sFNlgwU?si=pslfnR1Lq9agN7tP", tags: ["beginner", "amigurumi", "<50g"] },
    { title: "cute bunny holding a heart", author: "mahum", link: "https://youtu.be/TlBMcexUwjE?si=s8wOW2cIyMi06mVU", tags: ["beginner", "amigurumi", "<50g"] },
    { title: "mini loaf chicken", author: "Maddy Marie", link: "https://youtu.be/1zE0Edn9LVo?si=KK5X-0kDJRCtWMjj", tags: ["beginner", "amigurumi", "<50g", "<1hr"] },
    { title: "cat and heart keychain", author: "chubbiesbyash", link: "https://youtu.be/1fWMt5uCzWc?si=6W0f7FZxy7ajJ4MB", tags: ["beginner", "amigurumi", "<50g", "<1hr"] },
    { title: "stingray", author: "Theresa's Crochet Shop", link: "https://youtu.be/0FyWso2WaMI?si=FWc1v65xAtdAFUu6", tags: ["beginner", "amigurumi", "<50g"] },
    { title: "doll base body", author: "GretaWings DIY", link: "https://youtu.be/I1-HpjU3zGk?si=i1_FLnryiqJA4mRI", tags: ["beginner", "intermediate", "amigurumi", "<50g"] },
    { title: "nick and judy keychains", author: "Chubby Cheeks", link: "https://youtu.be/aJwsXOor3CI?si=ulSo6LouSa9kIDC9", tags: ["beginner", "amigurumi", "<50g"] },
    { title: "christmas tree", author: "Avalon Crochets", link: "https://youtu.be/kaFH8171G8Y?si=XLiWW_3_0zfb6Pta", tags: ["beginner", "amigurumi", "room decor", "<50g"] },
    { title: "strawberry pillow", author: "Avalon Crochets", link: "https://youtu.be/Qo8QFcWWYTs?si=MOBxhBZG6yP8uDB4", tags: ["beginner", "amigurumi", "room decor", "100-300g"] },
    { title: "crochet dragon", author: "CrochetByGenna", link: "https://youtu.be/iTyFFSo5kpY?si=p3_KWOoDcRCLbbmA", tags: ["intermediate", "amigurumi", "50-100g", "100-300g"] },
    { title: "nature-themed room decor", author: "mahum", link: "https://youtu.be/CxmYN58qCmM?si=MTA9FGGsNmNkxPnc", tags: ["beginner", "room decor", "100-300g"] },
    { title: "wall decor: bow necklace organiser, heart hanging decor", author: "mahum", link: "https://youtu.be/eWri7PruTlQ?si=WKjrfpuFBogJ5nZi", tags: ["beginner", "room decor", "<50g", "50-100g", "<1hr"] },
    { title: "cushions, bow garland, & bedside decor", author: "mahum", link: "https://youtu.be/hPfk7jxBf1g?si=t7feE9Z1hVQTKn7O", tags: ["beginner", "room decor", "100-300g"] },
    { title: "crochet lily with leaves", author: "mahum", link: "https://youtu.be/Wd0IweaXoRQ?si=FcegsIMGgiBe-VX2", tags: ["beginner", "room decor", "<50g", "flowers", "<1hr"] },
    { title: "cute flower pot, cottage jar, & bear pencil holder decor", author: "mahum", link: "https://youtu.be/NyCv0fpHrgw?si=SjQDv6Wi6fmqDOGv", tags: ["beginner", "room decor", "50-100g", "flowers"] },
    { title: "heart-shaped cushion/pillow", author: "mahum", link: "https://youtu.be/Ki1pc6_M-8M?si=INnq7tt8IYVYQ1KQ", tags: ["beginner", "room decor", "300-500g"] },
    { title: "cake tissue box tutorial|strawberry shortcake decor", author: "mahum", link: "https://youtu.be/j5faxyfCwVU?si=JvBrQp6YmSXircCH", tags: ["beginner", "room decor", "100-300g", "50-100g"] },
    { title: "cute cake box & lily pad coasters", author: "mahum", link: "https://youtu.be/4rmSBz085nk?si=5-cajHLX2Mt1P9U5", tags: ["beginner", "room decor", "50-100g", "<50g", "<1hr"] },
    { title: "flower table mat/rug", author: "mahum", link: "https://youtu.be/XmCb4pGKWoY?si=Sd_9TBvG4X-4lD9U", tags: ["beginner", "room decor", "100-300g"] },
    { title: "mesh bag", author: "mahum", link: "https://youtu.be/Um82jehMQKY?si=M7wSORDSluKKZaqp", tags: ["beginner", "bags", "50-100g"] },
    { title: "simple tote bag", author: "VivCrochets", link: "https://youtu.be/ECWzJSS4OD4?si=ZlPYfYGxnkW5Jcsj", tags: ["beginner", "bags", "100-300g"] },
    { title: "granny stitch crochet bag", author: "Vivi Crochet", link: "https://youtu.be/WPcKoodf-fY?si=Jgx7XrVS02aHRxl-", tags: ["beginner", "bags", "granny squares", "100-300g"] },
    { title: "mini shoulder bag", author: "VivCrochets", link: "https://youtu.be/yDHh19JSKzo?si=mlBP-edDVDLIXKTj", tags: ["beginner", "bags", "100-300g"] },
    { title: "chunky cloud bag", author: "Artisan Gift Collection", link: "https://youtu.be/9AzEYtz0mUI?si=-6J9-z3-IY871Soa", tags: ["beginner", "bags", "50-100g"] },
    { title: "bag with adjustable strap", author: "Emilia", link: "https://youtu.be/xPmaXWaToRE?si=wk-xIwRWDiungz5l", tags: ["beginner", "bags", "100-300g", "50-100g"] },
    { title: "waffle bag", author: "Daniela", link: "https://youtu.be/Xjd1DpMxEMw?si=p7BMKzt5gKLiwb6e", tags: ["beginner", "bags", "50-100g"] },
    { title: "charles and keith inspired crochet bag", author: "thatcrochetguy", link: "https://youtu.be/sfPXeoLUqVU?si=ZZuESESM9MzCipbE", tags: ["beginner", "bags", "100-300g"] },
    { title: "braid bag", author: "Daniela", link: "https://youtu.be/piJN-CcYf0c?si=SobJfplPaueyflg9", tags: ["beginner", "bags", "100-300g"] },
]

function createProject(projectObject) {
    const parentDiv = document.createElement("div");
    const heading = document.createElement("h3");
    let anchorLink = document.createElement("a");
    const image = document.createElement("img");
    const para2 = document.createElement("p");
    const tagContainer = document.createElement("div");
    const subHeading = document.createElement("h4");

    let endIndex = projectObject.link.indexOf("?");
    if (endIndex === -1) {
        endIndex = projectObject.length;
    }
    let videoCode = projectObject.link.slice(17, endIndex);
    let imageLink = `https://img.youtube.com/vi/${videoCode}/0.jpg`;

    if (Object.hasOwn(projectObject, "image")) {
        imageLink = projectObject.image;
    }

    parentDiv.classList.add("project");
    anchorLink.setAttribute("href", projectObject.link);
    anchorLink.setAttribute("target", "_blank");
    image.setAttribute("src", imageLink);
    image.classList.add("project-image");
    image.setAttribute("alt", projectObject.title);
    para2.textContent = "tags:";


    anchorLink.textContent = projectObject.title;
    heading.appendChild(anchorLink);

    anchorLink = document.createElement("a");
    anchorLink.setAttribute("href", projectObject.link);
    anchorLink.setAttribute("target", "_blank");
    anchorLink.appendChild(image);

    parentDiv.appendChild(heading);

    subHeading.textContent = "by " + projectObject.author;
    parentDiv.appendChild(subHeading);

    parentDiv.appendChild(anchorLink);
    parentDiv.appendChild(para2);

    for (let i = 0; i < projectObject.tags.length; i++) {
        const para = document.createElement("p");
        para.classList.add("tag");
        para.textContent = projectObject.tags[i];
        tagContainer.appendChild(para);
    };

    tagContainer.classList.add("tag-container");
    parentDiv.appendChild(tagContainer);

    return parentDiv
}

function renderProject(parentDiv) {
    const container = document.getElementById("project-container");
    container.appendChild(parentDiv);
    console.log("hello??")
}

function filterByTag(tags) {
    filteredProjects = []
    for (let i = 0; i < projects.length; i++) {
        let contains = false;
        for (let j = 0; j < tags.length; j++) {
            if (projects[i].tags.includes(tags[j]) == true) {
                contains = true;
            }
        }
        if (contains == true) {
            filteredProjects.push(projects[i]);
        }
    }
    return filteredProjects;
}

//initial render

let endProj = 20
let filteredProjects = projects.slice();
numProj = document.getElementById("num-proj");
numProj.textContent = projects.length;

for (let i = 0; i < endProj; i++) {
    let curProj = createProject(projects[i]);
    renderProject(curProj)
}

document.getElementById("filter-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const tags = document.getElementsByClassName("tag-check");
    const tagList = [];
    let selected = 0;

    for (let i = 0; i < tags.length; i++) {
        if (tags[i].checked) {
            tagList.push(tags[i].name);
            selected++;
        }
    }

    if (selected !== 0) {
        filteredProjects = filterByTag(tagList);
        if (filteredProjects.length < endProj) {
            endProj = filteredProjects.length;
        } else {
            endProj = 20;
        }
    } else {
        filteredProjects = projects.slice();
        endProj = 20;
    }

    //clear current projects first
    const container = document.getElementById("project-container");
    container.innerHTML = "";

    //display first 20 projects, or until end, whichever comes first
    for (let i = 0; i < endProj; i++) {
        let curProjElement = createProject(filteredProjects[i]);
        renderProject(curProjElement);
    }

    numProj = document.getElementById("num-proj");
    numProj.textContent = filteredProjects.length;

});

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        //increment endProj
        let curProj = endProj
        endProj += 20;
        if (endProj > filteredProjects.length) { endProj = filteredProjects.length }


        //display first 20 projects, or until end, whichever comes first
        for (let i = curProj; i < endProj; i++) {
            let curProjElement = createProject(filteredProjects[i]);
            renderProject(curProjElement);
        }

    }
});
