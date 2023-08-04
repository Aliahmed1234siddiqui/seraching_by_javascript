let arr = [
    {
        photo:"https://images.priceoye.pk/samsung-galaxy-a30-pakistan-priceoye-nlx5w-270x270.webp",
        brand: "Samsung",
        model: "Samsung A30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        photo:"https://images.priceoye.pk/samsung-galaxy-a10-pakistan-priceoye-ytubo.jpg",
        brand: "Samsung",
        model: "Samsung A10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb"
    },
    {
        photo:"https://images.priceoye.pk/samsung-galaxy-a20-pakistan-priceoye-udsf3.jpg",
        brand: "Samsung",
        model: "Samsung A20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb"
    },
    {
        photo:"https://images.priceoye.pk/vivo-y20-pakistan-priceoye-2udrs-270x270.webp",
        brand: "Vivo",
        model: "vivo Y20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb"
    },
    {
        photo:"https://www.purchase.com.pk/wp-content/uploads/2022/01/vivo-y11.jpg",
        brand: "Vivo",
        model: "vivo Y11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb"
    },
    {
        photo:"https://phoneaqua.com/products/vivo-y15-Price.webp",
       brand: "Vivo",
        model: "vivo Y15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb"
    },
    {
photo:"https://www.poeticcases.com/cdn/shop/products/stylus5gblue.jpg?v=1627607299&width=1445",
        brand: "Motorola",
        model: "MOTO G STYLUS 5",
        price: "30000",
        camera: "2px",
        ram: "4gb",
        rom : "128gb"
    },
    {
        photo:"https://i5.walmartimages.com/asr/85b06bc7-f3bf-4461-aba1-3f36b98fe097.1987ec5ead0e6d0acd2cdfb1f17d65a0.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
        brand: "Motorola",
        model: "MOTO G30",
        price: "30000",
        camera: "2px",
        ram: "4gb",
        rom : "128gb"
    },
    {
photo:"https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg",
        brand: "Iphone",
        model: "Iphone 12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        photo:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large.jpg",
        brand: "Iphone",
        model: "Iphone 13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        photo:"https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_glass_big.jpg.large.jpg",
        brand: "Iphone",
        model: "Iphone X",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
];

let main = document.getElementById("main");
main.innerHTML="";


  

function iphone(data){
console.log(data)

arr.filter((x)=>{
    if(x.model == data){
            console.log(x);
            main.innerHTML +=`
            <h1 class="head">${x.model}</h1>
            <div class="row">
            <div class="img col-md-6 col-sm-12">
                
                <img width="80% " height="100%" src="${x.photo}"  alt="">
            </div>
            
            <div  class="text col-md-6 col-sm-12">
                
            <ul class="list">
                <li class="li">CAMRA : ${x.camera}</li>
                <li class="li">ROM : ${x.rom}</li>
                <li class="li">PRICE : ${x.price}</li>
                <li class="li">RAM : ${x.ram}</li>

            </ul>
            
            </div>
            </div>
            
            `;
    }
   
});


}

 
function samsang(data){
    console.log(data)
    
arr.filter((x)=>{
    
    if(x.model == data){
        
            console.log(x);
            main.innerHTML +=`
            <h1 class="head">${x.model}</h1>
            <div class="row">
            <div class="img col-md-6 col-sm-12">
                
                <img width="80% " height="100%" src="${x.photo}"  alt="">
            </div>
            
            <div  class="text col-md-6 col-sm-12">
                
            <ul class="list">
                <li class="li">CAMRA : ${x.camera}</li>
                <li class="li">ROM : ${x.rom}</li>
                <li class="li">PRICE : ${x.price}</li>
                <li class="li">RAM : ${x.ram}</li>

            </ul>
            
            </div>
            </div>
            
            `;
    }
   
});
    }
function moto(data){
    console.log(data)
    
arr.filter((x)=>{
    
    if(x.model == data){
        
            console.log(x);

            main.innerHTML +=`
            <h1 class="head">${x.model}</h1>
            <div class="row">
            <div class="img col-12 col-md-6">
                
                <img width="100% " height="100%" src="${x.photo}"  alt="">
            </div>
            
            <div  class="text col-12 col-md-6">
                
            <ul class="list">
                <li class="li">CAMRA : ${x.camera}</li>
                <li class="li">ROM : ${x.rom}</li>
                <li class="li">PRICE : ${x.price}</li>
                <li class="li">RAM : ${x.ram}</li>

            </ul>
            
            </div>
            </div>
            
            `;
        

    }
    
});
    }
    

  function vivo(data){
    console.log(data);
    
arr.filter((x)=>{
    if(x.model == data){
            console.log(x);
            main.innerHTML +=`
            <h1 class="head">${x.model}</h1>
            <div class="row">
            <div class="img col-md-6 col-sm-12">
                
                <img width="80% " height="100%" src="${x.photo}"  alt="">
            </div>
            
            <div  class="text col-md-6 col-sm-12">
                
            <ul class="list">
                <li class="li">CAMRA : ${x.camera}</li>
                <li class="li">ROM : ${x.rom}</li>
                <li class="li">PRICE : ${x.price}</li>
                <li class="li">RAM : ${x.ram}</li>

            </ul>
            
            </div>
            </div>
            
            `;
    }
  
});
  }  



