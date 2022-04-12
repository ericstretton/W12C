function getColors(){
    axios.request({
        method : "GET",
        url : "https://reqres.in/api/login",
        headers : {
            'Content-Type' : 'https://reqres.in/api/unknown'
        },
        
    }).then(gotColorsSuccess).catch(gotColorsFail);
    
};

// Function to take getColors axios request data and display it on the page
function gotColorsSuccess(response){
    console.log(response);
    console.log(response.data.data[0].color);

    function listCurulean() {
        console.log(response.data.data[0].name);
        let colorName = response.data.data[0].name;
        document.getElementById("curuleanName").innerText = colorName;
        console.log(response.data.data[0].year);
        let colorYear = response.data.data[0].year;
        document.getElementById("curuleanYear").innerText = colorYear;
        console.log(response.data.data[0].color);
        let color = response.data.data[0].color;
        document.getElementById('curulean').style.backgroundColor = color;
    };
    function listFushiaRose() {
        console.log(response.data.data[1].name);
        let colorName = response.data.data[1].name;
        document.getElementById("fuchsiaRoseName").innerText = colorName;
        console.log(response.data.data[1].year);
        let colorYear = response.data.data[1].year;
        document.getElementById("fuchsiaRoseYear").innerText = colorYear;
        console.log(response.data.data[1].color);
        let color = response.data.data[1].color;
        document.getElementById('fuchsiaRose').style.backgroundColor = color;
        
    };
    function listTrueRed() {
        console.log(response.data.data[2].name);
        let colorName = response.data.data[2].name;
        document.getElementById("trueRedName").innerText = colorName;
        console.log(response.data.data[2].year);
        let colorYear = response.data.data[2].year;
        document.getElementById("trueRedYear").innerText = colorYear;
        console.log(response.data.data[2].color);
        let color = response.data.data[2].color;
        document.getElementById('trueRed').style.backgroundColor = color;
    };
    function listAquaSky() {
        console.log(response.data.data[3].name);
        let colorName = response.data.data[3].name;
        document.getElementById("aquaSkyName").innerText = colorName;
        console.log(response.data.data[3].year);
        let colorYear = response.data.data[3].year;
        document.getElementById("aquaSkyYear").innerText = colorYear;
        console.log(response.data.data[3].color);
        let color = response.data.data[3].color;
        document.getElementById('aquaSky').style.backgroundColor = color;
    };
    function listTigerLily() {
        console.log(response.data.data[4].name);
        let colorName = response.data.data[4].name;
        document.getElementById("tigerLilyName").innerText = colorName;
        console.log(response.data.data[4].year);
        let colorYear = response.data.data[4].year;
        document.getElementById("tigerLilyYear").innerText = colorYear;
        console.log(response.data.data[4].color);
        let color = response.data.data[4].color;
        document.getElementById('tigerLily').style.backgroundColor = color;
    };
    function listBlueTurqoise() {
        console.log(response.data.data[5].name);
        let colorName = response.data.data[5].name;
        document.getElementById("blueTurqoiseName").innerText = colorName;
        console.log(response.data.data[5].year);
        let colorYear = response.data.data[5].year;
        document.getElementById("blueTurqoiseYear").innerText = colorYear;
        console.log(response.data.data[5].color);
        let color = response.data.data[5].color;
        document.getElementById('blueTurqoise').style.backgroundColor = color;
    };
    listCurulean();
    listFushiaRose();
    listTrueRed();
    listAquaSky();
    listTigerLily();
    listBlueTurqoise();

};

function gotColorsFail(error){
    console.log(error);
    if (cookies.get('sessiontoken', undefined)) {
        alert('No log in information found');
    window.location.href="'index.html";
    }
    console.log(cookies);
    
};

getColors();





