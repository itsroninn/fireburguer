/* ============ HERO: carrega só o vídeo do dispositivo atual (economia de dados) ============ */
(function(){
  const mob=matchMedia('(max-width:760px)').matches;
  const v=document.querySelector(mob?'.hero-video--mobile':'.hero-video--desktop');
  if(v&&v.dataset.src){
    v.preload='auto';
    const s=document.createElement('source'); s.src=v.dataset.src; s.type='video/mp4';
    v.appendChild(s); v.load();
    const p=v.play(); if(p&&p.catch) p.catch(()=>{});
  }
})();

/* ============ MENU DATA (cardápio completo do Saipos) ============ */
const MENU=[
  {cat:"burguers-artesanais",name:"Celestia",desc:"Pão tradicional, delicioso blend de costela, bacon, queijo cheddar e molho barbecue",price:"32,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-01-celestia.webp"},
  {cat:"burguers-artesanais",name:"Meggy",desc:"Pão tradicional, blend 150g, cebola crispy, bacon, queijo cheddar e molho especial maionese de ervas",price:"45,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-02-meggy.webp"},
  {cat:"burguers-artesanais",name:"Marinheiro seu burger de camarão",desc:"Pão Tradicional, Camarão ao Molho, Blend de Fraldinha de 150g, Queijo Cheddar, Molho de Catupiry, Alface, Tomate e Cebola",price:"50,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-03-marinheiro-seu-burger-de-camarao.webp"},
  {cat:"burguers-artesanais",name:"Lutero",desc:"1 blend de fraldinha 150g, 1 generosa porção de cebola caramelizada e aquele queijo provolone empanado que só o Fire sabe fazer.",price:"42,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-04-lutero.jpeg"},
  {cat:"burguers-artesanais",name:"Modesto",desc:"Pão Tradicional, Blend De Fraldinha 150g, Fatias De Bacon, Mussarela, Alface Tomate E Cebola Roxa",price:"32,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-05-modesto.webp"},
  {cat:"burguers-artesanais",name:"Eleanor",desc:"Pão tradicional, blend de frango moído com bacon, mussarela, cebola caramelizada, tomate, alface e cebola",price:"35,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-06-eleanor.webp"},
  {cat:"burguers-artesanais",name:"Heitor",desc:"Pão tradicional, blend de 150g de fraudinha, bacon, molho cheddar, abacaxi caramelizado com açúcar e canela.",price:"39,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-07-heitor.webp"},
  {cat:"burguers-artesanais",name:"Rochedo",desc:"Pão frances, blend de fraldinha 150g, blend suíno 150g, bacon, cheddar, alface, tomate e cebola.",price:"45,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-08-rochedo.jpeg"},
  {cat:"burguers-artesanais",name:"Corajoso",desc:"Pão tradicional, 3 blend's de fraldinha 150g, mussarela, bacon, creme de cheddar, cebola roxa, alface e tomate",price:"54,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-09-corajoso.webp"},
  {cat:"burguers-artesanais",name:"Guardião",desc:"Pão tradicional, blend de calabresa 150g, bacon, mussarela, cebola empanada, cebola roxa, tomate e alface",price:"39,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-10-guardiao.webp"},
  {cat:"burguers-artesanais",name:"Valioso",desc:"Pão tradicional, blend de fraldinha 150g, mussarela, bacon, molho gorgonzola, alface, tomate e cebola",price:"43,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-11-valioso.webp"},
  {cat:"burguers-artesanais",name:"Safira",desc:"Pão frances, especial blend de cordeiro 150g, bacon, mussarela, cebola empanada e molho cheddar.",price:"42,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-12-safira.jpeg"},
  {cat:"burguers-artesanais",name:"Guerreiro",desc:"Pão tradicional, blend de fraldinha 150g, blend de calabresa 150g, mussarela, bacon e cebola caramelizada",price:"48,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-13-guerreiro.webp"},
  {cat:"burguers-artesanais",name:"Tróia",desc:"Pão frances, blend de fraldinha 150g, bacon, queijo empanado e molho cheddar.",price:"49,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-14-troia.jpeg"},
  {cat:"burguers-artesanais",name:"Helena",desc:"Pão tradicional, perfeita combinação dos melhores blends 150g da casa, blend de costela, blend de cupim e blend de calabresa, muito bacon, mussarela, roxa e molho cheddar",price:"55,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-15-helena.webp"},
  {cat:"burguers-artesanais",name:"Agnes",desc:"Pão tradicional, blend de costela 150g, bacon, molho gorgonzola, cebola empanado e pimenta jalapeno",price:"42,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-16-agnes.webp"},
  {cat:"burguers-artesanais",name:"Valente",desc:"Pão tradicional, blend de fraldinha 150g, queijo coalho na chapa, cebola caramelizada, bacon, cebola roxa, alface e tomate",price:"39,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-17-valente.webp"},
  {cat:"burguers-artesanais",name:"Supremo",desc:"Pão tradicional, blend de fraldinha 150g, bacon, queijo cheddar, shimeji, alface, tomate e cebola",price:"43,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-18-supremo.webp"},
  {cat:"burguers-artesanais",name:"Divino",desc:"Pão australiano, 2 blend's de fraldinha 150g, bacon, mussarela, cebola caramelizada, cebola roxa, alface, tomate e cebola",price:"49,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-19-divino.webp"},
  {cat:"burguers-artesanais",name:"Nobre",desc:"Pão frances, Blend suíno 150g, Bacon, Mussarela, Cebola empanada, Molho cheddar, Cebola roxa, Alface e Tomate.",price:"43,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-20-nobre.jpeg"},
  {cat:"burguers-artesanais",name:"Agda",desc:"Pão tradicional, blend de 150g, cebola roxa passada na chapa, fatias de bacon, banana da terra, queijo cheddar, linguiça calabresa defumada e aquele creme cheese de responda.",price:"48,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-21-agda.webp"},
  {cat:"burguers-artesanais",name:"Valentina",desc:"Pão tradicional, combinação de blend de costela e cupim, bacon em dobro, mussarela, alface e cebola",price:"45,00",fire:0,tag:"",img:"img/cardapio/burguers-artesanais-22-valentina.webp"},
  {cat:"sanduiches-tradicional",name:"Super boy",desc:"Burguer, salsicha, presunto, queijo, bacon, milho, ervilha, tomate e alface",price:"35,00",fire:0,tag:"",img:"img/cardapio/sanduiches-tradicional-01-super-boy.webp"},
  {cat:"sanduiches-tradicional",name:"America burguer",desc:"Burguer, ovo, presunto, queijo, tomate e alface",price:"30,00",fire:0,tag:"",img:"img/cardapio/sanduiches-tradicional-02-america-burguer.webp"},
  {cat:"sanduiches-tradicional",name:"X egg bacon",desc:"Burguer, queijo, ovo, bacon, tomate, milho verde, ervilha e alface",price:"32,00",fire:0,tag:"",img:"img/cardapio/sanduiches-tradicional-03-x-egg-bacon.webp"},
  {cat:"pratos-gourmet",name:"Fettuccine com camarão",desc:"",price:"65,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-01-fettuccine-com-camarao.jpeg"},
  {cat:"pratos-gourmet",name:"Parmegiana de frango",desc:"",price:"55,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-02-parmegiana-de-frango.jpeg"},
  {cat:"pratos-gourmet",name:"Filé de Sobrecoxa do Chef",desc:"",price:"60,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-03-file-de-sobrecoxa-do-chef.jpeg"},
  {cat:"pratos-gourmet",name:"Carne do Sol Prime",desc:"",price:"65,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-04-carne-do-sol-prime.jpeg"},
  {cat:"pratos-gourmet",name:"Filé à parmegiana",desc:"",price:"60,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-05-file-a-parmegiana.jpeg"},
  {cat:"pratos-gourmet",name:"Camarão Alfredo",desc:"Camarão grelhado sobe fettuccine com molho Alfredo e bacon",price:"70,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-06-camarao-alfredo.jpeg"},
  {cat:"pratos-gourmet",name:"Risoto de filé mignon",desc:"Risoto de arroz arbóreo com cubos de filé mignon, finalizado com manteiga e parmesão",price:"50,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-07-risoto-de-file-mignon.jpeg"},
  {cat:"pratos-gourmet",name:"Carne do sol Alfredo",desc:"Carne do sertão desfiada sobe fettuccine ao molho Alfredo e bacon",price:"60,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-08-carne-do-sol-alfredo.jpeg"},
  {cat:"pratos-gourmet",name:"Fettuccine Alfredo c/ medalhão de filé ao molho gorgonzola",desc:"",price:"60,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-09-fettuccine-alfredo-c-medalhao-de-file-ao-molho-gorgonzola.jpeg"},
  {cat:"pratos-gourmet",name:"Risoto de camarão",desc:"Risoto de arroz arbóreo com camarões rosa, finalizado na manteiga e parmesão",price:"60,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-10-risoto-de-camarao.jpeg"},
  {cat:"pratos-gourmet",name:"Risoto de parmesão c/ medalhão de filé ao molho madeira",desc:"",price:"60,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-11-risoto-de-parmesao-c-medalhao-de-file-ao-molho-madeira.jpeg"},
  {cat:"pratos-gourmet",name:"Risoto de salmão",desc:"Risoto de arroz arbóreo com salmão, finalizado na manteiga e parmesão",price:"60,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-12-risoto-de-salmao.jpeg"},
  {cat:"pratos-gourmet",name:"Estrogonofe de frango",desc:"",price:"45,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-13-estrogonofe-de-frango.jpeg"},
  {cat:"pratos-gourmet",name:"Estrogonofe de filé mignon",desc:"",price:"50,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-14-estrogonofe-de-file-mignon.jpeg"},
  {cat:"pratos-gourmet",name:"Yakisoba de carne",desc:"",price:"45,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-15-yakisoba-de-carne.jpeg"},
  {cat:"pratos-gourmet",name:"Yakisoba de frango",desc:"",price:"40,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-16-yakisoba-de-frango.jpeg"},
  {cat:"pratos-gourmet",name:"Yakisoba de camarão",desc:"",price:"60,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-17-yakisoba-de-camarao.jpeg"},
  {cat:"pratos-gourmet",name:"Yakisoba misto carne/frango",desc:"",price:"55,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-18-yakisoba-misto-carne-frango.jpeg"},
  {cat:"pratos-gourmet",name:"Salmão grelhado ao molho de maracujá",desc:"",price:"65,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-19-salmao-grelhado-ao-molho-de-maracuja.jpeg"},
  {cat:"pratos-gourmet",name:"Medalhão de filé mignon ao molho madeira",desc:"",price:"60,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-20-medalhao-de-file-mignon-ao-molho-madeira.jpeg"},
  {cat:"pratos-gourmet",name:"Filé de tilápia gratinada",desc:"",price:"65,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-21-file-de-tilapia-gratinada.jpeg"},
  {cat:"pratos-gourmet",name:"Camarão internacional",desc:"",price:"65,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-22-camarao-internacional.jpeg"},
  {cat:"pratos-gourmet",name:"Picanha grelhada",desc:"",price:"70,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-23-picanha-grelhada.jpeg"},
  {cat:"pratos-gourmet",name:"Alcatra grelhada",desc:"",price:"60,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-24-alcatra-grelhada.jpeg"},
  {cat:"pratos-gourmet",name:"Camarão À Florentina",desc:"Espaguete, camarão flambado ao vinho branco, molho bechamel e espinafre",price:"65,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-25-camarao-a-florentina.jpeg"},
  {cat:"pratos-gourmet",name:"Espaguete Genovese",desc:"Espaguete, camarão, brócolis, tomate cereja e salsa",price:"65,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-26-espaguete-genovese.jpeg"},
  {cat:"pratos-gourmet",name:"Arroz Carreteiro",desc:"Arroz, carne do sol, josefina, milho, ervilha, bacon, queijo coalho e salsa",price:"50,00",fire:0,tag:"",img:"img/cardapio/pratos-gourmet-27-arroz-carreteiro.jpeg"},
  {cat:"gregos",name:"Aquiles 04",desc:"Tradicional pão francês, frango, mussarela e bacon",price:"30,00",fire:0,tag:"",img:"img/cardapio/gregos-01-aquiles-04.webp"},
  {cat:"gregos",name:"Milena 03",desc:"Tradicional pão francês, linguiça caseira, mussarela, bacon e cebola",price:"32,00",fire:0,tag:"",img:"img/cardapio/gregos-02-milena-03.webp"},
  {cat:"gregos",name:"Theo 06",desc:"Tradicional pão francês, filé, filé de frango, calabresa, queijo, bacon, ovo, cebola e tomate",price:"38,00",fire:0,tag:"",img:"img/cardapio/gregos-03-theo-06.webp"},
  {cat:"gregos",name:"Klaus 05",desc:"Tradicional pão francês, frango, mussarela, Catupiry bacon e cebola",price:"34,00",fire:0,tag:"",img:"img/cardapio/gregos-04-klaus-05.webp"},
  {cat:"gregos",name:"Agatha 01",desc:"Tradicional pão francês, carne, mussarela e bacon",price:"32,00",fire:0,tag:"",img:"img/cardapio/gregos-05-agatha-01.webp"},
  {cat:"gregos",name:"Tomás 02",desc:"Tradicional pão francês, filé de carne, mussarela, bacon, Catupiry e cebola",price:"36,00",fire:0,tag:"",img:"img/cardapio/gregos-06-tomas-02.webp"},
  {cat:"pasteis",name:"PASTEL DE HAMBURGUER",desc:"2 blends de fraldinha com 100g cada, e uma generosa camada de Cream Chesse.",price:"40,00",fire:0,tag:"",img:"img/cardapio/pasteis-01-pastel-de-hamburguer.jpeg"},
  {cat:"pasteis",name:"Pastel de queijo com bacon",desc:"",price:"32,00",fire:0,tag:"",img:"img/cardapio/pasteis-02-pastel-de-queijo-com-bacon.webp"},
  {cat:"pasteis",name:"Pastel de frango com Catupiry",desc:"",price:"30,00",fire:0,tag:"",img:"img/cardapio/pasteis-03-pastel-de-frango-com-catupiry.webp"},
  {cat:"pasteis",name:"Pastel de frango com queijo e bacon",desc:"",price:"30,00",fire:0,tag:"",img:"img/cardapio/pasteis-04-pastel-de-frango-com-queijo-e-bacon.webp"},
  {cat:"pasteis",name:"Pastel de queijo",desc:"",price:"25,00",fire:0,tag:"",img:"img/cardapio/pasteis-05-pastel-de-queijo.webp"},
  {cat:"pasteis",name:"Pastel De Queijo Presunto e Orégano",desc:"",price:"26,00",fire:0,tag:"",img:"img/cardapio/pasteis-06-pastel-de-queijo-presunto-e-oregano.webp"},
  {cat:"pasteis",name:"Pastel de carne com queijo e bacon",desc:"",price:"32,00",fire:0,tag:"",img:"img/cardapio/pasteis-07-pastel-de-carne-com-queijo-e-bacon.webp"},
  {cat:"pasteis",name:"Pastel de camarão com Catupiry",desc:"",price:"45,00",fire:0,tag:"",img:"img/cardapio/pasteis-08-pastel-de-camarao-com-catupiry.webp"},
  {cat:"pasteis",name:"Pastel de filé de frango, queijo, milho, azeitona e Catupiry",desc:"",price:"40,00",fire:0,tag:"",img:"img/cardapio/pasteis-09-pastel-de-file-de-frango-queijo-milho-azeitona-e-catupiry.webp"},
  {cat:"pasteis",name:"Pastel De Frango",desc:"",price:"26,00",fire:0,tag:"",img:"img/cardapio/pasteis-10-pastel-de-frango.webp"},
  {cat:"pasteis",name:"Pastel de filé, queijo, bacon e molho gorgonzola",desc:"",price:"45,00",fire:0,tag:"",img:"img/cardapio/pasteis-11-pastel-de-file-queijo-bacon-e-molho-gorgonzola.webp"},
  {cat:"pasteis",name:"Pastel de frango com queijo",desc:"",price:"28,00",fire:0,tag:"",img:"img/cardapio/pasteis-12-pastel-de-frango-com-queijo.webp"},
  {cat:"pasteis",name:"Pastel De Carne",desc:"",price:"28,00",fire:0,tag:"",img:"img/cardapio/pasteis-13-pastel-de-carne.webp"},
  {cat:"pasteis",name:"Pastel de carne com queijo",desc:"",price:"32,00",fire:0,tag:"",img:"img/cardapio/pasteis-14-pastel-de-carne-com-queijo.webp"},
  {cat:"pasteis",name:"Pastel de carne seca com banana da terra e queijo",desc:"",price:"40,00",fire:0,tag:"",img:"img/cardapio/pasteis-15-pastel-de-carne-seca-com-banana-da-terra-e-queijo.webp"},
  {cat:"pasteis",name:"Pastel de carne seca, queijo, cebola branca e azeitonas",desc:"",price:"40,00",fire:0,tag:"",img:"img/cardapio/pasteis-16-pastel-de-carne-seca-queijo-cebola-branca-e-azeitonas.webp"},
  {cat:"tapiocas",name:"Tapioca Peito de peru",desc:"Tapioca, queijo e peito de peru",price:"24,00",fire:0,tag:"",img:"img/cardapio/tapiocas-01-tapioca-peito-de-peru.webp"},
  {cat:"tapiocas",name:"Tapioca Frango",desc:"Tapioca, queijo, frango e bacon",price:"28,00",fire:0,tag:"",img:"img/cardapio/tapiocas-02-tapioca-frango.webp"},
  {cat:"tapiocas",name:"Tapioca Fire fit",desc:"Tapioca, ricota, cream cheese, peito de peru e tomate",price:"25,00",fire:0,tag:"",img:"img/cardapio/tapiocas-03-tapioca-fire-fit.webp"},
  {cat:"tapiocas",name:"Tapioca Pizza",desc:"Tapioca, queijo, presunto, tomate e orégano",price:"24,00",fire:0,tag:"",img:"img/cardapio/tapiocas-04-tapioca-pizza.webp"},
  {cat:"tapiocas",name:"Tapioca Bacon",desc:"Tapioca, queijo e bacon",price:"26,00",fire:0,tag:"",img:"img/cardapio/tapiocas-05-tapioca-bacon.webp"},
  {cat:"tapiocas",name:"Tapioca Crocante",desc:"Tapioca, frango desfiado, mussarela, e batata palha",price:"28,00",fire:0,tag:"",img:"img/cardapio/tapiocas-06-tapioca-crocante.webp"},
  {cat:"tapiocas",name:"Tapioca Caipira (frango)",desc:"Tapioca, filé de frango, milho, bacon, calabresa picada, mussarela e tomate",price:"36,00",fire:0,tag:"",img:"img/cardapio/tapiocas-07-tapioca-caipira-frango.webp"},
  {cat:"tapiocas",name:"Tapioca Nordestina (carne e frango)",desc:"Filé de carne, filé de frango, bacon, calabresa, mussarela, azeitona, tomate, orégano e cebola.",price:"45,00",fire:0,tag:"",img:"img/cardapio/tapiocas-08-tapioca-nordestina-carne-e-frango.webp"},
  {cat:"tapiocas",name:"Tapioca Carne seca",desc:"Tapioca, queijo, carne seca, banana frita, bacon e cebola",price:"36,00",fire:0,tag:"",img:"img/cardapio/tapiocas-09-tapioca-carne-seca.webp"},
  {cat:"petiscos",name:"COXINHA DA ASA",desc:"",price:"40,00",fire:0,tag:"",img:"img/cardapio/petiscos-01-coxinha-da-asa.jpeg"},
  {cat:"petiscos",name:"Nuggets chicken (12 und)",desc:"12 nuggetes chicken Acompanha maionese de bacon",price:"35,00",fire:0,tag:"",img:"img/cardapio/petiscos-02-nuggets-chicken-12-und.jpeg"},
  {cat:"batata-frita-insana",name:"Batata com Cheddar e Bacon",desc:"250g",price:"25,00",fire:0,tag:"",img:"img/cardapio/batata-frita-insana-01-batata-com-cheddar-e-bacon.webp"},
  {cat:"wrap-s",name:"Wrap de frango, mussarela, bacon e salada",desc:"",price:"36,00",fire:0,tag:"",img:"img/cardapio/wrap-s-01-wrap-de-frango-mussarela-bacon-e-salada.webp"},
  {cat:"wrap-s",name:"Wrap de filé, mussarela, bacon e salada",desc:"",price:"40,00",fire:0,tag:"",img:"img/cardapio/wrap-s-02-wrap-de-file-mussarela-bacon-e-salada.webp"},
  {cat:"porcoes",name:"6x bolinhas de queijo",desc:"6 unidades (tamanho festa)",price:"24,00",fire:0,tag:"",img:"img/cardapio/porcoes-01-6x-bolinhas-de-queijo.webp"},
  {cat:"porcoes",name:"6x croquete de bacalhau",desc:"6 unidades (tamanho festa)",price:"26,00",fire:0,tag:"",img:"img/cardapio/porcoes-02-6x-croquete-de-bacalhau.webp"},
  {cat:"porcoes",name:"6x coxinha",desc:"6 unidades (tamanho festa)",price:"24,00",fire:0,tag:"",img:"img/cardapio/porcoes-03-6x-coxinha.webp"},
  {cat:"porcoes",name:"6x boliviano",desc:"6 unidades (tamanho festa)",price:"24,00",fire:0,tag:"",img:"img/cardapio/porcoes-04-6x-boliviano.webp"},
  {cat:"mingau-500ml",name:"Arroz doce",desc:"",price:"30,00",fire:0,tag:"",img:"img/cardapio/mingau-500ml-01-arroz-doce.jpeg"},
  {cat:"mingau-500ml",name:"Munguzá",desc:"",price:"30,00",fire:0,tag:"",img:"img/cardapio/mingau-500ml-02-munguza.jpeg"},
  {cat:"saladas",name:"Bárbara",desc:"Filé de frango, bacon, mix de folhas, milho, tomate, cebola roxa e molho da casa.",price:"30,00",fire:0,tag:"",img:"img/cardapio/saladas-01-barbara.webp"},
  {cat:"saladas",name:"Diana",desc:"Filé de carne, bacon, mix de folhas, milho, tomate, cebola roxa e molho da casa",price:"42,00",fire:0,tag:"",img:"img/cardapio/saladas-02-diana.webp"},
  {cat:"saladas",name:"Minerva",desc:"Salmão, bacon, mix de folhas, milho, tomate, cebola roxa e molho da casa.",price:"50,00",fire:0,tag:"",img:"img/cardapio/saladas-03-minerva.webp"},
  {cat:"bebidas",name:"Suco de morango (Fruta)",desc:"400ml",price:"16,00",fire:0,tag:"",img:"img/cardapio/bebidas-01-suco-de-morango-fruta.webp"},
  {cat:"bebidas",name:"Suco de morango com leite (Fruta)",desc:"400ml",price:"20,00",fire:0,tag:"",img:"img/cardapio/bebidas-02-suco-de-morango-com-leite-fruta.webp"},
  {cat:"bebidas",name:"Suco de caju (polpa)",desc:"400ml",price:"15,00",fire:0,tag:"",img:"img/cardapio/bebidas-03-suco-de-caju-polpa.webp"},
  {cat:"bebidas",name:"Suco de cupuaçu (polpa)",desc:"400ml",price:"15,00",fire:0,tag:"",img:"img/cardapio/bebidas-04-suco-de-cupuacu-polpa.webp"},
  {cat:"bebidas",name:"Fanta laranja 350ml gelada",desc:"Fanta laranja 350ml gelada",price:"7,00",fire:0,tag:"",img:"img/cardapio/bebidas-05-fanta-laranja-350ml-gelada.webp"},
  {cat:"bebidas",name:"Água mineral cristal s/g 500ml gelada",desc:"Água mineral cristal s/g 500ml gelada",price:"6,00",fire:0,tag:"",img:"img/cardapio/bebidas-06-agua-mineral-cristal-s-g-500ml-gelada.webp"},
  {cat:"bebidas",name:"Suco de cajá (polpa)",desc:"400ml",price:"15,00",fire:0,tag:"",img:"img/cardapio/bebidas-07-suco-de-caja-polpa.webp"},
  {cat:"bebidas",name:"Agua mineral com gás",desc:"Agua mineral com gás",price:"6,00",fire:0,tag:"",img:"img/cardapio/bebidas-08-agua-mineral-com-gas.webp"},
  {cat:"bebidas",name:"Suco de umbu (polpa)",desc:"400ml",price:"15,00",fire:0,tag:"",img:"img/cardapio/bebidas-09-suco-de-umbu-polpa.webp"},
  {cat:"bebidas",name:"Suco de Umbu com leite",desc:"",price:"20,00",fire:0,tag:"",img:"img/cardapio/bebidas-10-suco-de-umbu-com-leite.jpeg"},
  {cat:"bebidas",name:"Suco de Manga (Poupa)",desc:"400ml",price:"15,00",fire:0,tag:"",img:"img/cardapio/bebidas-11-suco-de-manga-poupa.webp"},
  {cat:"bebidas",name:"Suco de goiaba (polpa)",desc:"400ml",price:"15,00",fire:0,tag:"",img:"img/cardapio/bebidas-12-suco-de-goiaba-polpa.webp"},
  {cat:"bebidas",name:"Coca cola lata 350ml gelada",desc:"Coca cola lata 350ml gelada",price:"7,00",fire:0,tag:"",img:"img/cardapio/bebidas-13-coca-cola-lata-350ml-gelada.webp"},
  {cat:"bebidas",name:"Coca cola sem açúcar 350ml gelada",desc:"Coca cola sem açúcar 350ml gelada",price:"7,00",fire:0,tag:"",img:"img/cardapio/bebidas-14-coca-cola-sem-acucar-350ml-gelada.webp"},
  {cat:"bebidas",name:"Suco de cacau (polpa)",desc:"400ml",price:"15,00",fire:0,tag:"",img:"img/cardapio/bebidas-15-suco-de-cacau-polpa.webp"},
  {cat:"bebidas",name:"Suco de cacau com leite (polpa)",desc:"400ml",price:"20,00",fire:0,tag:"",img:"img/cardapio/bebidas-16-suco-de-cacau-com-leite-polpa.webp"},
  {cat:"bebidas",name:"Guaraná lata 350ml",desc:"",price:"7,00",fire:0,tag:"",img:"img/cardapio/bebidas-17-guarana-lata-350ml.webp"},
  {cat:"bebidas",name:"Abacaxi com hortelã (Poupa)",desc:"400ml",price:"20,00",fire:0,tag:"",img:"img/cardapio/bebidas-18-abacaxi-com-hortela-poupa.webp"},
  {cat:"bebidas",name:"Suco de abacaxi (polpa)",desc:"400ml",price:"15,00",fire:0,tag:"",img:"img/cardapio/bebidas-19-suco-de-abacaxi-polpa.webp"},
  {cat:"bebidas",name:"Guaraná 1l",desc:"",price:"12,00",fire:0,tag:"",img:"img/cardapio/bebidas-20-guarana-1l.webp"},
  {cat:"bebidas",name:"Suco de laranja (Fruta)",desc:"400ml",price:"15,00",fire:0,tag:"",img:"img/cardapio/bebidas-21-suco-de-laranja-fruta.webp"},
  {cat:"bebidas",name:"Laranja com morango (Fruta)",desc:"400ml",price:"20,00",fire:0,tag:"",img:"img/cardapio/bebidas-22-laranja-com-morango-fruta.webp"},
  {cat:"bebidas",name:"Coca cola 1lt gelada",desc:"Coca cola 1lt gelada",price:"12,00",fire:0,tag:"",img:"img/cardapio/bebidas-23-coca-cola-1lt-gelada.webp"},
  {cat:"bebidas",name:"Coca Cola Zero 1l",desc:"",price:"12,00",fire:0,tag:"",img:"img/cardapio/bebidas-24-coca-cola-zero-1l.webp"},
  {cat:"bebidas",name:"Suco de acerola (polpa)",desc:"400ml",price:"15,00",fire:0,tag:"",img:"img/cardapio/bebidas-25-suco-de-acerola-polpa.webp"},
  {cat:"bebidas",name:"Coca cola 2 litros",desc:"2 litros",price:"20,00",fire:0,tag:"",img:"img/cardapio/bebidas-26-coca-cola-2-litros.webp"},
  {cat:"bebidas",name:"Suco de maracujá (polpa)",desc:"400ml",price:"15,00",fire:0,tag:"",img:"img/cardapio/bebidas-27-suco-de-maracuja-polpa.webp"},
  {cat:"bebidas",name:"Acerola com laranja (Poupa)",desc:"400ml",price:"15,00",fire:0,tag:"",img:"img/cardapio/bebidas-28-acerola-com-laranja-poupa.webp"},
  {cat:"bebidas",name:"Maracujá com leite (Poupa)",desc:"400ml",price:"20,00",fire:0,tag:"",img:"img/cardapio/bebidas-29-maracuja-com-leite-poupa.webp"},
  {cat:"bebidas",name:"Limonada (Fruta)",desc:"400ml",price:"15,00",fire:0,tag:"",img:"img/cardapio/bebidas-30-limonada-fruta.webp"},
  {cat:"bebidas",name:"Limoda Suíça (Fruta)",desc:"400ml",price:"22,00",fire:0,tag:"",img:"img/cardapio/bebidas-31-limoda-suica-fruta.webp"},
  {cat:"cervejas-long-neck",name:"Heineken 0,0",desc:"",price:"14,00",fire:0,tag:"",img:"img/about-combo-fire.png"},
  {cat:"cervejas-long-neck",name:"Heineken",desc:"",price:"14,00",fire:0,tag:"",img:"img/about-combo-fire.png"},
  {cat:"cervejas-long-neck",name:"Budweiser",desc:"",price:"12,00",fire:0,tag:"",img:"img/about-combo-fire.png"},
  {cat:"cervejas-long-neck",name:"Stella Artois",desc:"",price:"12,00",fire:0,tag:"",img:"img/about-combo-fire.png"},
  {cat:"cervejas-long-neck",name:"Corona Extra",desc:"",price:"14,00",fire:0,tag:"",img:"img/about-combo-fire.png"},
  {cat:"cervejas-long-neck",name:"Eisenbahn",desc:"",price:"12,00",fire:0,tag:"",img:"img/about-combo-fire.png"},
  {cat:"milk-shakes",name:"Milk Shake Morango",desc:"400ml",price:"30,00",fire:0,tag:"",img:"img/cardapio/milk-shakes-01-milk-shake-morango.webp"},
  {cat:"milk-shakes",name:"Milk Shake Oreo",desc:"400ml",price:"30,00",fire:0,tag:"",img:"img/cardapio/milk-shakes-02-milk-shake-oreo.webp"},
  {cat:"milk-shakes",name:"Milk Shake Coco",desc:"400ml",price:"30,00",fire:0,tag:"",img:"img/cardapio/milk-shakes-03-milk-shake-coco.webp"},
  {cat:"milk-shakes",name:"Milk Shake Ovomaltine",desc:"400ml",price:"30,00",fire:0,tag:"",img:"img/cardapio/milk-shakes-04-milk-shake-ovomaltine.webp"},
  {cat:"milk-shakes",name:"Milk Shake Chocolate",desc:"400ml",price:"30,00",fire:0,tag:"",img:"img/cardapio/milk-shakes-05-milk-shake-chocolate.webp"},
  {cat:"acais",name:"Açai com banana e morango 400ml",desc:"",price:"50,00",fire:0,tag:"",img:"img/about-combo-fire.png"}
];
const CAT_LABELS={"burguers-artesanais":"Burguers artesanais","sanduiches-tradicional":"Sanduíches tradicional","pratos-gourmet":"Pratos Gourmet","gregos":"Gregos","pasteis":"Pastéis","tapiocas":"Tapiocas","petiscos":"Petiscos","batata-frita-insana":"Batata frita insana","wrap-s":"Wrap's","porcoes":"Porções","mingau-500ml":"Mingau 500ml","saladas":"Saladas","bebidas":"Bebidas","cervejas-long-neck":"Cervejas Long Neck","milk-shakes":"Milk shakes","acais":"Açaís"};
const CAT_ORDER=["burguers-artesanais","sanduiches-tradicional","pratos-gourmet","gregos","pasteis","tapiocas","petiscos","batata-frita-insana","wrap-s","porcoes","mingau-500ml","saladas","bebidas","cervejas-long-neck","milk-shakes","acais"];
const ORDER_URL="https://fireburgerpizzascaldosegourmet.saipos.com/home";
const grid=document.getElementById('menuGrid');
function fireIcons(n){let s='';for(let i=0;i<3;i++){s+=`<svg class="svgi" style="opacity:${i<n?1:.22}"><use href="#ic-fire"/></svg>`;}return s;}
function render(filter){
  grid.innerHTML="";
  const SIMPLE=["cervejas-long-neck","acais"];   // só nome + valor
  MENU.filter(m=>filter==="all"||m.cat===filter).forEach((m,i)=>{
    const a=document.createElement('article');
    if(SIMPLE.includes(m.cat)){
      a.className="card card--simple reveal d"+((i%3)+1);
      a.innerHTML=`
      <div class="card-body">
        <h3>${m.name}</h3>
        <div class="card-foot">
          <div class="price"><small>R$</small>${m.price}</div>
          <a class="card-add" href="${ORDER_URL}" target="_blank" rel="noopener" aria-label="Pedir ${m.name}">+</a>
        </div>
      </div>`;
    } else {
      a.className="card reveal d"+((i%3)+1);
      a.innerHTML=`
      <div class="card-img">
        <span class="card-fire" title="Nível de pegada">${fireIcons(m.fire)}</span>
        ${m.tag?`<span class="card-tag">${m.tag}</span>`:""}
        <img loading="lazy" alt="${m.name}" src="${m.img}" onerror="this.src='img/real04.jpg'">
      </div>
      <div class="card-body">
        <h3>${m.name}</h3>
        <p>${m.desc}</p>
        <div class="card-foot">
          <div class="price"><small>R$</small>${m.price}</div>
          <a class="card-add" href="${ORDER_URL}" target="_blank" rel="noopener" aria-label="Pedir ${m.name}">+</a>
        </div>
      </div>`;
    }
    grid.appendChild(a);
  });
  observeReveals();
  if(window.__premium3DTag) window.__premium3DTag();  // re-aplica o efeito 3D nos cards recriados
}
const _filters=document.getElementById('filters');
if(_filters) _filters.addEventListener('click',e=>{
  const b=e.target.closest('.filter');if(!b||!b.dataset.f)return;
  document.querySelectorAll('.filter').forEach(f=>f.classList.remove('active'));
  b.classList.add('active');render(b.dataset.f);
});

