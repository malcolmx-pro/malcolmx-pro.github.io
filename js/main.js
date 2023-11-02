// Functions for each action-command.

function help(){
  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Give me the complete picture</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Everything you ever wanted to know about Malcolm</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to get in touch with Malcolm</td>\
  </tr>\
  <tr>\
    <td>links</td>\
    <td>See what links Malcolm wants you to click on</td>\
  </tr>\
  <tr>\
    <td>skills</td>\
    <td>Get to know how good Malcolm is at stuff</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Download Malcolm's CV</td>\
  </tr>\</table>";
}

function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
  <tr>\
    <td>Email:</td>\
    <td><a href=\"mailto:nyamazmalcolmx@gmail.com\">nyamazmalcolmx@gmail.com</a></td>\
  </tr>\
  <tr>\
    <td>Telephone:</td>\
    <td><a href=\"tel:+263783916313\">+263 78 391 6313 / +263 71 872 9569</a></td>\
  </tr>\
  <tr>\
    <td>Address:</td>\
    <td>K764/810 Katanga</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Norton</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Zimbabwe</td>\
  </tr>\</table>";
}

function skills(){
  return "<h2><span style=\"color:#81a2be;\">Skills:</span></h2><table>\
  <tr>\
    <td>JavaScript</td>\
    <td>▰▰▰▰▰▰▰▱▱▱ 70%</td>\
  </tr>\
  <tr>\
    <td>Python</td>\
    <td>▰▰▰▰▱▱▱▱▱▱ 40%</td>\
  </tr>\
  <tr>\
    <td>HTML & CSS</td>\
    <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>\
  </tr>\
  <tr>\
    <td>Git</td>\
    <td>▰▰▰▰▰▰▰▰▰▱ 90%</td>\
  </tr>\
  <tr>\
    <td>WordPress</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
  <tr>\
    <td>Graphic Design</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
  <tr>\
    <td>Digital Marketing</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
  <tr>\
    <td>Cybersecurity</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>\
  </tr></table>";
}

function about(){
  return "<p>Hi Everyone, I am Malcolm Nyamadzunzu from Norton, Zimbabwe. I am fluent in classics like JavaScript, C++ and a bit of Python. My field of interest's are building new Web Technologies and Products and also in areas related to Cybersecurity. Whenever possible, I also apply my passion for developing products with Node.js and Morden JavaScript Library and Frameworks like React.js and Next.js. I graduated with a Bachelor in Business Studies & Computing Science Honour Degree (HBSCT) at the University of Zimbabwe (UZ). I am a Software Developer as a freelancer and an open source contributor. Apart from coding, some other activities that I have to do are: playing darts, travelling, following tech news and also listening to music.</p>";
}

function cv(){
  return "<span style=\"color:#8abeb7;\"><h2>CV:</h2></span><p>\tDownload from <a href=\"src/cv.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}

function credits(){
  return "<p>Built by <a href=\"https://www.github.com/CedArctic\" target=\"_blank\"><i class=\"fab fa-github\"></i> CedArctic</a></p>";
}

function links(){
  return "<span style=\"color: #b5bd68;\"><h2>Links:</h2></span><ul>\
  <li><a href=\"https://www.linkedin.com/in/mcn01\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://www.github.com/malcolmx-pro\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  </ul>";
}

// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + skills() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + cv();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }else if (txtInput=="skills") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput=="links") {
      document.getElementById('injected').innerHTML=links();
    }/*else if (txtInput == "rickroll") {
      var win = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
      win.focus();
      document.getElementById('injected').innerHTML=rickroll();
    }*/else if (txtInput == "credits") {
      document.getElementById('injected').innerHTML=credits();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
