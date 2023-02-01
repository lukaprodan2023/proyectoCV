/** ******************VARIABLES******************** */
$cumpleaños= "Mi cumpleaños es: 8 de mayo";
$direccion = "Mi dirección es: Miguel Cané 869, José C. Paz. Buenos Aires. Argentina.";
$email = "Mi correo electrónico es: estebanquito@gmail.com";
$celular = "Mi número telefónico es: 0111562020087";
$instagram = "Mi Instagram es: #estebanquito"
$colorfondoico = "gray";
$colorfondoicoexp = "skyblue";

const experiencia = '{"tiempo": "1997-1998", "empresa": "Trasmimotor S.R.L.", "desempeño":"Empleado de Comercio"}';
const obj = JSON.parse(experiencia);

const experiencia2 = '{"tiempo": "1998-2002", "empresa": "Carrefour S.A.", "desempeño":"Empleado de Comercio"}';
const obj2 = JSON.parse(experiencia2);

const experiencia3 = '{"tiempo": "2003-Actualidad", "empresa": "Escuela Gabriela Mistral", "desempeño":"Docente"}';
const obj3 = JSON.parse(experiencia3);


const habilidad = '{"titulo": "Paquete ofimático", "Software": "Procesador de textos, planillas de cálculo y presentaciones electrónicas."}';
const hab = JSON.parse(habilidad);

const habilidad2 = '{"titulo": "Diseño Web", "Software": "HTML, PHP, JavaScript"}';
const hab2 = JSON.parse(habilidad2);

const habilidad3 = '{"titulo": "Programación", "Software": "C, C++, Java."}';
const hab3 = JSON.parse(habilidad3);

/** ****************** DATOS PERSONALES ******************** */

document.getElementById('cumple').addEventListener('mouseover', function()
    {
        document.getElementById('dato').innerHTML = $cumpleaños;
        document.getElementById('cumple').style.background = $colorfondoico;
    }   
)

document.getElementById('cumple').addEventListener('mouseout', function()
    {
        document.getElementById('cumple').style.background = "none";
    }   
)

document.getElementById('casa').addEventListener('mouseover', function()
    {
        document.getElementById('dato').innerHTML = $direccion;
        document.getElementById('casa').style.background = $colorfondoico;
    }   
)

document.getElementById('casa').addEventListener('mouseout', function()
    {
        document.getElementById('casa').style.background = "none";
    }   
)


document.getElementById('mail').addEventListener('mouseover', function()
    {
        document.getElementById('dato').innerHTML = $email;
        document.getElementById('mail').style.background = $colorfondoico;
    }   
)

document.getElementById('mail').addEventListener('mouseout', function()
    {
        document.getElementById('mail').style.background = "none";
    }   
)

document.getElementById('cel').addEventListener('mouseover', function()
    {
        document.getElementById('dato').innerHTML = $celular;
        document.getElementById('cel').style.background = $colorfondoico;
    }   
)

document.getElementById('cel').addEventListener('mouseout', function()
    {
        document.getElementById('cel').style.background = "none";
    }   
)

document.getElementById('insta').addEventListener('mouseover', function()
    {
        document.getElementById('dato').innerHTML = $instagram;
        document.getElementById('insta').style.background = $colorfondoico;
    }   
)

document.getElementById('insta').addEventListener('mouseout', function()
    {
        document.getElementById('insta').style.background = "none";
    }   
)

/** ************************** EXPERIENCIAS ******************** */

document.getElementById('exp1').addEventListener('click', function()
    {
        document.getElementById('exp1').style.background = $colorfondoicoexp;
        document.getElementById('exp2').style.background = "none";
        document.getElementById('exp3').style.background = "none";

        document.getElementById('tiempoexp1').innerHTML = "Desde-Hasta: " + obj.tiempo;
        document.getElementById('empresaexp1').innerHTML = "Empresa: " + obj.empresa;
        document.getElementById('puestoexp1').innerHTML = "Puesto: " + obj.desempeño;
    }   
)

document.getElementById('exp2').addEventListener('click', function()
    {
        document.getElementById('exp2').style.background = $colorfondoicoexp;
        document.getElementById('exp1').style.background = "none";
        document.getElementById('exp3').style.background = "none";

        document.getElementById('tiempoexp1').innerHTML = "Desde-Hasta: " + obj2.tiempo;
        document.getElementById('empresaexp1').innerHTML = "Empresa: " + obj2.empresa;
        document.getElementById('puestoexp1').innerHTML = "Puesto: " + obj2.desempeño;

    }   
)

document.getElementById('exp3').addEventListener('click', function()
    {
        document.getElementById('exp2').style.background = "none";
        document.getElementById('exp1').style.background = "none";
        document.getElementById('exp3').style.background = $colorfondoicoexp;

        document.getElementById('tiempoexp1').innerHTML = "Desde-Hasta: " + obj3.tiempo;
        document.getElementById('empresaexp1').innerHTML = "Empresa: " + obj3.empresa;
        document.getElementById('puestoexp1').innerHTML = "Puesto: " + obj3.desempeño;
    }   
)
    /** ************************** HABILIDADES ******************** */
    document.getElementById('hab1').addEventListener('click', function()
    {
        document.getElementById('hab3').style.background = "none";
        document.getElementById('hab2').style.background = "none";
        document.getElementById('hab1').style.background = $colorfondoicoexp;

        document.getElementById('titulohab').innerHTML = "Capacidad: " + hab.titulo;
        document.getElementById('softhab').innerHTML = "Software: " + hab.Software;
    }   
)

    document.getElementById('hab2').addEventListener('click', function()
    {
        document.getElementById('hab1').style.background = "none";
        document.getElementById('hab3').style.background = "none";
        document.getElementById('hab2').style.background = $colorfondoicoexp;

        document.getElementById('titulohab').innerHTML = "Capacidad: " + hab2.titulo;
        document.getElementById('softhab').innerHTML = "Software: " + hab2.Software;
    }   
)

    document.getElementById('hab3').addEventListener('click', function()
    {
        document.getElementById('hab1').style.background = "none";
        document.getElementById('hab2').style.background = "none";
        document.getElementById('hab3').style.background = $colorfondoicoexp;

        document.getElementById('titulohab').innerHTML = "Capacidad: " + hab3.titulo;
        document.getElementById('softhab').innerHTML = "Software: " + hab3.Software;
    }   
)