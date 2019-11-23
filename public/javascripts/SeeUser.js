let table_body = document.getElementById('table_body');

document.addEventListener('DOMContentLoaded', async()=>{
    await fetch('https://computersinc.herokuapp.com/computers')
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
            
            <form action="/computers/${data[i].Modelo}"  method="delete">
            <input type="submit" value="Submit">
            </form> 
   
            
            </td>`;  
        table_body.appendChild(new_row);
      }
  })
})