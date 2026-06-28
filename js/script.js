// ======================================
// КРОХА - интерактив сайта
// ======================================


// Плавное появление элементов при загрузке

document.addEventListener("DOMContentLoaded", function(){


    const elements = document.querySelectorAll(".fade");


    elements.forEach((item,index)=>{


        setTimeout(()=>{


            item.style.opacity="1";


        }, index * 150);


    });


});




// Кнопка "Наверх"


window.addEventListener("scroll", function(){


    const button = document.getElementById("topButton");


    if(button){


        if(window.scrollY > 400){


            button.style.display="block";


        }

        else{


            button.style.display="none";


        }


    }


});




// Переход наверх


function goTop(){


    window.scrollTo({


        top:0,

        behavior:"smooth"


    });


}




// Сообщение при загрузке сайта


console.log(
"Добро пожаловать в магазин детских игрушек КРОХА 🧸"
);

