  var set = ['Best of Footwears' , 'quality new sneakers', 'Affordable prices'];
var set1 = ['white' , 'white' , 'white']

var i = 0;

function word() {
    i++;

    if (i >= set.length) {
        i = 0;
        
      
    }
   // console.log(i)
    document.querySelector('.heading2').textContent = set[i]
    document.querySelector('.heading2').style.color = set1[i]
}

setInterval(word, 2500);



var v = 0;

var wiz = ['dead-'+ v]

function aaa() {
    v++;
    if (v >= 2) {
        v = 0
    }
  //  console.log(wiz)

    
    
    // console.log(v)

   // document.querySelector('.heading2').textContent = set[i]
   // document.querySelector('.heading2').style.color = set1[i]
}
var ia = 0;
document.querySelector('.back1-body-detail2').addEventListener('click' ,worda)
function worda() {
    ia++;

    if (ia >= 2) {
        ia = 0;
        
      
    }
    var wiz = ia
    console.log(wiz)
   // document.querySelector('.heading2').textContent = set[i]
   // document.querySelector('.heading2').style.color = set1[i]

   function seti(oo) {
       if (oo === 1) {
        
        //    html = ' <div class = "third-main-body-front1"> <div class="front1-pic">&nbsp; </div><h4 class="front1-head"> <span class="front1-head-span">air max </span> </h4><div class="front1-body"><ul class="front1-body-ul"><li>50% off</li><li>first 20 people</li><li> air amx</li><li> delivery free</li><li> AS store</li></ul></div> </div>'
             html = '<p> N250,000 </p>'
             htt =  '  linear-gradient(to right bottom, #ffa600, #ff4f30),  url(img/IMG_20201223_171730_1612267450875.jpg)'
            document.querySelector('.back1-body-detail2').innerHTML = html;
          //  document.querySelector('.back1-body-detail2').style.backgroundColor = 'red';
          document.querySelector('.front1-pic').style.backgroundImage = htt ;


            //it working just modify it.


       } else if(oo === 0) {
        document.querySelector('.back1-body-detail2').innerHTML = '$350';
           ht = '  linear-gradient(to right bottom, #ffa600, #ff4f30), url(img/IMG_20210427_013010.jpg)'
        document.querySelector('.front1-pic').style.backgroundImage = ht ;
       }
   }
   seti(wiz)
}
//setInterval(worda, 2500);

// no say put seti inside the function
// now say if wiz === dead-1 run this in our html
// if wiz ===  dead=0 run this one im our html

/*
document.querySelector('.third-main-body-front1').addEventListener('mousedown' , seti)


function seti(a) {
    if (a === dead-[v]) {
            html = ' <div class = "third-main-body-front1"> <div class="front1-pic">&nbsp; </div><h4 class="front1-head"> <span class="front1-head-span">air max </span> </h4><div class="front1-body"><ul class="front1-body-ul"><li>50% off</li><li>first 20 people</li><li> air amx</li><li> delivery free</li><li> AS store</li></ul></div> </div>'
            document.querySelector('.third-main-body-front1').innerHTML = html

} 


}
*/
/*

function word1() {
    var work = ['img//IMG_20210427_012957.jpg' , 'img//IMG_20210427_013010.jpg' , 'img//IMG_20210427_013016.jpg'];


    var dom = {
        img1: '.col-1-of-2__photo col-1-of-2__photo--1',
        img2 : '.col-1-of-2__photo col-1-of-2__photo--2',
        img3: '.col-1-of-2__photo col-1-of-2__photo--3',
    }

    var imgs = document.querySelectorAll(dom.img1 + ',' + dom.img2 + ',' + dom.img3);
   
var h = Array.from(imgs);
//console.log(h)
h.map((cur, inx) => {
     cur[0].src = work[1];
     cur[1].src = work[2];
     cur[2] = work[0]
})

}
 

setInterval(word1 , 2500)



const a = new Promise((resolve, reject) => {
    setTimeout(() => {
          resolve ('wayne world')
    }, 2000)
});

const b = set1 => {
    return new Promise((resolve, reject) => {
        setTimeout((t) => {
        resolve(t)
        }, 2000, set1)
    })
};

const c = set2 => {
    return new Promise((resolve, reject) => {
        setTimeout((O) => {
           const a = {
               name: 'seyi',
               age: 20,
           }

        resolve(`${a.name} is niceeee and ${a.age} is okayyy`);
        }, 1500, set2);
       

    })
}




var arr = [200, 300, 400, 500]

a.then(s => {
    console.log(s);
    return b(arr)
})
.then(s => {
    
        console.log(`${s} are numbers`)
   
    return c('boy')
})
.then(dd => {
    console.log(dd)
}
*/


const prom = set1 => {
     return new Promise((resolve, reject) => {
        setTimeout((arr1) => {
           
            resolve(arr1)
            
        }, 2000, set1 );
    })

};
//var arr1 = ['img//IMG_20210427_012957.jpg' , 'img//IMG_20210427_013010.jpg' , 'img//IMG_20210427_013016.jpg']



const prom1 = set2 => {
    return new Promise((resolve, reject) => {
        setTimeout((arr1) => {
                resolve(arr1)
        } , 2000, set2)
    })
};

const prom2 = set3 => {
    return new Promise((resolve, reject) => {
        setTimeout((arr1) => {
             resolve(arr1)
        }, 2000, set3)
    })
}





//setInterval('word()', 2000)

var arr1 = ['img//IMG_20210427_012957.jpg' , 'img//IMG_20210427_013010.jpg' , 'img//IMG_20210427_013016.jpg']


function reset() {
    prom(arr1).then(s => {
        document.querySelector('.col-1-of-2__photo--1').src = s[1];
        document.querySelector('.col-1-of-2__photo--2').src = s[0];
        
        return prom1(arr1)
    })
    .then(s => {
       document.querySelector('.col-1-of-2__photo--3').src = s[0];
        document.querySelector('.col-1-of-2__photo--1').src = s[2];
        document.querySelector('.col-1-of-2__photo--2').src = s[1];
        return prom(arr1)
        
       
        
    })
    .then(s => {
        document.querySelector('.col-1-of-2__photo--3').src = s[1];
        document.querySelector('.col-1-of-2__photo--1').src = s[0];
        document.querySelector('.col-1-of-2__photo--2').src = s[2];
       
        
    })
    

}

setInterval(reset() , 3000)
    


