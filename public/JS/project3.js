 let mymap = L.map('mapid').setView([-6.161146, 106.709891], 12);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYW5kcmVhc2d1aSIsImEiOiJjam1zenFoZTYyaDF0M2ttamoxeGNtbng4In0.eUu5wEwwNijdR7ljIvaWig'
    }).addTo(mymap);

   const url ="http://localhost/INIXINDO/public/project3/mws.json";
   // const url ="https://andreastihor-at1510.firebaseapp.com/project3/mws.json";
   var places;
    fetch('../project3/mws.json')
    .then( (res) => res.json() )
    .then((data) => getData(data.locations) );

    
    
    
    

    function findLocation(x,y) {
      for (var i = 0; i<places.length; i++) {
        if(x===places[i].marker[0] && y===places[i].marker[1]) {
          return i;
        }
      }
      return -1;
    }
        // bikiin pas ketik ambil lat lang
      // bandingin lat sama lang dengan data yang ada
      //kalau ada baru panggil fungsi yang nambahin gambar sama review
    
    // for (var i = 0; i < places.length; i++) {
    // if (places[i].lokasi[0] == x && places[i].lokasi[1] == y) {
    //   return i;
    //   }
    // }
    // return -1;
  
    function showLocation(e) {

      let idx = findLocation(e.latlng.lat,e.latlng.lng);
      
      if(idx>=0) {

        setImage(idx);
        setReview(idx);
      }
    }

    function getData(data) {
      setMarker(data);
      places = data;

      
    }

     function setMarker(arr_marker) {
     
    
       arr_marker.forEach( element => {
        let mark = element.marker;
        let title = element.places;
        let x = L.marker(mark).addTo(mymap).bindPopup(title);
        x.on('click',showLocation);
        
       }
      );
        
        
    }
   function setImage(data) {
    
      document.getElementById('tulisan').innerHTML = places[data].review;
      
    }

    function setReview(data) {
      document.getElementById('gambar').src = places[data].img;
      
    }






    

    


