$(function() {
    $(".notification").hide();
    $("#pricecol").hide();

    function explode() {
        var btn = '<img src="layer_37.png" height="25%">&emsp;</span><font>Expired pass</font>';
        $(".notification").append(btn);
        $(".notification").show();
    }
    setTimeout(explode, 2000);
    $("#daily").click(function() {
        var str = "Daily Pass";
        var cost = 10.00;
        dc = select(cost, str, dc);
        id = "daily";
        change(dc, id);
    })
    $("#weekly").click(function() {
        var str = "Weekly Pass";
        var cost = 20.00;
        wc = select(cost, str, wc);
        id = "weekly";
        change(wc, id);
    })
    $("#month").click(function() {
        var str = "Month Pass";
        var cost = 50.00;
        mc = select(cost, str, mc);
        id = "month";
        change(mc, id);

    })
    $("#annual").click(function() {
        var str = "Annual Pass";
        var cost = 60.00;
        ac = select(cost, str, ac);
        id = "annual";
        change(ac, id);
    })

    var content = "";
    var price = 0;
    var counter = 0,
        dc = 0,
        wc = 0,
        mc = 0,
        ac = 0;

    function select(rate, data, sub) {
        if (counter == 0) {
            content += data;
            counter++;
            price += rate;
            sub = 1;
        } else {
            if (!sub) {
                content += '+' + data;
                price += rate;
                counter++;
                sub = 1;
            } else {
                sub = replace(data, sub, rate)
            }
        }

        $("#replace").html(content);
        $("#pricecol").html('Price:' + price + ' dlls');
        $("#pricecol").show();
        // alert(counter);
        return sub;
    }

    //replace

    function replace(data, psub, rrate) {
        if (counter > 0) {
            var sub = content.slice(0, data.length);
            if (sub == data) {
                content = content.replace(data, "");
                content = content.replace('+', '');
            } else {
                content = content.replace("+" + data, "");
            }
        } else {
            content = content.replace(data, "");
        }
        counter--;
        price -= rrate;
        psub = 0;
        return psub;
    }
    // select or remove.....
    function change(change, id) {
        if (change == 1) {
            var button = '<a href="#"  id="daily" style="font-size:13px;color:#4169e1;">REMOVE</a>';
            $("#" + id).html(button);
        } else {
            var button = '<a href="#" id="daily">SELECT</a>';
            $("#" + id).html(button);
        }
    }
});