/* ============ REVEAL ON SCROLL ============ */
let io;
function observeReveals(){
  if(!io){
    io=new IntersectionObserver((es)=>{es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{threshold:.12});
  }
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));
}

/* ============ NAV ============ */
const nav=document.getElementById('nav');
addEventListener('scroll',()=>{nav.classList.toggle('scrolled',scrollY>40);},{passive:true});
const navLinks=document.getElementById('navLinks');
const burgerIco=document.getElementById('burgerIco');
function setMenu(open){
  navLinks.classList.toggle('open',open);
  burgerIco.classList.toggle('open',open);
  nav.classList.toggle('menu-open',open);
  document.body.classList.toggle('menu-open',open);
  burgerIco.setAttribute('aria-expanded',open ? 'true' : 'false');
}
burgerIco.addEventListener('click',()=>{
  setMenu(!navLinks.classList.contains('open'));
});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  setMenu(false);
}));

/* ============ HERO LINES REVEAL ============ */
addEventListener('load',()=>{
  document.querySelectorAll('.hero h1 .line>span').forEach((s,i)=>{
    setTimeout(()=>s.style.transform="translateY(0)",250+i*140);
  });
});

/* ============ CARROSSEL INFINITO ============ */
/* Duplica os itens de cada track: a animação anda até -50%, então a 2ª cópia
   assume o lugar da 1ª sem "pulo" — loop contínuo e perfeito. */
