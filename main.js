function calcular(){
    
    var nota1 = document.getElementById("nota1").value
    var nota1 = parseInt(nota1)
    var nota2 = document.getElementById("nota2").value
    var nota2 = parseInt(nota2)
    var nota3 = document.getElementById("nota3").value
    var nota3 = parseInt(nota3)
    var nota4 = document.getElementById("nota4").value
    var nota4 = parseInt(nota4)
    
    var media = parseInt((nota1 + nota2 + nota3 + nota4)/4)
        
    
    if(media <=10){
        document.getElementById("nota1mostrar").innerHTML =  nota1
    document.getElementById("nota2mostrar").innerHTML =  nota2
    document.getElementById("nota3mostrar").innerHTML =  nota3
    document.getElementById("nota4mostrar").innerHTML =  nota4
    
    if(media >= 7){
        document.getElementById("para").innerHTML = (`Parabéns você foi aprovado, sua media é ${media}`)
    }else{
        document.getElementById("para").innerHTML = (`Você foi reprovado, estude e tente novamente, sua media é ${media}`)
    }


   
}else{
    alert("As notas não pode ter duas casas decimais")
} }
