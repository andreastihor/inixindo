 let mymap = L.map('mapid').setView([-6.161146, 106.709891], 12);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYW5kcmVhc2d1aSIsImEiOiJjam1zenFoZTYyaDF0M2ttamoxeGNtbng4In0.eUu5wEwwNijdR7ljIvaWig'
    }).addTo(mymap);

   const url ="http://localhost/INIXINDO/public/project3/mws.json";
   // const url ="https://andreastihor-at1510.firebaseapp.com/project3/mws.json";

     function marker(arr_marker) {
        var obj = arr_marker.locations;
       for(let i =0;i<obj.length;i++) {
        let x = L.marker(obj[i].marker).addTo(mymap);
        x.bindPopup("<b>Lippo Mall Puri</b>");
        
       }
        
        
    }
   function image() {

    }

    function review() {

    }

    fetch(url).then( (data) => {return data.json();} ).then( (data) => {marker(data)} );

    var popup = L.popup();

    


