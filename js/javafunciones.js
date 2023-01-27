
document.getElementById('icomail').addEventListener('mouseover', function()
    {
        document.getElementById('inf').style.display = 'block';
        document.getElementById('inf').innerHTML = "E-mail: estebanquito@gmail.com";
        document.getElementById('icomail').style.background = "yellow";
        document.getElementById('icodire').style.background = "none";
        document.getElementById('icoinst').style.background = "none";
        document.getElementById('icocumple').style.background = "none";
        document.getElementById('icotel').style.background = "none";
        
    }   
)

document.getElementById('icodire').addEventListener('mousemove', function()
    {
        document.getElementById('inf').innerHTML = "Dirección: Miguel Cané 968, José Clemente Paz, Bs. As., Argentina";
        document.getElementById('icomail').style.background = "none";
        document.getElementById('icodire').style.background = "yellow";
        document.getElementById('icoinst').style.background = "none";
        document.getElementById('icocumple').style.background = "none";
        document.getElementById('icotel').style.background = "none";
    }   
)

document.getElementById('icotel').addEventListener('mousemove', function()
    {
        document.getElementById('inf').innerHTML = "Teléfono: 02320-434742";
        document.getElementById('icomail').style.background = "none";
        document.getElementById('icodire').style.background = "none";
        document.getElementById('icoinst').style.background = "none";
        document.getElementById('icocumple').style.background = "none";
        document.getElementById('icotel').style.background = "yellow";
    }   
)

document.getElementById('icocumple').addEventListener('mousemove', function()
    {
        document.getElementById('inf').innerHTML = "Fecha de Nacimiento: 8 de mayo de 1978";
        document.getElementById('icomail').style.background = "none";
        document.getElementById('icodire').style.background = "none";
        document.getElementById('icoinst').style.background = "none";
        document.getElementById('icocumple').style.background = "yellow";
        document.getElementById('icotel').style.background = "none";
    }   
)

document.getElementById('icoinst').addEventListener('mousemove', function()
    {
        document.getElementById('inf').innerHTML = "Instagram: @estebanquito";
        document.getElementById('icomail').style.background = "none";
        document.getElementById('icodire').style.background = "none";
        document.getElementById('icoinst').style.background ="yellow";
        document.getElementById('icocumple').style.background = "none";
        document.getElementById('icotel').style.background = "none";
    }   
)