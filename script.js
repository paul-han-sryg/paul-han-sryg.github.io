document.addEventListener('DOMContentLoaded', () => {

    let activeCorp = 'None Selected';

    const messageBlocks = {
        'McDonalds': [
            'Awesome! Ok, here’s the deal: we have several locations, positions and pay rates.\n\nHere you can apply for a position for the store located at LOCATION_NAME: HIRING_LINK\n\nI’ll check back in a day - once you complete the application I’ll send across a BUNCH of helpful info to help you get the job.',
            'No problem! If you’re ever interested, I wanted to make sure you had the inside scoop… here’s the application link:\nHIRING_LINK\n\nI may reach back out in a couple of months to check back in. But if you NEVER want to hear about this company or job again, reply “NEVER” and I’ll remove you from their list :)',
            'Hey! Did you get a chance to complete the application yet? If you did, I’ll send across a bunch of information to help you get the job. No worries if not, I can follow up in a few days.\n\nReply YES if you have completed the application, NO if you have not',
            'Awesome! Alright, I’m excited to help you get in touch with the manager. You can choose to wait for them to reach out, but why not seize the day??? (Plus, good first step if you want to get promoted quickly!)\n\nHere’s the store phone number: STORE_PHONE\n\nWhen you call, it’s best to introduce yourself and see if you can come in for an interview in the next few days… let them make time for you, you’re worth it :)\n\nI’ll follow up in 2 days to see if you were able to get in touch. I can bug the manager if you don’t hear back too, no worries :)',
            'Hey! So you applied 2 days ago, and I just wanted to make sure you heard from the manager. If not, I can bug the manager and their manager :)',
            'Hey no worries! If you’re not interested OR are having trouble with the application, fill out this quick survey & we can help.\n\nIf you just have not had time, I’ll get back in touch in 2 days, don’t want to rush you. :)\n\nsyrg.io/help?i=[COPY THE APPLICANT ID FROM THE URL AND PUT IT HERE]'
        ],
        'Bubble': [
            'Awesome! Ok, here’s the deal: we have several locations, positions and pay rates.\n\nHere you can apply for a position for the store located at LOCATION_NAME: HIRING_LINK\n\nHere you can see ALL the locations that are hiring, and apply: ALL_LOCATIONS_LINK\n\nI’ll check back in a day - once you complete the application I’ll send across a BUNCH of helpful info to help you get the job.',
            'No problem! If you are ever interested, I wanted to make sure you had the inside scoop… here is the application link:\nHIRING_LINK\n\nIf you want to see their other locations, check here: ALL_LOCATIONS_LINK\n\nI may reach back out in a couple of months to check back in. But if you NEVER want to hear about this company or job again, reply “NEVER” and I will remove you from their list :)',
            'Hey! Did you get a chance to complete the application yet? If you did, I’ll send across a bunch of information to help you get the job. No worries if not, I can follow up in a few days.\n\nReply YES if you have completed the application, NO if you have not',
            'Awesome! Alright, I’m excited to help you get in touch with the manager. You can choose to wait for them to reach out, but why not seize the day??? (Plus, good first step if you want to get promoted quickly!)\n\nHere’s the store phone number: STORE_PHONE\n\nWhen you call, it’s best to introduce yourself and see if you can come in for an interview in the next few days… let them make time for you, you’re worth it :)\n\nI’ll follow up in 2 days to see if you were able to get in touch. I can bug the manager if you don’t hear back too, no worries :)',
            'Hey! So you applied 2 days ago, and I just wanted to make sure you heard from the manager. If not, I can bug the manager and their manager :)',
            'Hey no worries! If you’re not interested OR are having trouble with the application, fill out this quick survey & we can help.\n\nIf you just have not had time, I’ll get back in touch in 2 days, don’t want to rush you. :)\n\nsyrg.io/help?i=[COPY THE APPLICANT ID FROM THE URL AND PUT IT HERE]'
        ]
    }

    const corps = {
        'Boston Pie':{
            'Boston Staniford':['(617) 248-0100','syrg.io/interview?s=64-staniford-st'],
            'Brighton':['(617) 782-5655','syrg.io/interview?s=464-washington-st'],
            'Allston':['(617) 254-4800','syrg.io/interview?s=450-cambridge-st'],
            'Boston Fenway':['(617) 424-9000','syrg.io/interview?s=508-park-drive'],
            'Malden':['(781) 322-0030','syrg.io/interview?s=775-eastern-ave'],
            'Roxbury Crossing':['(617) 541-3525','syrg.io/interview?s=1400-tremont-st-D'],
            'Hudson':['(603) 319-1999','syrg.io/interview?s=16-chase-st-unit-1'],
            'North Nashua':['(603) 886-0202','syrg.io/interview?s=270-amherst-st-ste-d'],
            'South Nashua':['(603) 889-8885','syrg.io/interview?s=99-northeastern-blvd'],
            'Milford':['(603) 673-2700','syrg.io/interview?s=556-nashua-st'],
            'Franklin':['(603) 821-4999','syrg.io/interview?s=900-central-st'],
            'South Portland':['(207) 799-8131','syrg.io/interview?s=1095-broadway'],
            'Dover':['(603) 742-8411','syrg.io/interview?s=250-central-ave'],
            'Haverhill':['(978) 372-5660','syrg.io/interview?s=130-main-st'],
            'Portland':['(207) 774-1489','syrg.io/interview?s=788-forest-ave'],
            'Kittery':['(207) 439-1300','syrg.io/interview?s=450-us-1'],
            'Swampscott':['(781) 715-2220','syrg.io/interview?s=430-paradise-rd'],
            'Beverly':['(978) 927-2999','syrg.io/interview?s=43-beckford-st'],
            'Salem':['(978) 744-4040','syrg.io/interview?s=4-canal-st'],
            'Georgetown':['(978) 352-0752','syrg.io/interview?s=66-e-main-st'],
            'Canton':['(781) 562-0655','syrg.io/interview?s=100-washington-st'],
            'East Bridgewater':['(508) 350-9775','syrg.io/interview?s=225-bedford-st'],
            'Bedford':['(781) 280-2929','syrg.io/interview?s=186-great-rd-ste-4'],
            'Durham':['(603) 868-6230','syrg.io/interview?s=7-mill-rd'],
            'Rochester':['(603) 335-5663','syrg.io/interview?s=309-n-main-st'],
            'Portsmouth':['(603) 431-7881','syrg.io/interview?s=599-lafayette-rd'],
            'Hampton':['(603) 929-0030','syrg.io/interview?s=725-lafayette-rd'],
            'All':'syrg.io/all-stores?c=bostonpie'
        },
        'Buckliew':{
            'Batesville -Relo':['(870) 793-1130','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=1220%20N%20St%20Louis,%20Batesville,%20AR%2072501,%20USA&stretch=5&stretchUnit=KILOMETERS'],
            'Clinton':['(501) 745-6600','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=395%20HIGHWAY%2065%20N%20CLINTON,%20Arkansas%20US&stretch=5&stretchUnit=KILOMETERS&locations=CLINTON,Arkansas,United%20States'],
            'Heber Springs':['(501) 362-3275','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=1611%20Hwy%2025B,%20Heber%20Springs,%20AR%2072543,%20USA&stretch=0&stretchUnit=KILOMETERS&locations=HEBER%20SPRINGS,Arkansas,United%20States'],
            'Jonesboro, AR (Red Wolf)':['(870) 275-7720','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=2124%20Red%20Wolf%20Blvd,%20Jonesboro,%20AR%2072401,%20USA&stretch=0&stretchUnit=KILOMETERS'],
            'Jonesboro, Church (Highland)':['(870) 275-7428','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=109%20Southwest%20Dr,%20Jonesboro,%20AR%2072401,%20USA&stretch=0&stretchUnit=KILOMETERS'],
            'Jonesboro III (Johnson)':['(870) 972-0922','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=1910%20E%20Johnson%20Ave,%20Jonesboro,%20AR%2072401,%20USA&stretch=0&stretchUnit=KILOMETERS'],
            'Jonesboro, Nettleton':['(870) 935-0910','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=2207%20E%20Nettleton%20Ave,%20Jonesboro,%20AR%2072401,%20USA&stretch=0&stretchUnit=KILOMETERS'],
            'Marshall':['(870) 448-2191','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=804%20US-65,%20Harrison,%20AR%2072601,%20USA&stretch=0&stretchUnit=KILOMETERS'],
            'Mt View':['(870) 269-6602','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=611%20E%20Main%20St,%20Mountain%20View,%20AR%2072560,%20USA&stretch=0&stretchUnit=KILOMETERS'],
            'Newport':['(870) 201-1550','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=2500%20Malcolm%20Ave,%20Newport,%20AR%2072112,%20USA&stretch=0&stretchUnit=KILOMETERS'],
            'Paragould, AR':['(501) 214-1402','mchire.com/co/McDonalds1340/Job?slug=crew-team-member-4600-w-kings-hwy-paragould-ar-72450-23520-14286&referer=https%3A%2F%2Fcareers.mcdonalds.com%2F'],
            'Paragould (Center Hill)':['(870) 236-3716','mchire.com/co/McDonalds1340/Job?slug=crew-team-member-1407-w-kings-hwy-paragould-ar-72450-23520-14247&referer=https%3A%2F%2Fcareers.mcdonalds.com%2F'],
            'Pocahontas':['(870) 892-4021','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=1504%20US-67,%20Pocahontas,%20AR%2072455,%20USA&stretch=10&stretchUnit=KILOMETERS'],
            'Walnut Ridge':['(870) 886-2063','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=511%20NW%204th%20St,%20Walnut%20Ridge,%20AR%2072476,%20USA&stretch=5&stretchUnit=KILOMETERS']
        },
        'BVK2':{
            'Larch Street, Lansing':['(517) 371-4266','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=Use%20my%20cu2120%20N%20Larch%20St%20Lansing%20MI%2048906rrent%20location'],
            'West Saginaw':['(517) 323-3528','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=4015%20W%20Saginaw%20Lansing,%20%20MI%2048917'],
            'St Johns':['(989) 224-3325','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=920%20S%20%20US%2027%20St%20Johns,%20MI48879'],
            'Lansing Airport':['(517) 327-5177','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=5225%20N%20GrandRiver%20Lansing,%20MI%2048906'],
            'Bath, Marsh Road in Haslett':['(517) 339-5150','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=16827%20Marsh%20Rd%20Haslett,%20MI%2048840'],
            'M-100 Highway, Grand Ledge':['(517) 622-1630','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=10945%20W%20Grand%20River,%20Grand%20Ledge,%20MI%2048837'],
            'Creyts':['(517) 703-9320','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=6300%20W%20St%20Joseph%20Hwy,%20Lansing,%20MI%2048917']
        },
        'Cafua':{
            '818 Main St, South Portland':['(207) 558-6474','syrg.io/interview?s=818-main-st'],
            'South Portland Donuts':['(207) 558-6474','syrg.io/interview?s=818-main-st'],
            '818 Main St, South Portland, ME 04106, USA':['(207) 558-6474','syrg.io/interview?s=818-main-st'],
            'South Portland Donuts LLC':['(207) 558-6474','syrg.io/interview?s=818-main-st'],
            'South Portland Donuts LLC [355845]':['(207) 558-6474','syrg.io/interview?s=818-main-st'],
            'All':'https://syrg.io/all-stores?c=Cafua'
        },
        'Chapatwala':{
            'Melvindale':['(313) 381-4300','careers.mcdonalds.com/us-restaurants/jobs?location=4001%20Oakwood%20Blvd,%20Melvindale,%20MI%2048122,%20USA&stretch=0&stretchUnit=MILES&page=1',],
            'Middlebelt':['(734) 946-8088','careers.mcdonalds.com/us-restaurants/jobs?location=9273%20Middlebelt%20Rd,%20Romulus,%20MI%2048174,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            '13158 Ford Rd, Dearborn, MI 48126, USA':['(313) 581-5680','careers.mcdonalds.com/us-restaurants/jobs?location=13158%20Ford%20Rd,%20Dearborn,%20MI%2048126,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Ford Rd':['(313) 581-5681','careers.mcdonalds.com/us-restaurants/jobs?location=13158%20Ford%20Rd,%20Dearborn,%20MI%2048126,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Taylor Telegraph':['(313) 292-5202','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=TAYLOR-TELEGRAPH&sortBy=relevance'],
            'Ecorse Rd':['(313) 928-3900','careers.mcdonalds.com/us-restaurants/jobs?location=21300%20Ecorse%20Rd,%20Taylor,%20MI%2048180,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Gibraltar':['(734) 675-6718','careers.mcdonalds.com/us-restaurants/jobs?location=20815%20Gibraltar%20Rd,%20Brownstown%20Charter%20Twp,%20MI%2048183,%20USA&stretch=0&stretchUnit=MILES&page=1']
        },
        'CPH':{
            'Church St':['(704) 786-5612','syrg.io/interview-scheduling?s=6697-church-st&c=b'],
            'Southend':['(704) 784-5520','syrg.io/interview-scheduling?s=3420-us-hwy-601&c=b'],
            'China Grove':['(704) 857-6310','syrg.io/interview-scheduling?s=480-hwy-29-n&c=b'],
            'Gateway':['(704) 788-6031','syrg.io/interview-scheduling?s=6031-gateway-ctr-dr&c=b'],
            'Cabarrus Avenue':['(704) 788-7888','syrg.io/interview-scheduling?s=740-cabarrus-ave&c=b'],
            'Wadesboro':['(704) 694-9472','syrg.io/interview-scheduling?s=1118-east-caswell'],
            'Oak Avenue':['(704) 932-3125','syrg.io/interview?s=250-oak-ave'],
            'Jackson Park':['(704) 932-4191','syrg.io/interview?s=901-north-cannon-blvd'],
            'All':'syrg.io/all-stores?c=carolina-pizza-huts'
        },
        'Dino':{
            '2nd Street':['(707) 745-6340','careers.mcdonalds.com/us-restaurants/jobs?page=1&location=1602%20E%202nd%20St,%20Benicia,%20CA%2094510,%20USA&stretch=0&stretchUnit=MILES'],
            'Columbus Parkway':['(707) 746-6899','careers.mcdonalds.com/us-restaurants/jobs?page=1&location=2110%20Columbus%20Pkwy,%20Benicia,%20CA%2094510,%20USA&stretch=0&stretchUnit=MILES'],
            '1198 San Pablo Ave, Berkeley':['(510) 525-1411','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=1198%20SAN%20PABLO%20AVE,%20BERKELEY%20CA%2094706&stretch=0&stretchUnit=MILES'],
            '11821 San Pablo Ave, El Cerrito':['(510) 232-2121','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=11821%20San%20Pablo%20Ave,%20El%20Cerrito&stretch=0&stretchUnit=MILES'],
            'Berkeley':['(510) 525-1411','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=1198%20SAN%20PABLO%20AVE,%20BERKELEY%20CA%2094706&stretch=0&stretchUnit=MILES'],
            'El Cerrito':['(510) 232-2121','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=11821%20San%20Pablo%20Ave,%20El%20Cerrito&stretch=0&stretchUnit=MILES']
        },
        'Frost':{
            'Main Street':['(727) 734-3166','careers.mcdonalds.com/us-restaurants/jobs?location=1645%20Main%20St,%20Dunedin,%20FL%2034698,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Wiregrass':['(813) 907-9400','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=1733%20BRUCE%20B%20DOWNS%20BLVD,%20Wesley%20Chapel%20FL%2033544&keywords=wiregrass&sortBy=relevance']
        },
        'Heritage':{
            '12925 Shelbyville Rd, Louisville':['(502) 245-5181','wendys-careers.com/job-search/?utm_campaign=Wendy%27s%202021%20-%20Hard%20To%20Fill%20Markets-Branded%20Terms%20and%20Competitors&category=&city=Louisville&state=&zip=40243&keyword=12925%20Shelbyville%20Rd&restaurant_id=&spage=1'],
            '1630 Kentucky Mills Dr, Louisville':['(502) 297-9932','wendys-careers.com/job-search/?utm_campaign=Wendy%27s%202021%20-%20Hard%20To%20Fill%20Markets-Branded%20Terms%20and%20Competitors&category=&city=Louisville&state=&zip=40243&keyword=1630%20Kentucky%20Mills%20Dr&restaurant_id=&spage=1'],
            '7601 Shelbyville Rd, Louisville':['(502) 412-4044','wendys-careers.com/job-search/?utm_campaign=Wendy%27s%202021%20-%20Hard%20To%20Fill%20Markets-Branded%20Terms%20and%20Competitors&category=&city=Louisville&state=&zip=40229&keyword=7601%20Shelbyville%20Road&restaurant_id=&spage=1'],
            '10741 Fischer Park Dr, Louisville':['(502) 412-7403','wendys-careers.com/job-search/?utm_campaign=Wendy%27s%202021%20-%20Hard%20To%20Fill%20Markets-Branded%20Terms%20and%20Competitors&category=&city=Louisville&state=&zip=40241&keyword=10741%20Fischer%20Park%20Dr&restaurant_id=&spage=1'],
            '5036 Mud Ln, Louisville':['(502) 964-3007','wendys-careers.com/job-search/?utm_campaign=Wendy%27s%202021%20-%20Hard%20To%20Fill%20Markets-Branded%20Terms%20and%20Competitors&category=&city=Louisville&state=&zip=40229&keyword=5036%20Mud%20Lane&restaurant_id=&spage=1'],
            '4029 Poplar level Rd, Louisville':['(502) 459-9656','wendys-careers.com/job-search/?utm_campaign=Wendy%27s%202021%20-%20Hard%20To%20Fill%20Markets-Branded%20Terms%20and%20Competitors&category=&city=Louisville&state=&zip=40213&keyword=4029%20Poplar%20Level%20Rd&restaurant_id=&spage=1'],
            '409 W Abrams, , Arlington':['(817) 460-8492','wendys-careers.com/job-search/?utm_campaign=Wendy%27s%202021%20-%20Hard%20To%20Fill%20Markets-Branded%20Terms%20and%20Competitors&category=&city=Arlington&state=&zip=76010&keyword=409%20West%20Abram&restaurant_id=&spage=1'],
            '1930 NW Cache Road, Lawton':['(580) 357-9753','wendys-careers.com/job-search/?utm_campaign=Wendy%27s%202021%20-%20Hard%20To%20Fill%20Markets-Branded%20Terms%20and%20Competitors&category=&city=Lawton&state=&zip=73507&keyword=1930%20NW%20Cache%20Rd&restaurant_id=&spage=1'],
            '4374 Southwest Drive, Abilene':['(325) 692-2315','wendys-careers.com/job-search/?utm_campaign=Wendy%27s%202021%20-%20Hard%20To%20Fill%20Markets-Branded%20Terms%20and%20Competitors&category=&city=Abilene&state=&zip=79606&keyword=4374%20Southwest%20Dr&restaurant_id=&spage=1'],
            '427 W Front St, Tyler':['(903) 593-1462','wendys-careers.com/job-search/?utm_campaign=Wendy%27s%202021%20-%20Hard%20To%20Fill%20Markets-Branded%20Terms%20and%20Competitors&category=&city=Tyler&state=&zip=75702&keyword=427%20W%20Front%20St&restaurant_id=&spage=1']
        },
        'Jenell':{
            'Adrian':['(517) 263-5121','careers.mcdonalds.com/us-restaurants/jobs?location=1235%20N%20Main%20St,%20Adrian,%20MI%2049221,%20USA&stretch=5&stretchUnit=MILES&page=1'],
            'Hudson-':['(517) 448-8440','careers.mcdonalds.com/us-restaurants/jobs?location=503%20S%20Meridian%20Rd,%20Hudson,%20MI%2049247,%20USA&stretch=0&stretchUnit=MILES&page=1']
        },
        'JMC':{
            '14 Orchard':['(248) 855-9113','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=31325%20Orchard%20Lake%20Rd,%20Farmington%20Hills,%20MI%2048334,%20USA'],
            '31325 Orchard Lake, Farmington Hills':['(248) 855-9113','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=31325%20Orchard%20Lake%20Rd,%20Farmington%20Hills,%20MI%2048334,%20USA']
        },
        'Lockwood':{
            'New Bedford':['(508) 992-0938','syrg.io/interview?s=85-coggeshall-st'],
            'Bald Hill':['(401) 828-9209','syrg.io/interview?s=877-bald-hill-rd'],
            'Coventry':['(401) 821-9980','syrg.io/interview?s=tiogue-ave'],
            'Franklin-':['(508) 520-1314','syrg.io/interview?s=central-st'],
            'Fall River':['(508) 677-0929','syrg.io/interview?s=195-mariano-bishop-blvd'],
            'S. Attleboro':['(508) 399-6138','syrg.io/interview?s=washington-st'],
            'Seekonk':['(508) 336-8005','syrg.io/interview?s=11-commerce-way'],
            'Norwell':['(781) 982-0711','syrg.io/interview?s=48-washington-st'],
            'Raynham':['(508) 823-5214','syrg.io/interview?s=600-s-st'],
            'S. Attleboro 2126':['(508) 399-6138','syrg.io/interview?s=washington-st'],
            'Walpole':['(508) 668-9501','syrg.io/interview?s=providence-hwy'],
            'Warwick':['(401) 828-9209','syrg.io/interview?s=877-bald-hill-rd'],
            'Pawtucket':['(401) 288-1976','syrg.io/interview?s=675-beverage-hill-ave-ste-100'],
            'All':'https://syrg.io/all-stores?c=Lockwood%20McKinnon%20Taco%20Bell'
        },
        'MAS':{
            'Holland - 8th':['(616) 392-7628','careers.mcdonalds.com/us-restaurants/jobs?location=657%20E%208th%20St,%20Holland,%20MI%2049423,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Boon Rd.':['(231) 775-2311','careers.mcdonalds.com/us-restaurants/jobs?location=8560%20E,%208560%2034%20Rd,%20Cadillac,%20MI%2049601,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Gr - S. Division':['(616) 531-2190','careers.mcdonalds.com/us-restaurants/jobs?location=3873%20Division%20St,%20Grand%20Rapids,%20MI%2049548,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Holland - Riley':['(616) 738-1700','careers.mcdonalds.com/us-restaurants/jobs?location=12645%20Riley%20St,%20Holland,%20MI%2049424,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Gr - Wyoming':['(616) 534-3876','careers.mcdonalds.com/us-restaurants/jobs?location=2727%2028th%20St%20SW,%20Wyoming,%20MI%2049519,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Holland - River':['(616) 392-6290','careers.mcdonalds.com/us-restaurants/jobs?location=213%20N%20River%20Ave,%20Holland,%20MI%2049424,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Coopersville':['(616) 837-9549','careers.mcdonalds.com/us-restaurants/jobs?location=59%2068th%20Ave%20N,%20Coopersville,%20MI%2049404,%20USA&stretch=5&stretchUnit=MILES&page=1'],
            'Hart':['(231) 873-8786','careers.mcdonalds.com/us-restaurants/jobs?location=4256%20W%20Polk%20Rd,%20Hart,%20MI%2049420,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Norton Shores':['(231) 722-1000','careers.mcdonalds.com/us-restaurants/jobs?location=730%20W%20Norton%20Ave,%20Norton%20Shores,%20MI%2049441,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Gr - Madison':['(616) 248-3666','careers.mcdonalds.com/us-restaurants/jobs?location=415%2028th%20St%20SE,%20Grand%20Rapids,%20MI%2049548,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Gr - Chicago Dr.':['(616) 248-9755','careers.mcdonalds.com/us-restaurants/jobs?location=1115%20Chicago%20Dr%20SW,%20Wyoming,%20MI%2049509,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'South Division':['(616) 531-2190','careers.mcdonalds.com/us-restaurants/jobs?location=3873%20Division%20St,%20Grand%20Rapids,%20MI%2049548,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            '8th Street':['(616) 392-7628','careers.mcdonalds.com/us-restaurants/jobs?location=657%20E%208th%20St,%20Holland,%20MI%2049423,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Madison':['(616) 248-3666','careers.mcdonalds.com/us-restaurants/jobs?location=415%2028th%20St%20SE,%20Grand%20Rapids,%20MI%2049548,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'River':['(616) 392-6290','careers.mcdonalds.com/us-restaurants/jobs?location=213%20N%20River%20Ave,%20Holland,%20MI%2049424,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Wyoming':['(616) 534-3876','careers.mcdonalds.com/us-restaurants/jobs?location=2727%2028th%20St%20SW,%20Wyoming,%20MI%2049519,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Riley':['(616) 738-1700','careers.mcdonalds.com/us-restaurants/jobs?location=12645%20Riley%20St,%20Holland,%20MI%2049424,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Godfrey':['(616) 248-9755','careers.mcdonalds.com/us-restaurants/jobs?location=1115%20Chicago%20Dr%20SW,%20Wyoming,%20MI%2049509,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Boon':['(231) 775-2311','careers.mcdonalds.com/us-restaurants/jobs?location=8560%20E,%208560%2034%20Rd,%20Cadillac,%20MI%2049601,%20USA&stretch=0&stretchUnit=MILES&page=1'],
            'Coopersville':['(616) 837-9549','careers.mcdonalds.com/us-restaurants/jobs?location=59%2068th%20Ave%20N,%20Coopersville,%20MI%2049404,%20USA&stretch=5&stretchUnit=MILES&page=1'],
            'Lakeshore':['(231) 755-2585','careers.mcdonalds.com/us-restaurants/jobs?location=1831%20W.%20Sherman%20Blvd.%20Muskegon,%20MI%20%2049441&stretch=0&stretchUnit=MILES&page=1'],
            'Apple Ave':['(231) 767-8523','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&keywords=Apple%20Ave&location=muskegon&stretch=0&stretchUnit=KILOMETERS'],
            'Mill Iron':['(231) 767-8523','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=Apple%20Ave&sortBy=relevance&location=3586%20E.%20Apple%20Ave.%20Muskegon,%20MI%20%2049442&stretch=5&stretchUnit=KILOMETERS'],
            'Evart':['(231) 734-6991','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance'],
            'Fremont':['(231) 924-4790','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=1348%20W.%20Main%20St.%20Fremont,%20MI%20%2049412&stretch=0&stretchUnit=KILOMETERS'],
            'Ludington':['(231) 845-6919','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=5389%20W.%20US-10%20Hwy.%20Ludington,%20MI%20%2049431&stretch=0&stretchUnit=KILOMETERS'],
            'M120':['(231) 744-8663','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=2237%20Holton%20Rd.%20Muskegon,%20MI%2049445&stretch=0&stretchUnit=KILOMETERS'],
            '2237 Holton Rd. Muskegon':['(231) 744-8663','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=2237%20Holton%20Rd.%20Muskegon,%20MI%2049445&stretch=0&stretchUnit=KILOMETERS'],
            'Newaygo':['(231) 652-2123','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=8175%20S.%20Mason%20Dr.%20Newaygo,%20MI%20%2049337&stretch=0&stretchUnit=KILOMETERS'],
            'North Muskegon':['(231) 744-2681','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=190%20Whitehall%20Rd.%20N.%20Muskegon,%20MI%20%2049445&stretch=0&stretchUnit=KILOMETERS'],
            'Reed City':['(231) 832-3699','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=4985%20N.%20Park%20St.%20Reed%20City,%20MI%20%2049677&stretch=0&stretchUnit=KILOMETERS'],
            'East Sherman':['(231) 733-6305','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=1779%20E.%20Sherman%20Blvd.%20Muskegon,%20MI%20%2049444&stretch=0&stretchUnit=KILOMETERS'],
            'Whitehall':['(231) 894-2558','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=3038%20Colby%20St.%20Whitehall,%20MI%20%2049461&stretch=0&stretchUnit=KILOMETERS'],
            'Grayling':['(989) 348-2269','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=2236%20South%20Grayling%20Rd%20Grayling,%20MI%2049738&stretch=10&stretchUnit=KILOMETERS'],
            'Gladwin':['(989) 426-6662','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=1107%20Cedar%20St.%20Gladwin,%20MI%2048624&stretch=0&stretchUnit=KILOMETERS'],
            'Harrison':['(989) 539-1800','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=612%20N.%201st%20St%20Harrison,%20MI%2048625&stretch=0&stretchUnit=KILOMETERS'],
            'M-115':['(231) 779-1775','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=6231%20M-115%20Cadillac,%20MI%2049601&stretch=0&stretchUnit=KILOMETERS'],
            'M-115 Cadillac':['(231) 779-1775','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=6231%20M-115%20Cadillac,%20MI%2049601&stretch=0&stretchUnit=KILOMETERS'],
            'Houghton Lake':['(989) 422-2893','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=9307%20W.%20Lake%20City%20Rd.%20Houghton%20Lake,%20MI%2048629&stretch=0&stretchUnit=KILOMETERS'],
            'Lake City':['(231) 839-8145','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=32%20N.%20Morey%20Rd.%20Lake%20City,%20MI%2049651&stretch=0&stretchUnit=KILOMETERS'],
            'Prudenville':['(989) 366-5005','careers.mcdonalds.com/us-restaurants/jobs?page=1&keywords=evart&sortBy=relevance&location=1991%20W,%20Houghton%20Lake%20Dr.%20Prudenville,%20MI%2048651&stretch=0&stretchUnit=KILOMETERS'],
            '1348 W. Main St, Fremont':['(231) 924-4790','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=1348%20W.%20Main%20St,%20Fremon'],
            '9307 W. Lake City Rd, Houghton Lake':['(989) 422-2893','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=9307%20W.%20Lake%20City%20Rd,%20Houghton%20Lake'],
            '1779 E. Sherman Blvd, Muskegon':['(231) 733-6305','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=1779%20E.%20Sherman%20Blvd,%20Muskegon'],
            '612 N. 1st St, Harrison':['(989) 539-1800','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=Harrison,%20MI%2048625-8401&stretch=0&stretchUnit=MILES'],
            '32 N. Morey Rd. Lake City':['(231) 839-8145','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=32%20N.%20Morey%20Rd.%20Lake%20City&sortBy=relevance'],
            '3586 E. Apple Ave, Muskegon':['(231) 767-8523','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=3586%20E.%20Apple%20Ave,%20Muskegon&sortBy=relevance'],
            '2237 Holton Rd, Muskegon':['(231) 744-8663','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=2237%20Holton%20Rd,%20Muskegon&sortBy=relevance'],
            '4985 N. Park St, Reed City':['(231) 832-3699','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=4985%20N.%20Park%20St,%20Reed%20City&sortBy=relevance'],
            '1991 W, Houghton Lake Dr, Prudenville':['(989) 366-5005','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=1991%20W,%20Houghton%20Lake%20Dr,%20Prudenville&sortBy=relevance'],
            '5389 W. US-10 Hwy. Ludington':['(231) 845-6919','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=5389%20W.%20US-10%20Hwy.%20Ludington&sortBy=relevance'],
            '190 Whitehall Rd, N. Muskegon':['(231) 744-2681','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=190%20Whitehall%20Rd,%20N.%20Muskegon&sortBy=relevance'],
            '2236 South Grayling Rd, Grayling':['(989) 348-2269','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=5&page=1&location=2236%20South%20Grayling%20Rd,%20Grayling&sortBy=relevance'],
            '6231 M-115, Cadillac':['(231) 779-1775','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=6231%20M-115,%20Cadillac&sortBy=relevance'],
            '3038 Colby St. Whitehall':['(231) 894-2558','careers.mcdonalds.com/us-restaurants/jobs?location=3038%20Colby%20St.%20Whitehall&stretch=10&stretchUnit=MILES&page=1'],
            '1491 Apple Ave, Muskegon':['(231) 767-8523','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&keywords=Muskegon,%20MI%2049442'],
            '8175 S. Mason Dr, Newaygo':['(231) 652-2123','careers.mcdonalds.com/us-restaurants/jobs?location=8175%20S.%20Mason%20Dr,%20Newaygo&stretch=0&stretchUnit=MILES&page=1'],
            '1107 Cedar St, Gladwin':['(231) 755-2585','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=MI%2048624-1815&stretch=0&stretchUnit=MILES&keywords=cedar'],
            '1831 W. Sherman Blvd, Muskegon':['(231) 755-2585','careers.mcdonalds.com/us-restaurants/jobs?location=1831%20W.%20Sherman%20Blvd,%20Muskegon&stretch=0&stretchUnit=MILES&page=1'],
            '821 W. 7th St, Evart':['(231) 734-6991','careers.mcdonalds.com/us-restaurants/jobs?location=821%20W.%207th%20St,%20Evart&stretch=0&stretchUnit=MILES&page=1']
        },
        'Monart':{
            '2675 Plymouth Rd, Ann Arbor':['(734) 662-9343','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=2675%20PLYMOUTH%20ROAD,%20ANN%20ARBOR,%20MI%2048105urrent%20location'],
            'ANN ARBOR/PLYMOU':['(734) 662-9343','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=2675%20PLYMOUTH%20ROAD,%20ANN%20ARBOR,%20MI%2048105urrent%20location'],
            '16 Ecorse Rd, Ypsilanti':['(734) 485-8416','https://careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=6%20ECORSE%20RD%20YPSILANTI,%20MI%20US&stretch=0&stretchUnit=MILES'],
            'YPSILANTI-ECORSE':['(734) 485-8416','https://careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=6%20ECORSE%20RD%20YPSILANTI,%20MI%20US&stretch=0&stretchUnit=MILES']
        },
        'NRJM':{
            '1224 W Ogden, Unit K, Naperville':['(630) 687-9001','syrg.io/interview?s=1224-w-ogden-ave-unit-k'],
            '967 Brooke Forest, Shorewood':['(779) 234-4200','syrg.io/interview?s=967-brook-forest-ave'],
            '3340 S Orchard Rd, Oswego':['(630) 423-5600','syrg.io/interview?s=3340-orchard-rd-unit-3340'],
            '1148 Douglas Rd, Oswego':['(630) 554-7777','syrg.io/interview?s=1148-douglas-rd'],
            '2035 S Washington, Naperville':['(630) 416-9900','syrg.io/interview?s=2035-s-washington-st'],
            '100 E John Casey, Bourbonnais':['(815) 939-6400','syrg.io/interview?s=100-e-john-casey-rd'],
            '1735 E Maple St, Kankakee':['(815) 939-4400','syrg.io/interview?s=1735-e-maple-st'],
            '571 Collins, Joliet':['(815) 722-3313','syrg.io/interview?s=571-collins-st'],
            '646 S Frontenac Rd, Aurora':['(630) 585-8888','syrg.io/interview?s=646-s-frontenac-st'],
            '444 North Eola Rd, Aurora':['(630) 425-4400','syrg.io/interview?s=444-n-eola-rd-unit-105'],
            '604 East 9th St, Lockport':['(815) 287-0030','syrg.io/interview?s=604-e-9th-st'],
            '2405 Caton Farm Rd, Crest Hill':['(815) 436-8000','syrg.io/interview?s=2405-caton-farm-rd'],
            '901 Lucinda Ave, Dekalb':['(815) 756-3626','syrg.io/interview?s=901-lucinda-ave-ste-i'],
            '158 N Bolingbrook Dr, Bolingbrook':['(630) 759-7421','syrg.io/interview?s=158-n-bolingbrook-dr'],
            'Naperville Rd, Naperville':['(630) 360-3200','syrg.io/interview?s=4003-plainfield-naperville-rd-ste-119'],
            'All':'syrg.io/all-stores?c=nrjm'
        },
        'Patterson':{
            'Holly Springs':['(919) 567-2330','syrg.io/interview?s=2110-crossway-ln'],
            'Wendell':['(919) 365-9192','syrg.io/interview?s=2819-wendell-blvd'],
            'Hillsborough':['(919) 732-3001','syrg.io/interview?s=112-john-earl-st'],
            'Timberline':['(919) 932-9500','syrg.io/interview?s=110-banks-dr'],
            'Apex':['(919) 387-0030','syrg.io/interview?s=833-perry-rd'],
            'Conover':['(828) 469-7474','syrg.io/interview?s=508-10th-st-nw'],
            'Springs Rd':['(828) 256-9811','syrg.io/interview?s=3204-springs-rd-ne'],
            'LR - Viewmont':['(828) 324-5111','syrg.io/interview?s=1131-2nd-st-ne'],
            'Fordham':['(919) 967-0006','syrg.io/interview?s=1289-fordham-blvd'],
            'Mountain View':['(828) 294-1050','syrg.io/interview?s=2652-s-hwy-127'],
            'Pleasant Valley':['(919) 783-5500','syrg.io/interview?s=4112-pleasant-valley-rd'],
            'Cornelius':['(704) 897-8888','syrg.io/interview?s=20601-torrence-chapel-rd'],
            'White Street':['(803) 324-3111','syrg.io/interview?s=1146-e-white-st'],
            'Herlong':['(803) 329-9900','syrg.io/interview?s=1742-herlong-village-dr'],
            'Lincolnton':['(704) 732-4179','syrg.io/interview?s=101-stanford-rd'],
            'Stevens Mill':['(704) 882-5100','syrg.io/interview?s=7900-stevens-mill-rd'],
            'Piper Glen':['(704) 543-7160','syrg.io/interview?s=6420-rea-rd'],
            'Quail Corners':['(704) 554-5629','syrg.io/interview?s=8510-park-rd'],
            'Cherryville':['(704) 435-9900','syrg.io/interview?s=709-e-church-st'],
            'Kings Mtn':['(704) 734-0999','syrg.io/interview?s=110-w-king-st'],
            'Dilworth':['(704) 665-5151','syrg.io/interview?s=2515-park-rd'],
            'Ardrey Kell':['(704) 542-6767','syrg.io/interview?s=16646-hawfield-way-dr-%23103'],
            'Poplar Tent':['(704) 788-3600','syrg.io/interview?s=9900-poplar-tent-rd'],
            'Huntersville':['(704) 992-0505','syrg.io/interview?s=12905-rosedale-hill-ave'],
            'Sun Valley':['(704) 684-0200','syrg.io/interview?s=1310-wesley-chapel-rd'],
            'Lake Wylie':['(803) 366-4667','syrg.io/interview?s=125-evergreen-rd'],
            'Tega Cay':['(803) 547-5300','syrg.io/interview?s=1714-gold-hill-rd'],
            'York':['(803) 684-0655','syrg.io/interview?s=710-e-liberty-st'],
            'Fort Mill':['(803) 547-6400','syrg.io/interview?s=485-tom-hall-st-%23104'],
            'Uptown - 4th St':['(704) 331-9847','syrg.io/interview?s=1428-e-4th-st-suite-a'],
            'Monroe':['(704) 289-3500','syrg.io/interview?s=814-n-charlotte-ave'],
            'Dallas':['(704) 922-7665','syrg.io/interview?s=3130-dallas-high-shoals-hwy'],
            'Newton':['(828) 464-4445','syrg.io/interview?s=hwy-2392-w-north-carolina-10'],
            'Mccullers':['(919) 661-2612','syrg.io/interview?s=7891-fayetteville-rd'],
            'Knightdale':['(919) 266-6667','syrg.io/interview?s=2001-widewaters-parkway-suite-r'],
            'Bessemer City':['(704) 864-4475','syrg.io/interview?s=3876-kings-mountain-hwy'],
            'Apex North':['(919) 303-0800','syrg.io/interview?s=800-w-williams-st'],
            'Albemarle Rd':['(704) 531-0300','syrg.io/interview?s=9020-albemarle-rd-a2'],
            'Waxhaw':['(704) 843-3566','syrg.io/interview?s=3901-providence-rd-s-g'],
            'Belmont':['(704) 317-7100','syrg.io/interview?s=956-s-point-rd'],
            'Concord Mills':['(704) 548-8688','syrg.io/interview?s=2900-derita-rd'],
            'Harrisburg':['(980) 505-7999','syrg.io/interview?s=4463-school-house-commons'],
            'Mtn Island Lake':['(704) 393-8887','syrg.io/interview?s=10210-couloak-dr-suite-g'],
            'Indian Land':['(803) 547-9922','syrg.io/interview?s=8447-charlotte-hwy-%23700'],
            'Strickland Rd':['(919) 676-6602','syrg.io/interview?s=13220-strickland-rd-%23190'],
            'Celanese Rd':['(803) 325-1900','syrg.io/interview?s=1539-celanese-rd-%2311'],
            'Lancaster':['(803) 285-4313','syrg.io/interview?s=401-lancaster-bypass-e'],
            'Independence':['(704) 536-6444','syrg.io/interview?s=7211-e-independence-blvd-suite-j'],
            'Cotswold':['(704) 364-5192','syrg.io/interview?s=4350-colwick-rd'],
            'New Hope':['(704) 867-5868','syrg.io/interview?s=1802-s-new-hope-rd'],
            'South Blvd':['(704) 527-7892','syrg.io/interview?s=4755-south-blvd'],
            'UNCC':['(704) 596-7071','syrg.io/interview?s=9630-university-city-blvd-ste-f'],
            'Sharon Amity':['(704) 531-7713','syrg.io/interview?s=3205-n-sharon-amity-rd'],
            'App State':['(828) 264-6507','syrg.io/interview?s=702-blowing-rock-rd-%233'],
            'Freedom Dr':['(704) 573-4800','syrg.io/interview?s=2801-freedom-dr'],
            'UNC - Carrboro':['(919) 929-0246','syrg.io/interview?s=412-e-main-st'],
            'Matthews':['(704) 845-1800','syrg.io/interview?s=3335-siskey-pkwy-%23200'],
            'Sunset Rd':['(704) 392-7850','syrg.io/interview?s=4510-sunset-rd'],
            'Cheshire - W Wt Harris':['(704) 598-2230','syrg.io/interview?s=3716-w-w.t.harris-blvd'],
            'The Plaza':['(704) 375-8794','syrg.io/interview?s=3223-the-plaza'],
            'South Tryon':['(704) 588-4182','syrg.io/interview?s=9107-s-tryon-st-unit-a'],
            'Mt Holly':['(704) 822-2440','syrg.io/interview?s=553-s-main-st'],
            'Connelly Springs - Hwy 70':['(828) 397-6790','syrg.io/interview?s=2935-us-hwy-70-sw'],
            'Lenoir - Connelly Springs Rd':['(828) 728-1828','syrg.io/interview?s=2020-connelly-springs-rd-%23-1'],
            'Lenoir - Wilkesboro Blvd':['(828) 758-7011','syrg.io/interview?s=360-wilkesboro-blvd-ne-se'],
            'Morganton - Burkemont Ave':['(828) 608-0999','syrg.io/interview?s=1231-burkemont-ave-suite-h'],
            'Morganton - Union St':['(828) 437-9777','syrg.io/interview?s=1563-e-union-st'],
            'Walmart - Charlotte':['(980) 890-9100','syrg.io/interview?s=1830-galleria-blvd'],
            'Steele Creek':['(704) 588-2200','syrg.io/interview?s=14154-steele-creek-rd.'],
            'Granite Falls':['(828) 313-0555','syrg.io/interview?s=530-dudley-shoals-rd'],
            'All':'syrg.io/all-stores?c=patterson'
        },
        'PNG':{
            'Callahan':['(904) 879-2080','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=%20542361%20US%20HIGHWAY%201,%20CALLAHAN%20FL%2032011&stretch=5&stretchUnit=MILES'],
            'Kingsland':['(912) 729-5878','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=%20SR%2040%20%26%20I%2095,%20KINGSLAND%20GA%2031548&stretch=5&stretchUnit=KILOMETERS']
        },
        'Rozek':{
            'North':['(231) 347-1711','mchire.com/co/McDonalds1502/Job?slug=mcdonalds-crew-team-member-1178-hwy-31-n-petoskey-mi-49770-51654-15170'],
            'South':['(231) 487-0088','mchire.com/co/McDonalds1502/Job?slug=mcdonalds-crew-team-member-747-spring-street-us-131-petoskey-mi-49770-51655-15314'],
            'Inidan River':['(231) 238-0216','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=6153%20M-68,%20Indian%20River,%20MI%2049749,%20USA'],
            'South Petoskey':['(231) 487-0088','mchire.com/co/McDonalds1502/Job?slug=mcdonalds-crew-team-member-747-spring-street-us-131-petoskey-mi-49770-51655-15314'],
            'Charlevoix':['(231) 547-5710','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=5&page=1&location=Use%20my%20curr1440%20Bridge%20St,%20Charlevoix,%20MI%2049720,%20USAent%20location'],
            'North Petoskey':['(231) 347-1711','mchire.com/co/McDonalds1502/Job?slug=mcdonalds-crew-team-member-1178-hwy-31-n-petoskey-mi-49770-51654-15170']
        },
        'Schulz':{
            '2509 Pine Grove Ave, Port Huron, MI 48060, USA':['(810) 987-3374','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=2509%20Pine%20Grove%20Ave.,%20Port%20Huron,%20Mi%2048060'],
            '2509 Pine Grove Ave., Port Houron, Mi 48060':['(810) 987-3374','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=2509%20Pine%20Grove%20Ave.,%20Port%20Huron,%20Mi%2048060'],
            '105 N. Main Yale, MI 48097':['(810) 387-2112','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=105%20N.%20Main%20Yale,%20MI%2048097'],
            '1155 S. Carney Dr. St. Clair, MI 48079':['(810) 329-2606','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=1155%20S.%20Carney%20Dr.%20St.%20Clair,%20MI%2048079'],
            '1201 24 Street, Port Huron, MI 48060':['(810) 985-5030','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=1201%2024%20Street,%20Port%20Huron,%20MI%2048060'],
            '1336 Wadhams Rd., Ste A St. Clair, MI 48079':['(810) 326-4186','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=1336%20Wadhams%20Rd.,%20Ste%20A%20St.%20Clair,%20MI%2048079'],
            '13640 Southcove Dr., Sterling Heights, MI 48313':['(586) 247-2116','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=13640%20Southcove%20Dr.,%20Sterling%20Heights,%20MI%2048313'],
            '1617 S. Gratiot Clinton Twp., MI 48036':['(586) 468-8822','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=1617%20S.%20Gratiot%20Clinton%20Twp.,%20MI%2048036'],
            '18001 Hall Rd., Macomb, MI 48044':['(586) 263-6869','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=18001%20Hall%20Rd.,%20Macomb,%20MI%2048044'],
            '1925 Gratiot Ave., Marysville, MI 48040':['(810) 364-7494','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=%20Marysville,%20MI%2048040'],
            '22050 Hall Rd, Clinton Twp., MI 48035':['(586) 468-3889','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=22050%20Hall%20Rd,%20Clinton%20Twp.,%20MI%2048035'],
            '24627 N. River Rd. Mt. Clemens, MI 48043':['(586) 468-5310','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=24627%20N.%20River%20Rd.%20Mt.%20Clemens,%20MI%2048043'],
            '2509 Pine Grove Ave., Port Huron, Mi 48060':['(810) 987-3374','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=2509%20Pine%20Grove%20Ave.,%20Port%20Huron,%20Mi%2048060'],
            '25900 Crocker Blvd., Harrison Twp, MI 48045':['(586) 463-8240','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=25900%20Crocker%20Blvd.,%20Harrison%20Twp,%20MI%2048045'],
            '2805 Wadhams Rd. Kimball, MI 48074':['(810) 982-1870','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=2805%20Wadhams%20Rd.%20Kimball,%20MI%2048074'],
            '28320 23 Mile Rd., Chesterfield, MI 48051':['(586) 949-4844','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=28320%2023%20Mile%20Rd.,%20Chesterfield,%20MI%2048051'],
            '35899 Green St. New Baltimore, MI 48047':['(586) 716-9830','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=35899%20Green%20St.%20New%20Baltimore,%20MI%2048047'],
            '4155 24 Avenue, Fort Gratiot, MI 48059':['(810) 385-9080','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=4155%2024%20Avenue,%20Fort%20Gratiot,%20MI%2048059'],
            '57065 Gratiot, New Haven, MI 48048':['(586) 749-0172','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=57065%20Gratiot,%20New%20Haven,%20MI%2048048'],
            '6658 S. Riverside Marie City, MI 48039':['(810) 765-5060','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=6658%20S.%20Riverside%20Marie%20City,%20MI%2048039'],
            '67600 S. Main St. Richmond, MI 48062':['(586) 727-2800','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=67600%20S.%20Main%20St.%20Richmond,%20MI%2048062'],
            '700 Pte. Tremble Algonac, MI 48001':['(810) 794-0890','careers.mcdonalds.com/us-restaurants/jobs?stretchUnit=MILES&stretch=0&page=1&location=700%20Pte.%20Tremble%20Algonac,%20MI%2048001']
        },
        'Spangler':{
            'South Saginaw':['(810) 743-1120','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=3391%20S%20Saginaw,%20Burton,%20MI%2048529&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            'Clio Rd':['(810) 239-9211','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=3212%20Clio%20Rd,%20Flint,%20MI%2048504&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            'Davison Rd':['(810) 742-5101','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=3719%20Davison%20Rd.%20Flint,%20MI48506&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            'Dixie Hwy':['(989) 755-7785','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=3700%20Dixie%20Hwy.%20Saginaw,%20MI%2048601&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            'Holland':['(989) 755-7910','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=3200%20E.%20Holland%20Rd.%20Saginaw,%20MI%2048601&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            'Pierson Rd':['(810) 789-4281','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=4131%20W%20Pierson%20Rd,%20Flint,%20MI%2048504&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            'Dort Hwy':['(810) 239-9550','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=1831%20S.%20Dort%20Hwy%20Flint,%20MI%2048503&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            'Flushing':['(810) 659-7600','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=6460%20W%20Pierson%20Rd%20Flushing,%20MI%2048433&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            'Big Mt Morris':['(810) 687-1960','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=7252%20N%20Saginaw%20St%20Mt%20Morris,%20MI%2048458&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            'Stewart Ave':['(810) 235-3740','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=1510%20Stewart%20Ave.%20Flint,%20MI%2048505&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            'Court St':['810) 742-2163','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=5375%20E%20Court%20St.%20Burton,%20MI%2048509&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            'Ballenger Hwy':['(810) 767-3224','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=1232%20N%20Ballenger%20Hwy.%20Flint,%20MI%2048504&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            'Richfield/Genesee':['(810) 736-8872','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=3180%20N.%20Genesee%20Rd.%20Flint,%20MI%2048506&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            'Irish Rd':['(810) 658-0245','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=7518%20Lapeer%20Rd.%20Davison,%20MI%2048423&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            'Mt Morris/Dort':['(810) 687-0454','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=8010%20N.%20Dort%20Hwy.%20Mount%20Morris,%20MI%2048458&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            'Center Rd':['(810) 742-8529','careers.mcdonalds.com/us-restaurants/jobs?page=1&sortBy=relevance&location=2445%20Center%20Rd.%20Burton,%20MI%2048519&woe=7&stretchUnit=KILOMETERS&stretch=0'],
            '3760 E Washington Rd, Saginaw':['(989) 752-4568','careers.mcdonalds.com/us-restaurants/jobs?location=SAGINAW,%20M-81%20(33146)%203670%20E%20WASHINGTON%20RD%20SAGINAW,%20Michigan%20US&stretch=0&stretchUnit=MILES&page=1']
        },
        'TIPS':{
            '2807 E VA Beach Blvd, Norfolk':['(757) 629-0777','syrg.io/interview?s=2807-e-virginia-beach-blvd'],
            '6546 Hampton Roads Pkwy, Suffolk':['(757) 686-5280','syrg.io/interview?s=6546-hampton-roads-pkwy'],
            '426 Furr St, SouthHill':['(434) 447-7700','syrg.io/interview?s=426-furr-st'],
            '903 Beckford Dr, Henderson':['(252) 438-2727','syrg.io/interview?s=903-s-beckford-dr'],
            '2048 Atlantic Ave St. B, Chesapeake':['2048 Atlantic ave St. B, Chesapeake, VA 23324','syrg.io/interview?s=2048-atlantic-ave'],
            'All':'syrg.io/all-stores?c=tips'
        }
    };

    document.getElementById('corps').addEventListener('change', (e) => {
        setLocationOptions(e.target.value);
    });

    document.addEventListener('click', (e) => {
        let target = e.target;

        if (target.className == 'location-option-button') {

            if (document.querySelector('.location-option-button.active') != null) {
                document.querySelector('.location-option-button.active').className = 'location-option-button';
            }
            target.className = 'location-option-button active';

            let locName = target.innerHTML,
                messageBlock = (corps[activeCorp]['All'] ? messageBlocks['Bubble'] : messageBlocks['McDonalds']),
                messageContainer = document.getElementById('message-container');

            messageContainer.innerHTML = '';

            messageBlock.forEach((m) => {
                let messageDisplayBox = document.createElement('div'),
                    copyButton = document.createElement('div');

                messageDisplayBox.className = 'message-display-box';
                copyButton.className = 'copy-button';
                messageDisplayBox.innerHTML = generateMessage(activeCorp, locName, m);
                copyButton.innerHTML = 'Copy';

                messageContainer.appendChild(messageDisplayBox);
                messageContainer.appendChild(copyButton);
            });

        } else if (target.className == 'copy-button') {

            let copyMessage = target.previousElementSibling.innerHTML.replaceAll('<br>','\n');
            navigator.clipboard.writeText(copyMessage).then(() => {
                    target.className = 'copy-button toggled';
                    setTimeout(() => {
                        target.className = 'copy-button';
                    }, 500);
                }, () => {
                    alert("Something went wrong with the copy");
            });

        }
    });

    function setLocationOptions(corpName) {
        activeCorp = corpName;

        let locOptMenu = document.getElementById('location-options-menu')
            corpObj = corps[corpName];

        locOptMenu.innerHTML = '';
        document.getElementById('message-container').innerHTML = '';

        sortedLocNames = Object.keys(corpObj);
        sortedLocNames.sort();

        sortedLocNames.forEach((locName) => {
            if (locName != 'All') {
                let locOptButton = document.createElement('div');
                locOptButton.className = "location-option-button";
                locOptButton.innerHTML = locName;
                locOptMenu.appendChild(locOptButton);
            }
        });
    }

    function generateMessage(corp, loc, message) {
        message = message.replaceAll('LOCATION_NAME', loc);
        message = message.replaceAll('HIRING_LINK', corps[corp][loc][1]);
        message = message.replaceAll('STORE_PHONE', corps[corp][loc][0]);
        message = message.replaceAll('ALL_LOCATIONS_LINK', corps[corp]['All']);
        return message.replaceAll('\n','<br>');
    }

});