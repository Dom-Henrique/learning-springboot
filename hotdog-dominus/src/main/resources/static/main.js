// vai ler o conteudo so quando a pagina for carregada inteiramente
$(document).ready(function(){
    const options = {
        url: function(filter){
            return "api/find"
        },
        getValue: function(element){
            let defaultValue = " "
            if (element.value){
                defaultValue = "( default:"+element.value+")"
                return "<b>" + element.category + "</b> ["+element.name + "] <i>"+defaultValue+"</i> -"+element.description;
            }
        },
        ajaxSettings: {
            dataType: "json",
            method: "GET",
            data: {}
        },
        preparePostData: function(data){
            data.filter = $('search').value;
            return data;
        },
        theme: "square",
        list: {
            maxNumberOfElements: 100
        },
        requestDelay: 400
    };
    $('search').easyAutocomplete(options);
    $('search').trigger("focus");
});