document.querySelectorAll('#burgerCarousel .carousel-track, .rb-track').forEach(track=>{
  track.innerHTML += track.innerHTML;   // duplica o conteúdo (cards de imagens)
});

/* Partículas/luzes douradas e laranja espalhadas no fundo */
(function buildSparks(){
  const tones=['#ffb23a','#ff7a18','#ffd27a','#ff5a1f'];
  function fill(box){
    if(!box) return;
    const n=Math.min(34,Math.floor(innerWidth/40));
    let html='';
    for(let i=0;i<n;i++){
      const s=(Math.random()*3+1.5).toFixed(1);          // tamanho 1.5–4.5px
      const c=tones[i%tones.length];
      html+=`<span class="spark" style="left:${(Math.random()*100).toFixed(2)}%;top:${(Math.random()*100).toFixed(2)}%;`+
            `width:${s}px;height:${s}px;background:${c};box-shadow:0 0 ${(s*2.5).toFixed(0)}px ${c};`+
            `animation-delay:${(Math.random()*4).toFixed(2)}s;animation-duration:${(Math.random()*3+3).toFixed(2)}s"></span>`;
    }
    box.innerHTML=html;
  }
  fill(document.getElementById('gallerySparks'));

  /* MUITAS BRASAS subindo no fundo (Pratos da Casa, Contato, etc.) */
  function buildEmbers(box){
    if(!box) return;
    const n=Math.min(120,Math.max(60,Math.floor(innerWidth/16)));
    let html='';
    for(let i=0;i<n;i++){
      const s=(Math.random()*3.2+1.2).toFixed(1);            // 1.2–4.4px
      const c=tones[i%tones.length];
      const dur=(Math.random()*6+4).toFixed(2);              // 4–10s
      const rise=(Math.random()*340+260).toFixed(0);         // 260–600px
      const drift=(Math.random()*120-60).toFixed(0);         // -60..60px
      html+=`<span class="ember" style="left:${(Math.random()*100).toFixed(2)}%;`+
            `width:${s}px;height:${s}px;background:${c};box-shadow:0 0 ${(s*3).toFixed(0)}px ${c},0 0 ${(s*6).toFixed(0)}px rgba(255,90,20,.5);`+
            `--rise:${rise}px;--drift:${drift}px;animation-duration:${dur}s;animation-delay:-${(Math.random()*dur).toFixed(2)}s"></span>`;
    }
    box.innerHTML=html;
  }
  buildEmbers(document.getElementById('pratosSparks'));
  buildEmbers(document.getElementById('contatoSparks'));
})();

