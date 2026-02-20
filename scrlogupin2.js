var supabase = supabase.createClient("https://fskwgijqhbwpqijzsidm.supabase.co","sb_publishable_tTV61XxWLkQB_jf1j2SF_Q_BdFtCMFJ");

  const LIMIT = 5;
  let page = 1;
  let editingId = null;
 let lastState = null;
 
  activeCard: "card1";
  profileOpen: true;


    var containerprof = document.getElementById( "profile");
  







const STATE_KEY = "pageState";

/* ---------- LOAD STATE ON PAGE LOAD ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const savedState = localStorage.getItem(STATE_KEY);
  if (savedState) {
    applyState(JSON.parse(savedState));
  }
});

/* ---------- CURRENT STATE ---------- */
function getCurrentState() {
  const card1 = document.getElementById("card1");
  return {
    activeCard: card1.classList.contains("card-top") ? "card1" : "card2"
  };
}

/* ---------- SAVE STATE ---------- */
function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify(getCurrentState()));
}

/* ---------- APPLY STATE ---------- */
function applyState(state) {
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");

  if (state.activeCard === "card1") {
    card1.className = "card card-top";
    card2.className = "card card-bottom";
  } else {
    card1.className = "card card-bottom";
    card2.className = "card card-top";
  }
}

/* ---------- ACTIONS ---------- */
let previousState = null;

function swapCards() {
  previousState = getCurrentState();

  document.getElementById("card1").classList.toggle("card-top");
  document.getElementById("card1").classList.toggle("card-bottom");

  document.getElementById("card2").classList.toggle("card-top");
  document.getElementById("card2").classList.toggle("card-bottom");

  saveState();
}

function restorePrevious() {
  if (!previousState) return;
  applyState(previousState);
  saveState();
}






  function logout(){
  const lastState = null;  
    document.getElementById("profileCard").classList.toggle("hidden"); 

  containerprof.innerHTML=``;
  resetall();
    window.location.reload();

  }


  async function loadapplications() {
    const search = document.getElementById("search").value;
    const from = (page - 1) * LIMIT;
    const to = from + LIMIT - 1;

    const query = supabase
    .from('stayin2').select()
    .range(from, to)
    .order('created_at', { ascending: false });

// Use it with `maybeSingle` or `single`
    if (search) {
      query = query.ilike("name", `%${search}%`);
    }
const { data, error, count } = await query;

     const container7 = document.getElementById("moviesList");
    const pageInfo = document.getElementById("pageInfo");
        var lastState = {
    c1: document.getElementById("profile"),
 c2: blockA,
 c3: blockB,
  };

    if (error) {
      container7.innerHTML = "Error loading movies";
      console.error(error);
      return;
    }

    container7.innerHTML = "";

    if (!data.length) {
      container7.innerHTML = "No movies found.";
   
      return;
    }

    data.forEach( application => {
     
      const div = document.createElement("div");
      div.className = "application";
      div.innerHTML = `<strong>${application.name ?? "(No name)"}</strong><br/><small>Created: ${new Date(application.created_at).toLocaleString()}</small><div class="actions"><button onclick='editMovie(${application.id}, ${JSON.stringify(application.name)}, ${JSON.stringify(application.email)}, ${JSON.stringify(application.pwd1)}) '>Edit</button><button onclick="deleteMovie(${application.id})">Delete</button></div>`;
      container7.appendChild(div);
    });

    pageInfo.textContent =`Page ${page} of ${Math.ceil(count / LIMIT)}`;
 
  }

