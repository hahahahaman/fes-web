var grid_items = [];
var private_equity_items = [];
var limited_partner_items = [];
var mic_items = [];

function loadPage(){
    getItems();
    fillGrid(grid_items);
    $("#home").click(function (){
        fillGrid(grid_items);
    });
    $("#section1").click(function (){
        fillGrid(private_equity_items);
    });
    $("#section2").click(function (){
        fillGrid(limited_partner_items);
    });

    $("#section3").click(function (){
        fillGrid(mic_items);
    });

}

function getItems(){
    grid_items = $(".col");
    private_equity_items = $(".private_equity");
    limited_partner_items = $(".limited_partner");
    mic_items = $(".mic");

    // console.log(grid_items);
    // console.log(mic_items);
    console.log($(grid_items[0])[0].outerHTML);
}

function fillGrid(items){
    $("#grid").html('');
    var cnt = 0;
    var row = "<div class=\"row top-buffer\">";
    for(var i = 0; i < 20; i++){
        cnt++;
        if(i < items.length){
            var elementHTML = $(items[i])[0].outerHTML;
            console.log(elementHTML);
            row += elementHTML;
        } else {
            row += " <div class=\"col\"> </div>";
        }

        if(cnt == 5){
            row += "</div>";
            $("#grid").append(row);
            row = "<div class=\"row top-buffer\">";
            cnt = 0;
        }
    }
}


