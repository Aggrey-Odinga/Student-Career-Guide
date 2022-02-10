 
 
 var frag = document.createDocumentFragment();
 var selectCounty = document.getElementById("county");
 const county =["Mombasa","Kwale","Kilifi","Tana River","Lamu","Taita/Taveta",
 "Garissa","Wajir","Mandera","Marsabit","Isiolo","Meru","Tharaka-Nithi",
 "Embu","Kitui","Machakos","Makueni","Nyandarua","Nyeri","Kirinyaga","Muranga","Kiambu"
 ,"Turkana","West Pokot","Samburu","Trans Nzoia","Uasin Gishu","Elgeyo/Marakwet"
 ,"Nandi","Baringo","Laikipia","Nakuru","Narok","Kajiado","Kericho","Bomet","Kakamega",
 "Vihiga","Bungoma","Busia","Siaya","Kisumu","Homa Bay","Migori","Kisii","Nyamira","Nairobi City"]
 for (var i = 0; i < county.length; ++i) {
   var option = document.createElement("option");
   option.value = county[i];
   option.innerHTML = county[i];

   frag.appendChild(option);
 }
 selectCounty.appendChild(frag);



 var frag = document.createDocumentFragment();
 var selectLevel = document.getElementById("level");
 const level = ["Ph.D","Postgraduate","Master's Degree","Bachelor's Degree",
 "Advanced Diploma","Diploma","Certificate","Trade Qualification","Vocational Training"]
 for (var i = 0; i < level.length; ++i) {
   var option = document.createElement("option");
   option.value = level[i];
   option.innerHTML = level[i];
frag.appendChild(option);

 }
 selectLevel.appendChild(frag);



