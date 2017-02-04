$(function() {
    $(".notification").hide();
    $("#pricecol").hide();

    function explode() {
        var btn = '<img src="layer_37.png" height="25%">&emsp;</span><font>Expired pass</font>';
        $(".notification").append(btn);
        $(".notification").show();
    }
    setTimeout(explode, 2000);
    var content = [];
    var cost = 0;
    var counter = 0;
    var data = "";
    var price = [];
    $(".col-xs-4 a").click(function() {
        var id = $(this).attr('id');
        var gprice = parseInt($(this).attr('price'));
        var value = $(this).attr('value');

        // alert(value);
        if (content.length == 0) {
            select(id, gprice);
            $(this).text("REMOVE");
        } else {
            for (var i = 0; i < content.length; i++) {
                var ac = (id == content[i]);
                if (ac)
                    break;
            }
            if (ac) {
                index = i;
                replace(id, gprice);
                $(this).text("SELECT");
                value = 0;
            } else {
                select(id, gprice);
                $(this).text("REMOVE");
                value = 1;
            }
        }
        console.log(ac);
        // ac=value;

    })



    function select(data, rate) {
        content.push(data);
        price.push(rate);
        console.log(content);
        console.log(price);
        var detail = "";
        for (var i = 0; i < content.length; i++) {
            if (i == 0) {
                detail += content[i];
            } else {
                detail += "+" + content[i];
            }
        }
        $("#replace").html(detail);
        cost = 0;
        for (var j = 0; j < price.length; j++) {
            cost += price[j];

        }
        // alert(cost);
        $("#pricecol").html(cost);
        $("#pricecol").show();
        counter++;
        $()
    }

    //replace

    function replace(remove, cost) {
        content = jQuery.grep(content, function(value) {
            return value != remove;
        });
        counter--;
        price = jQuery.grep(price, function(value) {
            return value != cost;
        });
        var detail = "";
        for (var i = 0; i < content.length; i++) {
            if (i == 0) {
                detail += content[i];
            } else {
                detail += "+" + content[i];
            }
        }
        $("#replace").html(detail);
        cost = 0;
        for (var j = 0; j < price.length; j++) {
            cost += price[j];

        }
        // alert(cost);
        $("#pricecol").html(cost);
    }

});