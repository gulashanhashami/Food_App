//yes
//1. get data fetch(url)
//appendData(data,location)
async function getData(url){
    try{
        let res=await fetch(url)
        let data=await res.json();
        return data;
    }
    catch(err){
        console.log("err:", err)
    }
}
function appendData(data, location){
    location.innerHTML="";
    data.forEach((elem)=>{
        let div=document.createElement("div");
        div.setAttribute("id","divg");
        let p=document.createElement("p");
        let img=document.createElement("img");
        img.src=elem.strMealThumb;
        p.innerText=elem.strMeal;
        div.append(img,p);
        location.append(div);
       div.addEventListener("click",function(){
        redetails(elem);
       })
    })
}
function redetails(res){
    // console.log("here")
    console.log("details:", res)
    localStorage.setItem("receipeD", JSON.stringify(res));
    window.location.href= "reDetails.html";
  }
export {getData,appendData};