$(document).ready(function(){
    var divPai = $('.Linha');
    var btnCriar = $('#criarLinha');
     
    btnCriar.click(function(){
        var Qt_campos = parseInt(document.getElementById("Campos").value,10);
        if(Number.isInteger(Qt_campos)){//caso o valor digitado seja um int, faça
            
            document.getElementById('Form').remove();//limpa a parte de inserir inputs
            divPai.append("<div><p>Digite os valores que deseja somar</p></div>");//cria uma tag <p>

            for(i=0; i<Qt_campos; i++){//cria inputs dinamico
                divPai.append("<input type='text' class='form-control' id='teste'='Example input placeholder'>");
                document.getElementById('teste').setAttribute('id', i);  // define um Id diferente para cada input     
            }

            divPai.append("<button id='soma' type='button' class='btn btn-dark'>Somar</button>");//cria um botao 
            var btnSoma = $('#soma');//recebe o botao

            btnSoma.click(function(){// quando o botao for apertado, faça:
                var error=[];//variavel para detectar um input errado
                let valor_Campos = [];//array que recebe o valor de cada input
                for(i=0; i<Qt_campos; i++){
                    if(parseInt(document.getElementById(i).value,10)){//se for um valor numerico, faça
                        valor_Campos.push(parseInt(document.getElementById(i).value,10));//seta no array o valor desse input
                    }else{ //se nao, faça
                       error.push(i+1);//adiciona qual input esta errado 
                    }                 
                }
                if(error.length>0){// caso tenha algum erro, faça
                    let mensagem= "Valores incorretos nos inputs: " + error.toString();//seta uma mensagem de erro com os inputs que estao incorretos
                    let titulo= "Inserção não valida"//seta o titulo
                    Mensagem(mensagem,titulo);//chama a funçao para exibir na tela
                
                }else{//caso nao haja erro, faça 
                    var soma = Soma(valor_Campos,Qt_campos);//chama a funçao responsavel por somar os valores
                    let titulo= "Soma realizada teste";//seta o titulo do modal
                    let mensagem= "Valor da soma: " + soma ;//seta a mensagem com o valor da soma
                    Mensagem(mensagem,titulo);//chama a funçao para exibir o modal na tela
                } 
            });
        }else{ //caso o valor de inputs nao seja um int, faça
                let mensagem= "Insira um numero de tabelas validas";//seta mensagem de erro
                let titulo= "Valor Invalido"//seta titulo
                Mensagem(mensagem,titulo);//chama a funçao para exibir o modal na tela
        }   
    });     
});
    
    function Soma(valores, quantidade){//funçao para somar os valores dos inputs
        let soma=0//zera a soma
        for(i=0;i<quantidade; i++){
           // console.log(valor_Campos[i]);
            soma = soma + valores[i];//pega o valor de cada input e adiciona na variavel soma

        }
        return soma;//retorna soma
    }
    function Mensagem(mensagem, titulo){//funçao para exibir mensagem na tela
        var divTitulo = document.getElementById("TituloModal");//pega o titulo do modal
        var divtexto = document.getElementById("textoModal");//pega o texto do modal
       
        divTitulo.innerHTML  = "<p>"+titulo+"</p>";//escreve no titulo
        divtexto.innerHTML  = "<p>"+ mensagem +"</p>";//escreve na mensagem
        $("#Modal").modal();//exibe o modal
        
    }