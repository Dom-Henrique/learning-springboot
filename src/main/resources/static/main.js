// vai ler o conteudo so quando a pagina for carregada inteiramente
$(document).ready(function(){
    const options = {
        url: function(filter){
            return "api/filter"
        },
        getValue: function(value){
            let defaultValue = "";
            if (value.CPF){
                defaultValue = "default: " + value.CPF;
            }
            return "<br>" + value.fullName + "</br> [" + value.country + "] <i> " + defaultValue + "</i> - " + value.address;
        },
        ajaxSettings: {
            dataType: "json",
            method: "GET",
            data: {}
        },
        preparePostData: function(data){
            data.filter = `$("search")`.value;
            return data;
        },
        theme: "dark",
        list: {
            maxNumberOfElements: 100
        },
        requestDelay: 400
    };
    $("search").easyAutocomplete(options);
    $("search").trigger("focus");
})