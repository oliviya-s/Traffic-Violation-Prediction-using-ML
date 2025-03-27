let openness;
let conscientiousness;
let extroversion;
let agreeableness;
let neuroticism;
let anxietybasedperformancedeficits;
let exaggeratedsafetybehavior;
let hostilebehaviors;
 
function checkRadioButton()
{
    var ele1 = document.getElementsByName("agree1");

    for (i=0;i<ele1.length;i++)
    {
        if(ele1[i].checked)
        {
           v1=ele1[i].value
            console.log(ele1[i].value);

         }
    }

    var ele2 = document.getElementsByName("agree2");

    for (i=0;i<ele2.length;i++)
    {
        if(ele2[i].checked)
        {
             v2=ele2[i].value
           console.log(ele2[i].value);

         }
    }

    var ele3 = document.getElementsByName("agree3");

    for (i=0;i<ele3.length;i++)
    {
        if(ele3[i].checked)
        {
             v3=ele3[i].value
           console.log(ele3[i].value);

         }
    }

    var ele4 = document.getElementsByName("agree4");

    for (i=0;i<ele4.length;i++)
    {
        if(ele4[i].checked)
        {
          v4=ele4[i].value
          console.log(ele4[i].value);

         }
    }
    
    var ele5 = document.getElementsByName("agree5");

    for (i=0;i<ele5.length;i++)
    {
        if(ele5[i].checked)
        {
           v5=ele5[i].value
          console.log(ele5[i].value);

         }
    }

    var ele6 = document.getElementsByName("agree6");

    for (i=0;i<ele6.length;i++)
    {
        if(ele6[i].checked)
        {
             v6=ele6[i].value
            console.log(ele6[i].value);

         }
    }

    var ele7 = document.getElementsByName("agree7");

    for (i=0;i<ele7.length;i++)
    {
        if(ele7[i].checked)
        {
             v7=ele7[i].value
            console.log(ele7[i].value);

         }
    }

    var ele8 = document.getElementsByName("agree8");

    for (i=0;i<ele8.length;i++)
    {
        if(ele8[i].checked)
        {
           v8=ele8[i].value
           console.log(ele8[i].value);

         }
    }

    var fq9 = document.getElementsByName("agree9");

    for (i=0;i<fq9.length;i++)
    {
        if(fq9[i].checked)
        {
           v9=fq9[i].value
           console.log(fq9[i].value);

         }
    }

    var ele10 = document.getElementsByName("agree10");

    for (i=0;i<ele10.length;i++)
    {
        if(ele10[i].checked)
        {
            v10=ele10[i].value
            console.log(ele10[i].value);

         }
    }

    var ele11 = document.getElementsByName("agree11");

    for (i=0;i<ele11.length;i++)
    {
        if(ele11[i].checked)
        {
            v11=(ele11[i].value);
            console.log(ele11[i].value);

         }
    }

    var ele12 = document.getElementsByName("agree12");

    for (i=0;i<ele12.length;i++)
    {
        if(ele12[i].checked)
        {
             v12=ele12[i].value
            console.log(ele12[i].value);

         }
    }

    var ele13 = document.getElementsByName("agree13");

    for (i=0;i<ele13.length;i++)
    {
        if(ele13[i].checked)
        {
             v13=ele13[i].value
             console.log(ele13[i].value);
         }
    }

    var ele14 = document.getElementsByName("agree14");

    for (i=0;i<ele14.length;i++)
    {
        if(ele14[i].checked)
        {
             v14=ele14[i].value
            console.log(ele14[i].value);
         }
    }

    var ele15 = document.getElementsByName("agree15");

    for (i=0;i<ele15.length;i++)
    {
        if(ele15[i].checked)
        {
           v15= ele15[i].value
           console.log(ele15[i].value);

         }
    }



    //1.openess
var n1= Number(v7)+Number(v8)+Number(v9);
var openness= (n1/3).toFixed(2);
console.log(openness)
   
 
//2.conscientiousness
var n2= Number(v13)+Number(v14)+Number(v15);
 conscientiousness= (n2/3).toFixed(2);
console.log(conscientiousness)

// 3.extroversion
var n3= Number(v4)+Number(v5)+Number(v6);
 extroversion= (n3/3).toFixed(2);
console.log(extroversion)

// 4.agreeableness
var n4= (Number(v10)+Number(v11)+Number(v12));
 agreeableness= (n4/3).toFixed(2);
console.log(agreeableness)

//5. neuroticism
var n5= (Number(v1)+Number(v2)+Number(v3));
neuroticism=( n5/3).toFixed(2);
console.log(neuroticism)

localStorage.setItem('openness',openness);
localStorage.setItem('conscientiousness',conscientiousness);
localStorage.setItem('extroversion',extroversion);
localStorage.setItem('agreeableness',agreeableness);
localStorage.setItem('neuroticism',neuroticism);



}

