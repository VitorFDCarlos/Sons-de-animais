function startClassification() 
{ 
    navigator.mediaDevices.getUserMedia({ audio: true}); 
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mM_W_b-m7/model.json','https://teachablemachine.withgoogle.com/models/RsFPp77nA/', modelReady); 
}

function modelReady()
{ 
    classifier.classify( gotResults); 
}

var dog = 0; 
var cat = 0;

function gotResults(error, results) 
{ 
    if (error) 
    { 
        console.error(error); 
    } else 
    {
        console.log(results); 
        random_number_r = Math.floor(Math.random() * 255) + 1; 
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Som detectado de - '+ results[0].label; 
        document.getElementById("result_confidence").innerHTML = 'Cachorro detectado - '+dog+ ' Gato detectado - '+cat; 
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; 
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; 
        img = document.getElementById('animal_image');

        if (results[0].label == "Latido") 
        { 
            img_cachorro.src = 'cachorro.gif';
            img_gato.src= 'gato.jpg';
            img_leao.src = 'leao.png';
            img_vaca.src = 'vaca.png';
            dog = dog + 1;
        } else if (results[0].label == "Miado") 
        { 
            img_gato.src = 'gato.gif';
            img_cachorro.src= 'cachorro.jpg';
            img_leao.src = 'leao.png';
            img_vaca.src = 'vaca.png'; 
            cat = cat + 1; 
        }
        else if(results[0].label== "Rugido")
        {
            img_leao.src = 'leao.gif';
            img_gato.src = 'gato.jpg';
            img_cachorro.src= 'cachorro.jpg';
            img_vaca.src = 'vaca.png';
        }
        else if (results[0].label == "Mugido")
        {
            img_vaca.src = 'vaca.gif';
            img_leao.src = 'leao.png';
            img_gato.src = 'gato.jpg';
            img_cachorro.src= 'cachorro.jpg';
        }
        else
        { 
            //img.src = 'listen.gif';//
            console.log(results[0].label); 
        }

    }
}