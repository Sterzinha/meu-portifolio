export const projects = [
   {
      id: '1',
      title: 'Sistema de Garagem - FiveM',
      img: '/imgs/garagem-metropole.png',
      imgScreens: ['/imgs/telas-garagem-metropole/tela-1.png'],

      description:
         'Sistema de garagem para servidor FiveM desenvolvido como teste técnico para ingressar na Metrópole GG. Exibe os veículos do jogador em uma interface interativa, com placa, nome, categoria e cores personalizadas, permitindo retirar (spawnar) o veículo escolhido diretamente pelo painel.',
      descriptionDetails:
         'O Sistema de Garagem é um script para servidor de roleplay FiveM criado como teste técnico de admissão na Metrópole GG. A interface (NUI) lista todos os veículos pertencentes ao jogador, exibindo informações como placa, nome, categoria (esportivo, musculoso, moto, van, entre outras) e as cores primária e secundária de cada veículo. Ao clicar em "Retirar", o veículo é spawnado no mundo do jogo, com a comunicação entre a interface web e o jogo feita via eventos entre o cliente Lua e o NUI em React.',

      urlSite: 'https://www.youtube.com/watch?v=naJpaaTQmvk',
      urlGithub: 'https://github.com/SterRoque/metropole-garage',

      technologies: [
         '<strong>Interface (NUI):</strong> React, TypeScript, Tailwind',
         '<strong>Script / Jogo:</strong> TypeScript',
      ],

      features: [
         '<strong>Listagem de Veículos:</strong> Exibe todos os veículos do jogador em cards organizados.',
         '<strong>Informações Detalhadas:</strong> Mostra placa, nome, categoria e as cores primária e secundária de cada veículo.',
         '<strong>Retirada de Veículo:</strong> Botão "Retirar" que spawna o veículo selecionado no mundo do jogo.',
         '<strong>Integração Jogo ↔ Interface:</strong> Comunicação entre o cliente Lua e a interface React via eventos NUI.',
      ],

      conclusion:
         'O Sistema de Garagem foi desenvolvido como teste técnico para a Metrópole GG, demonstrando a integração entre uma interface moderna em React e a lógica de um servidor FiveM em Lua. O projeto resultou na minha aprovação e ingresso na empresa, evidenciando domínio tanto do front-end quanto da integração com o jogo.',
      stacks: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'FiveM'],
   },
   {
      id: '2',
      title: 'Roubo a ATM - FiveM',
      img: '/imgs/atm-robbery.png',
      imgScreens: ['/imgs/telas-atm-robbery/tela-1.png'],

      description:
         'Sistema de roubo a caixas eletrônicos (ATM) para servidores FiveM QBCore. O jogador usa um C4 para arrombar o ATM, completa um minigame, explode o caixa e coleta o dinheiro em notas marcadas, com todo o fluxo validado no servidor.',
      descriptionDetails:
         'O Roubo a ATM é um recurso para servidores de roleplay FiveM baseados no framework QBCore que implementa um assalto completo a caixas eletrônicos. O projeto é organizado em três camadas principais — server, client e ui — cada uma responsável por uma parte da aplicação. O jogador se aproxima de um ATM, planta um C4 (item validado no servidor), completa um minigame de sequência de teclas e, após a explosão, retorna ao caixa para coletar o dinheiro em notas marcadas. Ao final, o ATM entra em cooldown, evitando roubos consecutivos no mesmo caixa.',

      urlSite: 'https://medal.tv/pt/games/gta-v/clips/n3xLC3SsadjLxwnER?invite=cr-MSx6WHIsNTMxMzE3MzA5&v=95',
      urlGithub: 'https://github.com/SterRoque/minigame-atm-robbery',

      technologies: [
         '<strong>Interface (UI):</strong> React, TypeScript, Tailwind',
         '<strong>Client / Server:</strong> Lua (QBCore)',
      ],

      features: [
         '<strong>Uso de C4:</strong> Necessário ter o item C4, validado no servidor, para iniciar o roubo ao apertar G próximo de um ATM.',
         '<strong>Minigame de Teclas:</strong> Sequência de teclas que precisa ser completada para plantar a C4 no caixa.',
         '<strong>Explosão com Delay:</strong> Animação de plantar a C4, contagem de 15 segundos e explosão do caixa eletrônico.',
         '<strong>Coleta com Progressbar:</strong> Ao apertar E no ATM explodido, uma progressbar de 20 segundos libera as notas marcadas.',
         '<strong>Sistema de Cooldown:</strong> Após o roubo, o ATM fica em cooldown, impedindo assaltos consecutivos.',
      ],

      conclusion:
         'O Roubo a ATM demonstra a construção de um recurso completo para FiveM com arquitetura em três camadas (server, client e ui), unindo validação de itens no servidor, minigames, animações, explosões e recompensas em notas marcadas. O projeto evidencia domínio do framework QBCore e da integração entre a lógica do jogo em Lua e a interface em React.',
      stacks: ['React', 'TypeScript', 'Tailwind', 'Lua', 'QBCore', 'FiveM'],
   },
   {
      id: '3',
      title: 'Lavagem de Dinheiro - FiveM',
      img: '/imgs/lavagem-dinheiro.png',
      imgScreens: ['/imgs/telas-lavagem-dinheiro/tela-1.png'],

      description:
         'Sistema de lavagem de dinheiro para servidores FiveM QBCore. O jogador vai até um local, informa quanto quer lavar das suas notas marcadas, aguarda o tempo de processamento e recebe o valor em dinheiro limpo, descontada a taxa de serviço, com todo o fluxo validado no servidor.',
      descriptionDetails:
         'A Lavagem de Dinheiro é um recurso para servidores de roleplay FiveM baseados no framework QBCore que permite converter notas marcadas em dinheiro limpo. O projeto é organizado em três camadas principais — server, client e ui — cada uma responsável por uma parte da aplicação. O jogador se aproxima de um local de lavagem e aperta E, a interface abre exibindo quanto de dinheiro sujo ele possui (validado no servidor), digita o valor que deseja lavar (ou usa o botão MAX), aguarda o timer de processamento e recebe o valor limpo, com o servidor removendo as notas marcadas e descontando a taxa de serviço.',

      urlSite: 'https://medal.tv/pt/games/gta-v/clips/n3UvohnyaFeCRWLIj?invite=cr-MSxpSVosNTMxMzE3MzA5&v=98',
      urlGithub: 'https://github.com/SterRoque/lavagem-dinheiro-fivem',

      technologies: [
         '<strong>Interface (UI):</strong> React, TypeScript, Tailwind',
         '<strong>Client / Server:</strong> Lua (QBCore)',
      ],

      features: [
         '<strong>Interação por Tecla:</strong> Ao chegar perto de um local de lavagem e apertar E, a interface abre com as informações do jogador.',
         '<strong>Validação no Servidor:</strong> A quantidade de dinheiro sujo (notas marcadas) é lida e validada diretamente no servidor.',
         '<strong>Valor Personalizado:</strong> O jogador digita quanto deseja lavar ou usa o botão MAX para lavar tudo de uma vez.',
         '<strong>Processamento com Timer:</strong> Ao apertar Lavar Dinheiro, um tempo de processamento é aguardado antes de liberar o valor.',
         '<strong>Pagamento com Taxa:</strong> Após apertar Receber Dinheiro, o servidor remove as notas marcadas e paga o valor limpo, descontada a taxa de serviço.',
         '<strong>Configuração Flexível:</strong> Taxa de serviço e locais de lavagem definidos em shared/config.lua.',
      ],

      conclusion:
         'A Lavagem de Dinheiro demonstra a construção de um recurso completo para FiveM com arquitetura em três camadas (server, client e ui), unindo validação de itens no servidor, interface interativa em React e configuração flexível de taxas e locais. O projeto evidencia domínio do framework QBCore e da integração entre a lógica do jogo em Lua e a interface web.',
      stacks: ['React', 'TypeScript', 'Tailwind', 'Lua', 'QBCore', 'FiveM'],
   },
   {
      id: '4',
      title: 'Lista Fácil',
      img: '/imgs/lista-facil.png',
      imgScreens: [
         '/imgs/telas-lista-facil/tela-1.png',
         '/imgs/telas-lista-facil/tela-2.png',
         '/imgs/telas-lista-facil/tela-3.png',
         '/imgs/telas-lista-facil/tela-4.png',
         '/imgs/telas-lista-facil/tela-5.png',
         '/imgs/telas-lista-facil/tela-6.png',
         '/imgs/telas-lista-facil/tela-7.png',
         '/imgs/telas-lista-facil/tela-8.png',
      ],
      description:
         'O Lista Fácil é um aplicativo intuitivo que transforma suas compras no supermercado em uma experiência organizada e eficiente. Adicione produtos, insira preços e quantidades, e o app calcula automaticamente o total da compra. Ideal para quem quer manter o orçamento sob controle com praticidade.',
      urlSite: '',
      urlGithub: 'https://github.com/SterRoque/lista-facil-app',
      descriptionDetails:
         'O Lista Fácil App é um projeto desenvolvido para oferecer uma solução eficiente e intuitiva para a criação e gerenciamento de listas de compras. Com uma interface moderna e funcionalidades que facilitam o planejamento financeiro, o aplicativo ajuda os usuários a economizar tempo e dinheiro de forma prática.',
      technologies: [
         '<strong>Front-end:</strong> React Native, StyleSheet, TypeScript',
         '<strong>Banco de Dados:</strong> SQLite',
      ],
      features: [
         '<strong>Criação de Listas Personalizadas:</strong> Adicione produtos com nome, quantidade e preço unitário.',
         '<strong>Edição Simples:</strong> Modifique ou remova produtos com facilidade.',
         '<strong>Cálculo Automático:</strong> Soma automaticamente os valores dos itens para um melhor controle de gastos.',
      ],

      conclusion:
         'O Lista Fácil App é um projeto inovador que simplifica a experiência de compras, tornando-a mais organizada e econômica. Com tecnologia de ponta e um design intuitivo, ele se destaca como uma solução eficaz para qualquer consumidor.',

      stacks: ['React Native', 'StyleSheet', 'TypeScript', 'Figma', 'SQLite'],
   },

   {
      id: '5',
      title: 'SoftPet',
      img: '/imgs/softpet.png',
      imgScreens: ['/imgs/telas-softpet/tela-1.png'],

      description:
         'O SoftPet é um sistema web para gerenciamento de pets, onde o usuário pode cadastrar, buscar, editar e remover animais de forma simples e organizada. Cada pet fica vinculado ao seu tutor e exibe informações como raça, telefone e idade, tudo em uma interface moderna e intuitiva.',
      descriptionDetails:
         'O SoftPet é uma aplicação web desenvolvida para facilitar o gerenciamento de pets e seus tutores. Com uma interface moderna de tema escuro e detalhes em azul, o sistema oferece um CRUD completo, autenticação de usuário e uma listagem paginada com cards expansíveis que revelam os detalhes de cada animal. O objetivo é proporcionar uma experiência fluida e eficiente para o controle de cadastros.',

      urlSite: 'https://softpet.netlify.app/',
      urlGithub: 'https://github.com/SterRoque/softpet-frontend',

      technologies: [
         '<strong>Front-end:</strong> React, TypeScript, Tailwind',
         '<strong>Back-end:</strong> Node.js',
         '<strong>Banco de Dados:</strong> PostgreSQL',
      ],

      features: [
         '<strong>Cadastro de Pets:</strong> Registro de animais com nome, tutor, raça, telefone e idade.',
         '<strong>Busca:</strong> Pesquisa rápida para localizar pets já cadastrados.',
         '<strong>Cards Expansíveis:</strong> Cada card pode ser expandido para exibir os detalhes completos do pet.',
         '<strong>Edição e Remoção:</strong> Atualização e exclusão dos cadastros de forma prática.',
         '<strong>Autenticação:</strong> Acesso ao sistema por meio de login de usuário.',
         '<strong>Paginação:</strong> Navegação organizada entre as páginas de pets cadastrados.',
      ],

      conclusion:
         'O SoftPet demonstra a construção de uma aplicação web completa, unindo um front-end moderno e responsivo a um back-end com autenticação e operações de CRUD. O projeto reforça boas práticas de organização de código e usabilidade, entregando uma ferramenta eficiente para o gerenciamento de pets e seus tutores.',
      stacks: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'Nest.js', 'Prisma'],
   },

   {
      id: '6',
      title: 'Amigo Peludo',
      img: '/imgs/amigo-peludo.png',
      imgScreens: ['/imgs/telas-amigo-peludo/tela-desktop.png'],

      description:
         'Landing Page estatica de adoção de pets criando em angular apenas para fins de aprendizado',
      descriptionDetails:
         'A Amigo Peludo é uma landing page estática desenvolvida em Angular com o objetivo de simular uma plataforma de adoção de pets. Este projeto foi criado exclusivamente para fins de aprendizado, proporcionando uma experiência prática no desenvolvimento de interfaces estaticas.',

      urlSite: 'https://amigopeludo.netlify.app/',
      urlGithub: 'https://github.com/SterRoque/landing-page-pet',
      technologies: [
         '<strong>Front-end:</strong> Angular, Tailwind, TypeScript',
      ],

      features: [
         '<strong>Apresentação de Pets Disponíveis:</strong> Cards exibindo informações dos animais para adoção.',
         '<strong>Seção Informativa:</strong> Explica como funciona a adoção.',
      ],

      conclusion:
         'A landing page Amigo Peludo serviu como um excelente exercício para aprimorar o conhecimento em Angular. Embora seja um projeto simples, ele representa um passo importante no aprendizado da tecnologia e no desenvolvimento de interfaces interativas e intuitivas.',
      stacks: ['Angular', 'TypeScript', 'Tailwind'],
   },
   {
      id: '7',
      title: 'Sintese Proteica App',
      img: '/imgs/sintese.jpeg',
      imgScreens: [
         '/imgs/telas-sintese-proteica/tela-1.png',
         '/imgs/telas-sintese-proteica/tela-2.png',
         '/imgs/telas-sintese-proteica/tela-3.png',
         '/imgs/telas-sintese-proteica/tela-4.png',
         '/imgs/telas-sintese-proteica/tela-5.png',
         '/imgs/telas-sintese-proteica/tela-6.png',
         '/imgs/telas-sintese-proteica/tela-7.png',
         '/imgs/telas-sintese-proteica/tela-8.png',
         '/imgs/telas-sintese-proteica/tela-9.png',
      ],

      description:
         'Aplicativo Educacional voltado para demostrar processo de duplicação, transcrição e tradução do DNA.',

      descriptionDetails:
         'O aplicativo Síntese Proteica é uma ferramenta educacional interativa que visa demonstrar os processos de duplicação, transcrição e tradução do DNA. Com uma interface visual e dinâmica, ele facilita o aprendizado de biologia molecular, tornando conceitos complexos mais acessíveis para estudantes e professores. O foco é proporcionar uma experiência educativa interativa e envolvente.',
      urlSite: '',
      urlGithub: 'https://github.com/SterRoque/app-sintese-de-proteica',

      technologies: ['<strong>Front-end:</strong> React Native, NativeWind'],

      features: [
         '<strong>Duplicação do DNA:</strong> O aplicativo demonstra a conversão das fitas de DNA durante o processo de duplicação. O usuário pode optar por dois modos: <b>auto duplicação</b> (onde o processo ocorre automaticamente) ou modo manual (onde o usuário realiza o processo, convertendo as fitas de DNA por conta própria).',
         '<strong>Transcrição do DNA:</strong> Apresenta a conversão da fita de DNA em RNA mensageiro (mRNA). Assim como na duplicação, o usuário pode escolher entre <b>auto transcrição</b> (automática) ou <b>modo manual</b>, realizando a transcrição por conta própria.',
         '<strong>Tradução do RNA:</strong> Demonstra o processo de tradução do mRNA em uma sequência de aminoácidos para a formação de proteínas. o modo automático, o processo ocorre de forma automática, e no modo manual, o usuário converte as sequências de RNA para aminoácidos, utilizando a tabela de códons como auxílio.',
         '<strong>Histórico de Fitas de DNA:</strong> O aplicativo armazena um histórico das fitas de DNA trabalhadas, permitindo que o usuário acompanhe as modificações feitas durante os processos de duplicação, transcrição e tradução.',
      ],
      conclusion:
         'O Síntese Proteica oferece uma maneira inovadora de aprender sobre os processos biológicos fundamentais, utilizando simulações interativas para uma compreensão mais clara e dinâmica. A ferramenta visa enriquecer a educação em biologia, tornando o aprendizado mais acessível e estimulante, com planos de expansão para novos recursos e funcionalidades.',
      stacks: ['React Native', 'NativeWind'],
   },

];
