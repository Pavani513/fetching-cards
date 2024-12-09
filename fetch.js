async function getData(){
    const data=await fetch("https://fakestoreapi.com/products").then(res=>res.json())
    console.log(data);
    
    let colors=["orangered","skyblue","pink","lightgreen","grey","red","skyblue","pink","lightgreen","grey","red","skyblue","pink","lightgreen","grey","orangered","skyblue","pink","lightgreen","grey"]
    let k=0
    for(i=0; i<data.length; i++){
    const box=document.createElement("div")
     box.innerHTML=`<img src= "${data[i].image}" width=200 height=200/> <p>${data[i].title}</p> <span>${data[i].price}</span>`
     console.log(box)
     box.style.backgroundColor=colors[k]
     box.style.width="300px"
     box.style.display="flex"
      box.style.flexDirection="column"
     box.style.justifyContent="center"
     box.style.alignItems="center"
      box.style.padding="20px"
      box.style.margin="10px"
      document.body.style.display="flex"
      document.body.style.flexWrap="wrap"
      document.body.style.justifyContent="center"
     document.body.appendChild(box)

     k++
    }
  
   
}
getData()