fetch("http://fakestoreapi.com/products").then((data)=>{
    console.log(data);
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
     objectData.map((values)=>{
        tableData+=`       
    <tr>
        <td scope="row">${values.id}</th>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td> <img src="${values.image}"/></td>
    </tr>`
     });
     document.getElementById("table-body").innerHTML=tableData;
})