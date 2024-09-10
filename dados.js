let dados = [

    {
        titulo: "Panda Gigante",
        descricao: "O panda gigante é conhecido por sua pelagem branco e preto e sua dieta quase exclusiva de bambu. Apesar de melhorias em sua população, ainda é considerado vulnerável pela perda de habitat. Proteger o panda gigante é crucial, pois suas áreas protegidas também preservam florestas inteiras e diversas outras espécies.",
        link: "https://www.worldwildlife.org/species/giant-panda",
        imagem: "https://files.worldwildlife.org/wwfcmsprod/images/Born_in_China_Panda_Spring_2017_Mag/featured_story/3ln0rjj4r3_BIC_128.png",
        categoria: "Mamífero",
        habitat: "Floresta Temperada",
        status: "Vulnerável",
        causasAmeaca: ["Destruição de habitat", "Fragmentação de populações"]
    },

    {
        titulo: "Tigre de Bengala",
        descricao: "O tigre de Bengala é o maior felino do mundo e está em perigo crítico de extinção devido à caça ilegal e à perda de habitat. A proteção desse predador no topo da cadeia alimentar é vital para o controle de populações de presas e para a saúde dos ecossistemas florestais.",
        link: "https://www.worldwildlife.org/species/bengal-tiger",
        imagem: "tigre_bengala.jpg",
        categoria: "Mamífero",
        habitat: "Florestas Tropicais",
        status: "Em Perigo",
        causasAmeaca: ["Caça Ilegal", "Perda de Habitat"]
    },

    {
        titulo: "Tartaruga-de-Couro",
        descricao: "A tartaruga-de-couro é a maior de todas as tartarugas marinhas, mas está ameaçada pela poluição dos oceanos, captura acidental e perda de locais de desova. Sua preservação é crucial, pois elas ajudam a manter o equilíbrio dos ecossistemas marinhos, especialmente controlando populações de águas-vivas.",
        link: "https://www.worldwildlife.org/species/leatherback-turtle",
        imagem: "tartaruga_couro.jpg",
        categoria: "Répteis",
        habitat: "Oceano",
        status: "Vulnerável",
        causasAmeaca: ["Poluição Marinha", "Captura Acidental", "Perda de Locais de Desova"]
    },

    {
        titulo: "Elefante Asiático",
        descricao: "O elefante asiático enfrenta ameaças significativas, como a destruição do habitat e conflitos com seres humanos. Proteger essa espécie é importante não só pela sua contribuição para a biodiversidade, mas também porque eles ajudam a espalhar sementes, mantendo a saúde das florestas asiáticas.",
        link: "https://www.worldwildlife.org/species/asian-elephant",
        imagem: "elefante_asiatico.jpg",
        categoria: "Mamífero",
        habitat: "Florestas Tropicais",
        status: "Em Perigo",
        causasAmeaca: ["Destruição de Habitat", "Conflitos com Humanos"]
    },

    {
        titulo: "Gorila-das-Montanhas",
        descricao: "O gorila-das-montanhas é uma das espécies mais ameaçadas do mundo, devido à caça ilegal e à destruição de seu habitat natural. Preservar essa espécie é essencial, pois os gorilas desempenham um papel importante na manutenção da vegetação e dos ecossistemas das florestas em que vivem.",
        link: "https://www.worldwildlife.org/species/mountain-gorilla",
        imagem: "gorila.jpg",
        categoria: "Mamífero",
        habitat: "Florestas Tropicais",
        status: "Criticamente Ameaçado",
        causasAmeaca: ["Caça ilegal", "Destruição de habitat"]
    },

    {
        titulo: "Rinoceronte-de-Java",
        descricao: "O rinoceronte-de-Java é um dos mamíferos mais raros do mundo, com menos de 80 indivíduos restantes na natureza. Proteger essa espécie é vital, pois a extinção de um animal de tão grande porte pode causar mudanças irreversíveis nos ecossistemas de florestas tropicais.",
        link: "https://www.worldwildlife.org/species/javan-rhino",
        imagem: "rinoceronte.jpg",
        categoria: "Mamífero",
        habitat: "Florestas Tropicais",
        status: "Criticamente Ameaçado",
        causasAmeaca: ["Perda de habitat", "Caça"]
    },

    {
        titulo: "Arara-Azul",
        descricao: "A arara-azul, conhecida por sua coloração vibrante, está ameaçada devido ao tráfico de animais e à perda de habitat. A preservação dessa espécie é importante, pois araras-azuis ajudam a dispersar sementes, contribuindo para a regeneração de florestas tropicais.",
        link: "https://www.worldwildlife.org/species/blue-macaw",
        imagem: "arara.jpg",
        categoria: "Ave",
        habitat: "Florestas Tropicais",
        status: "Ameaçado",
        causasAmeaca: ["Tráfico de animais", "Destruição de habitat"]
    },

    {
        titulo: "Leopardo-das-Neves",
        descricao: "O leopardo-das-neves habita as montanhas da Ásia Central e está ameaçado pela caça e perda de presas. Proteger essa espécie ajuda a manter o equilíbrio ecológico das montanhas e a conservação de seus habitats pode beneficiar diversas outras espécies.",
        link: "https://www.worldwildlife.org/species/snow-leopard",
        imagem: "leopardo.jpg",
        categoria: "Mamífero",
        habitat: "Montanhas",
        status: "Vulnerável",
        causasAmeaca: ["Caça ilegal", "Perda de presas"]
    },

    {
        titulo: "Tubarão-Baleia",
        descricao: "O tubarão-baleia, o maior peixe do mundo, está em perigo devido à pesca excessiva e à destruição de seu habitat. Proteger essa espécie é essencial, pois o tubarão-baleia desempenha um papel crucial na manutenção da saúde dos oceanos ao controlar as populações de plâncton.",
        link: "https://www.worldwildlife.org/species/whale-shark",
        imagem: "tubarao.jpg",
        categoria: "Peixe",
        habitat: "Oceanos Tropicais",
        status: "Ameaçado",
        causasAmeaca: ["Pesca excessiva", "Destruição de habitat"]
    },

    {
        titulo: "Orangotango-de-Sumatra",
        descricao: "O orangotango-de-Sumatra está criticamente ameaçado devido à destruição de florestas tropicais para plantações de óleo de palma. Esses primatas são importantes para o equilíbrio ecológico, pois ajudam a dispersar sementes e manter a biodiversidade das florestas.",
        link: "https://www.worldwildlife.org/species/sumatran-orangutan",
        imagem: "orangotango.jpg",
        categoria: "Mamífero",
        habitat: "Florestas Tropicais",
        status: "Criticamente Ameaçado",
        causasAmeaca: ["Destruição de habitat"]
    },

    {
        titulo: "Lobo-Ibérico",
        descricao: "O lobo-ibérico, encontrado principalmente na Península Ibérica, está ameaçado pela caça e destruição de habitat. Esses predadores desempenham um papel importante no controle de populações de herbívoros, ajudando a manter o equilíbrio dos ecossistemas.",
        link: "https://www.iucnredlist.org/species/3746/14785309",
        imagem: "lobo-iberico.jpg",
        categoria: "Mamífero",
        habitat: "Florestas e Terras Arbustivas",
        status: "Ameaçado",
        causasAmeaca: ["Caça", "Destruição de habitat"]
    },

    {
        titulo: "Águia-Filipina",
        descricao: "A águia-filipina, uma das maiores águias do mundo, está em perigo crítico de extinção devido à destruição de florestas nas Filipinas. Ela é vital para o equilíbrio das cadeias alimentares nas florestas tropicais onde habita.",
        link: "https://www.worldwildlife.org/species/philippine-eagle",
        imagem: "aguia-filipina.jpg",
        categoria: "Aves",
        habitat: "Florestas Tropicais",
        status: "Perigo Crítico",
        causasAmeaca: ["Destruição de habitat"]
    },

    {
        titulo: "Saola",
        descricao: "Conhecido como o 'unicórnio asiático', o Saola é um dos mamíferos mais raros do mundo, habitando as florestas do Vietnã e do Laos. A perda de habitat e a caça ilegal são as principais ameaças à sobrevivência dessa espécie.",
        link: "https://www.worldwildlife.org/species/saola",
        imagem: "saola.jpg",
        categoria: "Mamífero",
        habitat: "Florestas Tropicais",
        status: "Criticamente Ameaçado",
        causasAmeaca: ["Perda de habitat", "Caça"]
    },



    {
        titulo: "Vaquita",
        descricao: "A vaquita é o mamífero marinho mais ameaçado do mundo, com menos de 20 indivíduos restantes. Endêmica do Golfo da Califórnia, está à beira da extinção devido à captura acidental em redes de pesca ilegais.",
        link: "https://www.worldwildlife.org/species/vaquita",
        imagem: "vaquita.jpg",
        categoria: "Mamífero Marinho",
        habitat: "Golfo da Califórnia",
        status: "Criticamente Ameaçado",
        causasAmeaca: ["Captura acidental em redes de pesca"]
    },

    {
        titulo: "Tamanduá-Bandeira",
        descricao: "O tamanduá-bandeira é uma espécie vulnerável devido à destruição de seu habitat nas savanas e florestas da América do Sul. Eles são importantes para o controle de insetos, ajudando a manter o equilíbrio dos ecossistemas.",
        link: "https://www.worldwildlife.org/species/giant-anteater",
        imagem: "tamandua-bandeira.jpg",
        categoria: "Mamífero",
        habitat: "Savanah e Florestas",
        status: "Vulnerável",
        causasAmeaca: ["Destruição de habitat"]
    },


    {
        titulo: "Onça-Pintada",
        descricao: "A onça-pintada é o maior felino das Américas e está ameaçada pela perda de habitat e pela caça ilegal. Sua presença é essencial para manter o equilíbrio das populações de presas nos ecossistemas florestais.",
        link: "https://www.worldwildlife.org/species/jaguar",
        imagem: "onca-pintada.jpg",
        categoria: "Mamífero",
        habitat: "Florestas e Cerrados",
        status: "Ameaçado",
        causasAmeaca: ["Perda de habitat", "Caça ilegal"]
    },

    {
        titulo: "Lêmure-de-Cauda-Anelada",
        descricao: "O lêmure-de-cauda-anelada, encontrado em Madagascar, está em perigo de extinção devido à destruição de seu habitat e à caça. Esses primatas desempenham um papel importante na dispersão de sementes, ajudando a regenerar as florestas.",
        link: "https://www.worldwildlife.org/species/ring-tailed-lemur",
        imagem: "lemure-de-cauda-anelada.jpg",
        categoria: "Mamífero",
        habitat: "Florestas e Matas",
        status: "Em Perigo",
        causasAmeaca: ["Destruição de habitat", "Caça"]
    },

    {
        titulo: "Golfinho-do-Ganges",
        descricao: "O golfinho-do-Ganges é uma espécie de água doce encontrada nos rios do subcontinente indiano. Está em perigo devido à poluição, construção de barragens e pesca acidental. Sua preservação é importante para a saúde dos rios e ecossistemas aquáticos.",
        link: "https://www.worldwildlife.org/species/ganges-river-dolphin",
        imagem: "golfinho-do-ganges.jpg",
        categoria: "Mamífero Marinho",
        habitat: "Rios do Sul da Ásia",
        status: "Em Perigo",
        causasAmeaca: ["Poluição", "Construção de barragens", "Pesca acidental"]
    },

    {
        titulo: "Peixe-Boi Marinho",
        descricao: "O peixe-boi marinho, encontrado nas águas costeiras do Atlântico e no Caribe, está ameaçado pela poluição, colisão com embarcações e destruição de habitat. Esses herbívoros ajudam a manter os ecossistemas marinhos ao controlar a vegetação aquática.",
        link: "https://www.worldwildlife.org/species/manatee",
        imagem: "peixe-boi-marinho.jpg",
        categoria: "Mamífero Marinho",
        habitat: "Águas Costeiras do Atlântico e Caribe",
        status: "Ameaçado",
        causasAmeaca: ["Poluição", "Colisão com embarcações", "Destruição de habitat"]
    },

    {
        titulo: "Pinguim-de-Galápagos",
        descricao: "O pinguim-de-Galápagos é a única espécie de pinguim encontrada no hemisfério norte. Está em risco devido às mudanças climáticas, pesca excessiva e perda de habitat. A preservação dessa espécie é crucial para a manutenção do equilíbrio ecológico nas Ilhas Galápagos.",
        link: "https://www.worldwildlife.org/species/galapagos-penguin",
        imagem: "pinguim-de-galapagos.jpg",
        categoria: "Ave",
        habitat: "Ilhas Galápagos",
        status: "Em Perigo",
        causasAmeaca: ["Mudanças climáticas", "Pesca excessiva", "Perda de habitat"]
    },

    {
        titulo: "Bonobo",
        descricao: "O bonobo, parente próximo dos chimpanzés, está ameaçado pela caça ilegal e destruição de habitat nas florestas da República Democrática do Congo. Esses primatas desempenham um papel vital na dispersão de sementes e manutenção da biodiversidade florestal.",
        link: "https://www.worldwildlife.org/species/bonobo",
        imagem: "bonobo.jpg",
        categoria: "Mamífero",
        habitat: "Florestas da República Democrática do Congo",
        status: "Em Perigo",
        causasAmeaca: ["Caça ilegal", "Destruição de habitat"]
    },

    {
        titulo: "Tigre-de-Sumatra",
        descricao: "O tigre-de-Sumatra, a menor subespécie de tigre, está criticamente ameaçado devido à caça e perda de habitat nas florestas de Sumatra. A conservação dessa espécie é essencial para o equilíbrio dos ecossistemas insulares.",
        link: "https://www.worldwildlife.org/species/sumatran-tiger",
        imagem: "tigre-de-sumatra.jpg",
        categoria: "Mamífero",
        habitat: "Florestas de Sumatra",
        status: "Criticamente Ameaçado",
        causasAmeaca: ["Caça", "Perda de habitat"]
    },

    {
        titulo: "Urso-Polar",
        descricao: "O urso-polar está ameaçado pelo aquecimento global, que está derretendo o gelo marinho do Ártico, seu habitat principal. Esses ursos dependem do gelo para caçar focas, e a diminuição de seu habitat afeta toda a cadeia alimentar ártica.",
        link: "https://www.worldwildlife.org/species/polar-bear",
        imagem: "urso-polar.jpg",
        categoria: "Mamífero",
        habitat: "Ártico",
        status: "Ameaçado",
        causasAmeaca: ["Aquecimento global", "Derretimento do gelo marinho"]
    },

    {
        titulo: "Áquila Imperial",
        descricao: "A águia imperial é uma ave de rapina ameaçada na Península Ibérica devido à perda de habitat e envenenamento. Sua preservação é crucial para a manutenção de um equilíbrio ecológico em áreas de pradaria e florestas mediterrâneas.",
        link: "https://www.iucnredlist.org/species/22696039/163709791",
        imagem: "aguia-imperial.jpg",
        categoria: "Ave",
        habitat: "Pradarias e Florestas Mediterrâneas",
        status: "Ameaçado",
        causasAmeaca: ["Perda de habitat", "Envenenamento"]
    },

    {
        titulo: "Tigre-da-Indochina",
        descricao: "O tigre-da-Indochina está criticamente ameaçado pela caça ilegal e destruição de florestas na região do Sudeste Asiático. Ele desempenha um papel vital como predador no controle de populações de herbívoros, o que ajuda a manter o equilíbrio dos ecossistemas.",
        link: "https://www.worldwildlife.org/species/indochinese-tiger",
        imagem: "tigre-da-indochina.jpg",
        categoria: "Mamífero",
        habitat: "Florestas do Sudeste Asiático",
        status: "Criticamente Ameaçado",
        causasAmeaca: ["Caça ilegal", "Destruição de florestas"]
    },

    {
        titulo: "Lobo-Cinzento",
        descricao: "O lobo-cinzento, outrora amplamente distribuído, agora está em perigo em várias regiões devido à caça e perda de habitat. Ele é crucial para o controle de populações de herbívoros, o que ajuda a manter o equilíbrio dos ecossistemas onde habita.",
        link: "https://www.worldwildlife.org/species/gray-wolf",
        imagem: "lobo-cinzento.jpg",
        categoria: "Mamífero",
        habitat: "Florestas e Pradarias",
        status: "Ameaçado",
        causasAmeaca: ["Caça", "Perda de habitat"]
    },

    {
        titulo: "Tartaruga-de-Cabeça-Grande",
        descricao: "A tartaruga-de-cabeça-grande está ameaçada devido à captura acidental, caça e destruição de habitats costeiros. Sua preservação é importante para a saúde dos ecossistemas marinhos e fluviais, onde desempenha um papel ecológico vital.",
        link: "https://www.iucnredlist.org/species/39625/97252923",
        imagem: "tartaruga-de-cabeca-grande.jpg",
        categoria: "Réptil",
        habitat: "Águas Costeiras e Fluviais",
        status: "Criticamente Ameaçado",
        causasAmeaca: ["Captura acidental", "Caça", "Destruição de habitat"]
    },


    {
        titulo: "Iaque Selvagem",
        descricao: "O iaque selvagem, nativo das montanhas do Tibete, está ameaçado pela caça e competição com o gado doméstico. Sua preservação é crucial para a biodiversidade das estepes tibetanas.",
        link: "https://www.worldwildlife.org/species/wild-yak",
        imagem: "iaque-selvagem.jpg",
        categoria: "Mamífero",
        habitat: "Estepes e Montanhas do Tibete",
        status: "Ameaçado",
        causasAmeaca: ["Caça", "Competição com gado doméstico"]
    },

    {
        titulo: "Lince-Ibérico",
        descricao: "O lince-ibérico é uma das espécies de felinos mais ameaçadas do mundo. Ele enfrenta a perda de habitat e a redução de presas, sendo crucial para o equilíbrio ecológico de regiões da Península Ibérica.",
        link: "https://www.worldwildlife.org/species/iberian-lynx",
        imagem: "lince-iberico.jpg",
        categoria: "Mamífero",
        habitat: "Florestas e Matagais da Península Ibérica",
        status: "Criticamente Ameaçado",
        causasAmeaca: ["Perda de habitat", "Redução de presas"]
    },

    {
        titulo: "Guepardo",
        descricao: "O guepardo é o animal terrestre mais rápido, mas está ameaçado pela perda de habitat e conflitos com humanos. Ele é um predador vital para o controle das populações de herbívoros nas savanas africanas.",
        link: "https://www.worldwildlife.org/species/cheetah",
        imagem: "guepardo.jpg",
        categoria: "Mamífero",
        habitat: "Savanas Africanas",
        status: "Vulnerável",
        causasAmeaca: ["Perda de habitat", "Conflitos com humanos"]
    },

    {
        titulo: "Panda-Vermelho",
        descricao: "O panda-vermelho, nativo das florestas do Himalaia, está ameaçado pela destruição de seu habitat e caça. Sua preservação é importante, pois contribui para o equilíbrio dos ecossistemas de floresta de bambu.",
        link: "https://www.worldwildlife.org/species/red-panda",
        imagem: "panda-vermelho.jpg",
        categoria: "Mamífero",
        habitat: "Florestas do Himalaia",
        status: "Ameaçado",
        causasAmeaca: ["Destruição de habitat", "Caça"]
    },

    {
        titulo: "Antílope-Saiga",
        descricao: "O antílope-saiga, que habita as estepes da Eurásia, está em perigo devido à caça e doenças. Ele é importante para o equilíbrio dos ecossistemas de estepes, regulando a vegetação e servindo de presa para predadores.",
        link: "https://www.worldwildlife.org/species/saiga",
        imagem: "antilope-saiga.jpg",
        categoria: "Mamífero",
        habitat: "Estepes da Eurásia",
        status: "Em Perigo",
        causasAmeaca: ["Caça", "Doenças"]
    },


    {
        titulo: "Pangolim",
        descricao: "O pangolim é um mamífero único conhecido por suas escamas, e está ameaçado devido ao tráfico ilegal e à destruição de seu habitat. Sua preservação é crucial, pois eles ajudam a controlar populações de insetos e contribuem para a saúde dos ecossistemas.",
        link: "https://www.worldwildlife.org/species/pangolin",
        imagem: "pangolim.jpg",
        categoria: "Mamífero",
        habitat: "Florestas Tropicais e Savanas",
        status: "Criticamente Ameaçado",
        causasAmeaca: ["Tráfico ilegal", "Destruição de habitat"]
    },

    // {
    //     titulo: "Tamanduá-Bandeira",
    //     descricao: "O tamanduá-bandeira, com seu tamanho impressionante e alimentação especializada em insetos, está ameaçado pela destruição de habitat e pela caça. Proteger essa espécie é vital para a saúde dos ecossistemas em que vive, pois ajuda a controlar populações de insetos.",
    //     link: "https://www.worldwildlife.org/species/giant-anteater",
    //     imagem: "tamandua-bandeira.jpg",
    //     categoria: "Mamífero",
    //     habitat: "Florestas e Cerrados",
    //     status: "Vulnerável",
    //     causasAmeaca: ["Destruição de habitat", "Caça"]
    // },


]

