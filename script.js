
const inputBoxes = document.getElementsByClassName('box');
for (const inputBox of inputBoxes) {
    inputBox.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        // Get the index of the current input box
       const currentIndex = Array.from(inputBoxes).indexOf(inputBox);
  
        // Calculate the index of the next input box
        const nextIndex = (currentIndex + 1) % inputBoxes.length;
  
        // Focus on the next input box
        inputBoxes[nextIndex].focus(); 
    
      }
    });
  }

  const inputBoxes2 = document.getElementsByClassName('box');

// Add event listeners to each input box for restricting input to single digits
for (const inputBox2 of inputBoxes) {
  inputBox2.addEventListener('input', function(event) {
    const enteredValue = event.target.value;
    const digit = parseInt(enteredValue);
    if (isNaN(digit) || digit < 1 || digit > 9) {
        // If the entered value is not a single-digit number, clear the input box
        event.target.value = '';
      } else {
        // If the entered value is a single-digit number, keep only the first digit
        event.target.value = digit;
      }
    });
  
    // Add a maxlength attribute to limit the input length to 1 character
    inputBox2.setAttribute('maxlength', '1');
  }


  
let arr=[  
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
];

  


function sudkosolverfunction()
{

   


    for(let i=0;i<9;i++)
    {
        for ( let j=0;j<9;j++)
        {
            let str1=""+i+""+j;
            let sid=document.getElementById(str1).value;
            if(sid=="")
            {
                //sudokuBoard[i][j]=0;
                arr[i][j]=0;
            }
            else
            {
                //sudokuBoard[i][j]=Number(sid);
                arr[i][j]=Number(sid);
            }
        }
    }
solver(0,0,9)
} 

function canplace(i,j,n)
{
  
    //horizontal 
    for(let m=0;m<9;m++)
    {
        if(arr[i][m]==n)
        {
            return false;
        }
    }


    //vertical check 

    for(let xx=0;xx<9;xx++)
    {
        if(arr[xx][j]==n)
        {   
            
            debugger;
            return false;
        }
    }

    

    let si=Math.floor(i/3)*3;
    let sj=Math.floor(j/3)*3;

    for (let l = si; l < si + 3; l++)
     {
        for (let m = sj; m < sj + 3; m++) {
            if (arr[l][m] == n)
             {
                return false;
            }
        }
     }
     

     return true;
    
}

function solver(i,j,num)
{
    ///console.log("hitt",i,j,num,arr);
    //base case
    if(i==num)
    {
        console.log("final case");
        for(let l=0;l<9;l++)
        {
            for(let m=0;m<9;m++)
            {
                let sid=""+l+""+m;
                document.getElementById(sid).value=arr[l][m];
            }
        }

        return true;
    }
    //rec case
    if(j==num)
    {
        ///console.log("j==num",i)
        //console.log(arr);
        return solver(i+1,0,num);
    }

    if(arr[i][j]!=0)
    {
       return solver(i,j+1,num);
    }

    else
    {
        for(let n=1;n<=num;n++)
        {
            if(canplace(i,j,n)==true)
            {
            
                //console.log("====",n,"======");
                arr[i][j]=n;
                let sid=""+i+""+j;
                document.getElementById(sid).value=arr[i][j];
                ///console.log("YESSS",i,j,arr)
                
                let ans=solver(i,j+1,num);
                if(ans==true)
                {
                    return true;
                }
                else{

                   arr[i][j]=0;
                }
            }
        }

        return false;
    }

}