/* ============ EFEITO 3D PREMIUM ============ */
/* Aplica as classes reutilizáveis e um tilt 3D leve (opcional) seguindo o mouse.
   Seguro: não dá erro se os elementos não existirem; tilt só em ponteiro fino (desktop). */
(function premium3D(){
  const reduce  = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const canTilt = matchMedia('(hover:hover) and (pointer:fine)').matches && !reduce;

  // marca elementos com as classes; "tilt" adiciona data-tilt só onde faz sentido
  function tag(selector, variant, tilt){
    document.querySelectorAll(selector).forEach(el=>{
      el.classList.add('premium-3d', variant);
      if(tilt && canTilt) el.setAttribute('data-tilt','');
    });
  }
  function applyAll(){
    tag('.btn:not(.btn--ghost)','premium-3d--btn',false); // botões principais
    tag('.card','premium-3d--card',true);                 // cards do menu (dinâmicos)
    tag('.ccard','premium-3d--card',true);                // cards do carrossel
    tag('.pillar','premium-3d--selo',true);               // selos/blocos de destaque
  }
  applyAll();
  // exposto p/ re-aplicar nos cards recriados quando o menu é filtrado
  window.__premium3DTag = applyAll;

  if(!canTilt) return; // mobile/touch ou movimento reduzido: fica só o CSS (hover/active)

  // Tilt por delegação → cobre cards criados depois (filtros do menu)
  let raf=0, cur=null;
  const reset = el => { if(el) el.style.transform=''; };
  document.addEventListener('pointermove', e=>{
    const el = e.target.closest('[data-tilt]');
    if(el!==cur){ reset(cur); cur=el; }
    if(!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left)/r.width  - .5;
    const py = (e.clientY - r.top )/r.height - .5;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(()=>{
      el.style.transform =
        `perspective(900px) rotateX(${(-py*6).toFixed(2)}deg) rotateY(${(px*8).toFixed(2)}deg) translateY(-7px) scale(1.02)`;
    });
  },{passive:true});
  // garante o reset ao sair da janela
  window.addEventListener('blur', ()=>{ reset(cur); cur=null; });
})();

