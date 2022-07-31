const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];

  /*variables*/
let result = document.querySelector(".propiedades");
let contador = document.querySelector(".contador")


const template = (prop) => {
  console.log(prop);
  /*html propiedades*/
  return  `
    <div class="propiedad">
    <div class="img" style="background-image: url('${prop.src}')"></div>
    <section>
      <h5>${prop.name}</h5>
      <div class="d-flex justify-content-between">
        <p>Cuartos: ${prop.rooms}</p>
        <p>Metros: ${prop.m}</p>
        </div>
        <p class="my-3">${prop.description}</p>
        <button class="btn btn-info ">Ver más</button>
    </section>
  </div>
  `;
};

  /*carga propiedades*/
const propiedadeshtml = () => {
  let cantidad = "";
  for (const propiedad of propiedadesJSON) {
    let html = template(propiedad);
    cantidad ++
    result.innerHTML += html;
  }
  console.log(cantidad);
  contador.innerHTML = cantidad
};

  /*buscar propiedades*/
const buscarbtn = () => {
  let minText = Number(document.querySelector(".min").value);
  let maxText = Number(document.querySelector(".max").value);
  let rooms = Number(document.querySelector(".rooms").value);
  let html = "";
  cantidad = 0

    /*validador*/
  if(minText, maxText, rooms == 0) {
    alert("Debes ingresar todos los valores")
  }

  let filtro = propiedadesJSON.filter((p) => p.m >= minText && p.m <= maxText && p.rooms >= rooms
  );

  if(filtro.length==0){
    html+= `<h1>Busqueda sin resultados</h1>`
  }

    /*limpiar pantalla*/
  result.innerHTML = "";
  for (const f of filtro) {
    html += template(f);
    cantidad++
  }
  result.innerHTML = html;
  contador.innerHTML = cantidad
};

document.addEventListener("DOMContentLoaded", propiedadeshtml);