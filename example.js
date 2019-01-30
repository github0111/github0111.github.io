



function c()
{
    alert("hi");
    console.log("oh hhhhh");
    var A = prompt("type your id");
    if(A == 48763)
    {
        alert("網址給你了 console");
        return 4;
      
    }
    else if(A != 48763)
    {
        var B = String(prompt("type your school"));

        if(B == "TCFSH")
        {
            alert("網址給你了 console");
            return 4;
        }
        else if(B != "TCFSH" && A != 48763) {alert("你無權查看");}
    }
}