/* ============ LAYERS STAGGER ============ */
const layers=document.getElementById('layers');
if(layers){
  new IntersectionObserver((es,o)=>{es.forEach(en=>{if(en.isIntersecting){
    [...layers.children].forEach((li,i)=>setTimeout(()=>li.classList.add('in'),i*130));o.disconnect();}});},{threshold:.3}).observe(layers);
}

/* ============ COUNT UP ============ */
function countUp(el){
  const target=parseFloat(el.dataset.count),dec=+(el.dataset.dec||0),suf=el.dataset.suffix||"";
  let start=0;const dur=1600,t0=performance.now();
  function step(t){
    const p=Math.min((t-t0)/dur,1),e=1-Math.pow(1-p,3),val=target*e;
    let out=dec?val.toFixed(dec):Math.floor(val).toLocaleString('pt-BR');
    if(!dec&&target>=1000)out=(Math.floor(val/100)/10).toFixed(0)>=1&&target>=14000?Math.floor(val).toLocaleString('pt-BR'):out;
    el.textContent=out+suf;
    if(p<1)requestAnimationFrame(step);else el.textContent=(dec?target.toFixed(dec):target.toLocaleString('pt-BR'))+suf;
  }
  requestAnimationFrame(step);
}
document.querySelectorAll('.stat .num').forEach(n=>{
  new IntersectionObserver((es,o)=>{es.forEach(en=>{if(en.isIntersecting){countUp(en.target);o.disconnect();}});},{threshold:.6}).observe(n);
});