function resetall(){

  
       var c1 = document.getElementById("container");
   var c2 = document.getElementById("container2"); 
   var c3 = document.getElementById("profile");
    if (lastState){remake();
    var lastState = {
    c1: c1.id,
 c2: c2.id,
 c3: c3.innerHTML,
  }; 
 
  if(blockA.id== "container" && blockB.id== "container2"){
      c1.id="container";
      c2.id="container2";
      alert( c1+" "+ c2);
  }else if(blockA.id== "container2" && blockB.id== "container"){
 c1.id="container2";
      c2.id="container";
         alert( c1+" "+ c2);
  } 
 
  if(document.getElementById("profile").innerHTML==''){ c3.innerHTML='';}else{ containerprof.innerHTML=`<!-- USER BUTTON --><div class="user-bar"><button class="user-btn" onclick="toggleProfile()"><div class="avatar">👤</div><span id="userName">User: ${nameb} </span></button></div><!-- USER PROFILE PANEL --><div class="profile-card hidden" id="profileCard"><h2>User Profile</h2><div class="profile-row"><span class="label">Email: ${emailb}</span><span id="profileEmail"></span></div><div class="profile-row"><span class="label">name: ${nameb}</span><span id="profileProvider"></span></div><div class="profile-actions"><button onclick="logout()">Logout</button><button class="ghost" onclick="toggleProfile()">Close</button></div></div>`}


}
}
function remake(){
  if (!lastState) return;
  if( c1.id=="container" && c2.id=="container2"){
     blockB.innerHTML='<div class="overlay-container"><div class="overlay"><div class="overlay-panel overlay-left"><h2>Welcome back</h2><p>To keep connected with us please ligin with your info.</p><button id="signIn2" class="ghost"  onclick="submitForm2()">Sign In</button></div></div></div>';
  blockA.innerHTML='<div class="form-container sign-up-container"><form id="contactForm" onsubmit="submitForm(event), submitFormdata(event)"><h2>Create account</h2><div class="social-container"><a href="#" class="social"><img id="iga1" src="facebook.svg"></a><!--class="fa-brands fa-facebook"--><a href="#" class="social"><img id="iga2" src="google.svg"  ></a> <!--class="fa-brands fa-google" --><a href="#" class="social"><img id="iga3" src="linkedin.svg"  ></a> <!--class="fa-brands fa-linkedin"--></div><span>or use your email</span><div class="form-group"><img src="user.svg" ><input type="text" placeholder="name" id="name" required></div><div class="form-group"><img src="envelope.svg" ><input type="email" placeholder="Email" id="email" required></div><div class="form-group"><img src="lock.svg"><input type="password" placeholder="text" id="registerPassword1" name="password" rows="1" required></div><div class="form-group"><img src="arrow-left-rotate.svg" ><input type="text" placeholder="password"  id="registerPassword2" required></div><div class="password-strength"><div class="strength-bar"></div></div><button  type="submit"  id="signUp">Sign Up</button><div id="response">  <span id="pageInfo"></span></div></form></div>';
  }else{ blockB.innerHTML='<div class="overlay-container"><div class="overlay"><div class="overlay-panel overlay-right"><h2>Hello, Friends</h2>  <p>Enter yout personal details and stat with us.</p><button id="signUp2" class="ghost"  onclick="submitForm1()">Sign Up</button></div></div></div>';  
blockA.innerHTML='<div class="form-container sign-in-container"><form id="contactForm2" onsubmit="submitFormb(event), loginapp(event)"><h2>Sign In</h2><div class="social-container"><a href="#" class="social"><img id="ig1" src="facebook.svg" ></a><!--class="fa-brands fa-facebook"--><a href="#" class="social"><img id="ig2" src="google.svg"  ></a> <!--class="fa-brands fa-google" --><a href="#" class="social"><img id="ig3" src="linkedin.svg"  ></a> <!--class="fa-brands fa-linkedin"--></div><span>or use your email</span><div class="form-group"><img src="user.svg" ><input type="text" placeholder="name" id="name2" required></div><div class="form-group"><img src="envelope.svg" ><input type="email" placeholder="Email" id="email2" required></div><div class="form-group"><img src="lock.svg" ><input type="password" placeholder="password" id="registerPassword" name="password" rows="1" required></div><a href="#">Forgot your password?</a><br><button  type="submit" id="signIn">Sign In</button><div id="response2">  <span id="pageInfo"></span></div></form></div>';
}
  if(c3.innerHTML==``){
    containerprof.innerHTML=``;
  }else{ containerprof.innerHTML=`<!-- USER BUTTON --><div class="user-bar"><button class="user-btn" onclick="toggleProfile()"><div class="avatar">👤</div><span id="userName">User: ${nameb} </span></button></div><!-- USER PROFILE PANEL --><div class="profile-card hidden" id="profileCard"><h2>User Profile</h2><div class="profile-row"><span class="label">Email: ${emailb}</span><span id="profileEmail"></span></div><div class="profile-row"><span class="label">name: ${nameb}</span><span id="profileProvider"></span></div><div class="profile-actions"><button onclick="logout()">Logout</button><button class="ghost" onclick="toggleProfile()">Close</button></div></div>`}
}

  async function loginapp(event) {
     event.preventDefault();
   var nameb = document.getElementById("name2").value || null;
   
     var emailb = document.getElementById("email2").value || null;
    
       var pwd1b = document.getElementById("registerPassword").value || null;
      var containera = document.getElementById("response2");
     

    const from = (page - 1) * LIMIT;
    const to = from + LIMIT - 1;

    const query = supabase
    .from('stayin2').select("*")
    .eq('name', nameb)
    .order('created_at', { ascending: false });

// Use it with `maybeSingle` or `single`
  
const { data, error, count } = await query;

   

    if (error) {
      containera.innerHTML = "Error loading ";
      console.error(error);
      return;
    }
 
    containera.innerHTML = "";

    if (!data.length) {
      containera.innerHTML = "No account found.";
   
      return;
    }
   

    data.forEach ( data => {
   
     if( nameb === data.name && emailb === data.email && pwd1b === data.pwd1 ){
  alert("login successful");
   containerprof.innerHTML=`<!-- USER BUTTON --><div class="user-bar"><button class="user-btn" onclick="toggleProfile()"><div class="avatar">👤</div><span id="userName">User: ${nameb} </span></button></div><!-- USER PROFILE PANEL --><div class="profile-card hidden" id="profileCard"><h2>User Profile</h2><div class="profile-row"><span class="label">Email: ${emailb}</span><span id="profileEmail"></span></div><div class="profile-row"><span class="label">name: ${nameb}</span><span id="profileProvider"></span></div><div class="profile-actions"><button onclick="logout()">Logout</button><button class="ghost" onclick="toggleProfile()">Close</button></div></div>`;
   resetall();
     resetForm();
return;
}
    });
     if(!(nameb === data.name && emailb === data.email && pwd1b === data.pwd1) ){
 alert( " login failed");
  resetall();
   }
    return;
  }


  function deleteMovie2(id) {
    if (confirm("Are you sure you want to delete this movie?")) {
      supabase
        .from("stayin2")
        .delete()
        .eq("id", id)
        .then(() => {
          loadMovies();
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  async function submitFormdata(event){
event.preventDefault();
   
   var name = document.getElementById("name").value || null;
   
     var email = document.getElementById("email").value;
    
       var pwd1 = document.getElementById("registerPassword1").value;
   
         var pwd2 = document.getElementById("registerPassword2").value;
    
   


     if (editingId) {
     supabase
     .from("stayin2")
     .update({ name, email, pwd1, pwd2 })
     .eq("id", editingId);
    } else {
      
       timestamp = new Date();
        dataView = BigInt(timestamp );

          
     const { data: stayin2, error } = await supabase
     .from("stayin2")
     .insert([{ name, email, pwd1, pwd2 },]).select();
      editingId = dataView;

    }
  
    resetForm();
    

  
  }
 

 document.getElementById("contactForm2").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name2").value || null;
     var email = document.getElementById("email2").value;
       var pwd3 = document.getElementById("registerPassword").value;
 
    

    resetForm();

  });



  function resetForm2() {
    editingId = null;
    document.getElementById("contactForm").reset();
 
    document.getElementById("signUp").textContent = "Sign Up";
  
  }
  function editMovie2(id, name, email, pwd1, pwd2) {
    editingId = id;
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("pwd1").value = pwd1;
    document.getElementById("pwd2").value = pwd2;
  }


   function editMovie(id, name, email, pwd1) {
    editingId = id;
    document.getElementById("name").value = name ?? "";
     document.getElementById("year").value = year ?? "";
  
    document.getElementById("genre").value = genre ?? "";
    document.getElementById("formTitle").textContent = "Edit Movie";
        document.getElementById("submitBtn").textContent = "Update Movie";
    document.getElementById("cancelEdit").style.display = "inline";
  }

  function resetForm() {
    editingId = null;
    document.getElementById("movieForm").reset();
    document.getElementById("formTitle").textContent = "Add Movie";
    document.getElementById("submitBtn").textContent = "Save Movie";
    document.getElementById("cancelEdit").style.display = "none";
  }



  function debute(){

       const blockA = document.getElementById("container");
    const blockB = document.getElementById("container2"); 
    if (lastState){remake();
      return;
    }
     blockB.innerHTML='<div class="overlay-container"><div class="overlay"><div class="overlay-panel overlay-left"><h2>Welcome back</h2><p>To keep connected with us please ligin with your info.</p><button id="signIn2" class="ghost"  onclick="submitForm2()">Sign In</button></div></div></div>';
  blockA.innerHTML='<div class="form-container sign-up-container"><form id="contactForm" onsubmit="submitForm(event), submitFormdata(event)"><h2>Create account</h2><div class="social-container"><a href="#" class="social"><img id="iga1" src="facebook.svg"></a><!--class="fa-brands fa-facebook"--><a href="#" class="social"><img id="iga2" src="google.svg"  ></a> <!--class="fa-brands fa-google" --><a href="#" class="social"><img id="iga3" src="linkedin.svg"  ></a> <!--class="fa-brands fa-linkedin"--></div><span>or use your email</span><div class="form-group"><img src="user.svg" ><input type="text" placeholder="name" id="name" required></div><div class="form-group"><img src="envelope.svg" ><input type="email" placeholder="Email" id="email" required></div><div class="form-group"><img src="lock.svg"><input type="password" placeholder="text" id="registerPassword1" name="password" rows="1" required></div><div class="form-group"><img src="arrow-left-rotate.svg" ><input type="text" placeholder="password"  id="registerPassword2" required></div><div class="password-strength"><div class="strength-bar"></div></div><button  type="submit"  id="signUp">Sign Up</button><div id="response">  <span id="pageInfo"></span></div></form></div>';
  
}
      function submitForm1(){
        const blockA = document.getElementById("container");
    const blockB = document.getElementById("container2");
var signUpButton = document.getElementById("signUp2");
var signInButton = document.getElementById("signIn2");
    blockB.classList.toggle('move-left');
 blockA.classList.toggle('move-right');
  
  blockB.innerHTML='<div class="overlay-container"><div class="overlay"><div class="overlay-panel overlay-left"><h2>Welcome back</h2><p>To keep connected with us please ligin with your info.</p><button id="signIn2" class="ghost"  onclick="submitForm2()">Sign In</button></div></div></div>';
  blockA.innerHTML='<div class="form-container sign-up-container"><form id="contactForm" onsubmit="submitForm(event), submitFormdata(event)"><h2>Create account</h2><div class="social-container"><a href="#" class="social"><img id="iga1" src="facebook.svg"></a><!--class="fa-brands fa-facebook"--><a href="#" class="social"><img id="iga2" src="google.svg"  ></a> <!--class="fa-brands fa-google" --><a href="#" class="social"><img id="iga3" src="linkedin.svg"  ></a> <!--class="fa-brands fa-linkedin"--></div><span>or use your email</span><div class="form-group"><img src="user.svg" ><input type="text" placeholder="name" id="name" required></div><div class="form-group"><img src="envelope.svg" ><input type="email" placeholder="Email" id="email" required></div><div class="form-group"><img src="lock.svg"><input type="password" placeholder="password" id="registerPassword1" name="password" rows="1" required></div><div class="form-group"><img src="arrow-left-rotate.svg" ><input type="password" placeholder="password"  id="registerPassword2" required></div><div class="password-strength"><div class="strength-bar"></div></div><button  type="submit"  id="signUp">Sign Up</button><div id="response">  <span id="pageInfo"></span></div></form></div>';
resetall();
}
function submitForm2(){
        const blockB = document.getElementById("container");
    const blockA = document.getElementById("container2");
var signUpButton = document.getElementById("signUp2");
var signInButton = document.getElementById("signIn2");

    blockA.classList.toggle('move-left');
 blockB.classList.toggle('move-right');
  
 blockB.innerHTML='<div class="overlay-container"><div class="overlay"><div class="overlay-panel overlay-right"><h2>Hello, Friends</h2>  <p>Enter yout personal details and stat with us.</p><button id="signUp2" class="ghost"  onclick="submitForm1()">Sign Up</button></div></div></div>';  
blockA.innerHTML='<div class="form-container sign-in-container"><form id="contactForm2" onsubmit="submitFormb(event), loginapp(event)"><h2>Sign In</h2><div class="social-container"><a href="#" class="social"><img id="ig1" src="facebook.svg" ></a><!--class="fa-brands fa-facebook"--><a href="#" class="social"><img id="ig2" src="google.svg"  ></a> <!--class="fa-brands fa-google" --><a href="#" class="social"><img id="ig3" src="linkedin.svg"  ></a> <!--class="fa-brands fa-linkedin"--></div><span>or use your email</span><div class="form-group"><img src="user.svg" ><input type="text" placeholder="name" id="name2" required></div><div class="form-group"><img src="envelope.svg" ><input type="email" placeholder="Email" id="email2" required></div><div class="form-group"><img src="lock.svg" ><input type="password" placeholder="password" id="registerPassword" name="password" rows="1" required></div><a href="#">Forgot your password?</a><br><button  type="submit" id="signIn">Sign In</button><div id="response2">  <span id="pageInfo"></span></div></form></div>';
resetall();
}
function submitForm(event){
event.preventDefault();
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;

var responseDiv = document.getElementById("response");
responseDiv.innerHTML =`<strong>Name:</strong> ${name} <br><strong>email:</strong> ${email} <br>`;

}
function submitFormb(event){
event.preventDefault();
var namec = document.getElementById("name2").value;
var emailc = document.getElementById("email2").value;

var responseDiv2 = document.getElementById("response2");
responseDiv2.innerHTML =`<strong>Name:</strong> ${namec} <br><strong>email:</strong> ${emailc} <br>`;

}

function toggleProfile() {
  document.getElementById("profileCard").classList.toggle("hidden");
}

supabase.auth.onAuthStateChange((_event, session) => {
  if (session) {
    const user = session.user;

    document.getElementById("userName").textContent =
      email.split("@")[0];

    document.getElementById("profileEmail").textContent = email;

    document.getElementById("profileProvider").textContent =
      user.app_metadata?.provider || "email";
  }
});
