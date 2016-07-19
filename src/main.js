


var folders = 
      {
        type: 'dir',
        name: 'app',
        children: [
          {
            type: 'file',
            name: 'index.html'
          },
          {
            type: 'dir',
            name: 'js',
            children: [
              {
                type: 'file',
                name: 'main.js'
              },
              {
                type: 'file',
                name: 'app.js'
              },
              {
                type: 'file',
                name: 'misc.js'
              },
              {
                type: 'dir',
                name: 'vendor',
                children: [
                  {
                    type: 'file',
                    name: 'jquery.js'
                  },
                  {
                    type: 'file',
                    name: 'underscore.js'
                  }
                ]
              }
            ]
          },
          {
            type: 'dir',
            name: 'css',
            children: [
              {
                type: 'file',
                name: 'reset.css'
              },
              {
                type: 'file',
                name: 'main.css'
              }
            ]
          }
        ]
      }

function tree(data ) {
   var arr = "<ul class='folder-container'>";

  for (var key in data) {
    if (typeof(data[key]) == 'object' && data[key] != null) {
      arr += "<li class='folder-wrapper'><ul class='folder-container>'>"+ tree(data[key])+"</ul></li>";
      arr += '</li>';
    } else {
      if (key==='name' && data['type']!=='dir')
        arr += ("<li class='file-item'>" + ' &quot;' + data[key] + '&quot;</li>' );
      else if (data[key] === 'dir')
        arr += "<li class='folder-item'>" + data['name'] + "</li>";
    }
  };

   arr += '</ul >';
  return( arr );
}

document.getElementById('myDiv').innerHTML=tree(folders);






// var input = document.getElementById("input");
// input.onkeyup = function () {
//   var res=[];
//   var list = document.getElementsByTagName('li');
//   console.log(list);
//
//
//   for (var i = 0; i < list.length; i++) {
//     if (list[i].textContent.indexOf(input.value) < 0) {
//       list[i].style.display = 'none';
//       //list[i+1].style.display = 'list-item';
//     }
//   }
// }
//