/* ============ EMBERS CANVAS ============ */
const cv=document.getElementById('embers');
if(cv){
const cx2=cv.getContext('2d');
let W,H,parts=[];
function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;}
size();addEventListener('resize',size);
const N=Math.min(70,Math.floor(innerWidth/22));
for(let i=0;i<N;i++)parts.push(newP(true));
function newP(init){return{x:Math.random()*W,y:init?Math.random()*H:H+10,r:Math.random()*2.4+.6,
  vy:-(Math.random()*.7+.25),vx:(Math.random()-.5)*.4,life:Math.random(),hue:Math.random()*30+10,a:Math.random()*.6+.2};}
function tick(){
  cx2.clearRect(0,0,W,H);
  parts.forEach((p,i)=>{
    p.y+=p.vy;p.x+=p.vx+Math.sin(p.y*.01)*.3;p.life-=.002;
    if(p.y<-10||p.life<=0)parts[i]=newP(false);
    cx2.beginPath();
    const g=cx2.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*3);
    g.addColorStop(0,`hsla(${p.hue},100%,60%,${p.a})`);
    g.addColorStop(1,`hsla(${p.hue},100%,50%,0)`);
    cx2.fillStyle=g;cx2.arc(p.x,p.y,p.r*3,0,6.28);cx2.fill();
  });
  requestAnimationFrame(tick);
}
tick();
}