//behaviour traits
function checktraits()
{
var fq1 = document.getElementsByName("frequently1");

for (i=0;i<fq1.length;i++)
{
    if(fq1[i].checked)
    {
        va1=fq1[i].value
        console.log(fq1[i].value);

     }
}

var fq2 = document.getElementsByName("frequently2");

for (i=0;i<fq2.length;i++)
{
    if(fq2[i].checked)
    {
       va2=fq2[i].value
       console.log(fq2[i].value);

     }
}

var fq3 = document.getElementsByName("frequently3");

for (i=0;i<fq3.length;i++)
{
    if(fq3[i].checked)
    {
        va3=fq3[i].value
       console.log(fq3[i].value);

     }
}

var fq4 = document.getElementsByName("frequently4");

for (i=0;i<fq4.length;i++)
{
    if(fq4[i].checked)
    {
      va4=fq4[i].value
      console.log(fq4[i].value);

     }
}

var fq5 = document.getElementsByName("frequently5");

for (i=0;i<fq5.length;i++)
{
    if(fq5[i].checked)
    {
      va5=fq5[i].value
      console.log(fq5[i].value);

     }
}

var fq6 = document.getElementsByName("frequently6");

for (i=0;i<fq6.length;i++)
{
    if(fq6[i].checked)
    {
        va6=fq6[i].value
        console.log(fq6[i].value);

     }
}

var fq7 = document.getElementsByName("frequently7");

for (i=0;i<fq7.length;i++)
{
    if(fq7[i].checked)
    {
        va7=fq7[i].value
        console.log(fq7[i].value);

     }
}

var fq8 = document.getElementsByName("frequently8");

for (i=0;i<fq8.length;i++)
{
    if(fq8[i].checked)
    {
        va8=fq8[i].value
       console.log(fq8[i].value);

     }
}

var fq9 = document.getElementsByName("frequently9");

for (i=0;i<fq9.length;i++)
{
    if(fq9[i].checked)
    {
       va9=fq9[i].value
       console.log(fq9[i].value);

     }
}

var fq10 = document.getElementsByName("frequently10");

for (i=0;i<fq10.length;i++)
{
    if(fq10[i].checked)
    {
        va10=fq10[i].value
        console.log(fq10[i].value);

     }
}

var fq11 = document.getElementsByName("frequently11");

for (i=0;i<fq11.length;i++)
{
    if(fq11[i].checked)
    {
         va11=(fq11[i].value);
        console.log(fq11[i].value);

     }
}

var fq12 = document.getElementsByName("frequently12");

for (i=0;i<fq12.length;i++)
{
    if(fq12[i].checked)
    {
        va12=fq12[i].value
        console.log(fq12[i].value);

     }
}

var fq13 = document.getElementsByName("frequently13");

for (i=0;i<fq13.length;i++)
{
    if(fq13[i].checked)
    {
         va13=fq13[i].value
         console.log(fq13[i].value);
     }
}

var fq14 = document.getElementsByName("frequently14");

for (i=0;i<fq14.length;i++)
{
    if(fq14[i].checked)
    {
         va14=fq14[i].value
        console.log(fq14[i].value);
     }
}

var fq15 = document.getElementsByName("frequently15");

for (i=0;i<fq15.length;i++)
{
    if(fq15[i].checked)
    {
        va15= fq15[i].value
       console.log(fq15[i].value);

     }
}

var fq16 = document.getElementsByName("frequently16");

for (i=0;i<fq16.length;i++)
{
    if(fq16[i].checked)
    {
        va16=fq16[i].value
        console.log(fq16[i].value);

     }
}

var fq17 = document.getElementsByName("frequently17");

for (i=0;i<fq17.length;i++)
{
    if(fq17[i].checked)
    {
         va17=(fq17[i].value);
        console.log(fq17[i].value);

     }
}

var fq18 = document.getElementsByName("frequently18");

for (i=0;i<fq18.length;i++)
{
    if(fq18[i].checked)
    {
         va18=fq18[i].value
        console.log(fq18[i].value);

     }
}

var fq19 = document.getElementsByName("frequently19");

for (i=0;i<fq19.length;i++)
{
    if(fq19[i].checked)
    {
         va19=fq19[i].value
         console.log(fq19[i].value);
     }
}

var fq20 = document.getElementsByName("frequently20");

for (i=0;i<fq20.length;i++)
{
    if(fq20[i].checked)
    {
        va20=fq20[i].value
        console.log(fq20[i].value);
     }
}

var fq21 = document.getElementsByName("frequently21");

for (i=0;i<fq21.length;i++)
{
    if(fq21[i].checked)
    {
       va21= fq21[i].value
       console.log(fq21[i].value);

     }
}





// 6. anxietybasedperformancedeficits
var n6= (Number(va1)+Number(va4)+Number(va5)+Number(va6)+Number(va9)+Number(va14)+Number(va21));
 anxietybasedperformancedeficits= (n6/7).toFixed(2);
console.log(anxietybasedperformancedeficits);

// 7. exaggeratedsafetybehavior
var n7= (Number(va3)+Number(va11)+Number(va12)+Number(va8)+Number(va13)+Number(va16)+Number(va19));
 exaggeratedsafetybehavior= (n7/7).toFixed(2);
console.log(exaggeratedsafetybehavior);

//8. hostilebehaviors
var n8= (Number(va2)+Number(va7)+Number(va10)+Number(va15)+Number(va17)+Number(va18)+Number(va20));
 hostilebehaviors= (n8/7).toFixed(2);
console.log(hostilebehaviors);

localStorage.setItem('anxietybasedperformancedeficits',anxietybasedperformancedeficits);
localStorage.setItem('exaggeratedsafetybehavior',exaggeratedsafetybehavior);
localStorage.setItem('hostilebehaviors',hostilebehaviors);



} 


// function valueset1()
// {
//     window.location.href =("main_int.html");
    
//     const openness = localStorage.getItem('openness');
//     const hostilebehaviors = localStorage.getItem('hostilebehaviors');

    

// document.getElementsByName("openness").value=openness;
// document.getElementsByName("conscientiousness").value=conscientiousness;
// document.getElementsByName("extroversion").value=extroversion;
// document.getElementsByName("agreeableness").value=agreeableness;
// document.getElementsByName("neuroticism").value=neuroticism;
// document.getElementsByName("anxietybasedperformancedeficits").value=anxietybasedperformancedeficits;
// document.getElementsByName("exaggeratedsafetybehavior").value=exaggeratedsafetybehavior;
// document.getElementsByName("hostilebehaviors").value=hostilebehaviors;
// console.log(openness)
// console.log(conscientiousness)
// console.log(extroversion)
// console.log(agreeableness)
// console.log(neuroticism)
// console.log(anxietybasedperformancedeficits)
// console.log(exaggeratedsafetybehavior)
// console.log(hostilebehaviors)
// }





