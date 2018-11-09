 let mymap = L.map('mapid').setView([-6.161146, 106.709891], 12);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYW5kcmVhc2d1aSIsImEiOiJjam1zenFoZTYyaDF0M2ttamoxeGNtbng4In0.eUu5wEwwNijdR7ljIvaWig'
    }).addTo(mymap);

    // var marker = L.marker([-6.131754, 106.709462]).addTo(mymap);
    // var marker2 = L.marker([-6.130613, 106.706992]).addTo(mymap);

    var arr_marker = [
        [-6.187752, 106.739050],
        [-6.244244, 106.653417],
        [-6.258007, 106.659351],
    ];

    var string = [
        "<b>Lippo Mall Puri</b> <hr> <img src='images/lpm.jpg' class='thumbnail' alt=''><br> <b>Address:</b> Jl. Puri Indah Raya Blok U1, RT.3/RW.2, Kembangan Sel., Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11610 <br> <b>Phone: </b> (021) 29111111",
        "<b>Living World</b> <hr> <img src='images/lw.jpg' class='thumbnail' alt=''><br> <b>Address:</b> Jalan Alam Sutera Boulevard Kav. 21, 2nd floor, Pakulonan, Serpong Utara, Pakulonan, Serpong Utara, Kota Tangerang Selatan, Banten 15325 <br> <b>Phone: </b> (021) 53128580",
        "<b>Bakmi Aka</b> <hr><img src='images/bakmiaka.jpg' class='thumbnail' alt=''><br> <b>Address:</b> Jl. Sutera Gardenia V No.20, Pd. Jagung, Serpong Utara, Kota Tangerang Selatan, Banten 15326 <br> <b>Phone: </b> (021) 53127348",
    ];
    var i = 0;
    for (m of arr_marker) {
        let x = L.marker(m).addTo(mymap);
        x.bindPopup(string[i]);
        i++;

    }
    i = 0;


    // var circle = L.circle([-6.223626, 106.649418], {
    //     color: 'red',
    //     fillColor: '#f03',
    //     fillOpacity: 0.5,
    //     radius: 100
    // }).addTo(mymap);

    // var polygon = L.polygon([
    //     [-6.131721, 106.708874],
    //     [-6.130750, 106.707340],
    //     [-6.129714, 106.707569]
    // ]).addTo(mymap);

    // circle.bindPopup("BINUS Alsut");
    // polygon.bindPopup("Mubarok ...");

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }


    mymap.on('click', onMapClick);


    