/* ============ OPEN/CLOSED PILL ============ */
(function(){
  const h=new Date().getHours();
  const pill=document.getElementById('openPill');
  if(!pill)return;
  const open=h>=18||h<1; // 18h–01h
  pill.textContent=open?"Aberto agora":"Fechado";
  if(!open){pill.style.background="#ff6b6b";pill.style.color="#3d0a0a";}
})();

/* ============ WHATSAPP: fagulhas e cinzas voando no hover ============ */
(function(){
  const wa=document.querySelector('.wa-float');
  if(!wa) return;
  // camadas de realismo (lava, cracks, chama, fumaça) acesas no hover
  ['wa-lava','wa-crack','wa-flame','wa-smoke'].forEach(c=>{
    const s=document.createElement('span'); s.className='wa-fx '+c; wa.appendChild(s);
  });
  if(matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  let emit=false,timer;
  function spawn(){
    if(!emit) return;
    const a=document.createElement('span');
    a.className='wa-ash';
    const ax=(40+Math.random()*80).toFixed(0);            // voa p/ direita
    const ay=(-(30+Math.random()*80)).toFixed(0);         // e p/ cima
    const sz=(Math.random()*3+2).toFixed(1);
    const dur=(Math.random()*0.7+0.7).toFixed(2);
    const ash=Math.random()<0.45;                          // ~45% viram cinza
    a.style.cssText=`--ax:${ax}px;--ay:${ay}px;width:${sz}px;height:${sz}px;`+
      (ash?`background:#777;box-shadow:0 0 4px #2e2e2e;`
          :`background:#ffb23a;box-shadow:0 0 6px #ff6a18,0 0 12px rgba(255,61,16,.7);`)+
      `animation:waAshFly ${dur}s ease-out forwards`;
    wa.appendChild(a);
    setTimeout(()=>a.remove(),1500);
    timer=setTimeout(spawn,55+Math.random()*70);
  }
  wa.addEventListener('mouseenter',()=>{emit=true;spawn();});
  wa.addEventListener('mouseleave',()=>{emit=false;clearTimeout(timer);});
  wa.addEventListener('pointerdown',()=>{for(let i=0;i<14;i++){const e=emit;emit=true;spawn();emit=e;}}); // estouro no clique
})();

/* init */
if(grid){
  const fbox=document.getElementById('filters');
  if(fbox){
    const N=6; // categorias visíveis antes do "Ver mais"
    fbox.innerHTML=CAT_ORDER.map((c,i)=>'<button class="filter'+(i===0?' active':'')+(i>=N?' filter--extra':'')+'" data-f="'+c+'">'+(CAT_LABELS[c]||c)+'</button>').join('')
      +(CAT_ORDER.length>N?'<button type="button" class="filter filter-more" id="filterMore" aria-expanded="false">Ver mais</button>':'');
    const more=document.getElementById('filterMore');
    if(more) more.addEventListener('click',()=>{
      const open=fbox.classList.toggle('show-all');
      more.textContent=open?'Ver menos':'Ver mais';
      more.setAttribute('aria-expanded',open?'true':'false');
    });
  }
  render(CAT_ORDER[0]);
}
observeReveals();
