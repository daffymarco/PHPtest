//------------------------------------------------------------------
//----------- *** Função para Chamar a Mascara do CEP *** ----------
//------------------------------------------------------------------
$(document).on('keypress change paste', '#inputCEP', function (e) {
    var cep = $(this).val().replace(/\D/g, '');  //Nova variável "cep" somente com dígitos.

    $(this).val(CEPMask(cep));
});

//------------------------------------------------------------------
$(document).on('click', '#consult', function () { GetCEP(); });
$(document).on('keypress', '#inputCEP', function (e) {
        if(e.which == 13) GetCEP();
});

//------------------------------------------------------------------
//--------- *** Função para Aplicar a  a Mascara do CEP *** --------
//------------------------------------------------------------------
function CEPMask(value) {
    var cep = $("#inputCEP").val().replace(/\D/g, '');  //Get Just Numbers

    //Verifica se campo cep possui valor informado.
    if (cep.length > 5) {
        value = cep.substring(0, 5) + "-" + cep.substring(5);
    } else {
        value = cep;
    }

    return value;
}

//------------------------------------------------------------------
//-------------- *** Função para Cadastrar um CEP *** --------------
//------------------------------------------------------------------
function GetCEP(){
    var cep = $("#inputCEP").val().replace(/\D/g, '');  //Get Just Numbers

    //Verifica se algum campo está vazio ou se as senhas não são iguais, se sim exibe uma modal de erro e retorna
    if (cep == '') {
        $("#modal_alert_txt").html("Não pode existir campo vazio.");
        $("#modal_alert").modal('show'); //Show Modal
        $("#modal_alert_fechar").focus();

        return;
    }

    //Ajax para inserir o cadastro no BD
    $.ajax({
        type: 'POST',
        url: "database/database.php",
        dataType: "text",
        data: {cep:cep},
        success: function (data) {
            if(data == "erro"){
                $("#modal_alert").modal("show"); //Exibe a modal de erro
                $("#result").html('');
            }else{ WriteData(cep); }
        },
        error: function (request, status, error) { //Se erro, exibe no console.
            console.log('Status: ' + request.status + '\n' + error + '\n\n' + request.responseText);
        }
    });
}

//------------------------------------------------------------------
//-------------- *** Função para Escrever os Dados *** -------------
//------------------------------------------------------------------
function WriteData(cep){
    //Verifica se campo cep possui valor informado.
    if (cep != "" && cep.length > 7) {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {


            //Consulta o webservice viacep.com.br/
            $.getJSON("https://viacep.com.br/ws/" + cep + "/json", function (dados) {

                if (!("erro" in dados)) {
                    //Atualiza os campos com os valores da consulta.
                    var span = "<span>";
                    span += "<br>Endereço: " + dados.logradouro;
                    span += "<br>Bairro: " + dados.bairro;
                    span += "<br>Complemento: " + dados.complemento;
                    span += "<br>Cep: " + dados.cep;
                    span += "<br>Cidade: " + dados.localidade;
                    span += "<br>Estado: " + dados.uf;
                    span += "</span>";

                    $("#result").html(span);
                } //end if.
                else {
                    //CEP pesquisado não foi encontrado.
                    $("#result").html('');
                    $("#modal_invalid").modal('show'); //Show Alert CEP
                }
            });
        } //end if.
        else {
            //cep é inválido.
            $("#result").html('');
            $("#modal_invalid").modal('show'); //Show Alert CEP
        }
    } //end if.
    else {
        //cep sem valor.
    }
}