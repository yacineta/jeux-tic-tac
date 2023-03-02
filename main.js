let titel = document.querySelector('.titel');
let turn ='X';
let square = [];
function end(num1,num2,num3)
{
    titel.innerHTML = `${square[num1]} winner`;
    document.getElementById('item'+num1).Style.background = '#000';
    document.getElementById('item'+num2).Style.background = '#000';
    document.getElementById('item'+num3).Style.background = '#000';
    setInterval(function(){titel.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000)

}
function winnner(){
    for(let i =1; i<10;i++){
       square[i] = document.getElementById('item ' + i).innerHTML;
    }
    if(square[1] == square[2] && square [2] == square[3] && square[1] != '')
    {
       end(1,2,3)
    }
    else if(square[4] == square[5] && square [5] == square[6] && square[5] != '' )
    {
        end(4,5,6)

    }
    else if(square[7] == square[8] && square [8] == square[9] && square[8] != '')
    {
        end(7,8,9)

    }
    else if(square[1] == square[4] && square [4] == square[7] && square[1] != '')
    {
        end(1,4,7)

    }
    else if(square[2] == square[5] && square [5] == square[8] && square[2] != '')
    {
        end(2,5,8)

    }
    else if(square[3] == square[6] && square [6] == square[9] && square[9] != '')
    {
        end(3,6,9)

    }
    else if(square[1] == square[5] && square [5] == square[9] && square[1] != '')
    {
        end(1,5,9)

    }
    else if(square[3] == square[5] && square [5] == square[7] && square[7] != '')
    {
        end(3,5,7)

    }

}

function game(id)
{   
    let  element = document. getElementById(id);
    if(turn === 'X' && element.innerHTML == (''))
    {
        element.innerHTML = 'X';
        turn ='O';
        titel.innerHTML = 'O';
    }
    else if(turn ==='O'&& element.innerHTML == ('')){
        element.innerHTML = 'O';
        turn ='X';
        titel.innerHTML = 'O';
    }
    winnner();
}
