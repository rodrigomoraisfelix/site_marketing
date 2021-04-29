// Edit do lightbox 

lightbox.option({
    wrapAround: true,
    albumLabel: 'Foto %1 de %2',
    fadeDuration: 300,

})


 // inicialização do plugin AOS Animation

AOS.init();


//Comportamento para seta-home
$(window).scroll(function(){
    //SE A ROLAGEM FOR MAIOR OU IGUAL A 600
    //MOSTRA A SETA COM FADE
    //CASO CONTRÁRIO, OCULTA A SETA COM FADE
    if($(window).scrollTop() >= 500)
    {   
        $('.seta-home').fadeIn();
    }
    else
    {  
        $('.seta-home').fadeOut();
    }


});

$('.seta-home').click(function() {
//aplica animação no body,html até o topo da pagina
    $('body,html').animate({
        scrollTop:0
    },1000);


});

//ANIMAÇAO CLICK DO MENU

$('.rolagem').click(function(){
    var id = $(this).attr('href');
    var destino = $(id).offset().top;

    //posiçao vertical do item clicado
    $('html, body').animate({
        scrollTop: destino,
    });
});

//Codigos para o Formulário
    //text-idade é o valor que exibe a idade do range
$('#text-idade').text($('#idade').val());

//atualização do campo idade
$('#idade').change(function(){
    $('#text-idade').text($('#idade').val());
});

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
      var forms = document.getElementsByClassName('needs-validation');
      // Faz um loop neles e evita o envio
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  

//preenche a lista de estados com a api do IBGE
$.ajax({
    url:'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
    success:function (dados){
        var tag = '';
        //laço de repetição executa repetidamente até o final
        for (let i = 0; i < dados.length; i++) {
            tag += '<option value="'+dados[i].id+'">' + dados[i].nome + '</option>';

        }
        //preenche a lista estados com variavel tag
        $('#estados').html(tag);

        
    },
    error:function(msg){
        alert('Não foi possivel Carregar a lista de estados. Tente novamente mais Tarde ' + msg)
    },

});

// preenche a lista de cidades

$('#estados').change(function(){
    var uf = $(this).val();
    var link = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+uf+'/municipios'
    $.ajax({
        url:link,
        success:function (dados){
            var tag = '';
            //laço de repetição executa repetidamente até o final
            for (let i = 0; i <dados.length; i++) {
                tag += '<option value="'+dados[i].id+'">' + dados[i].nome + '</option>';
    
            }
            //preenche a lista estados com variavel tag
            $('#cidades').html(tag);
    
            
        },
        error:function(msg){
            alert('Não foi possivel Carregar a lista de estados. Tente novamente mais Tarde ' + msg)
        },
    
    });

})

