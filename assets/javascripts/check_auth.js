var bb= localStorage.getItem('username');

   if(bb == null)
    {
      
      window.location='index.html';
    }

    else{

      
       document.getElementById("view").innerHTML=bb;


    }


    function logout(){

      localStorage.removeItem('username');
      window.location='index.html';

    }