(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const V={topic:"Saneamiento"},ne=[{id:"t1",title:"Las partes de la red",lead:"El agua usada baja por gravedad desde cada aparato hasta la calle. Cada tramo tiene su nombre.",points:["<b>Desagüe:</b> el tubo que sale de un aparato (lavabo, ducha…) y llega a otro mayor.","<b>Derivación:</b> el tubo que recoge varios desagües antes de la bajante.","<b>Manguetón:</b> el desagüe del inodoro. A veces hace también de derivación.","<b>Bajante:</b> el tubo vertical que baja por todo el edificio.","<b>Colector:</b> el tubo horizontal, colgado, que recoge las bajantes y saca el agua del edificio.","<b>Albañal:</b> el tramo enterrado que une el edificio con el alcantarillado."],source:"UD2.1, apartado 7",diagram:"network",scenes:["Vamos a seguir el agua desde que sale de un lavabo hasta que llega a la calle. Todo el camino lo hace por gravedad, siempre hacia abajo.","Primero, el desagüe: el tubo corto que sale de cada aparato, como este lavabo.","Los desagües se juntan en la derivación, que lleva el agua hasta la bajante. El desagüe del inodoro tiene nombre propio: el manguetón.","La bajante es el tubo vertical que recorre todo el edificio. Por arriba sigue hasta la cubierta, para que entre aire.","Abajo, el colector va colgado, casi horizontal, y recoge el agua de las bajantes.","Y el último tramo, enterrado, es el albañal: une el edificio con el alcantarillado de la calle."],summary:[{big:"Desagüe",label:"sale de cada aparato"},{big:"Bajante",label:"baja en vertical"},{big:"Colector",label:"en horizontal, a la calle"}]},{id:"t1b",title:"Desagües y pendientes",lead:"Los tubos cortos que salen de los aparatos van con la pendiente justa para que el agua baje sola, sin atascos ni ruidos, hasta la bajante.",points:["<b>Trazado sencillo:</b> por gravedad, sin cambios bruscos de dirección y con las piezas especiales de cada giro.","<b>Lavabos, bidés, fregaderos y lavaderos</b> con sifón propio: como mucho a <b>4,00 m</b> de la bajante, con una pendiente del <b>2,5 al 5 %</b>.","<b>Bañeras y duchas:</b> pendiente del <b>10 %</b> como máximo.","<b>Inodoro:</b> a la bajante directamente o con un manguetón de <b>1,00 m</b> como mucho.","<b>Bote sifónico:</b> a <b>2,00 m</b> como mucho de la bajante, y los ramales que le llegan, de <b>2,50 m</b> como mucho y con un 2 a 4 % de pendiente.","Las uniones con la bajante, lo más inclinadas posible y nunca a menos de <b>45°</b>. La derivación lleva en su cabecera un tapón roscado para poder limpiarla."],source:"DB HS 5, apartado 3.3.1.2",diagram:"slope",scenes:["Ahora miramos de cerca los desagües: los tubos cortos que llevan el agua de cada aparato hasta la bajante. Todos bajan solos, por gravedad.","El lavabo va como mucho a cuatro metros de la bajante, con una pendiente entre el dos y medio y el cinco por ciento. Lo mismo el bidé, el fregadero y el lavadero.","En la bañera y la ducha la pendiente es como mucho del diez por ciento.","El inodoro descarga mucha agua de golpe: va directo a la bajante o con un manguetón de un metro como mucho.","Al llegar a la bajante, el tubo entra lo más inclinado posible, nunca a menos de cuarenta y cinco grados, para no frenar el agua que ya baja.","Y en la cabecera de la derivación, un tapón roscado: así se puede abrir y limpiar si un día se atasca."],summary:[{big:"4,00 m",label:"lavabo hasta la bajante"},{big:"2,5–5 %",label:"pendiente del lavabo"},{big:"1,00 m",label:"manguetón del inodoro"}]},{id:"t2",title:"El cierre hidráulico",lead:"Un poco de agua que se queda retenida en un punto bajo y no deja que los gases de la red entren en la vivienda.",points:["Tipos: sifón individual (uno por aparato), bote sifónico (para varios aparatos del mismo cuarto), sumidero sifónico y arqueta sifónica.","Altura del agua retenida: <b>50 mm</b> como mínimo en uso continuo, <b>70 mm</b> en uso discontinuo y <b>100 mm</b> como máximo.","No se ponen en serie: si hay bote sifónico, esos aparatos no llevan sifón propio.","Fregaderos, lavaderos, lavadoras y lavavajillas van siempre con sifón individual.","El bote sifónico, como mucho a <b>2,00 m</b> de la bajante."],source:"DB HS 5, apartados 3.3.1.1 y 3.3.1.2",diagram:"trap",scenes:["Por dentro de la red de saneamiento circulan gases que huelen mal. Si nada los frena, subirían por el desagüe hasta la vivienda.","La solución es el cierre hidráulico: un poco de agua que se queda retenida en la curva del sifón cada vez que se usa el aparato.","Ahora los gases llegan hasta la curva, pero el agua les tapa el paso.","La norma pide una altura de agua de al menos cincuenta milímetros en uso continuo y setenta en uso discontinuo. Y como mucho, cien.","Un detalle importante: los cierres no se ponen en serie. Si hay bote sifónico, esos aparatos no llevan sifón propio, y el bote va a dos metros como mucho de la bajante."],summary:[{big:"50 mm",label:"mínimo, uso continuo"},{big:"70 mm",label:"mínimo, uso discontinuo"},{big:"100 mm",label:"máximo"}]},{id:"t2b",title:"Por qué se vacía un sifón",lead:"Un sifón solo protege mientras guarda su agua. A veces es el propio desagüe el que se la lleva, y entonces los gases entran en la vivienda.",points:["<b>Sifonado:</b> si el tubo que sale del sifón baja lleno de agua, el agua que cae tira de la que queda detrás, como al trasvasar con una goma, y vacía el cierre.","<b>Autosucción:</b> al acabar la descarga, el último trozo de agua hace de émbolo: deja un vacío detrás y arrastra el agua del sifón. Pasa aunque el tubo no vaya lleno, con menos fuerza.","Cuanto más lejos está el cierre de una entrada de aire, más se nota. Por eso los lavabos y fregaderos van como mucho a <b>4,00 m</b> de la bajante.","<b>Soluciones:</b> un tubo mayor para que no baje lleno (caro), la salida más alta que la entrada (no siempre se puede) o meter aire después del sifón con <b>ventilación terciaria</b>, obligatoria con ramales de más de <b>5 m</b>.","El DB HS 5 no admite sifones antisucción ni ningún otro que pueda vaciarse por sifonamiento."],source:"UD2.1, apartados 2, 4 y 5; DB HS 5, 3.3.1.2, 3.3.3.3 y 5.1.2",diagram:"siphon",scenes:["Un sifón solo protege mientras guarda su agua. Vamos a ver cómo la puede perder por culpa del propio desagüe.","Si el tubo que sale del sifón baja lleno de agua, el agua que cae tira de la que queda detrás, como cuando se trasvasa con una goma. Eso es el sifonado.","Y aunque el tubo no vaya lleno, el último trozo de agua de la descarga funciona como un émbolo: deja un vacío detrás y se lleva el agua del sifón. Es la autosucción.","Sin agua en el sifón, ya no hay cierre: los gases de la red suben libres hasta la vivienda.","La solución más segura es dejar entrar aire justo después del sifón. Es la ventilación terciaria: con aire, el sifonado se corta y el cierre conserva su agua.","Por eso la norma pone límites: el lavabo, como mucho a cuatro metros de la bajante, y ventilación terciaria cuando los ramales pasan de cinco metros."],summary:[{big:"Sifonado",label:"el tubo lleno vacía el cierre"},{big:"Émbolo",label:"el último trozo de agua aspira"},{big:"> 5 m",label:"ramal: ventilación terciaria"}]},{id:"t3",title:"La ventilación",lead:"Al caer, el agua empuja el aire de la bajante y luego lo aspira. Sin ventilación, esas presiones vacían los cierres hidráulicos.",points:["<b>Primaria:</b> la bajante sube por encima de la cubierta: <b>1,30 m</b> si no se pisa y <b>2,00 m</b> si es transitable. Basta sola con menos de 7 plantas.","<b>Secundaria:</b> una columna paralela a la bajante, unida a ella en plantas alternas (menos de 15 plantas) o en cada planta (15 o más).","<b>Terciaria:</b> une cada cierre hidráulico con la columna de ventilación. Hace falta con ramales de más de <b>5 m</b> o con más de 14 plantas."],source:"DB HS 5, apartados 3.3.3.1 a 3.3.3.3",diagram:"vent",scenes:["Cuando el agua cae por la bajante, funciona como un émbolo: empuja el aire que tiene delante y aspira el que deja detrás.","Esas presiones pueden vaciar el agua de los sifones. Y sin agua, ya no hay cierre hidráulico.","Por eso la bajante se ventila. La ventilación primaria es la propia bajante, que sale por encima de la cubierta: un metro treinta si no se pisa y dos metros si es transitable.","En edificios de menos de siete plantas, con la ventilación primaria es suficiente.","Si no basta, se añade la secundaria: una columna paralela a la bajante, unida a ella en plantas alternas, o en todas a partir de quince plantas.","Y la terciaria une cada sifón con la columna de ventilación. Hace falta con ramales de más de cinco metros o en edificios de más de catorce plantas."],summary:[{big:"1,30 m",label:"sobre cubierta no transitable"},{big:"2,00 m",label:"sobre cubierta transitable"},{big:"< 7",label:"plantas: basta la primaria"}]},{id:"t4",title:"Ni muy grandes ni muy pequeñas",lead:"Un tubo más grande no es mejor: el agua va lenta, deja sedimentos y el tubo se acaba estrechando con suciedad.",points:["Los desagües y las derivaciones pueden ir llenos; las bajantes y los colectores, no.","Bajantes: el agua no debe ocupar más de <b>1/3</b> de la sección.","Colectores: a media sección, como mucho <b>3/4</b>.","Velocidades adecuadas en colectores: entre 0,6 y 2,2 m/s, con pendientes del 1 al 4 %."],source:"DB HS 5, apartados 4.1.2 y 4.1.3; UD2.1, apartado 8",diagram:"size",scenes:["Al elegir un tubo, más grande no significa mejor.","En un tubo demasiado grande el agua va lenta, deja sedimentos en el fondo y, con el tiempo, el tubo se acaba estrechando.","En las bajantes el agua baja pegada a las paredes. No debe ocupar más de un tercio de la sección: el resto es aire.","En los colectores, que van casi horizontales, el agua puede llegar como mucho a tres cuartos de la sección.","Y la velocidad en los colectores, entre cero coma seis y dos coma dos metros por segundo, con pendientes del uno al cuatro por ciento."],summary:[{big:"1/3",label:"de la sección en bajantes"},{big:"3/4",label:"como mucho en colectores"},{big:"0,6–2,2",label:"m/s en colectores"}]},{id:"t2c",title:"Sifón o bote sifónico",lead:"En un cuarto húmedo el cierre se puede poner de dos maneras: un sifón debajo de cada aparato o un bote sifónico en el suelo que recoge varios. Cada una tiene sus reglas.",points:["<b>Sifón individual:</b> debajo del aparato, lo más cerca posible de su válvula, con un tapón roscado abajo para limpiarlo. Entre la válvula y la corona del sifón, <b>60 cm</b> como mucho.","<b>Orden de los sifones:</b> desde la bajante, de menor a mayor altura de cierre: primero la bañera, luego el bidé y al final el lavabo.","<b>Bote sifónico:</b> enrasado con el suelo, con tapa hermética y de <b>110 mm</b> de diámetro como mínimo. Los ramales le entran a <b>20 mm</b> del fondo como mínimo y la salida va a <b>50 mm</b>: el agua que queda entre medias es el cierre.","El bote solo recoge aparatos de su propio cuarto, y a un bote de urinarios no se conecta ningún otro aparato.","Sifones y botes, siempre accesibles desde el propio cuarto: nunca tapados por tabiques ni forjados.","<b>Redes ventiladas y semiventiladas:</b> el bote guarda más agua y aguanta mejor las depresiones, que duran poco. Las antiguas redes «semiventiladas» lo aprovechaban: bajantes más grandes y sin ventilación terciaria, a cambio de más sedimentos y aparatos muy cerca de la bajante."],source:"DB HS 5, 3.3.1.1 y 5.1.2; UD2.1, apartado 9",diagram:"pot",scenes:["Para cerrar el paso a los gases en un baño hay dos opciones: un sifón debajo de cada aparato, o un solo bote sifónico en el suelo para varios.","El sifón individual va justo debajo del aparato, muy cerca de la válvula: entre ella y la corona del sifón, sesenta centímetros como mucho. Y abajo lleva un tapón para limpiarlo.","Si cada aparato lleva su sifón, se conectan en orden desde la bajante: primero la bañera, luego el bidé y al final el lavabo.","El bote sifónico va en el suelo, enrasado y con tapa hermética. Mide al menos ciento diez milímetros.","Los ramales le entran a veinte milímetros del fondo como mínimo, y la salida va a cincuenta. El agua que queda entre medias es el cierre.","El bote solo recoge los aparatos de su propio cuarto. Y, sea sifón o bote, siempre se tiene que poder abrir desde ese cuarto."],summary:[{big:"60 cm",label:"de la válvula a la corona"},{big:"110 mm",label:"bote, como mínimo"},{big:"20 / 50",label:"mm: entradas y salida del bote"}]},{id:"t2d",title:"El inodoro sifónico",lead:"El inodoro usa el sifonado a su favor: la descarga llena el tubo de golpe, el agua tira de todo lo que hay en la taza y al final un chorrito repone el cierre.",points:["El agua que se ve en la taza es el <b>cierre hidráulico</b> del inodoro.","En el <b>inodoro sifónico</b>, la descarga llena de golpe la taza y el tubo de salida. Con el tubo lleno se produce el sifonado, que arrastra toda la suciedad.","Mientras dura, el agua arrastra también el aire hacia la red, así que no suben olores. Al final, un chorro pequeño vuelve a llenar el cierre.","Funciona mejor con una descarga con caudal suficiente y un tubo de unión que no sea más ancho que la salida del inodoro.","El <b>inodoro no sifónico</b> empuja el agua solo con la caída y no asegura que el cierre quede bien. Hoy suelen llevar salidas más anchas para compensarlo.","En la tabla 4.1, el inodoro de uso privado cuenta <b>4 UD</b> con cisterna y <b>8 UD</b> con fluxómetro, con <b>100 mm</b> de sifón y derivación."],source:"UD2.1, apartado 6; DB HS 5, tabla 4.1",diagram:"wc",scenes:["El inodoro también tiene su cierre hidráulico: es el agua que se ve en el fondo de la taza.","Al tirar de la cisterna, el agua llena de golpe la taza y el tubo de salida.","Con el tubo lleno se produce el sifonado, pero esta vez a favor: el agua tira de todo lo que hay en la taza y se lo lleva.","Mientras pasa, el agua arrastra el aire hacia la red, así que no suben olores. Al final, un chorrito vuelve a llenar el cierre.","En la norma, el inodoro de uso privado cuenta cuatro unidades de desagüe con cisterna, y ocho con fluxómetro. Su desagüe es de cien milímetros."],summary:[{big:"Sifonado",label:"a favor: vacía la taza"},{big:"4 UD",label:"con cisterna, uso privado"},{big:"100 mm",label:"desagüe del inodoro"}]},{id:"t3b",title:"Cómo baja el agua por la bajante",lead:"El agua no cae por el centro de la bajante: baja pegada a la pared, girando, y deja libre un núcleo de aire.",points:["El agua baja <b>en espiral, pegada a la pared</b>, y el centro queda para el aire.","Acelera al principio, pero el roce con la pared la frena: enseguida llega a una <b>velocidad final</b> que ya no crece aunque el edificio sea más alto.","Si va demasiado llena, el agua forma tapones que hacen de <b>émbolo</b>: empujan el aire por delante y aspiran por detrás. Por eso no debe ocupar más de <b>1/3</b> de la sección, y la presión no debe variar más de <b>250 Pa</b>.","En los ensayos, la presión dependió más de cómo se ventila la bajante que de su diámetro.","Va <b>sin desviaciones</b> y con el mismo diámetro en toda la altura, y el diámetro nunca disminuye hacia abajo.","En edificios de <b>más de 10 plantas</b> se desvía la bajante, a más de <b>60°</b> con la vertical, para frenar la caída."],source:"UD2.1, apartados 7, 8 y 9.1; DB HS 5, 3.3.1.3, 4.1.2 y 5.3.1",diagram:"stack",scenes:["Vamos a mirar dentro de una bajante. El agua que llega de cada planta no cae por el centro.","Baja pegada a la pared, girando en espiral, y deja libre un núcleo de aire en el centro.","Al principio acelera, pero el roce con la pared la frena, y enseguida llega a una velocidad final que ya no aumenta.","Si el agua ocupa demasiado, se forman tapones que hacen de émbolo. Por eso no debe ocupar más de un tercio de la sección, y la presión no debe variar más de doscientos cincuenta pascales.","La bajante va recta y con el mismo diámetro en toda la altura. Hacia abajo, el diámetro nunca disminuye.","En edificios de más de diez plantas se hace un desvío, de más de sesenta grados con la vertical, para frenar la caída del agua."],summary:[{big:"1/3",label:"de la sección, como mucho"},{big:"250 Pa",label:"variación de presión máxima"},{big:"> 10",label:"plantas: desvío de más de 60°"}]},{id:"t3d",title:"La ventilación en detalle",lead:"Además de saber qué ventilación toca, hay que colocarla bien: dónde sale a la cubierta, dónde se une a la bajante y dónde van las válvulas de aireación.",points:["<b>Salida a la cubierta:</b> a <b>6 m</b> como mínimo de cualquier toma de aire exterior, y más alta que ella. Si hay ventanas a menos de 6 m, <b>50 cm</b> por encima de ellas. Nunca bajo marquesinas ni terrazas.","La ventilación primaria tiene el mismo diámetro que la bajante. La columna secundaria, al menos la mitad.","<b>Columna secundaria:</b> arriba se une a la bajante al menos <b>1 m</b> por encima del último aparato; abajo, al colector, por su parte de arriba y lo más cerca posible de la bajante: a <b>10 veces el diámetro</b> del colector como mucho.","<b>Terciaria:</b> sale del desagüe entre <b>2 y 20 veces</b> su diámetro desde el cierre, nunca por debajo de la corona del sifón, con un <b>1 %</b> de pendiente hacia el desagüe y a <b>20 cm</b> sobre el rebosadero del aparato.","<b>Válvulas de aireación:</b> se abren para dejar entrar aire cuando el agua aspira, y así no hace falta subir a la cubierta ni la columna secundaria. Una sola en edificios de <b>5 plantas</b> o menos; una cada <b>4 plantas</b> en los más altos.","Se montan entre el último y el penúltimo aparato, de <b>1 a 2 m</b> por encima de ellos, en un sitio ventilado y accesible."],source:"DB HS 5, 3.3.3.1 a 3.3.3.4, 4.4 y 5.3.2",diagram:"vent2",scenes:["Ya sabemos qué tipos de ventilación hay. Ahora vamos a colocarlos bien, empezando por la salida a la cubierta.","La salida tiene que quedar al menos a seis metros de cualquier toma de aire exterior, y más alta que ella. Si hay ventanas cerca, cincuenta centímetros por encima.","La columna secundaria se une a la bajante arriba, al menos un metro por encima del último aparato, y abajo al colector, muy cerca de la bajante.","La terciaria sale del desagüe entre dos y veinte veces su diámetro desde el sifón, nunca por debajo de su corona, y sube con un poco de pendiente hacia el desagüe.","Si no se quiere subir a la cubierta, se usan válvulas de aireación: se abren para dejar entrar aire cuando el agua aspira, y se cierran después.","Una sola válvula basta hasta cinco plantas; en edificios más altos, una cada cuatro. Van entre el último y el penúltimo aparato, de uno a dos metros por encima."],summary:[{big:"6 m",label:"de las tomas de aire"},{big:"2–20 D",label:"terciaria desde el cierre"},{big:"1 cada 4",label:"plantas: válvulas de aireación"}]},{id:"t5",title:"Pluviales: separativo o mixto",lead:"La lluvia de la cubierta y el agua usada de la vivienda pueden ir por redes separadas o juntarse antes de salir. Depende del alcantarillado de la calle.",points:["<b>Separativo:</b> una red para pluviales y otra para residuales. Si la calle tiene dos alcantarillados, cada red va al suyo.","<b>Mixto:</b> si la calle tiene uno solo, las dos redes se juntan antes de salir, siempre con un <b>cierre hidráulico</b> en medio, para que los gases de las residuales no salgan por los sumideros.","En un colector colgado mixto, la bajante de pluviales entra al menos a <b>3 m</b> de la de residuales más cercana aguas arriba.","Sin alcantarillado, las residuales van a una depuradora propia y las pluviales al terreno.","<b>Sumideros</b> según la cubierta: 2 si mide menos de 100 m², 3 hasta 200 m², 4 hasta 500 m² y, por encima, uno cada 150 m². Son sifónicos y van a <b>5 m</b> como mucho de la bajante.","<b>Canalones</b> con un <b>0,5 %</b> de pendiente como mínimo. Canalones, bajantes y colectores de pluviales salen de tablas por la superficie que recogen, para una lluvia de <b>100 mm/h</b>; si llueve más, la superficie se corrige con f = i/100.","Los colectores de pluviales se calculan <b>a sección llena</b>."],source:"DB HS 5, 3.1, 3.2, 3.3.1.4.1, 4.2, 5.1.3 y 5.1.4",diagram:"rain",scenes:["Al edificio llegan dos aguas: la de la lluvia, que cae en la cubierta, y la que se usa dentro de la vivienda.","Si cada una va por su red hasta la calle, es un sistema separativo. Se usa cuando la calle tiene dos alcantarillados.","Si la calle tiene uno solo, las dos redes se juntan antes de salir. Entre ellas va un cierre hidráulico, para que los gases de las residuales no salgan por los sumideros.","La lluvia se recoge con sumideros: dos si la cubierta mide menos de cien metros cuadrados, y más cuanto mayor sea. Van como mucho a cinco metros de la bajante.","Los canalones llevan al menos un medio por ciento de pendiente. Las tablas están hechas para una lluvia de cien milímetros por hora; si en la zona llueve más, se corrige la superficie.","Y a diferencia de las residuales, los colectores de pluviales se calculan a sección llena."],summary:[{big:"Mixto",label:"con un cierre entre las dos redes"},{big:"0,5 %",label:"canalón, como mínimo"},{big:"100 mm/h",label:"lluvia de las tablas"}]},{id:"t6",title:"Colectores, arquetas y pozo",lead:"Abajo, el agua de las bajantes se recoge en colectores colgados del techo o enterrados, y sale a la calle por el pozo general.",points:["<b>Colgados:</b> pendiente del <b>1 %</b> como mínimo. Las bajantes se unen con piezas especiales, nunca con un simple codo, y no se juntan más de dos colectores en un mismo punto.","<b>Enterrados:</b> pendiente del <b>2 %</b> como mínimo, en zanja y por debajo de la red de agua potable.","<b>Registros</b> en cada encuentro y cambio de dirección, y en los tramos rectos cada <b>15 m</b> como mucho.","<b>Arqueta a pie de bajante</b> donde la red pasa a ir enterrada; no es sifónica. A una arqueta de paso llegan como mucho <b>tres</b> colectores, uno por cara.","El tamaño de la arqueta depende del colector que sale: <b>40 × 40 cm</b> para 100 mm, 50 × 50 para 150 mm…","Al final, el <b>pozo general</b>, antes de la acometida. Si la red queda más de <b>1 m</b> por encima del alcantarillado, un <b>pozo de resalto</b>. Restaurantes y garajes llevan <b>separador de grasas</b>."],source:"DB HS 5, 3.3.1.4, 3.3.1.5 y tabla 4.13",diagram:"yard",scenes:["El agua de las bajantes llega a la planta más baja. Desde aquí, los colectores la llevan hasta la calle.","Si van colgados del techo, llevan al menos un uno por ciento de pendiente, y las bajantes se unen con piezas especiales, nunca con un codo simple.","Si van enterrados, al menos un dos por ciento. Donde la bajante pasa a ir enterrada se pone una arqueta a pie de bajante, que no es sifónica.","Hacen falta registros para limpiar: en cada encuentro, en cada cambio de dirección y en los tramos rectos, cada quince metros como mucho.","A una arqueta de paso llegan como mucho tres colectores, uno por cada cara. Su tamaño depende del tubo que sale: cuarenta por cuarenta centímetros para cien milímetros.","Al final, el pozo general, justo antes de la acometida a la calle. Y si el desnivel con el alcantarillado pasa de un metro, un pozo de resalto."],summary:[{big:"1 % / 2 %",label:"colgado / enterrado"},{big:"15 m",label:"entre registros"},{big:"40 × 40",label:"cm: arqueta para 100 mm"}]},{id:"t7",title:"Bombeo y antirretorno",lead:"Si un sótano queda por debajo del alcantarillado, su agua no puede salir sola: se recoge en un depósito y se bombea hacia arriba.",points:["Hace falta <b>bombeo</b> cuando parte de la red queda por debajo de la acometida. Solo se bombea esa parte: lo que está más alto sale por gravedad. Las pluviales no van al bombeo, salvo patios o rampas de garaje sin otra salida.","<b>Al menos dos bombas</b> iguales, para que una cubra a la otra, con grupo electrógeno o batería para <b>24 h</b>. Cada una da al menos el <b>125 %</b> del caudal que llega.","El depósito se calcula para que las bombas no arranquen más de <b>12 veces por hora</b>: Vu = 0,3·Qb (dm³, con Qb en dm³/s). Lleva una ventilación de la mitad del diámetro de la acometida y <b>80 mm</b> como mínimo.","Entre el nivel máximo y el tubo que entra, <b>10 cm</b>; entre el mínimo y el fondo, <b>20 cm</b>. Fondo con un <b>25 %</b> de pendiente e interruptores de nivel alto y bajo, más alarma y seguridad.","La salida sube por encima de la acometida con un <b>bucle antirreflujo</b>, y la tubería de descarga no se conecta a ninguna bajante.","Para que la calle no inunde el edificio si se satura, <b>válvula antirretorno</b> de doble clapeta, sobre todo en redes mixtas."],source:"DB HS 5, 3.3.2, 4.6 y 5.5",diagram:"pump",scenes:["Este sótano está por debajo del alcantarillado de la calle. Su agua no puede salir por gravedad.","Se recoge en un depósito, y desde ahí la sube una bomba. Solo va al bombeo lo que está por debajo; lo de arriba sigue saliendo solo.","Siempre hay al menos dos bombas iguales, por si una se avería, y corriente de reserva para veinticuatro horas.","Los interruptores de nivel arrancan la bomba cuando el agua sube y la paran cuando baja. El depósito se calcula para que no arranque más de doce veces por hora.","La tubería sube por encima de la acometida haciendo un bucle, para que el agua de la calle no pueda volver.","Y si el alcantarillado se satura, una válvula antirretorno de doble clapeta evita que el agua entre en el edificio."],summary:[{big:"2",label:"bombas iguales como mínimo"},{big:"12",label:"arranques por hora, como mucho"},{big:"125 %",label:"del caudal que llega"}]},{id:"t8",title:"Montaje en obra",lead:"Una red bien calculada también falla si se monta mal. El DB HS 5 dice cómo sujetar los tubos, cómo atravesar forjados y cómo unirlos.",points:["<b>Desagües:</b> bridas cada <b>700 mm</b> en tubos de hasta 50 mm y cada <b>500 mm</b> en los mayores, con abrazaderas regulables para darles la pendiente.","<b>Paso por forjados:</b> con contratubo y una holgura de <b>10 mm</b> como mínimo, rellena de masilla asfáltica o material elástico. Nada de yeso ni mortero que deje el tubo rígido.","<b>Bajantes:</b> aplomadas, separadas de la pared y con abrazaderas cada unas <b>15 veces el diámetro</b> (1,5 m para 110 mm).","<b>Colectores colgados:</b> abrazaderas cada <b>1,50 m</b>, a <b>5 cm</b> del forjado como mínimo, y en los giros codos de 45° con registro.","Junto al entronque con la bajante, <b>1 m</b> libre a cada lado sin ningún desagüe.","La ventilación secundaria se une a la bajante en sentido contrario al del agua, para que el agua no se meta en ella. En tubos encolados, manguitos de dilatación cada <b>10 m</b>."],source:"DB HS 5, 5.2, 5.3 y 5.4.1",diagram:"site",scenes:["Vamos a la obra. Una red bien calculada también puede fallar si se monta mal.","Los desagües se sujetan con bridas: cada setenta centímetros si el tubo es de cincuenta milímetros o menos, y cada cincuenta centímetros si es mayor.","Al atravesar un forjado, el tubo pasa por un contratubo con al menos diez milímetros de holgura, rellena de material elástico.","Las bajantes van aplomadas y separadas de la pared, con una abrazadera cada quince veces el diámetro, más o menos. Para un tubo de ciento diez, cada metro y medio.","Los colectores colgados llevan abrazaderas cada metro y medio, a cinco centímetros del forjado como mínimo, y en los giros, codos de cuarenta y cinco grados con registro.","Y junto a la bajante, un metro libre a cada lado, sin ningún desagüe, para que la unión trabaje bien."],summary:[{big:"700 / 500",label:"mm entre bridas de desagüe"},{big:"10 mm",label:"de holgura en forjados"},{big:"1,50 m",label:"entre abrazaderas del colector"}]},{id:"t9",title:"Pruebas de la red",lead:"Antes de cerrar techos y entregar la obra, la red se prueba para comprobar que no pierde agua, aire ni olores.",points:["<b>Estanqueidad parcial:</b> se descarga cada aparato, solo o con otros, y se mira el tiempo de vaciado, los ruidos y si algún sifón se vacía. A ningún sifón le pueden quedar menos de <b>25 mm</b> de agua.","Con el grifo y el desagüe abiertos, el aparato no debe acumular agua durante <b>1 minuto</b>.","Cada tramo de la red horizontal se prueba con agua a <b>0,3–0,6 bar</b> durante <b>10 minutos</b>. Las arquetas y los pozos se llenan y se mira si baja el nivel.","<b>Prueba con agua:</b> se tapan todas las salidas menos las de cubierta y se llena la red hasta rebosar, a entre <b>0,3 y 1 bar</b>. Si el edificio es muy alto, por partes.","<b>Prueba con aire:</b> a entre <b>0,5 y 1 bar</b>. Vale si la presión se mantiene <b>3 minutos</b>.","<b>Prueba con humo:</b> con los sifones llenos, se mete por abajo un humo espeso y con olor, y se tapan las salidas de cubierta para tener <b>250 Pa</b>. Vale si dentro del edificio no hay humo ni olor."],source:"DB HS 5, 5.6",diagram:"test",scenes:["La red ya está montada. Antes de entregarla, hay que probar que no pierde nada.","Primero, aparato por aparato: se descarga y se mira que vacíe bien, sin ruidos, y que a ningún sifón le queden menos de veinticinco milímetros de agua.","Después, la prueba con agua: se tapan las salidas, menos las de cubierta, y se llena la red hasta rebosar, a una presión de entre cero coma tres y un bar.","Se puede probar también con aire, entre medio bar y uno. La prueba vale si la presión se mantiene tres minutos.","Y la prueba con humo: con los sifones llenos, se mete por abajo un humo espeso y con olor, y se tapan las salidas de cubierta.","La red tiene que aguantar doscientos cincuenta pascales sin que se vacíen los cierres. Si dentro del edificio no hay humo ni olor, está bien hecha."],summary:[{big:"25 mm",label:"en el sifón tras descargar"},{big:"0,3–1 bar",label:"prueba con agua"},{big:"3 min",label:"prueba con aire"}]},{id:"t10",title:"Mantenimiento",lead:"Una red de saneamiento también se cuida: cada elemento tiene su calendario de limpieza.",points:["De vez en cuando se comprueba que la red no tiene fugas ni olores.","Sifones y válvulas se revisan y se desatascan cada vez que el agua tarda en irse o hay un atasco.","<b>Cada 6 meses:</b> los botes sifónicos, los sumideros de cuartos húmedos y de cubiertas transitables, y el separador de grasas si lo hay.","<b>Cada año:</b> los sumideros y calderetas de cubiertas no transitables, los colectores colgados, las arquetas sumidero, los pozos de registro y las bombas.","<b>Cada 10 años:</b> las arquetas de pie de bajante, de paso y sifónicas, o antes si huele.","Sumideros, botes y sifones tienen que tener siempre agua: si un desagüe no se usa, se seca y deja pasar los olores."],source:"DB HS 5, 7",diagram:"care",scenes:["Una red bien hecha también hay que cuidarla. Cada elemento tiene su calendario.","Los sifones y las válvulas se desatascan en cuanto el agua tarda en irse.","Cada seis meses, los botes sifónicos, los sumideros de los baños y de las cubiertas transitables, y el separador de grasas.","Una vez al año, los sumideros de las cubiertas que no se pisan, los colectores colgados, los pozos y las bombas. Y cada diez años, las arquetas.","Y un truco para siempre: los sifones y los sumideros tienen que tener agua. Si un desagüe no se usa nunca, se seca y deja pasar los olores."],summary:[{big:"6 meses",label:"botes y sumideros"},{big:"1 año",label:"colectores, pozos y bombas"},{big:"10 años",label:"arquetas"}]}],H=[{title:"La red y sus partes",sub:"Qué tubos hay en un edificio, pendientes y tamaños.",ids:["t1","t1b","t4"]},{title:"Cierres hidráulicos",sub:"El sifón que frena los olores y por qué se vacía.",ids:["t2","t2b","t2c","t2d"]},{title:"Bajantes y ventilación",sub:"Cómo baja el agua y cómo respira la red.",ids:["t3b","t3","t3d"]},{title:"Pluviales, colectores y bombeo",sub:"La lluvia, las arquetas y lo que queda por debajo.",ids:["t5","t6","t7"]},{title:"En obra",sub:"Montaje, pruebas de la red y mantenimiento.",ids:["t8","t9","t10"]}],z=H.flatMap(a=>a.ids.map(e=>ne.find(s=>s.id===e)));function fa(a){let e=0;return H.findIndex(s=>(e+=s.ids.length)>a)}const K=[{id:"q1",text:"¿Cuántas unidades de desagüe (UD) tiene una bañera de uso privado?",options:["2 UD","3 UD","4 UD","5 UD"],answer:1,explanation:"En uso privado, la bañera (con o sin ducha) cuenta 3 UD. En uso público serían 4.",source:"DB HS 5, tabla 4.1"},{id:"q2",text:"¿Cuántas UD tiene un inodoro con cisterna de uso privado?",options:["4 UD","5 UD","8 UD","10 UD"],answer:0,explanation:"Con cisterna, 4 UD en uso privado (5 en público). Con fluxómetro sube a 8.",source:"DB HS 5, tabla 4.1"},{id:"q3",text:"¿Qué altura mínima debe tener el cierre hidráulico en un aparato de uso continuo?",options:["25 mm","50 mm","70 mm","100 mm"],answer:1,explanation:"50 mm en uso continuo y 70 mm en uso discontinuo. La altura máxima es 100 mm.",source:"DB HS 5, apartado 3.3.1.1"},{id:"q3b",text:"¿Qué es la autosucción de un cierre hidráulico?",options:["El último trozo de agua de la descarga arrastra el agua del sifón","El agua del sifón se evapora con el calor","Los gases entran por una junta mal sellada","El sifón rebosa cuando se atasca"],answer:0,explanation:"Al acabar la descarga, el último trozo de agua hace de émbolo y deja un vacío que se lleva el agua del sifón. Pasa aunque el tubo no vaya lleno.",source:"UD2.1, apartado 5"},{id:"q3c",text:"El desagüe de un lavabo baja lleno y vacía su sifón. ¿Qué solución admite el DB HS 5?",options:["Poner un sifón antisucción","Ventilación terciaria justo después del sifón","Quitar el sifón y poner una válvula","Bajar la altura del cierre a 30 mm"],answer:1,explanation:"La ventilación terciaria mete aire y corta el sifonado. Los sifones antisucción no se admiten, y el cierre tiene al menos 50 mm.",source:"UD2.1, apartado 4; DB HS 5, 3.3.3.3 y 5.1.2"},{id:"q1b",text:"¿A qué distancia máxima de la bajante puede ir un lavabo con sifón individual?",options:["1,00 m","2,00 m","4,00 m","6,00 m"],answer:2,explanation:"Lavabos, bidés, fregaderos y lavaderos con sifón propio van como mucho a 4,00 m de la bajante, con una pendiente del 2,5 al 5 %. Los 2,00 m son para el bote sifónico.",source:"DB HS 5, 3.3.1.2 e) i)"},{id:"q1c",text:"Si el inodoro no puede ir directo a la bajante, ¿qué longitud máxima tiene su manguetón?",options:["0,50 m","1,00 m","2,50 m","4,00 m"],answer:1,explanation:"El inodoro va directo a la bajante o con un manguetón de 1,00 m como mucho.",source:"DB HS 5, 3.3.1.2 e) iii)"},{id:"q4",text:"En una cubierta no transitable, ¿cuánto debe sobresalir la bajante para la ventilación primaria?",options:["0,50 m","1,00 m","1,30 m","2,00 m"],answer:2,explanation:"Al menos 1,30 m si la cubierta no se pisa. Si es transitable, 2,00 m sobre el pavimento.",source:"DB HS 5, apartado 3.3.3.1"},{id:"q5",text:"¿Hasta qué altura de edificio basta con la ventilación primaria sola (bajante normal y ramales cortos)?",options:["Menos de 4 plantas","Menos de 7 plantas","Menos de 11 plantas","Menos de 15 plantas"],answer:1,explanation:"Menos de 7 plantas, con ramales de menos de 5 m. Con la bajante sobredimensionada, hasta menos de 11.",source:"DB HS 5, apartado 3.3.3.1"},{id:"q6",text:"¿Cuándo hace falta ventilación terciaria?",options:["Siempre que haya bote sifónico","Con ramales de desagüe de más de 5 m o más de 14 plantas","Solo en edificios públicos","Cuando la bajante pasa de 110 mm"],answer:1,explanation:"Con ramales de más de 5 m o en edificios de más de 14 plantas. Conecta cada cierre hidráulico con la columna de ventilación.",source:"DB HS 5, apartado 3.3.3.3"},{id:"q7",text:"Al dimensionar una bajante, ¿qué parte de la sección puede ocupar el agua como mucho?",options:["1/4","1/3","1/2","3/4"],answer:1,explanation:"Un tercio. El centro del tubo queda libre para el aire, y así la presión no varía más de 250 Pa.",source:"DB HS 5, apartado 4.1.2"},{id:"q8",text:"¿Cómo se dimensionan los colectores horizontales de aguas residuales?",options:["A sección llena","A un tercio de sección","A media sección, como mucho tres cuartos","Sin límite de llenado"],answer:2,explanation:"A media sección y como máximo a tres cuartos, para que siempre circule aire por encima del agua.",source:"DB HS 5, apartado 4.1.3"},{id:"q9",text:"¿Qué es el albañal?",options:["El desagüe del inodoro","El tubo vertical que recorre el edificio","El tramo enterrado que une el edificio con el alcantarillado","La columna de ventilación secundaria"],answer:2,explanation:"Es el tramo enterrado final. El desagüe del inodoro es el manguetón y el tubo vertical, la bajante.",source:"UD2.1, apartado 7"},{id:"q10",text:"¿A qué distancia máxima de la bajante puede estar un bote sifónico?",options:["1,00 m","2,00 m","2,50 m","4,00 m"],answer:1,explanation:"2,00 m. Ojo: 2,50 m es la longitud máxima de las derivaciones que llegan al bote, y 4,00 m la de lavabos y fregaderos con sifón individual.",source:"DB HS 5, apartado 3.3.1.2"},{id:"q11",text:"Un ramal colector recoge 9 UD con una pendiente del 2 %. ¿Qué diámetro necesita?",options:["40 mm","50 mm","63 mm","75 mm"],answer:2,explanation:"Con el 2 % de pendiente, 50 mm admite hasta 6 UD y 63 mm hasta 11. Para 9 UD hace falta 63 mm.",source:"DB HS 5, tabla 4.3"},{id:"q12",text:"¿Por qué no conviene poner tubos de saneamiento más grandes de lo necesario?",options:["Porque hacen más ruido","Porque el agua va lenta, deja sedimentos y el tubo se acaba estrechando","Porque no caben en los patinillos","Porque lo prohíbe el RITE"],answer:1,explanation:"Con poca velocidad, los sólidos se depositan y forman incrustaciones. El tubo «sobrante» se llena de suciedad.",source:"UD2.1, apartado 8"},{id:"q16",text:"¿Qué diámetro mínimo tiene un bote sifónico?",options:["50 mm","90 mm","110 mm","125 mm"],answer:2,explanation:"Como mínimo 110 mm. Además va enrasado con el suelo y con tapa hermética.",source:"DB HS 5, 5.1.2"},{id:"q17",text:"En un baño con sifones individuales, ¿qué aparato se conecta más cerca de la bajante?",options:["El lavabo","El bidé","La bañera","Da igual el orden"],answer:2,explanation:"Desde la bajante, de menor a mayor altura de cierre: primero la bañera, luego el bidé y al final el lavabo.",source:"DB HS 5, 5.1.2"},{id:"q18",text:"En un inodoro sifónico, ¿qué se lleva lo que hay en la taza?",options:["La presión de la red de agua","El sifonado que se produce al llenarse el tubo de salida","Una bomba dentro del inodoro","La ventilación terciaria"],answer:1,explanation:"La descarga llena de golpe la taza y el tubo de salida, y el sifonado arrastra todo. Al final, un chorrito repone el cierre.",source:"UD2.1, apartado 6"},{id:"q19",text:"¿Qué diámetro mínimo pide la tabla 4.1 para el sifón y la derivación de un inodoro?",options:["50 mm","75 mm","100 mm","125 mm"],answer:2,explanation:"100 mm, tanto con cisterna como con fluxómetro, en uso privado y público.",source:"DB HS 5, tabla 4.1"},{id:"q20",text:"¿Cómo baja el agua por una bajante bien dimensionada?",options:["Llenando todo el tubo","En chorro por el centro","Pegada a la pared, en espiral, con aire en el centro","A saltos, de planta en planta"],answer:2,explanation:"Baja pegada a la pared y deja un núcleo de aire. Por eso no debe ocupar más de 1/3 de la sección.",source:"UD2.1, apartado 8; DB HS 5, 4.1.2"},{id:"q21",text:"En un edificio de 12 plantas, ¿qué pide el DB HS 5 para la bajante?",options:["Nada especial","Un desvío de más de 60° con la vertical","Reducir el diámetro en las plantas bajas","Una válvula de aireación en cada planta"],answer:1,explanation:"Con más de 10 plantas se interrumpe la verticalidad con un desvío de más de 60°, para frenar la caída. El diámetro nunca disminuye hacia abajo.",source:"DB HS 5, 5.3.1 y 3.3.1.3"},{id:"q22",text:"¿A qué distancia mínima de una toma de aire exterior debe salir la ventilación primaria?",options:["1,30 m","2,00 m","4,00 m","6,00 m"],answer:3,explanation:"A 6 m como mínimo, y más alta que la toma. Los 1,30 m son lo que sobresale sobre una cubierta no transitable.",source:"DB HS 5, 3.3.3.1"},{id:"q23",text:"¿Dónde se monta una válvula de aireación?",options:["En la cubierta","Entre el último y el penúltimo aparato, de 1 a 2 m por encima","Debajo del sifón del lavabo","En la arqueta a pie de bajante"],answer:1,explanation:"Entre el último y el penúltimo aparato, de 1 a 2 m por encima de su nivel, en un sitio ventilado y accesible.",source:"DB HS 5, 5.3.2"},{id:"q24",text:"La calle tiene un solo alcantarillado. ¿Qué hay que poner donde se juntan pluviales y residuales?",options:["Nada","Un cierre hidráulico","Una bomba","Una válvula de aireación"],answer:1,explanation:"Un cierre hidráulico, para que los gases de las residuales no salgan por calderetas, rejillas o sumideros.",source:"DB HS 5, 3.2"},{id:"q25",text:"¿Cuántos sumideros necesita como mínimo una cubierta de 150 m²?",options:["1","2","3","4"],answer:2,explanation:"De 100 a 200 m², 3 sumideros. Con menos de 100 m² serían 2.",source:"DB HS 5, tabla 4.6"},{id:"q26",text:"¿Qué pendiente mínima lleva un colector enterrado?",options:["0,5 %","1 %","2 %","4 %"],answer:2,explanation:"El 2 %. Un colector colgado, el 1 %.",source:"DB HS 5, 3.3.1.4"},{id:"q27",text:"En un tramo recto de colector, ¿cada cuánto se pone un registro como mucho?",options:["5 m","10 m","15 m","25 m"],answer:2,explanation:"Cada 15 m como mucho, y además en cada encuentro y cambio de dirección.",source:"DB HS 5, 3.3.1.4"},{id:"q28",text:"¿Cuántas bombas como mínimo lleva un sistema de bombeo de aguas residuales?",options:["1","2","3","Una por planta"],answer:1,explanation:"Al menos dos, para que haya servicio aunque una se averíe o se esté reparando.",source:"DB HS 5, 3.3.2.1"},{id:"q29",text:"Al dimensionar el depósito de bombeo, ¿cuántos arranques por hora se aceptan como máximo?",options:["4","6","12","24"],answer:2,explanation:"12 arranques por hora. Con eso, el volumen útil sale de Vu = 0,3·Qb.",source:"DB HS 5, 4.6.1"},{id:"q30",text:"¿Cada cuánto se sujeta con bridas un desagüe de 40 mm?",options:["Cada 300 mm","Cada 500 mm","Cada 700 mm","Cada 1,50 m"],answer:2,explanation:"Cada 700 mm en tubos de hasta 50 mm, y cada 500 mm en los mayores.",source:"DB HS 5, 5.2"},{id:"q31",text:"Al atravesar un forjado, ¿qué holgura mínima deja el contratubo?",options:["2 mm","5 mm","10 mm","25 mm"],answer:2,explanation:"10 mm como mínimo, rellenos de masilla asfáltica o de un material elástico.",source:"DB HS 5, 5.2"},{id:"q32",text:"En la prueba parcial, tras descargar un aparato, ¿cuánta agua tiene que quedar como mínimo en su sifón?",options:["10 mm","25 mm","50 mm","70 mm"],answer:1,explanation:"No se admite menos de 25 mm. Ojo: 50 mm es la altura del cierre al proyectarlo.",source:"DB HS 5, 5.6.1"},{id:"q33",text:"¿Cuándo se da por buena la prueba con aire?",options:["Si la presión se mantiene 3 minutos","Si no sale humo","Si el agua rebosa por la cubierta","Si aguanta 10 minutos sin ruidos"],answer:0,explanation:"Se prueba a entre 0,5 y 1 bar, y vale si la presión se mantiene constante 3 minutos.",source:"DB HS 5, 5.6.4"},{id:"q34",text:"¿Cada cuánto se limpian los botes sifónicos?",options:["Cada mes","Cada 6 meses","Cada año","Cada 10 años"],answer:1,explanation:"Cada 6 meses, igual que los sumideros de cuartos húmedos y cubiertas transitables. Las arquetas, cada 10 años.",source:"DB HS 5, 7"},{id:"q35",text:"El desagüe de un trastero no se usa nunca y huele mal. ¿Qué es lo más probable?",options:["La bajante es demasiado grande","El sifón se ha secado y ya no cierra el paso a los gases","Falta una bomba","El colector tiene demasiada pendiente"],answer:1,explanation:"Sin uso, el agua del sifón se evapora y el cierre desaparece. Los sifones y sumideros tienen que tener siempre agua.",source:"DB HS 5, 7"},{id:"q13",text:"¿Cuántas UD tiene una ducha de uso privado?",options:["1 UD","2 UD","3 UD","4 UD"],answer:1,explanation:"En uso privado, la ducha cuenta 2 UD; en uso público, 3. Su sifón y derivación, 40 mm.",source:"DB HS 5, tabla 4.1"},{id:"q14",text:"¿Qué diámetro mínimo debe tener el sifón de un lavabo de uso privado?",options:["25 mm","32 mm","40 mm","50 mm"],answer:1,explanation:"La tabla 4.1 del DB HS 5 pide 32 mm para el sifón y la derivación de un lavabo de uso privado (40 mm en uso público). Algunos apuntes dan 2,5 cm, un valor de normas anteriores: manda el CTE.",source:"DB HS 5, tabla 4.1"}],le={q9:0,q1:0,q2:0,q13:0,q1b:0,q1c:0,q11:0,q12:0,q3:1,q3b:1,q3c:1,q10:1,q16:1,q17:1,q18:1,q19:1,q14:1,q20:2,q21:2,q7:2,q4:2,q5:2,q6:2,q22:2,q23:2,q24:3,q25:3,q8:3,q26:3,q27:3,q28:3,q29:3,q30:4,q31:4,q32:4,q33:4,q34:4,q35:4},N={title:"La bajante de un edificio de 5 plantas",statement:"Un edificio de viviendas de 5 plantas tiene, en cada planta, un cuarto de baño completo de uso privado (lavabo, bidé, bañera e inodoro con cisterna). Todos desaguan a la misma bajante. Haz las cuentas en papel con el DB HS 5 y escribe aquí cada resultado.",steps:[{id:"c1",prompt:"¿Cuántas UD asigna la tabla 4.1 a un cuarto de baño completo con inodoro con cisterna?",unit:"UD",answer:7,traps:{10:"Has sumado aparato por aparato (1 + 2 + 3 + 4 = 10). La tabla 4.1 da un valor para el cuarto de baño entero, más bajo, porque no se usan todos los aparatos a la vez."},hint:"Busca al final de la tabla 4.1 la fila «Cuarto de baño (lavabo, inodoro, bañera y bidé)».",explanation:"El cuarto de baño completo con cisterna cuenta 7 UD en uso privado.",source:"DB HS 5, tabla 4.1"},{id:"c2",prompt:"¿Cuántas UD recoge en total la bajante?",unit:"UD",answer:35,traps:{50:"Has usado 10 UD por baño. Usa el valor del cuarto de baño completo: 7 UD."},hint:"Multiplica las UD de un baño por el número de plantas.",explanation:"7 UD × 5 plantas = 35 UD.",source:"DB HS 5, apartado 4.1.2"},{id:"c3",prompt:"Con la tabla 4.4 y el total de UD, ¿qué diámetro sale para la bajante?",unit:"mm",answer:63,traps:{90:"Has mirado la columna «Hasta 3 plantas». El edificio tiene 5: usa «Más de 3 plantas».",50:"Con más de 3 plantas, 50 mm admite solo 25 UD. Necesitas uno que admita 35."},hint:"Columna «Más de 3 plantas»: busca el primer diámetro que admita 35 UD.",explanation:"Con más de 3 plantas, 63 mm admite hasta 38 UD, y 35 ≤ 38.",source:"DB HS 5, tabla 4.4"},{id:"c4",prompt:"Comprueba ahora el ramal de cada planta (7 UD). ¿Qué diámetro pide la tabla 4.4?",unit:"mm",answer:63,traps:{50:"Con más de 3 plantas, en 50 mm caben solo 6 UD por ramal, y aquí llegan 7."},hint:"Columna de ramales, «Más de 3 plantas»: busca el primero que admita 7 UD.",explanation:"En 63 mm caben hasta 9 UD por ramal, y 7 ≤ 9. Las dos comprobaciones dan 63 mm.",source:"DB HS 5, tabla 4.4 y apartado 4.1.2.2"},{id:"c5",prompt:"Último paso: ¿qué diámetro pones finalmente a la bajante?",unit:"mm",answer:110,traps:{63:"Casi: las tablas dan 63 mm, pero a la bajante llega un inodoro. Mira qué diámetro pide su derivación en la tabla 4.1.",100:"Bien visto lo del inodoro. Pero la bajante se elige entre los diámetros de la tabla 4.4, y allí no hay 100: ¿cuál es el siguiente?"},hint:"El inodoro desagua con 100 mm, y una conducción nunca puede ser más pequeña que la que le llega.",explanation:"El inodoro necesita 100 mm (tabla 4.1) y el diámetro no puede ser menor que el de los tramos de aguas arriba (apartado 4.1.1.1, punto 4). El primero de la tabla 4.4 que no es menor que 100 es 110 mm.",source:"DB HS 5, tabla 4.1, apartado 4.1.1.1 y tabla 4.4"}]},ya=[{name:"Lavabo",priv:1,pub:2},{name:"Bidé",priv:2,pub:3},{name:"Ducha",priv:2,pub:3},{name:"Bañera",priv:3,pub:4},{name:"Inodoro con cisterna",priv:4,pub:5},{name:"Inodoro con fluxómetro",priv:8,pub:10},{name:"Urinario de pedestal",priv:null,pub:4},{name:"Urinario suspendido",priv:null,pub:2},{name:"Fregadero de cocina",priv:3,pub:6},{name:"Lavadero",priv:3,pub:null},{name:"Vertedero",priv:null,pub:8},{name:"Fuente para beber",priv:null,pub:.5},{name:"Sumidero sifónico",priv:1,pub:3},{name:"Lavavajillas",priv:3,pub:6},{name:"Lavadora",priv:3,pub:6}],ie=[.5,1,2,3,4,5,6,8,10],Sa=15;function va(a,e){const s=[...a];for(let t=s.length-1;t>0;t--){const o=Math.floor(e()*(t+1));[s[t],s[o]]=[s[o],s[t]]}return s}function re(a,e,s){const t=a.reduce((i,r)=>i+r.length,0);e=Math.min(e,t);const o=a.map(i=>i.length?Math.max(1,Math.round(i.length/t*e)):0);let n=e-o.reduce((i,r)=>i+r,0);for(;n!==0;){const r=a.map((p,u)=>u).sort((p,u)=>a[u].length-a[p].length).find(p=>n>0?o[p]<a[p].length:o[p]>1);o[r]+=n>0?1:-1,n+=n>0?-1:1}return va(a.flatMap((i,r)=>va(i,s).slice(0,o[r])),s)}function ja(a,e){return e?Math.round(a/e*100)/10:0}const $=(a,e="")=>`<svg class="icon ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${a}</svg>`,m={book:$('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/><path d="M8 7h8M8 11h6"/>'),calc:$('<rect x="4" y="2.5" width="16" height="19" rx="3"/><path d="M8 7h8"/><path d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"/>'),loop:$('<path d="M4 11a8 8 0 0 1 13.7-5.6L20 7.5"/><path d="M20 3v4.5h-4.5"/><path d="M20 13a8 8 0 0 1-13.7 5.6L4 16.5"/><path d="M4 21v-4.5h4.5"/>'),bolt:$('<path d="M13 2 4.5 13.5H12L11 22l8.5-11.5H12z"/>'),flame:$('<path d="M12 22c4 0 7-2.7 7-6.7 0-4.3-3.6-6.5-4.4-10.3-2.6 1.6-3.6 4.4-3.3 6.6-1.4-.6-2.4-1.9-2.6-3.6C6.3 9.8 5 12.4 5 15.3 5 19.3 8 22 12 22z"/>'),drop:$('<path d="M12 2.5S5.5 9.6 5.5 14.5a6.5 6.5 0 0 0 13 0C18.5 9.6 12 2.5 12 2.5z"/>'),timer:$('<circle cx="12" cy="13.5" r="8"/><path d="M12 9.5v4l2.5 2"/><path d="M9.5 2.5h5"/>'),trophy:$('<path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>'),chevron:$('<path d="m9 6 6 6-6 6"/>'),back:$('<path d="m15 6-6 6 6 6"/>'),lock:$('<rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),star:$('<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"/>'),list:$('<path d="M9 6h11M9 12h11M9 18h7M4.5 6h.01M4.5 12h.01M4.5 18h.01"/>'),pad:$('<rect x="2" y="6" width="20" height="12" rx="5"/><path d="M6 12h4M8 10v4M15 12h.01M18 10h.01"/>'),home:$('<path d="M4 11 12 4l8 7v9h-5v-6H9v6H4z"/>'),user:$('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),tick:$('<path d="m5 12.5 4.5 4.5L19 7.5"/>'),pipe:$('<path d="M3 7h7a3 3 0 0 1 3 3v11"/><path d="M3 11h5a1 1 0 0 1 1 1v9"/>'),wrench:$('<path d="M14.5 6.5a4 4 0 0 0 5.2 4.9L12 19.1a2 2 0 0 1-2.8 0l-.3-.3a2 2 0 0 1 0-2.8l7.7-7.7a4 4 0 0 0-4.9-5.2l2.6 2.6z"/>')},ce=`
<svg viewBox="0 0 340 262" class="diagram anim" role="img" aria-label="Red de saneamiento de un edificio" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M30 236V48h210v188M30 128h210M30 206h210" class="wall"/>
  <path d="M30 48l105-30 105 30" class="wall"/>
  <path d="M6 236h328" class="ground"/>
  <text x="300" y="250" class="dl">calle</text>

  <g data-from="1" data-at="1">
    <rect x="56" y="94" width="36" height="12" rx="3" class="fix"/>
    <path d="M74 106v14h60" class="pipe"/><path d="M74 106v14h60" class="flow"/>
    <text x="52" y="88" class="dl">lavabo</text>
    <text x="80" y="140" class="dl b">desagüe</text>
  </g>
  <g data-from="2" data-at="2">
    <path d="M134 120h66" class="pipe"/><path d="M134 120h66" class="flow"/>
    <text x="140" y="112" class="dl b">derivación</text>
    <rect x="96" y="176" width="26" height="22" rx="6" class="fix"/>
    <path d="M122 190h78" class="pipe"/><path d="M122 190h78" class="flow"/>
    <text x="92" y="170" class="dl">inodoro</text>
    <text x="128" y="182" class="dl b">manguetón</text>
  </g>
  <g data-from="3" data-at="3">
    <path d="M200 6v214" class="pipe big"/><path d="M200 60v160" class="flow"/>
    <path d="M200 6v42" class="air"/>
    <text x="206" y="16" class="dl">aire</text>
    <text x="206" y="88" class="dl b">bajante</text>
  </g>
  <g data-from="4" data-at="4">
    <path d="M200 220q0 8 10 8h44" class="pipe big"/><path d="M200 220q0 8 10 8h44" class="flow"/>
    <text x="246" y="216" class="dl b">colector</text>
  </g>
  <g data-from="5" data-at="5">
    <path d="M254 228l30 22h44" class="pipe big buried"/><path d="M254 228l30 22h44" class="flow"/>
    <text x="252" y="262" class="dl b">albañal</text>
  </g>
</svg>`,de=`
<svg viewBox="0 0 260 186" class="diagram anim" role="img" aria-label="Desagües de un cuarto de baño hasta la bajante, con sus pendientes y distancias" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 168h234" class="ground"/>
  <path d="M228 0v186" class="pipe big"/><path d="M228 0v186" class="flow"/>
  <text x="222" y="182" class="dl" text-anchor="end">bajante</text>
  <g data-to="0">
    <path d="M40 100l150 14" class="ln thin"/>
    <path d="M150 96l20 2-4 -6M170 98l-6 5" class="ln thin"/>
    <text x="54" y="88" class="dl b">siempre hacia abajo</text>
  </g>
  <g data-from="1" data-at="1">
    <rect x="14" y="46" width="44" height="10" rx="3" class="fix"/>
    <text x="16" y="40" class="dl">lavabo</text>
    <path d="M36 56V72L200 84l28 26" class="pipe thin"/><path d="M36 56V72L200 84l28 26" class="flow"/>
    <text x="96" y="70" class="dl b">2,5–5 %</text>
    <path d="M36 22h192M36 18v8M228 18v8" class="dim"/>
    <text x="104" y="16" class="dl b">≤ 4,00 m</text>
  </g>
  <g data-from="2" data-to="2" data-at="2">
    <rect x="14" y="120" width="76" height="16" rx="5" class="fix"/>
    <text x="16" y="114" class="dl">bañera</text>
    <path d="M70 136v6L210 150l18 14" class="pipe thin"/><path d="M70 136v6L210 150l18 14" class="flow"/>
    <text x="120" y="140" class="dl b">≤ 10 %</text>
  </g>
  <g data-from="3" data-to="3" data-at="3">
    <rect x="150" y="124" width="30" height="24" rx="7" class="fix"/>
    <rect x="166" y="104" width="12" height="20" rx="2" class="fix"/>
    <text x="118" y="118" class="dl">inodoro</text>
    <path d="M180 144h48" class="pipe"/><path d="M180 144h48" class="flow"/>
    <path d="M180 156h48M180 152v8M228 152v8" class="dim"/>
    <text x="182" y="166" class="dl b">≤ 1,00 m</text>
  </g>
  <g data-from="4" data-at="4">
    <path d="M200 84a16 16 0 0 0 7 13" class="ln thin"/>
    <path d="M200 84l12 11" class="dim"/>
    <text x="150" y="102" class="dl b">≥ 45°</text>
  </g>
  <g data-from="5" data-at="5">
    <rect x="29" y="68" width="14" height="8" rx="2" class="fix"/>
    <text x="8" y="94" class="dl b">tapón roscado</text>
  </g>
</svg>`,ue=`
<svg viewBox="0 0 220 132" class="diagram anim" role="img" aria-label="Sifón con agua retenida que impide el paso de los gases" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M40 4v52M60 4v52" class="ln"/>
  <path d="M40 56q0 44 40 44t40-44V44M60 56q0 24 20 24t20-24V44M120 44h96M100 64h116" class="ln"/>
  <g data-to="0">
    <circle class="bub free" cx="200" cy="56" r="3.5"/><circle class="bub free b2" cx="200" cy="56" r="3"/><circle class="bub free b3" cx="200" cy="56" r="3.2"/>
    <text x="4" y="20" class="dl b">¡olor!</text>
  </g>
  <path data-from="1" data-at="1" class="water" d="M42 70q2 28 38 28t38-28h-18q0 10-20 10t-20-10z"/>
  <path data-from="1" class="flow" d="M50 6v40"/>
  <g data-from="2">
    <circle class="bub" cx="160" cy="58" r="3.5"/><circle class="bub b2" cx="180" cy="58" r="2.8"/><circle class="bub b3" cx="200" cy="58" r="3.2"/>
    <g class="stopx"><circle cx="110" cy="54" r="8"/><path d="M106 50l8 8M114 50l-8 8"/></g>
  </g>
  <text x="146" y="38" class="dl">gases</text>
  <g data-from="3" data-at="3">
    <path d="M130 70v28M126 70h8M126 98h8" class="dim"/>
    <text x="138" y="82" class="dl b">50 mín.</text>
    <text x="138" y="94" class="dl">70 disc.</text>
    <text x="138" y="106" class="dl">100 máx.</text>
  </g>
  <g data-from="4" data-at="4">
    <text x="4" y="126" class="dl b">bote sifónico: ≤ 2,00 m de la bajante</text>
  </g>
  <text x="140" y="124" class="dl" data-to="3">al colector →</text>
</svg>`,pe=`
<svg viewBox="0 0 240 176" class="diagram anim" role="img" aria-label="Sifón que se vacía por sifonado y autosucción, y ventilación terciaria que lo evita" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <rect x="14" y="4" width="72" height="12" rx="4" class="fix"/>
  <text x="18" y="30" class="dl">lavabo</text>
  <g transform="translate(0 18)">
    <path d="M40 0v56M60 0v56" class="ln"/>
    <path d="M40 56q0 44 40 44t40-44V44H190V150M60 56q0 24 20 24t20-24V64H170V150" class="ln"/>
    <path data-to="0" class="water" d="M42 70q2 28 38 28t38-28h-18q0 10-20 10t-20-10z"/>
    <path data-from="1" data-to="2" class="water wobble" d="M42 70q2 28 38 28t38-28h-18q0 10-20 10t-20-10z"/>
    <path data-from="4" data-at="4" class="water" d="M42 70q2 28 38 28t38-28h-18q0 10-20 10t-20-10z"/>
    <path data-from="1" class="flow" d="M50 2v40"/>
    <g data-from="1" data-to="1">
      <path d="M102 46H188V148H172V62H102z" class="water"/>
      <path d="M180 66v76" class="flow"/>
      <text x="4" y="122" class="dl b">tubo lleno:</text>
      <text x="4" y="134" class="dl">tira del agua del cierre</text>
    </g>
    <g data-from="2" data-to="2">
      <rect x="172" y="66" width="16" height="16" rx="3" class="slug"/>
      <text x="4" y="122" class="dl b">el último trozo, un émbolo:</text>
      <text x="4" y="134" class="dl">deja un vacío y aspira</text>
    </g>
    <g data-from="3" data-to="3">
      <circle class="bub up" cx="50" cy="66" r="3.5"/><circle class="bub up b2" cx="50" cy="66" r="3"/><circle class="bub up b3" cx="50" cy="66" r="3.2"/>
      <text x="70" y="10" class="dl b">¡olor!</text>
      <text x="4" y="122" class="dl b">sin agua, sin cierre</text>
    </g>
    <g data-from="4" data-at="4">
      <path d="M140 44V-12" class="pipe vent"/>
      <path d="M140 -10v50" class="air"/>
      <text x="148" y="-2" class="dl b">ventilación</text>
      <text x="148" y="10" class="dl b">terciaria</text>
      <text x="4" y="122" class="dl b">entra aire: no hay sifonado</text>
    </g>
    <g data-from="5" data-at="5">
      <text x="4" y="122" class="dl b">lavabo: ≤ 4,00 m de la bajante</text>
      <text x="4" y="134" class="dl b">ramal &gt; 5 m: terciaria</text>
    </g>
    <text x="196" y="150" class="dl">bajante</text>
  </g>
</svg>`,me=`
<svg viewBox="0 0 240 236" class="diagram anim" role="img" aria-label="Ventilación de la bajante" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 60h228" class="ground"/>
  <text x="10" y="54" class="dl">cubierta</text>
  <path d="M14 104h196M14 148h196M14 192h196" class="wall"/>
  <path d="M110 60v170" class="pipe big"/>
  <g data-to="1">
    <rect x="106" y="70" width="8" height="18" rx="3" class="slug"/>
    <text x="122" y="84" class="dl b">− aspira</text>
    <text x="122" y="134" class="dl b">+ empuja</text>
  </g>
  <g data-from="1" data-at="1">
    <path d="M44 140q0 10 8 10t8-10M60 140v-4M44 140v-4M60 136h50" class="ln thin"/>
    <path d="M45 142q1 6 7 6t7-6" class="water wobble"/>
    <text x="16" y="132" class="dl">sifón</text>
  </g>
  <g data-from="2" data-at="2">
    <path d="M110 60V14" class="pipe big"/><path d="M110 60V14" class="air"/>
    <path d="M122 60V14M118 60h8M118 14h8" class="dim"/>
    <text x="130" y="30" class="dl b">1,30 m</text>
    <text x="130" y="42" class="dl">2,00 m si se pisa</text>
  </g>
  <g data-from="3" data-at="3">
    <text x="122" y="84" class="dl b">&lt; 7 plantas:</text>
    <text x="122" y="96" class="dl">solo primaria</text>
  </g>
  <g data-from="4" data-at="4">
    <path d="M222 60v170" class="pipe vent"/>
    <path d="M110 142l112-14M110 226l112-14" class="pipe vent thin"/>
    <text x="128" y="176" class="dl b">secundaria</text>
  </g>
  <g data-from="5" data-at="5">
    <path d="M60 136v-18h162" class="pipe vent thin dash"/>
    <text x="128" y="112" class="dl b">terciaria</text>
  </g>
</svg>`,be=`
<svg viewBox="0 0 220 132" class="diagram anim" role="img" aria-label="Llenado de tubos de saneamiento" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <defs><clipPath id="c-col"><rect x="138" y="49.5" width="60" height="40"/></clipPath></defs>
  <g data-at="1">
    <circle cx="40" cy="60" r="30" class="ln"/>
    <path data-from="1" d="M16 78a30 30 0 0 0 48 0z" class="water"/>
    <g data-from="1"><circle cx="34" cy="86" r="1.8" class="mud"/><circle cx="42" cy="87" r="1.6" class="mud"/><circle cx="48" cy="85" r="1.4" class="mud"/></g>
    <text x="14" y="108" class="dl">demasiado</text><text x="18" y="118" class="dl">grande</text>
  </g>
  <g data-from="2" data-at="2">
    <path d="M100 34a26 26 0 1 1 0 52a26 26 0 1 1 0-52zM100 38.8a21.2 21.2 0 1 0 0 42.4a21.2 21.2 0 1 0 0-42.4z" class="water ring"/>
    <circle cx="100" cy="60" r="26" class="ln"/>
    <text x="80" y="104" class="dl b">bajante</text><text x="84" y="116" class="dl">≤ 1/3</text>
  </g>
  <g data-from="3" data-at="3">
    <circle cx="168" cy="60" r="26" class="water" clip-path="url(#c-col)"/>
    <circle cx="168" cy="60" r="26" class="ln"/>
    <text x="146" y="104" class="dl b">colector</text><text x="150" y="116" class="dl">≤ 3/4</text>
  </g>
  <g data-from="4" data-at="4">
    <path d="M128 18h70l-6-4M198 18l-6 4" class="ln thin"/>
    <text x="104" y="12" class="dl b">0,6–2,2 m/s · 1–4 %</text>
  </g>
</svg>`,he=`
<svg viewBox="0 0 260 186" class="diagram anim" role="img" aria-label="Sifón individual bajo un lavabo y bote sifónico en el suelo" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M240 0v186" class="pipe big"/><path d="M240 0v186" class="flow"/>
  <text x="234" y="182" class="dl" text-anchor="end">bajante</text>
  <g data-to="0">
    <rect x="40" y="34" width="48" height="10" rx="3" class="fix"/>
    <path d="M64 44v22q0 14 12 14t12-14v-4h28" class="pipe thin"/>
    <text x="52" y="104" class="dl b">sifón</text>
    <text x="30" y="116" class="dl">uno por aparato</text>
    <text x="126" y="80" class="dl b">o</text>
    <path d="M140 66h60" class="ground"/>
    <path d="M150 66v32h40v-32" class="ln"/>
    <text x="156" y="116" class="dl b">bote</text>
    <text x="138" y="128" class="dl">para varios</text>
  </g>
  <g data-from="1" data-to="1" data-at="1">
    <rect x="60" y="20" width="64" height="10" rx="3" class="fix"/>
    <text x="62" y="14" class="dl">lavabo</text>
    <path d="M86 30V64q0 22 20 22t20-22V62H238M98 30V64q0 10 8 10t8-10V52H238" class="ln"/>
    <path d="M86 62V64q0 22 20 22t20-22V62H114v2q0 10-8 10t-8-10v-2z" class="water"/>
    <path d="M92 32v26" class="flow"/>
    <path d="M74 30v32M70 30h8M70 62h8" class="dim"/>
    <text x="66" y="50" class="dl b" text-anchor="end">≤ 60 cm</text>
    <text x="132" y="76" class="dl">corona</text>
    <rect x="100" y="86" width="12" height="6" rx="2" class="fix"/>
    <text x="84" y="106" class="dl b">tapón roscado</text>
  </g>
  <g data-from="2" data-to="2" data-at="2">
    <path d="M24 124H238" class="pipe thin"/><path d="M24 124H238" class="flow"/>
    <rect x="170" y="88" width="46" height="12" rx="4" class="fix"/><path d="M193 100v24" class="ln thin"/>
    <rect x="118" y="90" width="28" height="10" rx="4" class="fix"/><path d="M132 100v24" class="ln thin"/>
    <rect x="56" y="90" width="36" height="8" rx="3" class="fix"/><path d="M74 98v26" class="ln thin"/>
    <text x="172" y="82" class="dl b">1 bañera</text>
    <text x="118" y="82" class="dl b">2 bidé</text>
    <text x="50" y="82" class="dl b">3 lavabo</text>
    <text x="24" y="148" class="dl">desde la bajante, de menor</text>
    <text x="24" y="160" class="dl">a mayor altura de cierre</text>
  </g>
  <path data-from="3" d="M4 96H232" class="ground"/>
  <g data-from="3" data-at="3">
    <path d="M110 96v58h60v-58" class="ln"/>
    <rect x="106" y="90" width="68" height="6" rx="2" class="fix"/>
    <text x="104" y="84" class="dl b">tapa hermética</text>
    <path d="M110 166h60M110 162v8M170 162v8" class="dim"/>
    <text x="112" y="180" class="dl b">Ø ≥ 110 mm</text>
  </g>
  <g data-from="4" data-at="4">
    <rect x="111.5" y="118" width="57" height="35" class="water"/>
    <path d="M10 140H110" class="pipe thin"/><path d="M10 140H110" class="flow"/>
    <path d="M170 118H238" class="pipe thin"/><path d="M170 118H238" class="flow"/>
    <text x="10" y="132" class="dl b">entrada ≥ 20 mm</text>
    <text x="176" y="98" class="dl b">salida</text><text x="176" y="110" class="dl b">≥ 50 mm</text>
  </g>
  <g data-from="5" data-at="5">
    <path d="M4 96V24H228V96" class="wall"/>
    <text x="14" y="44" class="dl b">solo aparatos de este cuarto</text>
    <text x="14" y="58" class="dl">y registrable desde aquí</text>
  </g>
</svg>`,ge=`
<svg viewBox="0 0 240 164" class="diagram anim" role="img" aria-label="Inodoro sifónico: cierre, descarga, sifonado y reposición del cierre" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <rect x="126" y="2" width="58" height="18" rx="3" class="fix"/>
  <text x="190" y="14" class="dl">cisterna</text>
  <rect data-to="0" x="130" y="6" width="50" height="10" class="water"/>
  <path d="M8 24H124" class="ground"/>
  <path d="M12 26Q14 58 40 64V92q0 30 44 30t44-30V64Q128 56 137 56T146 64V128H234" class="ln"/>
  <path d="M116 26Q112 52 72 60V92q0 12 12 12t12-12V50Q96 34 116 34H150Q170 34 170 54V116H234" class="ln"/>
  <path data-to="0" d="M38 64V92q0 30 44 30t44-30V64H96V92q0 12-12 12t-12-12V64z" class="water"/>
  <path data-from="3" d="M38 64V92q0 30 44 30t44-30V64H96V92q0 12-12 12t-12-12V64z" class="water"/>
  <g data-to="1"><circle cx="52" cy="80" r="2.6" class="mud"/><circle cx="60" cy="86" r="2" class="mud"/><circle cx="46" cy="88" r="2.2" class="mud"/></g>
  <text data-to="0" x="52" y="138" class="dl b">cierre hidráulico</text>
  <g data-from="1" data-to="2" data-at="1">
    <path d="M17 40Q20 60 40 64V92q0 30 44 30t44-30V64Q128 56 137 56T146 64V128H234V116H170V54Q170 34 150 34H116Q96 34 96 50V92q0 12-12 12t-12-12V60Q106 52 112 40z" class="water"/>
    <path d="M140 18Q130 26 116 28" class="flow"/>
  </g>
  <text data-from="1" data-to="1" data-at="1" x="12" y="140" class="dl b">la descarga llena el tubo</text>
  <g data-from="2" data-to="2" data-at="2">
    <path d="M56 30V92q0 22 28 22t28-22V48Q112 44 128 44Q158 44 158 64V122H232" class="flow"/>
    <text x="12" y="140" class="dl b">sifonado a favor:</text>
    <text x="12" y="152" class="dl">se lleva todo lo de la taza</text>
  </g>
  <g data-from="3" data-to="3" data-at="3">
    <path d="M56 30V92q0 22 28 22t28-22V48Q112 44 128 44Q158 44 158 64V122H232" class="airg"/>
    <path d="M140 18Q130 26 116 28" class="flow"/>
    <text x="12" y="140" class="dl b">el agua arrastra el aire: sin olor</text>
    <text x="12" y="152" class="dl">un chorrito repone el cierre</text>
  </g>
  <g data-from="4" data-at="4">
    <path d="M226 116v12M222 116h8M222 128h8" class="dim"/>
    <text x="232" y="150" class="dl b" text-anchor="end">Ø 100 mm</text>
    <text x="12" y="140" class="dl b">4 UD con cisterna</text>
    <text x="12" y="152" class="dl">8 UD con fluxómetro</text>
  </g>
</svg>`,xe=`
<svg viewBox="0 0 240 204" class="diagram anim" role="img" aria-label="El agua baja pegada a la pared de la bajante y deja aire en el centro" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 52h80M136 52h100M4 112h80M136 112h100M4 172h80M136 172h100" class="wall"/>
  <path d="M90 0V204M130 0V204" class="ln"/>
  <path d="M10 30L90 40M10 90L90 100" class="pipe thin"/><path d="M10 30L90 40M10 90L90 100" class="flow"/>
  <g data-to="0">
    <path d="M110 44V96" class="dim"/>
    <text x="140" y="34" class="dl b">¿por el centro?</text>
  </g>
  <g data-from="1" data-at="1">
    <path d="M92 44C128 50 128 62 110 68S92 86 110 92S128 110 110 116S92 134 110 140S128 158 110 164S92 182 110 188" class="flow"/>
    <path d="M110 4V200" class="airg"/>
  </g>
  <g data-from="1" data-to="1" data-at="1">
    <text x="140" y="74" class="dl b">pegada a la pared</text>
    <text x="140" y="88" class="dl b">aire en el centro</text>
  </g>
  <g data-from="2" data-to="2" data-at="2">
    <path d="M146 58v10M142 64l4 4 4-4M146 96v22M142 114l4 4 4-4M146 144v28M142 168l4 4 4-4M146 180v20" class="ln thin"/>
    <text x="158" y="68" class="dl b">acelera…</text>
    <text x="158" y="160" class="dl b">velocidad final</text>
  </g>
  <g data-from="3" data-to="3" data-at="3">
    <rect x="92" y="20" width="36" height="14" rx="3" class="slug"/>
    <path d="M196 34a26 26 0 1 1 0 52a26 26 0 1 1 0-52zM196 38.8a21.2 21.2 0 1 0 0 42.4a21.2 21.2 0 1 0 0-42.4z" class="water ring"/>
    <circle cx="196" cy="60" r="26" class="ln"/>
    <text x="180" y="104" class="dl b">≤ 1/3</text>
    <text x="168" y="118" class="dl b">± 250 Pa</text>
    <text x="140" y="150" class="dl">tapón = émbolo</text>
  </g>
  <g data-from="4" data-to="4" data-at="4">
    <path d="M90 12h40M90 8v8M130 8v8M90 192h40M90 188v8M130 188v8" class="dim"/>
    <text x="140" y="18" class="dl b">mismo Ø arriba</text>
    <text x="140" y="196" class="dl b">y abajo</text>
    <text x="140" y="84" class="dl">recta, sin desvíos;</text>
    <text x="140" y="98" class="dl">nunca disminuye</text>
  </g>
  <g data-from="5" data-at="5">
    <path d="M190 58v40l34 18v66" class="pipe big"/><path d="M190 58v40l34 18v66" class="flow"/>
    <path d="M190 98v26" class="dim"/>
    <path d="M190 112a14 14 0 0 0 12 -6" class="ln thin"/>
    <text x="152" y="134" class="dl b">&gt; 60°</text>
    <text x="146" y="34" class="dl b">&gt; 10 plantas:</text>
    <text x="146" y="46" class="dl">desvío</text>
  </g>
</svg>`,fe=`
<svg viewBox="0 0 260 226" class="diagram anim" role="img" aria-label="Colocación de la ventilación: salida a cubierta, columna secundaria, terciaria y válvulas de aireación" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 44H256" class="ground"/>
  <text x="6" y="56" class="dl">cubierta</text>
  <path d="M4 104H256M4 164H256" class="wall"/>
  <path d="M130 44V226" class="pipe big"/><path d="M130 60V226" class="flow"/>
  <g data-at="0"><path d="M130 6V44" class="pipe big"/><path d="M130 6V44" class="air"/></g>
  <g data-from="1" data-at="1">
    <rect x="18" y="20" width="28" height="22" rx="3" class="fix"/>
    <path d="M24 28h16M24 34h16" class="ln thin"/>
    <text x="4" y="14" class="dl">toma de aire</text>
    <path d="M46 26H124M46 22v8M124 22v8" class="dim"/>
    <text x="84" y="20" class="dl b">≥ 6 m</text>
    <rect x="214" y="22" width="18" height="22" rx="2" class="fix"/>
    <text x="206" y="16" class="dl">ventana</text>
    <path d="M150 6v16M146 6h8M146 22h8" class="dim"/>
    <text x="158" y="18" class="dl b">≥ 50 cm</text>
  </g>
  <g data-from="2" data-to="3" data-at="2">
    <path d="M156 214V62L136 54" class="pipe vent"/>
    <path d="M130 212q0 8 10 8H256" class="pipe big"/>
    <rect x="30" y="86" width="40" height="10" rx="3" class="fix"/><path d="M50 96v4H126" class="ln thin"/>
    <path d="M86 60v26M82 60h8M82 86h8" class="dim"/>
    <text x="94" y="78" class="dl b">≥ 1 m</text>
    <text x="164" y="80" class="dl b">secundaria</text>
    <text x="164" y="206" class="dl">≤ 10 D</text>
  </g>
  <g data-from="3" data-to="3" data-at="3">
    <rect x="30" y="142" width="36" height="8" rx="3" class="fix"/>
    <path d="M48 150v6q0 6 6 6H126" class="pipe thin"/><path d="M48 150v6q0 6 6 6H126" class="flow"/>
    <path d="M78 162V122H156" class="pipe vent thin"/>
    <path d="M54 176h24M54 172v8M78 172v8" class="dim"/>
    <text x="40" y="192" class="dl b">2–20 D</text>
    <text x="14" y="118" class="dl b">terciaria</text>
  </g>
  <g data-from="4" data-at="4">
    <rect x="14" y="84" width="26" height="10" rx="3" class="fix"/>
    <rect x="86" y="84" width="26" height="10" rx="3" class="fix"/>
    <path d="M27 94v4H126M99 94v4" class="pipe thin"/><path d="M27 98H126" class="flow"/>
    <path d="M62 98V74" class="pipe thin"/>
    <rect x="55" y="58" width="14" height="16" rx="3" class="fix valve"/>
    <path d="M58 66h8" class="ln thin"/>
    <text x="10" y="76" class="dl b">válvula</text>
    <text x="14" y="120" class="dl">penúltimo</text>
    <text x="84" y="120" class="dl">último</text>
  </g>
  <g data-from="5" data-at="5">
    <text x="142" y="132" class="dl b">≤ 5 plantas:</text>
    <text x="142" y="144" class="dl">1 válvula</text>
    <text x="142" y="160" class="dl b">más altas:</text>
    <text x="142" y="172" class="dl">1 cada 4 plantas</text>
    <text x="10" y="182" class="dl">entre el último</text>
    <text x="10" y="194" class="dl">y el penúltimo,</text>
    <text x="10" y="206" class="dl">de 1 a 2 m encima</text>
  </g>
</svg>`,ye=`
<svg viewBox="0 0 260 222" class="diagram anim" role="img" aria-label="Red de pluviales y de residuales: sistema separativo y mixto" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M58 6l-4 12M98 2l-4 12M138 8l-4 12M178 2l-4 12M218 8l-4 12" class="flow"/>
  <path d="M24 50H206" class="ground"/>
  <path d="M30 50V180M200 50V180" class="wall"/>
  <path d="M4 180H256" class="ground"/>
  <text x="222" y="174" class="dl">calle</text>
  <path d="M44 50V180" class="pipe"/><path d="M44 54V180" class="flow"/>
  <path d="M170 24V180" class="pipe"/><path d="M170 24V50" class="air"/><path d="M170 150V180" class="flow"/>
  <rect x="118" y="132" width="34" height="10" rx="3" class="fix"/>
  <path d="M135 142v6H168" class="pipe thin"/><path d="M135 142v6H168" class="flow"/>
  <text x="50" y="70" class="dl b">pluviales</text>
  <text x="112" y="124" class="dl b">residuales</text>
  <g data-from="1" data-to="1" data-at="1">
    <path d="M44 180V192H256" class="pipe buried"/><path d="M44 192H256" class="flow"/>
    <path d="M170 180V206H256" class="pipe buried"/><path d="M170 206H256" class="flow"/>
    <text x="62" y="218" class="dl b">separativo: dos redes</text>
  </g>
  <g data-from="2" data-at="2">
    <path d="M44 180V200H150" class="pipe buried"/><path d="M44 200H150" class="flow"/>
    <path d="M170 180V200H256" class="pipe buried"/><path d="M170 200H256" class="flow"/>
    <path d="M150 194v6q0 8 8 8t8-8v-6" class="ln thin"/>
    <path d="M151.5 200q0 6.5 6.5 6.5t6.5-6.5z" class="water"/>
    <text x="62" y="218" class="dl b">mixto: con cierre hidráulico</text>
  </g>
  <g data-from="3" data-at="3">
    <rect x="78" y="44" width="16" height="6" rx="2" class="fix"/>
    <path d="M44 38H86M44 34v8M86 34v8" class="dim"/>
    <text x="50" y="30" class="dl b">≤ 5 m</text>
  </g>
  <g data-from="3" data-to="3" data-at="3">
    <text x="50" y="88" class="dl">sumideros sifónicos:</text>
    <text x="50" y="102" class="dl">2 si la cubierta &lt; 100 m²</text>
  </g>
  <g data-from="4" data-at="4">
    <path d="M10 46a8 8 0 0 0 16 0" class="ln"/>
    <path d="M12 47a6 6 0 0 0 12 0z" class="water"/>
  </g>
  <g data-from="4" data-to="4" data-at="4">
    <text x="50" y="88" class="dl b">canalón ≥ 0,5 %</text>
    <text x="50" y="102" class="dl">tablas para 100 mm/h</text>
  </g>
  <g data-from="5" data-at="5">
    <circle cx="74" cy="132" r="12" class="water"/><circle cx="74" cy="132" r="12" class="ln"/>
    <text x="54" y="162" class="dl b">sección llena</text>
  </g>
</svg>`,ve=`
<svg viewBox="0 0 260 210" class="diagram anim" role="img" aria-label="Colector colgado, colector enterrado, arquetas, registros y pozo general" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 40H256" class="wall"/>
  <path d="M4 120H256" class="ground"/>
  <path d="M20 0V48" class="pipe big"/><path d="M20 0V48" class="flow"/>
  <path d="M200 0V124" class="pipe big"/><path d="M200 0V124" class="flow"/>
  <g data-from="1" data-at="1">
    <path d="M20 48q0 10 10 10L120 66q10 1 10 10V124" class="pipe big"/><path d="M20 48q0 10 10 10L120 66q10 1 10 10V124" class="flow"/>
    <path d="M22 50a6 6 0 0 0 6 6" class="ln thin"/>
    <text x="34" y="34" class="dl b">pieza especial</text>
    <text x="40" y="88" class="dl b">colgado ≥ 1 %</text>
  </g>
  <g data-from="2" data-at="2">
    <path d="M118 124v24h24v-24" class="ln"/>
    <path d="M188 124v24h24v-24" class="ln"/>
    <path d="M142 140H188M212 140H232" class="pipe buried"/><path d="M142 140H188M212 140H232" class="flow"/>
  </g>
  <g data-from="2" data-to="2" data-at="2">
    <text x="150" y="170" class="dl b">pie de bajante,</text>
    <text x="150" y="182" class="dl">no sifónica</text>
    <text x="6" y="170" class="dl b">enterrado ≥ 2 %</text>
  </g>
  <g data-from="3" data-at="3">
    <circle cx="56" cy="61" r="4" class="fix"/><circle cx="100" cy="64" r="4" class="fix"/><circle cx="130" cy="96" r="4" class="fix"/>
    <path d="M56 48h44M56 44v8M100 44v8" class="dim"/>
  </g>
  <g data-from="3" data-to="3" data-at="3">
    <text x="6" y="170" class="dl b">registros: en encuentros, giros</text>
    <text x="6" y="182" class="dl">y cada ≤ 15 m en tramo recto</text>
  </g>
  <g data-from="4" data-at="4">
    <path d="M96 140H118M130 160V148" class="pipe buried"/>
    <rect x="116" y="122" width="28" height="28" class="ln thin"/>
  </g>
  <g data-from="4" data-to="4" data-at="4">
    <text x="6" y="170" class="dl b">arqueta de paso: ≤ 3 colectores</text>
    <text x="6" y="182" class="dl">40 × 40 cm si sale un Ø 100</text>
  </g>
  <g data-from="5" data-at="5">
    <path d="M232 122v66h22v-66" class="ln"/>
    <path d="M254 176h6" class="pipe"/>
    <text x="256" y="204" class="dl b" text-anchor="end">pozo general</text>
  </g>
  <g data-from="5" data-to="5" data-at="5">
    <text x="6" y="170" class="dl b">después, la acometida a la calle</text>
    <text x="6" y="182" class="dl">desnivel &gt; 1 m: pozo de resalto</text>
  </g>
</svg>`,$e=`
<svg viewBox="0 0 260 212" class="diagram anim" role="img" aria-label="Sótano con depósito y bombas que elevan el agua hasta el alcantarillado" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M150 52H256" class="ground"/>
  <path d="M150 52V212" class="wall"/>
  <path d="M4 140H150" class="ground"/>
  <text x="6" y="134" class="dl">sótano</text>
  <circle cx="232" cy="96" r="12" class="ln"/>
  <text x="252" y="126" class="dl" text-anchor="end">alcantarillado</text>
  <path d="M30 140V196H110V140" class="ln"/>
  <rect x="44" y="118" width="30" height="10" rx="3" class="fix"/><path d="M59 128v12" class="ln thin"/>
  <g data-to="0">
    <path d="M118 96H220" class="dim"/>
    <text x="160" y="90" class="dl b">más alto</text>
    <text x="6" y="208" class="dl b">no sale por gravedad</text>
  </g>
  <g data-from="1" data-at="1">
    <rect x="31.5" y="156" width="77" height="38.5" class="water"/>
    <rect x="80" y="172" width="18" height="18" rx="3" class="fix"/>
    <text x="84" y="185" class="dl b">B</text>
    <path d="M89 172V26H232V84" class="pipe thin"/><path d="M89 172V26H232V84" class="flow"/>
  </g>
  <g data-from="2" data-at="2">
    <rect x="52" y="172" width="18" height="18" rx="3" class="fix"/>
    <text x="56" y="185" class="dl b">B</text>
    <rect x="4" y="150" width="20" height="12" rx="2" class="fix"/>
    <path d="M8 156h4M10 154v4M16 156h4" class="ln thin"/>
    <text x="2" y="176" class="dl b">24 h</text>
  </g>
  <g data-from="3" data-at="3">
    <path d="M32 158H108M32 180H108" class="lvl"/>
    <text x="114" y="162" class="dl">alto</text>
    <text x="114" y="184" class="dl">bajo</text>
  </g>
  <g data-from="3" data-to="3" data-at="3"><text x="6" y="208" class="dl b">≤ 12 arranques por hora</text></g>
  <g data-from="4" data-at="4">
    <path d="M156 52V26" class="dim"/>
    <text x="160" y="20" class="dl b">bucle antirreflujo</text>
  </g>
  <g data-from="5" data-at="5">
    <path d="M226 62h12l-12 12h12z" class="fix valve"/>
    <text x="222" y="72" class="dl b" text-anchor="end">antirretorno</text>
  </g>
</svg>`,ke=`
<svg viewBox="0 0 260 214" class="diagram anim" role="img" aria-label="Sujeción de desagües, paso por forjado, abrazaderas de bajante y colector colgado" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 24H180" class="wall"/>
  <path d="M4 96H256M4 110H256" class="wall"/>
  <path d="M190 0V140" class="pipe big"/><path d="M190 0V140" class="flow"/>
  <g data-from="1" data-at="1">
    <path d="M16 54L186 64" class="pipe thin"/><path d="M16 54L186 64" class="flow"/>
    <path d="M40 24v31M90 24v34M140 24v37" class="ln thin"/>
    <path d="M40 78h50M40 74v8M90 74v8" class="dim"/>
  </g>
  <g data-from="1" data-to="1" data-at="1">
    <text x="44" y="90" class="dl b">700 mm (Ø ≤ 50)</text>
    <text x="6" y="200" class="dl">500 mm en tubos mayores</text>
  </g>
  <g data-from="2" data-at="2">
    <path d="M180 90V116M200 90V116" class="ln thin"/>
    <text x="176" y="90" class="dl b" text-anchor="end">contratubo</text>
  </g>
  <g data-from="2" data-to="2" data-at="2"><text x="6" y="200" class="dl b">holgura ≥ 10 mm, rellena de material elástico</text></g>
  <g data-from="3" data-at="3">
    <path d="M236 0V96" class="wall"/>
    <rect x="182" y="28" width="16" height="5" rx="1" class="fix"/><rect x="182" y="72" width="16" height="5" rx="1" class="fix"/>
    <path d="M198 30H236M198 74H236" class="ln thin"/>
    <path d="M172 30v44M168 30h8M168 74h8" class="dim"/>
    <text x="166" y="56" class="dl b" text-anchor="end">15 Ø</text>
  </g>
  <g data-from="3" data-to="3" data-at="3"><text x="6" y="200" class="dl b">aplomada y separada de la pared</text></g>
  <g data-from="4" data-at="4">
    <path d="M190 140q0 12-12 12H20M190 152H250" class="pipe big"/><path d="M190 140q0 12-12 12H20" class="flow"/>
    <path d="M60 110v38M150 110v38" class="ln thin"/>
    <circle cx="20" cy="152" r="4" class="fix"/>
    <path d="M100 110v38M96 110h8M96 148h8" class="dim"/>
    <text x="108" y="134" class="dl b">≥ 5 cm</text>
  </g>
  <g data-from="4" data-to="4" data-at="4"><text x="6" y="200" class="dl b">abrazaderas cada 1,50 m · codos de 45° con registro</text></g>
  <g data-from="5" data-at="5">
    <path d="M150 170h40M190 170h40M150 166v8M190 166v8M230 166v8" class="dim"/>
    <text x="156" y="186" class="dl b">1 m</text><text x="200" y="186" class="dl b">1 m</text>
  </g>
  <g data-from="5" data-to="5" data-at="5"><text x="6" y="200" class="dl b">sin desagües junto al entronque</text></g>
</svg>`,Me=`
<svg viewBox="0 0 240 206" class="diagram anim" role="img" aria-label="Pruebas de la red: aparatos, agua, aire y humo" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 40H220" class="ground"/>
  <path d="M20 90H220M20 140H220" class="wall"/>
  <path d="M4 180H236" class="ground"/>
  <path d="M150 16V180" class="pipe big"/>
  <path d="M150 180V188H236" class="pipe big"/>
  <g data-from="1" data-at="1">
    <rect x="30" y="56" width="50" height="10" rx="3" class="fix"/>
    <path d="M55 66v10q0 8 8 8t8-8v-2H148" class="pipe thin"/>
    <path d="M51 78q0 10 12 10t12-10h-8q0 4-4 4t-4-4z" class="water"/>
    <path d="M86 80v8M82 80h8M82 88h8" class="dim"/>
    <text x="94" y="88" class="dl b">≥ 25 mm</text>
  </g>
  <g data-from="1" data-to="1" data-at="1"><text x="6" y="202" class="dl b">sin agua acumulada en 1 minuto</text></g>
  <g data-from="2" data-to="2" data-at="2">
    <rect x="146" y="40" width="8" height="140" class="water"/>
    <rect x="228" y="182" width="8" height="12" rx="2" class="fix"/>
  </g>
  <g data-from="2" data-to="3" data-at="3">
    <circle cx="196" cy="118" r="14" class="fix"/>
    <path d="M196 118l8-7" class="ln thin"/>
    <text x="188" y="146" class="dl">bar</text>
  </g>
  <g data-from="2" data-to="2" data-at="2"><text x="6" y="202" class="dl b">agua: 0,3 – 1 bar, hasta rebosar</text></g>
  <g data-from="3" data-to="3" data-at="3"><text x="6" y="202" class="dl b">aire: 0,5 – 1 bar durante 3 min</text></g>
  <g data-from="4" data-at="4">
    <rect x="96" y="160" width="34" height="16" rx="3" class="fix"/>
    <text x="100" y="172" class="dl b">humo</text>
    <path d="M130 168H146" class="ln thin"/>
    <circle class="bub up" cx="150" cy="170" r="3.5"/><circle class="bub up b2" cx="150" cy="130" r="3"/><circle class="bub up b3" cx="150" cy="90" r="3.2"/>
  </g>
  <g data-from="4" data-to="4" data-at="4"><text x="6" y="202" class="dl b">con los sifones llenos</text></g>
  <g data-from="5" data-at="5">
    <rect x="142" y="10" width="16" height="6" rx="2" class="fix"/>
    <text x="164" y="18" class="dl b">250 Pa</text>
  </g>
  <g data-from="5" data-to="5" data-at="5"><text x="6" y="202" class="dl b">sin humo ni olor dentro: ✓</text></g>
</svg>`,we=`
<svg viewBox="0 0 260 150" class="diagram anim" role="img" aria-label="Calendario de mantenimiento de la red de saneamiento" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 96H244" class="ln thin"/>
  <g data-to="0"><text x="16" y="40" class="dl b">calendario de la red</text></g>
  <g data-from="1" data-to="3" data-at="1">
    <rect x="16" y="6" width="44" height="8" rx="3" class="fix"/>
    <path d="M30 14V30q0 10 8 10t8-10V26h22" class="pipe thin"/>
    <circle cx="38" cy="38" r="2.6" class="mud"/><circle cx="34" cy="34" r="2" class="mud"/>
    <text x="74" y="30" class="dl b">desatascar</text>
    <text x="74" y="42" class="dl">si tarda en irse</text>
  </g>
  <g data-from="2" data-at="2">
    <circle cx="56" cy="96" r="6" class="fix"/>
    <text x="34" y="84" class="dl b">6 meses</text>
    <text x="16" y="116" class="dl">botes sifónicos</text>
    <text x="16" y="128" class="dl">sumideros</text>
    <text x="16" y="140" class="dl">separador grasas</text>
  </g>
  <g data-from="3" data-at="3">
    <circle cx="140" cy="96" r="6" class="fix"/>
    <text x="122" y="84" class="dl b">1 año</text>
    <text x="110" y="116" class="dl">colectores</text>
    <text x="110" y="128" class="dl">pozos, bombas</text>
    <circle cx="220" cy="96" r="6" class="fix"/>
    <text x="196" y="84" class="dl b">10 años</text>
    <text x="198" y="116" class="dl">arquetas</text>
  </g>
  <g data-from="4" data-at="4">
    <path d="M160 6V30q0 10 8 10t8-10V26h22" class="pipe thin"/>
    <circle class="bub up" cx="168" cy="40" r="3"/><circle class="bub up b2" cx="168" cy="40" r="2.6"/>
    <text x="16" y="30" class="dl b">sifón seco = olor</text>
    <text x="16" y="42" class="dl">siempre con agua</text>
  </g>
</svg>`,qe={network:ce,slope:de,trap:ue,siphon:pe,vent:me,size:be,pot:he,wc:ge,stack:xe,vent2:fe,rain:ye,yard:ve,pump:$e,site:ke,test:Me,care:we};function Se(a){if(!a.dataset.fx&&(a.dataset.fx="1",a.querySelectorAll("path.pipe").forEach(e=>{const s=e.cloneNode();s.setAttribute("class",e.classList.contains("big")?"pipe-hi big":"pipe-hi"),!(e.classList.contains("dash")||e.classList.contains("buried"))&&e.after(s)}),a.querySelectorAll("path.pipe:not(.dash):not(.buried), path.pipe-hi, path.ln, path.dim").forEach(e=>e.setAttribute("pathLength","1")),!a.parentElement?.classList.contains("dg-cam"))){const e=document.createElement("div");e.className="dg-cam",a.before(e),e.append(a)}}function je(a){const e=[...a.querySelectorAll(".hl")],s=a.viewBox.baseVal;let t=null;for(const u of e)try{const b=u.getBBox();if(!b.width&&!b.height)continue;const d=t?Math.min(t.x,b.x):b.x,y=t?Math.min(t.y,b.y):b.y,g=t?Math.max(t.right,b.x+b.width):b.x+b.width,f=t?Math.max(t.bottom,b.y+b.height):b.y+b.height;t=new DOMRect(d,y,g-d,f-y)}catch{}if(a.classList.toggle("focus",!!t),!t||!s.width){a.style.transform="";return}const o=Math.max(t.width/s.width,t.height/s.height),n=o>.7?1.03:o>.45?1.08:1.14,i=(u,b)=>{const d=(u+b)/2,y=(n*b-1)/(n-1),g=n*u/(n-1);return y<=g?Math.min(Math.max(d,y),g):d},r=i((t.x-s.x)/s.width,(t.right-s.x)/s.width)*100,p=i((t.y-s.y)/s.height,(t.bottom-s.y)/s.height)*100;a.style.transformOrigin=`${r.toFixed(1)}% ${p.toFixed(1)}%`,a.style.transform=`scale(${n})`}function za(a,e){const s=a.querySelector("svg.diagram.anim");s&&Se(s),a.querySelectorAll("[data-from],[data-to],[data-at]").forEach(t=>{const o=t.dataset.from===void 0?0:Number(t.dataset.from),n=t.dataset.to===void 0?1/0:Number(t.dataset.to),i=e<o||e>n,r=t.classList.contains("off");t.classList.toggle("off",i),t.classList.toggle("hl",t.dataset.at!==void 0&&Number(t.dataset.at)===e),!i&&(r||o===e&&e>0)&&(t.classList.remove("in"),t.getBoundingClientRect(),t.classList.add("in"))}),s&&je(s)}function ze(a){let e=2166136261;for(let s=0;s<a.length;s++)e^=a.charCodeAt(s),e=Math.imul(e,16777619);return`${(e>>>0).toString(36)}.mp3`}let A=null,T=0,Da=0;function pa(){T++,clearTimeout(Da),A&&(A.onended=null,A.onerror=null,A.pause()),"speechSynthesis"in window&&speechSynthesis.cancel()}function $a(a,e,s){if(!("speechSynthesis"in window)||typeof SpeechSynthesisUtterance>"u"){Da=window.setTimeout(()=>s===T&&e(),1200+a.length*55);return}const t=new SpeechSynthesisUtterance(a);t.lang="es-ES";const o=speechSynthesis.getVoices(),n=o.find(i=>i.lang==="es-ES")??o.find(i=>i.lang.toLowerCase().startsWith("es"));n&&(t.voice=n),t.onend=()=>s===T&&e(),t.onerror=()=>s===T&&e(),speechSynthesis.speak(t)}function De(a,e){pa();const s=T;A??=new Audio,A.src=`./voz/${ze(a)}`,A.onended=()=>s===T&&e(),A.onerror=()=>s===T&&$a(a,e,s),A.play().catch(()=>s===T&&$a(a,e,s))}const Ea=3,Ee=5;function Ha(a){return Math.max(2.5,7-.35*a)}function He(a){return 10*Math.min(a,Ee)}const ma=[{id:"bronze",min:150},{id:"silver",min:400},{id:"gold",min:1e3}];function Le(a){let e=null;for(const s of ma)a>=s.min&&(e=s.id);return e}function Ae(a){const e=ma.find(s=>a<s.min);return e?{id:e.id,missing:e.min-a}:null}function Be(a){let e=a>>>0;return()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}function Ce(a){let e=2166136261;for(const s of`ud-${a}`)e=Math.imul(e^s.charCodeAt(0),16777619);return e>>>0}function La(a,e){for(;;){const s=ya[Math.floor(a()*ya.length)],t=s.priv===null?!0:s.pub===null?!1:a()<.5,o=t?s.pub:s.priv;if(e&&e.f===s&&e.pub===t)continue;const n=ie.filter(r=>r!==o);for(let r=n.length-1;r>0;r--){const p=Math.floor(a()*(r+1));[n[r],n[p]]=[n[p],n[r]]}const i=[o,...n.slice(0,3)].sort((r,p)=>r-p);return{f:s,pub:t,value:o,options:i}}}const q="DB HS 5, 3.2",F="Ordenanza municipal de vertidos",Z="DB HS 5, 3.3.1.5",J=[{id:"rain",name:"Lluvia de la cubierta",bin:0,why:"El agua de lluvia va a la red de pluviales: con dos redes públicas, cada una a la suya.",src:q},{id:"terrace",name:"Sumidero de la terraza",bin:0,why:"Lo que recoge un sumidero de terraza es agua de lluvia: red de pluviales.",src:q},{id:"gutter",name:"Canalón del tejado",bin:0,why:"El canalón recoge lluvia y baja por la bajante de pluviales.",src:q},{id:"toilet",name:"Descarga del inodoro",bin:1,why:"Aguas fecales: red de residuales.",src:q},{id:"shower",name:"Agua de la ducha",bin:1,why:"Aunque parezca limpia, el agua usada en el baño es residual.",src:q},{id:"sink",name:"Fregadero",bin:1,why:"El agua de fregar es residual, con grasas y restos.",src:q},{id:"washer",name:"Lavadora",bin:1,why:"Agua con jabón: red de residuales, nunca a pluviales.",src:q},{id:"wipe",name:"Toallita húmeda",bin:2,why:"No se deshace en el agua: forma tapones en arquetas y bombas. A la basura.",src:F},{id:"oil",name:"Aceite de freír",bin:2,why:"Se pega en las tuberías y las atasca. Se lleva al punto limpio en una botella.",src:F},{id:"paint",name:"Disolvente del taller",bin:2,why:"Los residuos agresivos necesitan tratamiento antes de verterlos: al punto limpio.",src:"DB HS 5, 3.1"},{id:"patio",name:"Sumidero del patio",bin:0,why:"La lluvia del patio se conduce a pluviales.",src:q},{id:"roofgrid",name:"Rejilla de la azotea",bin:0,why:"La rejilla recoge lluvia de la azotea.",src:q},{id:"dishwasher",name:"Lavavajillas",bin:1,why:"Detergente y restos forman agua residual.",src:q},{id:"bath",name:"Bañera",bin:1,why:"El agua usada de la bañera es residual.",src:q},{id:"bidet",name:"Bidé",bin:1,why:"El agua usada del baño va a residuales.",src:q},{id:"basin",name:"Lavabo",bin:1,why:"El agua usada del lavabo es residual.",src:q},{id:"meds",name:"Medicamentos caducados",bin:2,why:"Van a la farmacia, nunca al desagüe.",src:F},{id:"cement",name:"Restos de cemento de la obra",bin:2,why:"Fragua dentro del tubo y lo tapona.",src:F},{id:"litter",name:"Arena del gato",bin:2,why:"No se deshace y atasca; va a la basura.",src:F},{id:"restsink",name:"Fregadero del restaurante",bin:3,why:"La grasa del fregadero pasa por el separador.",src:Z},{id:"garage",name:"Lavado del suelo del garaje",bin:3,why:"Arrastra aceites y gasolina al separador.",src:Z},{id:"fryer",name:"Limpieza de la cocina del bar",bin:3,why:"El agua con mucha grasa va al separador.",src:Z},{id:"resttoilet",name:"Inodoro del restaurante",bin:1,why:"Aunque sea del restaurante, al separador solo va el agua con grasa: esta, a residuales.",src:Z}],Ve=["rain","toilet","shower","sink","washer","dishwasher","bath","bidet","basin","wipe","oil","meds","litter"],Ue=J.filter(a=>a.bin!==3&&a.id!=="resttoilet").map(a=>a.id),ka=J.map(a=>a.id),Aa=[{id:"home",name:"Mañana en el piso",kinds:Ve,bins:[0,1,2],hits:12},{id:"storm",name:"Tormenta",kinds:Ue,bins:[0,1,2],hits:14},{id:"shops",name:"Bajos comerciales",kinds:ka,bins:[0,1,2,3],hits:16},{id:"all",name:"Todo el edificio",kinds:ka,bins:[0,1,2,3],hits:1/0}],Ba=3,Te=.2,Pe=.62,Ne=1.7,Ie=.55;function Oe(a=Math.random){return{items:[],lives:Ba,score:0,combo:0,hits:0,phase:0,phaseHits:0,wait:.4,pause:0,phaseNew:!1,slow:0,bonus:null,count:0,last:null,misses:[],over:!1,rnd:a,prev:""}}function Re(a){const e=Te+a.phase*.04+a.phaseHits*.008;return Math.min(Pe,e)*(a.slow>0?.5:1)}function Ge(a){return Math.max(Ie,Ne-a.phase*.08-a.phaseHits*.02)}function Fe(a){return 10*Math.min(4,1+Math.floor(a/4))}function ba(a){return Aa[a.phase]}function Qe(a,e){const s=J.filter(o=>e.includes(o.id)&&o.id!==a.prev),t=s.length?s:J.filter(o=>e.includes(o.id));return t[Math.floor(a.rnd()*t.length)]}function Je(a){const e=ba(a);let s=e.kinds;if(e.id==="storm"){const o=s.filter(i=>J.find(r=>r.id===i)?.bin===0),n=s.filter(i=>!o.includes(i));s=a.rnd()<.45?o:n}const t=Qe(a,s);a.prev=t.id,a.items.push({n:a.count++,kind:t,y:0})}function Ca(a,e){a.lives--,a.combo=0,a.misses.some(s=>s.id===e.id)||a.misses.push(e),a.lives<=0&&(a.over=!0)}function Ye(a){a.combo++,a.hits++,a.phaseHits++,a.score+=Fe(a.combo),a.combo%15===0?(a.lives=Math.min(Ba,a.lives+1),a.bonus="life"):a.combo%10===0&&(a.slow=4,a.bonus="slow");const e=ba(a);a.phaseHits>=e.hits&&a.phase<Aa.length-1&&(a.phase++,a.phaseHits=0,a.items=[],a.pause=2,a.phaseNew=!0,a.wait=.4)}function Ke(a,e){if(a.over)return;if(a.slow>0&&(a.slow=Math.max(0,a.slow-e)),a.pause>0){a.pause=Math.max(0,a.pause-e),a.pause===0&&(a.phaseNew=!1);return}const s=Re(a);for(const o of a.items)o.y+=s*e;const t=a.items.filter(o=>o.y>=1);a.items=a.items.filter(o=>o.y<1);for(const o of t)if(a.last={kind:o.kind,to:null,ok:!1,n:o.n},Ca(a,o.kind),a.over)return;a.wait-=e,a.wait<=0&&(Je(a),a.wait=Ge(a))}function _e(a,e){if(a.over||!a.items.length)return null;a.bonus=null;const s=a.items.reduce((n,i)=>i.y>n.y?i:n);a.items=a.items.filter(n=>n!==s);const o=ba(a).bins.includes(e)&&s.kind.bin===e;return a.last={kind:s.kind,to:e,ok:o,n:s.n},o?Ye(a):Ca(a,s.kind),o}const Ze=["open","trap","pot","both"],C=[{id:"smell",call:"«Huele a alcantarilla en el baño, sobre todo por la mañana.»",place:"Baño de una vivienda con bote sifónico",pot:!0,fixtures:[{kind:"lavabo",name:"Lavabo",start:"open"},{kind:"bide",name:"Bidé",start:"pot"},{kind:"banera",name:"Bañera",start:"pot"},{kind:"inodoro",name:"Inodoro",start:"trap"}]},{id:"double",call:"«Han cambiado el lavabo y ahora traga despacio y hace glu-glu.»",place:"Aseo con bote sifónico",pot:!0,fixtures:[{kind:"lavabo",name:"Lavabo",start:"both"},{kind:"ducha",name:"Ducha",start:"pot"},{kind:"inodoro",name:"Inodoro",start:"trap"}]},{id:"kitchen",call:"«Desde que pusimos el lavavajillas, la cocina huele raro.»",place:"Cocina con bote sifónico",pot:!0,fixtures:[{kind:"fregadero",name:"Fregadero",start:"trap"},{kind:"lavavajillas",name:"Lavavajillas",start:"pot"},{kind:"lavadora",name:"Lavadora",start:"open"}]}];function ha(a){return a.kind==="inodoro"}function We(a){return a==="fregadero"||a==="lavadora"||a==="lavavajillas"}const ia="DB HS 5, 3.3.1.1";function Xe(a,e){const s=[];return a.fixtures.forEach((t,o)=>{if(ha(t))return;const n=e[o],i=t.name.toLowerCase();n==="open"?s.push({at:o,type:"open",text:`El ${i} no tiene ningún cierre hidráulico: el tubo queda abierto y los gases de la red suben por su desagüe.`,src:ia}):n==="both"?s.push({at:o,type:"double",text:`El ${i} tiene dos cierres seguidos, su sifón y el bote. Los cierres no se ponen en serie: si va al bote, no lleva sifón propio.`,src:`${ia}, 2 g`}):n==="pot"&&We(t.kind)&&s.push({at:o,type:"ownTrap",text:`El ${i} no puede ir al bote sifónico: fregaderos, lavaderos, lavadoras y lavavajillas desaguan siempre con sifón individual.`,src:`${ia}, 2 j`})}),s}function Va(a){return a<=1?3:a===2?2:1}const as={moduleName:"Fluidos",courseLabel:"2.º curso · Instalaciones térmicas y de fluidos",subjectSub:"Toda la asignatura en una app: los temas se abren a medida que se dan en clase.",subjectPct:"de Fluidos",subjectSay:a=>`Vas por la lección ${a} de Saneamiento. ¿Seguimos?`,subjectSayStart:"Empezamos por Saneamiento, lección 1.",subjectSayDone:"¡Saneamiento completado!",byEval:"Por evaluación",evalNames:["1.ª evaluación","2.ª evaluación","3.ª evaluación"],nowTag:"Ahora",openOf:(a,e)=>`${a} de ${e} abiertos`,topicSoon:"Tema por llegar",topicSoonSub:"Se abre cuando se dé en clase",topicDesc:"Evacuación de aguas residuales y pluviales según el DB HS 5.",lessonsOf:(a,e)=>`${a} de ${e} lecciones`,lesson:"Lección",lessonOf:(a,e)=>`Lección ${a} de ${e}`,topicIntro:(a,e)=>`${a} lecciones. Llevas el ${e} % del tema.`,lessonSay:(a,e)=>`Lección ${a}: te falta ${e}.`,lessonSayStart:"Empieza por la lección 1.",where:"Dónde estás",stDoneF:"Hecha",partCards:a=>`${a} fichas`,partTest:"Test",partCalc:a=>a>1?`${a} ejercicios`:"Ejercicio",partJob:"Taller",partGame:"Juego",missingPart:{cards:"ver las fichas",test:"el test",calc:"el ejercicio",job:"el taller",game:"el juego"},and:"y",lessonTest:"Test de la lección",qOf:(a,e)=>`${a} de ${e} preguntas`,stepsOf:(a,e)=>`${a} de ${e} pasos`,jobsOf:(a,e)=>`${a} de ${e} avisos`,notPlayed:"Sin jugar",shLearn:"Aprende",shPractice:"Practica",shPlay:"Juega",animVoice:"Explicación animada con voz",seen:"Vista",close:"Cerrar",examTitle:"Simulacro del tema",examBoxSub:"15 preguntas mezcladas de las 5 lecciones, con nota sobre 10. Como el examen.",examGo:"Hacer simulacro",bestGrade:"Mejor nota",reviewAll:"Repasar todo el tema",reviewAllSub:"cuando acabes las lecciones",sumSub:"Todo el tema en claves",jobsAll:"Todos los avisos",gamesAll:"Los juegos del tema",evalShort:["1.ª eval","2.ª eval","3.ª eval"],stopsDone:a=>`${a} de 6 paradas`,topicPct:"del tema hecho",stDone:"Hecho",stHalf:"A medias",stNew:"Sin empezar",ekiHere:"Eki te espera aquí",nextUp:"Lo siguiente",goOn:"Seguir",streakLbl:"Racha",weekDays:["D","L","M","X","J","V","S"],examNone:"Aún sin hacer. 15 preguntas de todo el tema.",examHas:"Tu mejor nota en 15 preguntas de todo el tema.",tabRoute:"Inicio",tabSyllabus:"Temario",tabGames:"Juegos",tabMe:"Yo",stopTheory:"Teoría",stopSummary:"Resúmenes",stopExercises:"Ejercicios",stopTest:"Test",stopGames:"Minijuegos",say:["Empieza por la teoría","Repásalo en un minuto","¡Te toca la bajante!","¡Al taller conmigo!","¡A por el test!","¡Hora de jugar!","¡Tema completado!"],summaryTitle:"Resúmenes",summarySub:"Lo esencial de cada apartado, en un minuto",inKeys:"En 3 claves",explanation:"Explicación",seeExplanation:"Ver la explicación",toExercises:"Ir a los ejercicios",syllabusSub:"Saneamiento · DB HS 5",section:"Apartado",gamesTitle:"Minijuegos",gamesTitleSub:"Para repasar el tema jugando",meTitle:"Tu progreso",language:"Idioma",viewAs:"Ver como",watch:"Mira cómo funciona",level:"Nivel",xp:"XP",streakDays:"días seguidos",streakDay:"día seguido",route:"La ruta del agua",routeSub:"Del lavabo a la calle, paso a paso",games:"Minijuegos",gamesSub:"Para repasar jugando",gameUd:"Contrarreloj de UD",gameUdSub:"Unidades de descarga: lo que vierte cada aparato",daily:"Reto del día",dailySub:"Las mismas preguntas para toda la clase",dailyBest:"Tu mejor hoy",timeUp:"¡Tiempo!",lives:"vidas",medalName:{bronze:"Medalla de bronce",silver:"Medalla de plata",gold:"Medalla de oro"},medalNext:(a,e)=>`${a} puntos más y consigues la ${e.toLowerCase()}`,allMedals:"¡Tienes las tres medallas!",start:"Empezar",soon:"Muy pronto",stopShop:"Taller",gameDrops:"Cada gota a su tubo",gameDropsSub:"Manda cada vertido a su red antes de que caiga",dropsIntro:"Caen vertidos por el tubo. Toca su destino antes de que lleguen abajo: pluviales, residuales o fuera de la red. Cada acierto acelera la caída y la racha multiplica los puntos. Con tres fallos se acaba.",bins:["Pluviales","Residuales","Fuera de la red"],dropsMissed:"Se ha colado:",dropsWrong:"No va ahí:",dropsKeys:"En el ordenador también con ← ↓ →",gameSmell:"¡Que no huela!",gameRide:"Eki baja la bajante",shopTitle:"Taller de Eki",shopSub:"Avisos de clientes: busca la avería, arréglala y pulsa Probar.",shopEki:"Aquí no hay prisa: piensa, cambia lo que haga falta y prueba. Yo te digo qué falla.",shopBath:"El baño se chiva",shopJob:(a,e)=>`Aviso ${a} de ${e}`,shopAsk:"¿Cómo desagua cada aparato?",drains:["Sin cierre","Sifón propio","Al bote","Sifón + bote"],toiletLocked:"Lleva el sifón en la pieza: va directo a la bajante",test:"Probar",shopOk:"¡Arreglado! Ya no huele.",shopKo:"Todavía falla:",shopNext:"Siguiente aviso",shopList:"Avisos",shopSoon:["El edificio respira","El último tubo del almacén","La lluvia delata el cruce"],best:"Récord",play:"Jugar",playAgain:"Otra vez",gameIntro:"Aparece un aparato y su uso: toca sus unidades de desagüe según la tabla 4.1 antes de que se acabe el tiempo. Cada acierto deja menos tiempo y la racha suma más. Tres fallos y se acaba.",usePriv:"Uso privado",usePub:"Uso público",points:"puntos",combo:"racha",newRecord:"¡Nuevo récord!",toReview:"Para repasar",perfect:"Ni un fallo. Te sabes la tabla 4.1.",hey:"Kaixo",open:"Empezar",continueLbl:"Seguir",doneLbl:"Hecho",hello:"Hoy toca saneamiento",helloSub:"Teoría, práctica y un cálculo de verdad. A tu ritmo.",theory:"Teoría",theorySub:"fichas cortas",practice:"Práctica",practiceSub:"preguntas con explicación",calc:"Cálculo paso a paso",calcSub:"en papel, y la app lo comprueba",review:"Repasar fallos",testsSub:"Un test por bloque del temario y un simulacro con todo mezclado.",blockTest:"Test del bloque",questionsN:"preguntas",exam:"Simulacro de examen",examSub:"preguntas de todo el temario, mezcladas. Sin corregir hasta el final, y nota sobre 10.",examStart:"Empezar el simulacro",examAgain:"Otro simulacro",examBest:"Mejor nota",grade:"Nota",examFix:"Corrección",examAllOk:"Todo bien. Ni un fallo.",yourPick:"Tu respuesta",rightPick:"La correcta",toTests:"Volver a los test",reviewSub:"para repasar",noMistakes:"Sin fallos pendientes",progress:"Tu progreso",back:"Volver",source:"Fuente",next:"Siguiente",finish:"Terminar",correct:"Correcto",wrong:"No es correcto",check:"Comprobar",hint:"Pista",step:"Paso",of:"de",yourAnswer:"Tu resultado",done:"¡Hecho!",calcDone:"Has dimensionado la bajante: 110 mm. Este es el error que más se repite en clase, y lo has resuelto tú.",restart:"Empezar de nuevo",score:"aciertos",question:"Pregunta",euNote:"",reset:"Reiniciar la demo"},es={moduleName:"Fluidoak",courseLabel:"2. maila · Instalazio termikoak eta fluidoak",subjectSub:"Ikasgai osoa aplikazio batean: gaiak klasean ematen diren heinean irekitzen dira.",subjectPct:"Fluidoetatik",subjectSay:a=>`Saneamenduko ${a}. ikasgaian zaude. Jarraituko dugu?`,subjectSayStart:"Saneamendutik hasiko gara, 1. ikasgaitik.",subjectSayDone:"Saneamendua amaituta!",byEval:"Ebaluazioka",evalNames:["1. ebaluazioa","2. ebaluazioa","3. ebaluazioa"],nowTag:"Orain",openOf:(a,e)=>`${e}tik ${a} irekita`,topicSoon:"Gaia bidean",topicSoonSub:"Klasean ematen denean irekiko da",topicDesc:"Hondakin-uren eta euri-uren hustuketa, DB HS 5en arabera.",lessonsOf:(a,e)=>`${e} ikasgaitik ${a}`,lesson:"Ikasgaia",lessonOf:(a,e)=>`${e}tik ${a}. ikasgaia`,topicIntro:(a,e)=>`${a} ikasgai. Gaiaren % ${e} eginda duzu.`,lessonSay:(a,e)=>`${a}. ikasgaia: ${e} falta zaizu.`,lessonSayStart:"Hasi 1. ikasgaitik.",where:"Non zauden",stDoneF:"Eginda",partCards:a=>`${a} fitxa`,partTest:"Testa",partCalc:a=>a>1?`${a} ariketa`:"Ariketa",partJob:"Tailerra",partGame:"Jokoa",missingPart:{cards:"fitxak ikustea",test:"testa",calc:"ariketa",job:"tailerra",game:"jokoa"},and:"eta",lessonTest:"Ikasgaiaren testa",qOf:(a,e)=>`${e} galderatik ${a}`,stepsOf:(a,e)=>`${e} urratsetik ${a}`,jobsOf:(a,e)=>`${e} abisutik ${a}`,notPlayed:"Jokatu gabe",shLearn:"Ikasi",shPractice:"Landu",shPlay:"Jolastu",animVoice:"Azalpen animatua, ahotsarekin",seen:"Ikusita",close:"Itxi",examTitle:"Gaiaren simulakroa",examBoxSub:"5 ikasgaietako 15 galdera nahastuta, 10etik nota. Azterketa bezala.",examGo:"Simulakroa egin",bestGrade:"Nota onena",reviewAll:"Gai osoa errepasatu",reviewAllSub:"ikasgaiak amaitzean",sumSub:"Gai osoa gakotan",jobsAll:"Abisu guztiak",gamesAll:"Gaiaren jokoak",evalShort:["1. eb.","2. eb.","3. eb."],stopsDone:a=>`6 geltokietatik ${a}`,topicPct:"gaitik eginda",stDone:"Eginda",stHalf:"Erdizka",stNew:"Hasi gabe",ekiHere:"Eki hemen zain duzu",nextUp:"Hurrengoa",goOn:"Jarraitu",streakLbl:"Bolada",weekDays:["I","A","A","A","O","O","L"],examNone:"Oraindik egin gabe. 15 galdera gai osotik.",examHas:"Zure nota onena, gai osoko 15 galderatan.",tabRoute:"Hasiera",tabSyllabus:"Gaiak",tabGames:"Jokoak",tabMe:"Ni",stopTheory:"Teoria",stopSummary:"Laburpenak",stopExercises:"Ariketak",stopTest:"Testa",stopGames:"Minijokoak",say:["Hasi teoriatik","Errepasatu minutu batean","Zorrotena lantzea tokatzen zaizu!","Tailerrera nirekin!","Testera!","Jolasteko ordua!","Gaia amaituta!"],summaryTitle:"Laburpenak",summarySub:"Atal bakoitzaren funtsa, minutu batean",inKeys:"3 gakotan",explanation:"Azalpena",seeExplanation:"Azalpena ikusi",toExercises:"Ariketetara joan",syllabusSub:"Saneamendua · DB HS 5",section:"Atala",gamesTitle:"Minijokoak",gamesTitleSub:"Gaia jolasean errepasatzeko",meTitle:"Zure aurrerapena",language:"Hizkuntza",viewAs:"Aukeratu rola",watch:"Ikusi nola dabilen",level:"Maila",xp:"XP",streakDays:"egun jarraian",streakDay:"egun jarraian",route:"Uraren ibilbidea",routeSub:"Konketatik kalera, urratsez urrats",games:"Minijokoak",gamesSub:"Jolasean errepasatzeko",gameUd:"Erlojupekoa (UD)",gameUdSub:"Hustuketa-unitateak: tresna bakoitzak isurtzen duena",daily:"Eguneko erronka",dailySub:"Galdera berberak klase osoarentzat",dailyBest:"Zure gaurko markarik onena",timeUp:"Denbora agortu da!",lives:"bizitza",medalName:{bronze:"Brontzezko domina",silver:"Zilarrezko domina",gold:"Urrezko domina"},medalNext:(a,e)=>`${a} puntu gehiago eta ${e.toLowerCase()} lortuko duzu`,allMedals:"Hiru dominak dituzu!",start:"Hasi",soon:"Oso laster",stopShop:"Tailerra",gameDrops:"Tanta bakoitza bere hodira",gameDropsSub:"Bidali isurketa bakoitza bere sarera erori baino lehen",dropsIntro:"Isurketak hoditik behera erortzen dira. Beheraino iritsi baino lehen, ukitu dagokien aukera: euri-urak, hondakin-urak edo saretik kanpo. Asmatzen duzun bakoitzean, azkarrago erortzen dira, eta asmatze-segidak puntuak biderkatzen ditu. Hiru huts eginez gero, jokoa amaitzen da.",bins:["Euri-urak","Hondakin-urak","Saretik kanpo"],dropsMissed:"Pasatu zaizu:",dropsWrong:"Ez doa horra:",dropsKeys:"Ordenagailuan ← ↓ → teklekin ere bai",gameSmell:"Usainik ez!",gameRide:"Eki zorrotenean behera",shopTitle:"Ekiren tailerra",shopSub:"Bezeroen abisuak: bilatu matxura, konpondu eta sakatu Probatu.",shopEki:"Hemen ez dago presarik: pentsatu, aldatu behar dena eta probatu. Nik esango dizut zer dagoen gaizki.",shopBath:"Bainugela salatari",shopJob:(a,e)=>`Abisua · ${a}/${e}`,shopAsk:"Nola hustutzen du ura tresna sanitario bakoitzak?",drains:["Itxitura hidraulikorik gabe","Bere sifoia","Sifoi-potora","Sifoia + sifoi-potoa"],toiletLocked:"Sifoia piezan bertan du: zuzenean zorrotenera",test:"Probatu",shopOk:"Konponduta! Jada ez dago usain txarrik.",shopKo:"Oraindik huts egiten du:",shopNext:"Hurrengo abisua",shopList:"Abisuak",shopSoon:["Eraikinak arnasa hartzen du","Biltegiko azken hodia","Euriak lotura okerra salatzen du"],best:"Errekorra",play:"Jokatu",playAgain:"Berriro",gameIntro:"Pantailan tresna sanitario bat eta haren erabilera agertuko dira. Denbora agortu baino lehen, hautatu zenbat hustuketa-unitate (UD) dagozkion 4.1 taularen arabera. Asmatzen duzun bakoitzean, denbora gutxiago izango duzu, eta segidan asmatuz gero, puntu gehiago lortuko dituzu. Hiru huts eginez gero, jokoa amaituko da.",usePriv:"Erabilera pribatua",usePub:"Erabilera publikoa",points:"puntu",combo:"asmatze-segida",newRecord:"Errekor berria!",toReview:"Errepasatzeko",perfect:"Akatsik gabe. Ondo ezagutzen duzu 4.1 taula.",hey:"Kaixo",open:"Hasi",continueLbl:"Jarraitu",doneLbl:"Eginda",hello:"Gaur, saneamendua",helloSub:"Teoria, praktika eta benetako kalkulu bat. Zure erritmoan.",theory:"Teoria",theorySub:"fitxa labur",practice:"Praktika",practiceSub:"galdera, azalpenarekin",calc:"Kalkulua urratsez urrats",calcSub:"paperean egin, eta aplikazioak emaitza egiaztatuko du",review:"Akatsak errepasatu",testsSub:"Test bat gaien bloke bakoitzeko eta simulakro bat dena nahastuta.",blockTest:"Blokearen testa",questionsN:"galdera",exam:"Azterketa-simulakroa",examSub:"galdera gai osotik, nahastuta. Amaieran zuzentzen da, eta nota 10etik.",examStart:"Simulakroa hasi",examAgain:"Beste simulakro bat",examBest:"Nota onena",grade:"Nota",examFix:"Zuzenketa",examAllOk:"Dena ondo. Akatsik ez.",yourPick:"Zure erantzuna",rightPick:"Zuzena",toTests:"Testetara itzuli",reviewSub:"errepasatzeko",noMistakes:"Ez duzu errepasatzeko akatsik",progress:"Zure aurrerapena",back:"Itzuli",source:"Iturria",next:"Hurrengoa",finish:"Amaitu",correct:"Zuzena",wrong:"Ez da zuzena",check:"Egiaztatu",hint:"Pista",step:"Urratsa",of:"/",yourAnswer:"Zure emaitza",done:"Eginda!",calcDone:"Zorrotena dimentsionatu duzu: 110 mm. Ikasgelan, kalkulu horretan egin ohi da akatsik ohikoena, eta zuk ondo egin duzu.",restart:"Berriro hasi",score:"erantzun zuzen",question:"Galdera",euNote:"Gaiaren edukia gaztelaniaz dago oraindik.",reset:"Demoa berrabiarazi"},ss={es:as,eu:es},Ua="repelega-demo-v1";function da(){return{lang:"es",answers:{},calcDone:!1,theoryDone:!1,theorySeen:[],calcStep:0,summaryDone:!1,days:[],bestGame:0,dailyDay:"",dailyBest:0,dropsBest:0,jobStars:[0,0,0],examBest:0}}function ts(){try{const a=localStorage.getItem(Ua);if(a)return{...da(),...JSON.parse(a)}}catch{}return da()}function ga(a){try{localStorage.setItem(Ua,JSON.stringify(a))}catch{}}function Y(){const a=new Date;return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`}function Ta(a){const e=new Set(a);let s=0;const t=new Date;for(;;){const o=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;if(!e.has(o))return s;s++,t.setDate(t.getDate()-1)}}function Pa(){return{name:"game",phase:"intro",mode:"free",score:0,combo:0,hits:0,lives:Ea,endsAt:0,qTime:0,q:null,rnd:Math.random,flash:null,last:null,misses:[],record:!1,dailyRecord:!1}}const B=document.querySelector("#app");let c=ts();c.days.includes(Y())||(c={...c,days:[...c.days,Y()].slice(-60)});ga(c);const W={name:"home"},os={name:"topic"};let l=W;const x=()=>ss[c.lang],E="./robot.svg",ns="./logo-negro.png",ls="./logo-blanco.png";function S(a){c={...c,...a},ga(c)}let X=!1;const h={card:-1,scene:0,playing:!1};function k(a){pa(),document.body.classList.remove("lock"),G=-1,h.playing=!1,l=a,X=!0,M(),X=!1,window.scrollTo(0,0)}function oa(){const a=K.map(e=>e.id);return H.map((e,s)=>a.filter(t=>(le[t]??1)===s))}function aa(a){return K.find(e=>e.id===a)}function na(){return K.filter(a=>c.answers[a.id]===!1).map(a=>a.id)}function is(){return K.filter(e=>c.answers[e.id]===!0).length*10+(c.calcDone?50:0)+(c.theoryDone?20:0)+(c.summaryDone?10:0)+c.bestGame+c.dropsBest+ae()*10}function rs(a){const e=x(),s=(r,p)=>({kind:r,title:p,sub:r==="calc"?e.partCalc(1):r==="job"?e.partJob:e.partGame,attr:"",frac:0,soon:!0}),t=N.steps.length,o=c.calcDone?t:Math.min(c.calcStep,t),n=c.jobStars.filter(r=>r>0).length,i=r=>r>0?`${e.best}: ${r}`:e.notPlayed;switch(a){case 0:return[s("calc","El ramal de un baño"),s("job","El último tubo del almacén"),{kind:"game",title:e.gameUd,sub:i(c.bestGame),attr:'data-go="game"',frac:c.bestGame>0?1:0,soon:!1}];case 1:return[{kind:"job",title:e.shopBath,sub:e.jobsOf(n,C.length),attr:'data-go="workshop"',frac:n/C.length,soon:!1},s("game",e.gameSmell)];case 2:return[{kind:"calc",title:N.title,sub:e.stepsOf(o,t),attr:'data-go="calc"',frac:o/t,soon:!1},s("calc","La ventilación de un edificio alto"),s("job","El edificio respira"),s("game",e.gameRide)];case 3:return[s("calc","Las pluviales de una cubierta"),s("calc","El colector enterrado"),s("calc","El pozo de bombeo"),s("job","La lluvia delata el cruce"),{kind:"game",title:e.gameDrops,sub:i(c.dropsBest),attr:'data-go="drops"',frac:c.dropsBest>0?1:0,soon:!1}];default:return[s("game","La prueba de estanqueidad")]}}function xa(){const a=x(),e=oa();return H.map((s,t)=>{const o=c.theoryDone?s.ids.length:s.ids.filter(p=>c.theorySeen.includes(p)).length,n=e[t].filter(p=>p in c.answers).length,i=[{kind:"cards",title:a.partCards(s.ids.length),sub:"",attr:"",frac:o/s.ids.length,soon:!1},{kind:"test",title:a.lessonTest,sub:a.qOf(n,e[t].length),attr:`data-blocktest="${t}"`,frac:n/e[t].length,soon:!1},...rs(t)],r=i.filter(p=>!p.soon);return{title:s.title,sub:s.sub,parts:i,frac:r.reduce((p,u)=>p+u.frac,0)/r.length}})}function Na(a){return a.findIndex(e=>e.frac<1)}function cs(a){const e=x(),t=[...new Set(a.parts.filter(o=>!o.soon&&o.frac<1).map(o=>o.kind))].map(o=>e.missingPart[o]);return t.length>1?`${t.slice(0,-1).join(", ")} ${e.and} ${t[t.length-1]}`:t[0]??""}function Ia(){return l.name==="game"||l.name==="games"||l.name==="drops"?"game":l.name==="theory"||l.name==="summary"||l.name==="practice"||l.name==="tests"||l.name==="calc"||l.name==="syllabus"||l.name==="workshop"||l.name==="job"?"plan":"light"}function ds(){return`
  <header class="top">
    <img src="${Ia()==="game"?ls:ns}" alt="CIFP Repélega LHII" class="logo">
    <div class="switches">
      <div class="seg small" role="group" aria-label="Idioma">
        <button data-lang="es" class="${c.lang==="es"?"on":""}">ES</button>
        <button data-lang="eu" class="${c.lang==="eu"?"on":""}">EU</button>
      </div>
    </div>
  </header>`}function us(){const a=x(),e=(s,t,o)=>`<button data-tab="${s}" class="${l.name===s||s==="home"&&l.name==="topic"?"on":""}">${t}<span>${o}</span></button>`;return`<nav class="tabs">${e("home",m.home,a.tabRoute)}${e("syllabus",m.book,a.tabSyllabus)}${e("games",m.pad,a.tabGames)}${e("me",m.user,a.tabMe)}</nav>`}function L(){return c.lang==="eu"?`<p class="eu-note">${x().euNote}</p>`:""}function j(a="topic"){return`<button class="back" data-go="${I>=0&&(a==="practice"||a==="syllabus"||a==="games")?"topic":a}">${m.back}${x().back}</button>`}function Ma(a){const e=z[a]?.id;e&&!c.theorySeen.includes(e)&&S({theorySeen:[...c.theorySeen,e]})}function Oa(){const a=x(),e=Ta(c.days),s=Array.from({length:7},(t,o)=>{const n=new Date;n.setDate(n.getDate()-(6-o));const i=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`;return`<span><i class="${c.days.includes(i)?"on":""} ${o===6?"today":""}"></i>${a.weekDays[n.getDay()]}</span>`}).join("");return`<div class="d-card"><p class="d-lbl">${a.streakLbl} · ${e} ${e===1?a.streakDay:a.streakDays}</p><div class="d-week">${s}</div></div>`}function Ra(a,e,s){const t=58-a/100*52,o=n=>`M-64 0 q8 -${n} 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 V80 H-64 Z`;return`<button class="d-card d-tank" ${s}>
    <svg viewBox="0 0 64 64" aria-hidden="true"><defs><clipPath id="tk"><circle cx="32" cy="32" r="27"/></clipPath></defs>
      <circle cx="32" cy="32" r="27" class="tk-bg"/>
      <g clip-path="url(#tk)"><g class="tk-water" style="--lv:${t.toFixed(1)}px"><path class="tk-w2" d="${o(4)}"/><path class="tk-w1" d="${o(5)}"/></g></g>
      <circle cx="32" cy="32" r="29" class="tk-rim"/>
    </svg>
    <span><b data-count="${a}">${a}%</b><small>${e}</small></span>
  </button>`}const ra=[["UD1.1","UD1.2"],["UD2.1","UD2.2"],["UD3.1","UD3.2"]],ea="UD2.1",Q=1;function ps(){const a=x(),e=xa(),s=e.filter(g=>g.frac>=1).length,t=Math.round(e.reduce((g,f)=>g+f.frac,0)/e.length*100),o=ra.flat().length,n=Math.round(t/o),i=Na(e),r=i===-1?a.subjectSayDone:t===0?a.subjectSayStart:a.subjectSay(i+1),p=e.map(g=>`<i class="${g.frac>=1?"done":g.frac>0?"half":""}"></i>`).join("");let u=0;const b=ra.map((g,f)=>{const w=g.map(v=>v===ea?`<button class="d-box fl-topic now" data-go="topic" style="--i:${u++}">
              <span class="fl-th"><span class="d-ic c1">${m.drop}</span><span><small>${v}</small><b>${V.topic}</b></span></span>
              <span class="d-info">${a.topicDesc}</span>
              <span class="fl-dots">${p}</span>
              <span class="d-bar"><i style="--w:${t}%"></i></span>
              <span class="d-foot"><span>${a.lessonsOf(s,e.length)}</span><span>${t} %</span></span>
            </button>`:`<div class="fl-topic soon" style="--i:${u++}">
              <span class="fl-th"><span class="d-ic">${m.lock}</span><span><small>${v}</small><b>${a.topicSoon}</b></span></span>
              <span class="fl-soon">${a.topicSoonSub}</span>
            </div>`).join(""),P=g.filter(v=>v===ea).length;return`<section class="fl-ev ${f===Q?"now":""}">
      <div class="fl-eh"><h2>${a.evalNames[f]}${f===Q?`<em>${a.nowTag}</em>`:""}</h2><span>${a.openOf(P,g.length)}</span></div>
      ${w}
    </section>`}).join(""),d=a.evalShort.map((g,f)=>{const w=f===Q?Math.round(t/ra[f].length):0;return`<span class="fl-row"><span>${g}</span><span class="fl-meter"><i style="--w:${w}%"></i></span><em>${w?`${w} %`:"–"}</em></span>`}).join(""),y=i===-1?e.length-1:i;return`
  ${L()}
  <div class="dash fl">
    <section class="d-hero fl-hero">
      <div class="d-txt">
        <small>${a.courseLabel}</small>
        <h1>${a.moduleName}</h1>
        <p>${a.subjectSub}</p>
      </div>
      <button class="d-next" data-go="topic">
        <span class="d-ic c1">${m.drop}</span>
        <span class="d-nt"><small>${a.nextUp}</small><b>${V.topic} · ${a.lesson.toLowerCase()} ${y+1}</b></span>
        <span class="d-go">${a.goOn} ›</span>
      </button>
      <div class="d-eki"><span class="d-say" data-say="${r}">${r}</span><img src="${E}" alt="Eki"></div>
    </section>
    <aside class="d-side">
      ${Ra(n,a.subjectPct,'data-go="topic"')}
      <div class="d-card"><p class="d-lbl">${a.byEval}</p><div class="fl-rows">${d}</div></div>
      ${Oa()}
    </aside>
    <div class="fl-evals">${b}</div>
  </div>`}function ms(){const a=x(),e=xa(),s=Math.round(e.reduce((u,b)=>u+b.frac,0)/e.length*100),t=Na(e),o=t===-1?e.length-1:t,n=t===-1?a.say[6]:s===0?a.lessonSayStart:a.lessonSay(t+1,cs(e[t])),i=e.map((u,b)=>{const d=u.frac>=1?"done":u.frac>0?"half":"",y=u.frac>=1?a.stDoneF:u.frac>0?a.stHalf:a.stNew,g=u.parts.filter(v=>!v.soon),f=(v,U)=>{const _=g.filter(la=>la.kind===v);return _.length?`<span class="${_.every(la=>la.frac>=1)?"ok":""}">${U}</span>`:""},w=g.filter(v=>v.kind==="calc").length,P=f("cards",g[0].title)+f("test",a.partTest)+f("calc",a.partCalc(w))+f("job",a.partJob)+f("game",a.partGame);return`<button class="d-box l-box ${b===t?"now":""}" data-lesson="${b}" style="--i:${b}">
        <span class="d-head"><span class="d-ic l-n c${b}">${b+1}</span>${b===t?`<em class="d-here">${a.ekiHere}</em>`:`<em class="d-st ${d}">${y}</em>`}</span>
        <b>${u.title}</b><span class="d-info">${u.sub}</span>
        <span class="l-chips">${P}</span>
        <span class="d-bar"><i style="--w:${Math.round(u.frac*100)}%"></i></span>
      </button>`}).join(""),r=c.examBest?c.examBest.toLocaleString(c.lang):"",p=(u,b,d,y,g,f)=>`<button class="l-mini" data-go="${u}" style="--i:${f}"><span class="d-ic ${b}">${d}</span><span><b>${y}</b><small>${g}</small></span>${m.chevron}</button>`;return`
  <nav class="crumbs" aria-label="${a.where}"><button data-go="home">${a.moduleName}</button><i>›</i><span class="c-ev">${a.evalNames[Q]}</span><i class="c-ev">›</i><b>${ea} ${V.topic}</b></nav>
  ${L()}
  <div class="dash">
    <section class="d-hero">
      <div class="d-txt">
        <small>${a.moduleName} · ${a.evalNames[Q]} · ${ea}</small>
        <h1>${V.topic}</h1>
        <p>${a.topicIntro(e.length,s)}</p>
      </div>
      <button class="d-next" data-lesson="${o}">
        <span class="d-ic l-n c${o}">${o+1}</span>
        <span class="d-nt"><small>${a.nextUp}</small><b>${e[o].title}</b></span>
        <span class="d-go">${a.goOn} ›</span>
      </button>
      <div class="d-eki"><span class="d-say" data-say="${n}">${n}</span><img src="${E}" alt="Eki"></div>
    </section>
    <aside class="d-side l-side">
      ${Ra(s,a.topicPct,'data-tab="syllabus"')}
      ${Oa()}
    </aside>
    ${i}
    <button class="d-box l-exam" data-exam style="--i:5">
      <span class="d-head"><span class="d-ic">${m.tick}</span>${r?`<em class="d-st">${a.bestGrade} ${r}</em>`:""}</span>
      <b>${a.examTitle}</b><span class="d-info">${a.examBoxSub}</span>
      <span class="l-go">${a.examGo} ›</span>
    </button>
    <section class="l-all">
      <h2>${a.reviewAll}<span>${a.reviewAllSub}</span></h2>
      ${p("summary","c1",m.list,a.stopSummary,a.sumSub,6)}
      ${p("workshop","c3",m.wrench,a.stopShop,a.jobsAll,7)}
      ${p("games","c5",m.pad,a.stopGames,a.gamesAll,8)}
    </section>
  </div>`}function bs(a){const e=x(),s=xa()[a],t={cards:m.book,test:m.tick,calc:m.calc,job:m.wrench,game:m.pad},o={cards:"c0",test:"c4",calc:"c2",job:"c3",game:"c5"},n=(d,y,g,f,w,P)=>`<button class="sh-row ${d.soon?"soon":""}" ${f} ${d.soon?"disabled":""} style="--i:${P}">
      <span class="d-ic ${o[d.kind]}">${d.soon?m.lock:t[d.kind]}</span>
      <span class="sh-t"><b>${y}</b><small>${g}</small></span>
      ${d.soon?`<em class="sh-soon">${e.soon}</em>`:w?`<em class="sh-ok">${d.kind==="cards"?e.seen:e.stDone}</em>`:m.chevron}
    </button>`;let i=0;const r=H.slice(0,a).reduce((d,y)=>d+y.ids.length,0),p=H[a].ids.map((d,y)=>{const g=z[r+y],f=c.theoryDone||c.theorySeen.includes(d);return n(s.parts[0],g.title,e.animVoice,`data-theory="${r+y}"`,f,i++)}).join(""),u=s.parts.filter(d=>d.kind!=="cards"&&d.kind!=="game").map(d=>n(d,d.title,d.sub,d.attr,d.frac>=1,i++)).join(""),b=s.parts.filter(d=>d.kind==="game").map(d=>n(d,d.title,d.sub,d.attr,!1,i++)).join("");return`
    <div class="sh-top"><small>${e.lessonOf(a+1,H.length)}</small><button class="sh-close" data-sheet-close>${e.close}</button></div>
    <h2>${s.title}</h2>
    <span class="d-bar sh-bar"><i style="--w:${Math.round(s.frac*100)}%"></i></span>
    <p class="sh-h">${e.shLearn} · ${e.partCards(H[a].ids.length)}</p>${p}
    <p class="sh-h">${e.shPractice}</p>${u}
    <p class="sh-h">${e.shPlay}</p>${b}`}let G=-1,I=-1;function Ga(a,e=!1){const s=document.querySelector("#sheet"),t=s?.querySelector(".sheet-panel");!s||!t||(G=a,t.innerHTML=bs(a),t.scrollTop=0,s.hidden=!1,document.body.classList.add("lock"),e||s.offsetWidth,s.classList.add("open"),t.querySelector(".sh-close")?.focus({preventScroll:!0}))}function Fa(){const a=document.querySelector("#sheet");if(G=-1,document.body.classList.remove("lock"),!a||a.hidden)return;a.classList.remove("open");const e=()=>{a.classList.contains("open")||(a.hidden=!0)};a.addEventListener("transitionend",e,{once:!0}),setTimeout(e,400)}function hs(){const a=document.querySelector(".d-say[data-say]");if(!a||matchMedia("(prefers-reduced-motion: reduce)").matches)return;const e=a.dataset.say??"";let s=0;const t=()=>{a.isConnected&&(a.innerHTML=`${e.slice(0,s)}<i></i>`,s++<e.length?setTimeout(t,38):a.textContent=e)};a.innerHTML="<i></i>",setTimeout(t,700)}function gs(){const a=document.querySelector(".d-tank b[data-count]");if(!a||matchMedia("(prefers-reduced-motion: reduce)").matches)return;const e=Number(a.dataset.count),s=performance.now(),t=o=>{const n=Math.min(1,(o-s)/1200);a.textContent=`${Math.round(e*(1-Math.pow(1-n,3)))}%`,n<1&&requestAnimationFrame(t)};a.textContent="0%",requestAnimationFrame(t)}function xs(){const a=x(),e=z.map((s,t)=>`${Ja(t)}<button class="row" data-theory="${t}"><span class="n">${Qa(t)}</span><span class="txt"><b>${s.title}</b><small>${s.lead.split(/[.:] /)[0].replace(/\.$/,"")}.</small></span>${m.chevron}</button>`).join("");return`
  <p class="ttl">${a.moduleName.toUpperCase()} · ${a.stopTheory.toUpperCase()}</p>
  <h1 class="plan-h">${V.topic}</h1>
  <p class="plan-sub">${a.syllabusSub}</p>
  ${L()}
  <div class="rows">${e}</div>
  <div class="nav"><button class="btn ghost" data-go="summary">${a.stopSummary}</button><button class="btn" data-go="theory">${a.open} ›</button></div>`}const Qa=a=>String(a+1).padStart(2,"0");function Ja(a){const e=fa(a);return a>0&&fa(a-1)===e?"":`<p class="blk"><b>${e+1}</b>${H[e].title.toUpperCase()}</p>`}function Ya(a){return`<div class="keys"><p>${x().inKeys.toUpperCase()}</p><div>${a.summary.map(e=>`<span><b>${e.big}</b>${e.label}</span>`).join("")}</div></div>`}function fs(){const a=x(),e=z.map((s,t)=>`${Ja(t)}
    <article class="sum">
      <div class="sum-h"><span class="n">${Qa(t)}</span><b>${s.title}</b></div>
      ${Ya(s)}
      <div class="sum-f"><span></span><button class="link" data-theory="${t}">${a.seeExplanation} ›</button></div>
    </article>`).join("");return`
  ${j()}
  <p class="ttl">${V.topic.toUpperCase()} · ${a.summaryTitle.toUpperCase()}</p>
  <h1 class="plan-h">${a.summaryTitle}</h1>
  <p class="plan-sub">${a.summarySub}</p>
  ${L()}
  ${e}
  <button class="btn full" data-go="calc">${a.toExercises} ›</button>`}function ys(){const a=x();return`
  <h1 class="game-h">${a.gamesTitle}</h1>
  <p class="game-sub">${a.gamesTitleSub}</p>
  <button class="g-card hero" data-go="drops">
    <span class="g-ico">${m.drop}</span>
    <span class="g-txt"><b>${a.gameDrops}</b><span>${a.gameDropsSub}</span><span class="g-best">${m.trophy}${a.best}: <b>${c.dropsBest}</b></span></span>
    <span class="play-btn">${a.play.toUpperCase()}</span>
    <img src="${E}" alt="" class="g-eki">
  </button>
  <div class="g-grid">
    <button class="g-card soon wide live" data-go="game"><span class="g-ico blue">${m.timer}</span><b>${a.gameUd}<small>${a.gameUdSub}</small></b><span class="g-foot on">${m.trophy}${c.bestGame}</span></button>
    <div class="g-card soon"><span class="g-ico blue">${m.flame}</span><b>${a.gameSmell}</b><span class="g-foot">${m.lock}${a.soon}</span></div>
    <div class="g-card soon"><span class="g-ico blue">${m.pipe}</span><b>${a.gameRide}</b><span class="g-foot">${m.lock}${a.soon}</span></div>
  </div>`}function vs(){const a=x(),e=is(),s=Math.floor(e/100)+1,t=e%100,o=Ta(c.days),n=62,i=2*Math.PI*n,r=K,p=r.filter(b=>c.answers[b.id]===!0).length,u=na().length;return`
  <section class="me">
    <div class="me-ring">
      <svg viewBox="0 0 140 140" aria-hidden="true"><circle cx="70" cy="70" r="${n}" class="ring-bg"/><circle cx="70" cy="70" r="${n}" class="ring-fg" stroke-dasharray="${i}" stroke-dashoffset="${i*(1-t/100)}"/></svg>
      <img src="${E}" alt="Eki">
      <b class="lv">${a.level} ${s}</b>
    </div>
    <h1>${a.meTitle}</h1>
  </section>
  <div class="stats3">
    <div class="card"><span class="ic warm">${m.flame}</span><b>${o}</b><span>${o===1?a.streakDay:a.streakDays}</span></div>
    <div class="card"><span class="ic blue">${m.drop}</span><b>${e}</b><span>${a.xp}</span></div>
    <div class="card"><span class="ic">${m.tick}</span><b>${p}/${r.length}</b><span>${a.score}</span></div>
  </div>
  <button class="card wide-row" data-go="review" ${u?"":"disabled"}><span class="ic">${m.loop}</span><span class="txt"><b>${a.review}</b><span>${u?`${u} ${a.reviewSub}`:a.noMistakes}</span></span>${m.chevron}</button>
  <button class="reset" data-reset>${a.reset}</button>`}let O=0;function ca(a){return String(a).replace(".",",")}function sa(){return c.dailyDay===Y()?c.dailyBest:0}function Ka(a,e){const s={bronze:3,silver:2,gold:1}[a];return`<span class="medal ${a} ${e?"on":""}" title="${x().medalName[a]}"><b>${s}</b></span>`}function $s(a){return`<div class="medals">${ma.map(e=>`<div>${Ka(e.id,a>=e.min)}<span>${e.min}</span></div>`).join("")}</div>`}function _a(a){const e=s=>`<svg viewBox="0 0 24 24" class="heart ${s?"on":""}"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3 4.5 6.6 4.5c2.1 0 3.6 1.2 5.4 3.2 1.8-2 3.3-3.2 5.4-3.2 3.6 0 5.7 3.7 4.2 7.2C19.5 16.4 12 21 12 21z"/></svg>`;return`<div class="hearts" aria-label="${a} ${x().lives}">${Array.from({length:Ea},(s,t)=>e(t<a)).join("")}</div>`}function ks(a){const e=x();if(a.phase==="intro")return`
    ${j()}
    <article class="card big center game-intro">
      <span class="g-ico big">${m.timer}</span>
      <h2>${e.gameUd}</h2>
      <p class="lead">${e.gameIntro}</p>
      ${$s(c.bestGame)}
      <p class="best">${m.trophy}${e.best}: <b>${c.bestGame}</b> ${e.points}</p>
      <button class="btn full" data-gamestart="free">${e.play}</button>
      <button class="daily" data-gamestart="daily">
        <span class="g-ico">${m.star}</span>
        <span class="g-txt"><b>${e.daily}</b><span>${e.dailySub}</span></span>
        <span class="d-best">${e.dailyBest}<b>${sa()}</b></span>
      </button>
    </article>`;if(a.phase==="end"){const n=Le(a.score),i=Ae(a.score),r=a.misses.length?`<div class="misses"><p class="eyebrow">${e.toReview}</p>${a.misses.map(p=>`<div class="miss"><span>${p.name} · ${p.pub?e.usePub:e.usePriv}</span><b>${ca(p.value)} UD</b></div>`).join("")}</div>`:`<p class="lead">${e.perfect}</p>`;return`
    ${j()}
    <article class="card big center">
      ${a.mode==="daily"?`<p class="eyebrow daily-tag">${m.star}${e.daily}</p>`:""}
      ${a.record||a.dailyRecord?`<p class="record">${m.trophy}${e.newRecord}</p>`:""}
      ${n?`<div class="medal-won">${Ka(n,!0)}<b>${e.medalName[n]}</b></div>`:""}
      <p class="final"><b>${a.score}</b> ${e.points}</p>
      <p class="muted-text">${a.hits} ✓ · ${e.best}: ${c.bestGame}${a.mode==="daily"?` · ${e.dailyBest}: ${sa()}`:""}</p>
      <p class="next-medal">${i?e.medalNext(i.missing,e.medalName[i.id]):e.allMedals}</p>
      ${r}
      <div class="nav center"><button class="btn ghost" data-go="games">${e.finish}</button><button class="btn" data-gamestart="${a.mode}">${e.playAgain}</button></div>
    </article>`}const s=a.q,t=Math.max(0,(a.endsAt-Date.now())/1e3),o=a.last&&!a.last.ok?`<p class="g-last ko">${a.last.late?e.timeUp:"✗"} ${a.last.name} · ${a.last.pub?e.usePub:e.usePriv} → <b>${ca(a.last.value)} UD</b></p>`:'<p class="g-last">&nbsp;</p>';return`
  <div class="game-top">
    ${_a(a.lives)}
    <div class="score"><b>${a.score}</b><span>${e.points}</span></div>
  </div>
  <div class="timer"><div class="bar"><i id="g-bar" style="width:${t/a.qTime*100}%"></i></div></div>
  <article class="card big center game-q ${a.flash??""}">
    <span class="use ${s.pub?"pub":""}">${s.pub?e.usePub:e.usePriv}</span>
    <h2 class="fixture">${s.f.name}</h2>
    ${a.combo>1?`<span class="combo">${m.bolt}×${Math.min(a.combo,5)} ${e.combo}</span>`:'<span class="combo ghost">&nbsp;</span>'}
  </article>
  ${o}
  <div class="answers">${s.options.map(n=>`<button class="ans" data-ud="${n}"><b>${ca(n)}</b><span>UD</span></button>`).join("")}</div>`}const D=a=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${a}</svg>`,Ms={rain:D('<path d="M7 15a4 4 0 0 1 .5-8A5 5 0 0 1 17 8a3.5 3.5 0 0 1 0 7z"/><path d="m8 18-1 3M12 18l-1 3M16 18l-1 3"/>'),terrace:D('<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8v8M12 8v8M16 8v8"/>'),gutter:D('<path d="M3 8h18l-2.5 5h-13z"/><path d="M16 13v8"/>'),toilet:D('<path d="M6 3h6v7H6z"/><path d="M4 10h15a6 6 0 0 1-6 6h-3a6 6 0 0 1-6-6z"/><path d="m9 16-1 5h7l-1-5"/>'),shower:D('<path d="M5 21V8a4 4 0 0 1 8 0"/><path d="M10 8h6"/><path d="M11 12v1M14 12v1M17 12v1M12 16v1M15 16v1"/>'),sink:D('<path d="M3 11h18v1a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7z"/><path d="M12 11V6a2 2 0 0 1 4 0"/>'),washer:D('<rect x="4" y="3" width="16" height="18" rx="3"/><circle cx="12" cy="13" r="4.5"/><path d="M7.5 6.5h2"/>'),wipe:D('<path d="M5 6h14v12H5z"/><path d="M5 10c3 1.2 5-1 7 0s4 1.2 7 0"/>'),oil:D('<path d="M10 3h4v3l2 3v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9l2-3z"/><path d="M8 13h8"/>'),paint:D('<path d="M5 8h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="m5 8 2-4h10l2 4"/><path d="M12 12v4"/>')},wa=[m.drop,m.pipe,D('<path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/>')];let R=0;function Za(a){const e=a.items.length?a.items.reduce((s,t)=>t.y>s.y?t:s):null;return a.items.map(s=>`<div class="dr-item ${s===e?"front":""}" style="top:${(s.y*100).toFixed(2)}%"><span class="dr-ico">${Ms[s.kind.id]}</span><b>${s.kind.name}</b></div>`).join("")}function ws(a){const e=x(),s=a.last;return s?s.ok?`<p class="dr-tip ok">✓ ${s.kind.name} → ${e.bins[s.kind.bin]}${a.combo>3?` · ${m.bolt}×${Math.min(4,1+Math.floor(a.combo/4))}`:""}</p>`:`<p class="dr-tip ko"><b>${s.to===null?e.dropsMissed:e.dropsWrong} ${s.kind.name} → ${e.bins[s.kind.bin]}.</b> ${s.kind.why}</p>`:`<p class="dr-tip">${e.dropsKeys}</p>`}function qs(a){const e=x();if(!a)return`
    ${j("games")}
    <article class="card big center game-intro">
      <span class="g-ico big">${m.drop}</span>
      <h2>${e.gameDrops}</h2>
      <p class="lead">${e.dropsIntro}</p>
      <div class="dr-legend">${e.bins.map((s,t)=>`<span class="b${t}">${wa[t]}${s}</span>`).join("")}</div>
      <p class="best">${m.trophy}${e.best}: <b>${c.dropsBest}</b> ${e.points}</p>
      <button class="btn full" data-drops-start>${e.play}</button>
    </article>`;if(a.over){const s=a.score>0&&a.score>=c.dropsBest,t=a.misses.length?`<div class="misses"><p class="eyebrow">${e.toReview}</p>${a.misses.map(o=>`<div class="miss"><span><b>${o.name} → ${e.bins[o.bin]}</b><br>${o.why}</span></div>`).join("")}</div>`:"";return`
    ${j("games")}
    <article class="card big center">
      ${s?`<p class="record">${m.trophy}${e.newRecord}</p>`:""}
      <p class="final"><b>${a.score}</b> ${e.points}</p>
      <p class="muted-text">${a.hits} ✓ · ${e.best}: ${c.dropsBest}</p>
      ${t}
      <div class="nav center"><button class="btn ghost" data-go="games">${e.finish}</button><button class="btn" data-drops-start>${e.playAgain}</button></div>
    </article>`}return`
  <div class="game-top">
    ${_a(a.lives)}
    <div class="score"><b>${a.score}</b><span>${e.points}</span></div>
  </div>
  <div class="dr-field">
    <div class="dr-tube"></div>
    <div id="dr-items">${Za(a)}</div>
    <img src="${E}" alt="" class="dr-eki">
  </div>
  <div class="dr-bins">${e.bins.map((s,t)=>`<button class="dr-bin b${t}" data-bin="${t}">${wa[t]}<b>${s}</b></button>`).join("")}</div>
  <div id="dr-tip">${ws(a)}</div>`}function Ss(){cancelAnimationFrame(R);const a=Oe();k({name:"drops",g:a});let e=performance.now(),s=`${a.lives}`;const t=o=>{if(!(l.name!=="drops"||l.g!==a)){if(Ke(a,Math.min(.1,Math.max(0,o-e)/1e3)),e=o,a.over)return Xa(a);if(`${a.lives}`!==s)s=`${a.lives}`,M();else{const n=document.getElementById("dr-items");n&&(n.innerHTML=Za(a))}R=requestAnimationFrame(t)}};R=requestAnimationFrame(t)}function Wa(a){if(l.name!=="drops"||!l.g||l.g.over)return;const e=l.g;if(_e(e,a)!==null){if(e.over)return Xa(e);M()}}function Xa(a){cancelAnimationFrame(R),a.score>c.dropsBest&&S({dropsBest:a.score}),M()}document.addEventListener("keydown",a=>{if(l.name!=="drops"||!l.g||l.g.over)return;const e={ArrowLeft:0,ArrowDown:1,ArrowRight:2,1:0,2:1,3:2}[a.key];e!==void 0&&(a.preventDefault(),Wa(e))});function ae(){return c.jobStars.reduce((a,e)=>a+e,0)}function js(){const a=x(),e=C.map((t,o)=>{const n=c.jobStars[o]??0;return`<button class="row" data-job="${o}"><span class="n">0${o+1}</span><span class="txt"><b>${t.call}</b><small>${t.place}</small></span><span class="ws-stars">${ee(n)}</span></button>`}).join(""),s=a.shopSoon.map(t=>`<div class="row soon"><span class="n">${m.lock}</span><span class="txt"><b>${t}</b><small>${a.soon}</small></span></div>`).join("");return`
  ${j()}
  <p class="ttl">${V.topic.toUpperCase()} · ${a.stopShop.toUpperCase()}</p>
  <h1 class="plan-h">${a.shopTitle}</h1>
  <p class="plan-sub">${a.shopSub}</p>
  ${L()}
  <div class="ws-eki"><img src="${E}" alt="Eki"><p>${a.shopEki}</p></div>
  <p class="ws-group">${a.shopBath} · ★ ${ae()}/${C.length*3}</p>
  <div class="rows">${e}</div>
  <p class="ws-group">${a.soon}</p>
  <div class="rows">${s}</div>`}function ee(a){return[0,1,2].map(e=>`<i class="${e<a?"on":""}">★</i>`).join("")}function zs(a,e,s){const t=a.fixtures.length,o=a.fixtures.map((u,b)=>36+b*(200/Math.max(1,t-1))),n=236,i=new Set((s??[]).map(u=>u.at)),r=s!==null&&s.length===0;let p="";return a.fixtures.forEach((u,b)=>{const d=o[b],y=ha(u)?"trap":e[b],g=y==="trap"||y==="both",f=y==="pot"||y==="both",w=f?168:140,P=i.has(b)?"ws-bad":"";let v="";u.kind==="inodoro"?v+=`<path class="fix" d="M${d-10} 62h14v22h-14z M${d-16} 84h30a14 14 0 0 1-14 14h-2a14 14 0 0 1-14-14z"/>`:u.kind==="banera"?v+=`<path class="fix" d="M${d-22} 80h44v8a12 12 0 0 1-12 12h-20a12 12 0 0 1-12-12z"/>`:u.kind==="lavadora"||u.kind==="lavavajillas"?v+=`<rect class="fix" x="${d-17}" y="66" width="34" height="38" rx="4"/><circle class="fix" cx="${d}" cy="86" r="9"/>`:v+=`<path class="fix" d="M${d-18} 80h36a18 18 0 0 1-18 18 18 18 0 0 1-18-18z"/>`,v+=`<text x="${d}" y="54" class="dl b" text-anchor="middle">${u.name}</text>`;const U=u.kind==="banera"?100:u.kind==="lavadora"||u.kind==="lavavajillas"?104:98;if(g&&u.kind!=="inodoro")v+=`<path class="ln" d="M${d-4} ${U}V114a7 7 0 0 0 14 0v-4"/><path class="water" d="M${d-3} 116a6 6 0 0 0 12 0z"/><path class="ln" d="M${d+10} 110h3v${w-110}"/>`,v+=`<path class="ln" d="M${d+13} ${w}H${f?n:288}"/>`;else{const _=u.kind==="inodoro"?d+4:d-4;v+=`<path class="ln" d="M${_} ${U}V${w}H${f?n:288}"/>`}i.has(b)&&y==="open"&&(v+=`<circle class="bub up" cx="${d-4}" cy="${U+6}" r="3.5"/><circle class="bub up b2" cx="${d-4}" cy="${U+6}" r="3"/><circle class="bub up b3" cx="${d-4}" cy="${U+6}" r="3.2"/><text x="${d+6}" y="74" class="dl b ws-smell">¡olor!</text>`),r&&(v+=`<path class="flow" d="M${d-4} ${U+2}V${w}"/>`),p+=`<g class="${P}">${v}</g>`}),`
  <svg viewBox="0 0 320 200" class="diagram anim ws-scene" role="img" aria-label="${a.place}" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path class="wall" d="M8 126H300"/>
    <rect x="8" y="126" width="292" height="56" class="ws-slab"/>
    ${a.pot?`<rect class="fix" x="${n-12}" y="156" width="26" height="22" rx="4"/><path class="water" d="M${n-9} 170h20v6h-20z"/><path class="ln" d="M${n+14} 164H288"/><text x="${n+1}" y="196" class="dl" text-anchor="middle">bote</text>`:""}
    <path class="pipe" d="M294 10V196"/>
    <text x="286" y="20" class="dl" text-anchor="end">bajante</text>
    ${p}
    ${r?'<path class="flow" d="M294 120V196"/>':""}
  </svg>`}function Ds(a){const e=x(),s=C[a.i],t=s.fixtures.map((n,i)=>{const r=a.result?.some(u=>u.at===i)?"bad":"";if(ha(n))return`<div class="ws-fx"><b>${n.name}</b><span class="ws-lock">${e.toiletLocked}</span></div>`;const p=Ze.map((u,b)=>`<button class="${a.drains[i]===u?"on":""}" data-dr="${i}:${u}">${e.drains[b]}</button>`).join("");return`<div class="ws-fx ${r}"><b>${n.name}</b><div class="ws-opts">${p}</div></div>`}).join("");let o="";if(a.result&&a.result.length===0){const n=a.i+1<C.length;o=`<div class="feedback ok ws-res"><img src="${E}" alt="Eki"><b>${e.shopOk}</b><p class="ws-big">${ee(Va(a.tries))}</p>
      <div class="nav center"><button class="btn ghost" data-go="workshop">${e.shopList}</button>${n?`<button class="btn" data-job="${a.i+1}">${e.shopNext} ›</button>`:""}</div></div>`}else a.result&&(o=`<div class="feedback ko ws-res"><img src="${E}" alt="Eki"><b>${e.shopKo}</b>${a.result.map(n=>`<p>${n.text}</p>`).join("")}</div>`);return`
  ${j("workshop")}
  <p class="ttl">${e.shopBath.toUpperCase()} · ${e.shopJob(a.i+1,C.length).toUpperCase()}</p>
  <h1 class="plan-h ws-call">${s.call}</h1>
  <p class="plan-sub">${s.place}</p>
  ${L()}
  <div class="th-cols">
    <section class="sheet ws-sheet">${zs(s,a.drains,a.result)}</section>
    <article class="plan-card">
      <p class="ws-ask">${e.shopAsk}</p>
      ${t}
      ${a.result&&a.result.length===0?"":`<button class="btn full" data-test>${e.test}</button>`}
      ${o}
    </article>
  </div>`}function Es(a){k({name:"job",i:a,drains:C[a].fixtures.map(e=>e.start),tries:0,result:null})}function Hs(){if(l.name!=="job")return;const a=Xe(C[l.i],l.drains),e=l.tries+1;if(l={...l,tries:e,result:a},!a.length){const s=[...c.jobStars];s[l.i]=Math.max(s[l.i]??0,Va(e)),S({jobStars:s})}M(),document.querySelector(".ws-res")?.scrollIntoView({block:"center"})}function Ls(a){clearInterval(O);const e=a==="daily"?Be(Ce(Y())):Math.random,s=Ha(0);l={...Pa(),phase:"play",mode:a,rnd:e,q:La(e),qTime:s,endsAt:Date.now()+s*1e3},M(),O=window.setInterval(()=>{if(l.name!=="game"||l.phase!=="play")return clearInterval(O);const t=Math.max(0,(l.endsAt-Date.now())/1e3),o=document.getElementById("g-bar");o&&(o.style.width=`${t/l.qTime*100}%`,o.classList.toggle("hurry",t<1.5)),t<=0&&se(null)},50)}function se(a){if(l.name!=="game"||l.phase!=="play"||!l.q)return;const e=l.q,s=a===e.value,t=s?l.combo+1:0,o=l.hits+(s?1:0),n=l.lives-(s?0:1),i=s||l.misses.some(b=>b.name===e.f.name&&b.pub===e.pub)?l.misses:[...l.misses,{name:e.f.name,pub:e.pub,value:e.value}],r=l.score+(s?He(t):0),p={name:e.f.name,pub:e.pub,value:e.value,ok:s,late:a===null};if(n<=0){clearInterval(O);const b=r>c.bestGame,d=l.mode==="daily"&&r>sa();return b&&S({bestGame:r}),l.mode==="daily"&&S({dailyDay:Y(),dailyBest:Math.max(r,sa())}),l={...l,phase:"end",score:r,combo:t,hits:o,lives:n,misses:i,last:p,record:b,dailyRecord:d},M()}const u=Ha(o);l={...l,score:r,combo:t,hits:o,lives:n,misses:i,last:p,q:La(l.rnd,e),qTime:u,endsAt:Date.now()+u*1e3,flash:s?"ok":"ko"},M()}const te='<svg viewBox="0 0 24 24" class="icon fill"><path d="M8 5.5v13l11-6.5z"/></svg>',oe='<svg viewBox="0 0 24 24" class="icon fill"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>';function As(a){const e=x(),s=z[a];h.card!==a&&Object.assign(h,{card:a,scene:0,playing:!1});const t=s.scenes.length,o=z.map((i,r)=>`<i class="${r===a?"on":""}"></i>`).join(""),n=s.scenes.map((i,r)=>`<i data-seg="${r}" class="${r<h.scene?"done":r===h.scene?"on":""}"></i>`).join("");return`
  <div class="crumb">${j("syllabus")}<span class="tag">${a+1}/${z.length}</span></div>
  <p class="ttl">${V.topic.toUpperCase()} · ${e.section.toUpperCase()} ${a+1}</p>
  <h1 class="plan-h">${s.title}</h1>
  <div class="zones"><button class="on">${e.explanation}</button><button data-go="summary">${e.stopSummary}</button><button data-go="practice">${e.stopTest}</button></div>
  ${L()}
  <div class="th-cols">
  <section class="player">
    <div class="sheet">${qe[s.diagram]}</div>
    <div class="cap"><img src="${E}" alt="Eki"><p id="pl-cap">${s.scenes[h.scene]}</p></div>
    <div class="ctl">
      <button data-pl="prev" aria-label="Escena anterior">${m.back}</button>
      <button data-pl="toggle" class="pp" aria-label="Escuchar">${h.playing?oe:te}</button>
      <button data-pl="next" aria-label="Escena siguiente">${m.chevron}</button>
      <div class="segs">${n}</div>
      <span id="pl-n" class="mono">${h.scene+1}/${t}</span>
    </div>
  </section>
  <article class="plan-card">
    <p class="lead">${s.lead}</p>
    <ul class="points">${s.points.map(i=>`<li>${i}</li>`).join("")}</ul>
  </article>
  </div>
  ${Ya(s)}
  <div class="dots">${o}</div>
  <div class="nav">
    <button class="btn ghost" data-theory="${a-1}" ${a===0?"disabled":""}>‹</button>
    ${a<z.length-1?`<button class="btn" data-theory="${a+1}">${e.next} ›</button>`:`<button class="btn" data-go="summary">${e.stopSummary} ›</button>`}
  </div>`}function Bs(a){return a.split(" ").map((e,s)=>`<span style="--d:${s*45}ms">${e}</span>`).join(" ")}function ta(a){const e=z[h.card];h.scene=a,za(B,a);const s=document.getElementById("pl-cap");s&&(s.innerHTML=Bs(e.scenes[a]),s.classList.remove("in"),s.offsetWidth,s.classList.add("in"));const t=document.getElementById("pl-n");t&&(t.textContent=`${a+1}/${e.scenes.length}`),B.querySelectorAll("[data-seg]").forEach(n=>{const i=Number(n.dataset.seg);n.className=i<a?"done":i===a?"on":""});const o=B.querySelector('[data-pl="toggle"]');o&&(o.innerHTML=h.playing?oe:te),B.querySelector(".player")?.classList.toggle("playing",h.playing)}function ua(){const a=z[h.card];h.playing=!0,ta(h.scene),De(a.scenes[h.scene],()=>{h.scene<a.scenes.length-1?(h.scene++,ua()):(h.playing=!1,ta(h.scene))})}function Cs(a){const e=z[h.card].scenes.length-1;if(a==="toggle")return h.playing?(pa(),h.playing=!1,ta(h.scene)):(h.scene===e&&(h.scene=0),ua());const s=Math.max(0,Math.min(e,h.scene+(a==="next"?1:-1)));if(h.playing)return h.scene=s,ua();ta(s)}function Vs(){const a=x(),e=oa().map((t,o)=>{const n=t.filter(r=>c.answers[r]===!0).length,i=t.filter(r=>r in c.answers).length;return`<button class="row" data-blocktest="${o}"><span class="n">${o+1}</span><span class="txt"><b>${H[o].title}</b><small>${t.length} ${a.questionsN} · ${n}/${t.length} ${a.score}</small><span class="meter"><i style="width:${i/t.length*100}%"></i></span></span>${m.chevron}</button>`}).join(""),s=na().length;return`
  <p class="ttl">${a.moduleName.toUpperCase()} · ${a.stopTest.toUpperCase()}</p>
  <h1 class="plan-h">${V.topic}</h1>
  <p class="plan-sub">${a.testsSub}</p>
  ${L()}
  <p class="blk"><b>A</b>${a.blockTest.toUpperCase()}</p>
  <div class="rows">${e}</div>
  <p class="blk"><b>B</b>${a.exam.toUpperCase()}</p>
  <article class="plan-card exam-card">
    <div class="exam-top"><span class="exam-n">${Sa}</span><p>${a.examSub}</p></div>
    ${c.examBest?`<p class="exam-best">${a.examBest}: <b>${c.examBest.toLocaleString(c.lang)}</b></p>`:""}
    <button class="btn full" data-exam>${a.examStart} ›</button>
  </article>
  ${s?`<button class="btn ghost full review-btn" data-go="review">${a.review} · ${s}</button>`:""}`}function Us(a){const e=x(),s=ja(a.hits,a.ids.length),t=a.ids.map((o,n)=>({q:aa(o),mark:a.marks[n]})).filter(({q:o,mark:n})=>n!==o.answer).map(({q:o,mark:n})=>`<li class="plan-card fix">
        <b>${o.text}</b>
        <p class="ko"><span>${e.yourPick}</span>${o.options[n]}</p>
        <p class="ok"><span>${e.rightPick}</span>${o.options[o.answer]}</p>
        <p class="why">${o.explanation}</p>
      </li>`).join("");return`
  ${j("practice")}
  <article class="plan-card exam-end">
    <p class="ttl">${e.exam.toUpperCase()}</p>
    <div class="grade ${s>=5?"pass":"fail"}"><span>${e.grade}</span><b>${s.toLocaleString(c.lang)}</b></div>
    <p class="plan-sub">${a.hits} / ${a.ids.length} ${e.score}${c.examBest?` · ${e.examBest}: ${c.examBest.toLocaleString(c.lang)}`:""}</p>
  </article>
  <p class="blk"><b>✓</b>${e.examFix.toUpperCase()}</p>
  ${t?`<ol class="fixes">${t}</ol>`:`<p class="plan-sub">${e.examAllOk}</p>`}
  <div class="nav"><button class="btn ghost" data-go="practice">${e.toTests}</button><button class="btn" data-exam>${e.examAgain} ›</button></div>`}function Ts(a){const e=x();if(a.index>=a.ids.length&&a.exam)return Us(a);if(a.index>=a.ids.length)return`
    ${j("practice")}
    <article class="card big center">
      <img src="${E}" alt="" class="mascot small">
      <h2>${a.hits} / ${a.ids.length} ${e.score}</h2>
      <div class="nav">
        ${na().length?`<button class="btn ghost" data-go="review">${e.review}</button>`:""}
        <button class="btn" data-go="practice">${e.toTests}</button>
      </div>
    </article>`;const s=aa(a.ids[a.index]),t=a.picked!==null&&!a.exam,o=s.options.map((i,r)=>{let p="opt";return t&&r===s.answer?p+=" right":t&&r===a.picked?p+=" bad":a.exam&&r===a.picked&&(p+=" sel"),`<button class="${p}" data-pick="${r}" ${t?"disabled":""}><span>${"ABCD"[r]}</span>${i}</button>`}).join(""),n=t?`<div class="feedback ${a.picked===s.answer?"ok":"ko"}">
        <b>${a.picked===s.answer?e.correct:e.wrong}</b>
        <p>${s.explanation}</p>
      </div>
      <button class="btn full" data-nextq>${a.index+1<a.ids.length?e.next:e.finish} ›</button>`:a.exam&&a.picked!==null?`<button class="btn full" data-nextq>${a.index+1<a.ids.length?e.next:e.finish} ›</button>`:"";return`
  ${j("practice")}
  ${L()}
  <div class="qhead"><span>${a.exam?`${e.exam} · `:""}${e.question} ${a.index+1} ${e.of} ${a.ids.length}</span></div>
  <div class="bar thin"><i style="width:${a.index/a.ids.length*100}%"></i></div>
  <article class="card big">
    <h2 class="q">${s.text}</h2>
    <div class="opts">${o}</div>
    ${n}
  </article>`}function Ps(a){const e=x(),s=N.steps;if(a.index>=s.length)return`
    ${j()}
    <article class="card big center">
      <img src="${E}" alt="" class="mascot small">
      <h2>${e.done}</h2>
      <p class="lead">${e.calcDone}</p>
      <button class="btn" data-go="topic">${e.finish}</button>
    </article>`;const t=s[a.index],o=s.slice(0,a.index).map((i,r)=>`<li><span>${e.step} ${r+1}</span><b>${i.answer} ${i.unit}</b></li>`).join(""),n=a.feedback?.ok===!0;return`
  ${j()}
  ${L()}
  <article class="card big">
    <p class="eyebrow">${e.calc}</p>
    <h2>${N.title}</h2>
    <p class="statement">${N.statement}</p>
    ${o?`<ol class="done">${o}</ol>`:""}
  </article>
  <article class="card big step">
    <p class="eyebrow">${e.step} ${a.index+1} ${e.of} ${s.length}</p>
    <h3>${t.prompt}</h3>
    <form class="answer" data-calc>
      <label><span>${e.yourAnswer}</span>
        <input id="calc-input" inputmode="decimal" autocomplete="off" ${n?"disabled":""} placeholder="0">
        <em>${t.unit}</em>
      </label>
      ${n?"":`<button class="btn" type="submit">${e.check}</button>`}
    </form>
    ${n?"":`<button class="link" data-hint>${e.hint}</button>${a.showHint?`<p class="hint">${t.hint}</p>`:""}`}
    ${a.feedback?`<div class="feedback ${a.feedback.ok?"ok":"ko"}"><b>${a.feedback.ok?e.correct:e.wrong}</b><p>${a.feedback.text}</p></div>`:""}
    ${n?`<button class="btn full" data-nextstep>${a.index+1<s.length?e.next:e.finish} ›</button>`:""}
  </article>`}function M(){let a="";switch(l.name){case"home":a=ps();break;case"topic":a=ms();break;case"syllabus":a=xs();break;case"summary":a=fs();break;case"games":a=ys();break;case"me":a=vs();break;case"theory":a=As(l.index);break;case"tests":a=Vs();break;case"practice":a=Ts(l);break;case"calc":a=Ps(l);break;case"game":a=ks(l);break;case"drops":a=qs(l.g);break;case"workshop":a=js();break;case"job":a=Ds(l);break}document.documentElement.lang=c.lang,document.body.dataset.skin=Ia();const e=l.name==="topic"?`<div class="lsheet" id="sheet" hidden><button class="sheet-shade" data-sheet-close aria-label="${x().close}"></button><aside class="sheet-panel" role="dialog" aria-modal="true"></aside></div>`:"";if(B.innerHTML=`${ds()}<main class="${l.name}${X?" enter":""}">${a}</main>${us()}${e}`,l.name==="theory"&&(za(B,h.scene),B.querySelector(".player")?.classList.toggle("playing",h.playing)),(l.name==="home"||l.name==="topic")&&X&&(gs(),hs()),l.name==="topic"&&I>=0){const s=I;I=-1,setTimeout(()=>Ga(s),180)}l.name==="calc"&&!l.feedback?.ok&&document.querySelector("#calc-input")?.focus({preventScroll:!0})}function qa(a){k({name:"practice",ids:a,index:0,picked:null,hits:0,exam:!1,marks:[]})}function Ns(){const a=re(oa(),Sa,Math.random);k({name:"practice",ids:a,index:0,picked:null,hits:0,exam:!0,marks:[]})}B.addEventListener("click",a=>{const e=a.target.closest("button");if(!e||e.hasAttribute("disabled"))return;const s=e.dataset;if(s.pl&&l.name==="theory")return Cs(s.pl);if(s.sheetClose!==void 0)return Fa();if(s.lesson!==void 0)return Ga(Number(s.lesson));if(G>=0&&e.closest(".sheet-panel")&&(I=G),s.tab)return I=-1,clearInterval(O),cancelAnimationFrame(R),k(s.tab==="home"?W:{name:s.tab});if(s.go==="topic")return k(os);if(s.go==="summary")return c.summaryDone||S({summaryDone:!0}),k({name:"summary"});if(s.go==="syllabus")return k({name:"syllabus"});if(s.lang)return S({lang:s.lang}),M();if(s.go==="home")return I=-1,clearInterval(O),k(W);if(s.go==="theory")return Ma(0),k({name:"theory",index:0});if(s.go==="practice")return k({name:"tests"});if(s.blocktest!==void 0)return qa(oa()[Number(s.blocktest)]);if(s.exam!==void 0)return Ns();if(s.go==="review")return qa(na());if(s.go==="calc")return k({name:"calc",index:0,feedback:null,showHint:!1});if(s.theory!==void 0){const t=Number(s.theory);return Ma(t),t===z.length-1&&!c.theoryDone&&S({theoryDone:!0}),k({name:"theory",index:t})}if(s.go==="game")return k(Pa());if(s.go==="games")return clearInterval(O),cancelAnimationFrame(R),k({name:"games"});if(s.gamestart!==void 0)return Ls(s.gamestart==="daily"?"daily":"free");if(s.ud!==void 0)return se(Number(s.ud));if(s.go==="drops")return k({name:"drops",g:null});if(s.dropsStart!==void 0)return Ss();if(s.bin!==void 0)return Wa(Number(s.bin));if(s.go==="workshop")return k({name:"workshop"});if(s.job!==void 0)return Es(Number(s.job));if(s.dr&&l.name==="job"){const[t,o]=s.dr.split(":"),n=[...l.drains];return n[Number(t)]=o,l={...l,drains:n,result:null},M()}if(s.test!==void 0)return Hs();if(s.pick!==void 0&&l.name==="practice"){const t=Number(s.pick);if(l.exam)return l={...l,picked:t},M();const o=aa(l.ids[l.index]),n=t===o.answer;return S({answers:{...c.answers,[o.id]:n}}),l={...l,picked:t,hits:l.hits+(n?1:0)},M()}if(s.nextq!==void 0&&l.name==="practice"){if(l.exam&&l.picked!==null){const t=aa(l.ids[l.index]),o=l.picked===t.answer,n=l.hits+(o?1:0);return S({answers:{...c.answers,[t.id]:o}}),l.index+1===l.ids.length&&S({examBest:Math.max(c.examBest,ja(n,l.ids.length))}),l={...l,index:l.index+1,picked:null,hits:n,marks:[...l.marks,l.picked]},M()}return l={...l,index:l.index+1,picked:null},M()}if(s.hint!==void 0&&l.name==="calc")return l={...l,showHint:!0},M();if(s.nextstep!==void 0&&l.name==="calc"){const t=l.index+1;return t>c.calcStep&&S({calcStep:t}),t>=N.steps.length&&S({calcDone:!0}),k({name:"calc",index:t,feedback:null,showHint:!1})}if(s.reset!==void 0)return c={...da(),lang:c.lang,days:c.days},ga(c),k(W)});document.addEventListener("keydown",a=>{a.key==="Escape"&&G>=0&&Fa()});B.addEventListener("submit",a=>{if(a.preventDefault(),l.name!=="calc")return;const e=document.querySelector("#calc-input"),s=Number((e?.value??"").replace(",",".").trim());if(!e?.value.trim()||Number.isNaN(s))return;const t=N.steps[l.index],o=s===t.answer,n=o?t.explanation:t.traps[s]??t.hint;if(l={...l,feedback:{ok:o,text:n}},M(),o){const i=document.querySelector("#calc-input");i&&(i.value=String(s))}else{const i=document.querySelector("#calc-input");i&&(i.value=String(s))}});M();"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").catch(()=>{});
