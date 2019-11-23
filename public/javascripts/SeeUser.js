let table_body = document.getElementById('table_body');
let marca = document.getElementById('marca')
let modelo = document.getElementById('Modelo')
let memoria = document.getElementById('Memoria')
let precio = document.getElementById('Precop')
let tipo = document.getElementById('tipo')
let so = document.getElementById('sistema_operativo')
/*let borrar;

borrar.addEventListener('click', async event=>{
    event.preventDefault();
    
    await fetch(`http://localhost:3000/computers/${modelo.value}`,
    {
        method: 'PUT',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({
            Marca: marca.value,
            Modelo: modelo.value,
            Memoria: memoria.value,
            precio: precio.value,
            tipo: tipo.value,
            Sistema_Operativo: so.value  
        })
    })
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        console.log(data);
        data.map((object,index)=>{
             marca.value= object.Marca
             userPass.value= object.Modelo
             memoria.value= object.Memoria
             precio.value= object.precio
             tipo.value= object.tipo
             so.valu= object.Sistema_Operativo
            
        })
    })
    .catch(err=>{
        console.log(err);
    });
});
*/


editBtn.addEventListener('click', async event=>{
    event.preventDefault();
    

    await fetch(`http://localhost:3000/computers/${modelo.value}`,
    {
        method: 'DELETE',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({
            Marca: marca.value,
            Modelo: modelo.value,
            Memoria: memoria.value,
            precio: precio.value,
            tipo: tipo.value,
            Sistema_Operativo: so.value  
        })
    })
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    });
});

document.addEventListener('DOMContentLoaded', async()=>{
    await fetch('http://localhost:3000/computers')
    .then(res => {
        //console.log(res);
        
        return res.json()
        
        
  })
    
  .then(data=>{
      //console.log(data[0].Modelo)
      //console.log(data);
      
      let new_row;
  
      for (let i = 0; i < data.length; i++) {
        new_row = document.createElement('tr');
        new_row.innerHTML =  
            `<th class='align-middle' scope = 'row'>
                <a href='users/show' class='a-modal' data-toggle='modal' data-target='#exampleModalCenter'>${data[i].Modelo}</a>
            </th>
            <td class='align-middle'>${data[i].Marca}</td>
            <td class='align-middle'>${data[i].Memoria}</td>
            <td class='align-middle'>${data[i].precio}</td>
            <td class='align-middle'>${data[i].tipo}</td>
            <td class='align-middle'>${data[i].Sistema_Operativo}</td>
            <td class='align-middle' style='color: red'>
            
            a( href="/computers/${data[i].modelo}" class="btn btn-primary" id='delete')='Actualizar'
   
            
            </td>`;  
        table_body.appendChild(new_row);
      }
  })

})