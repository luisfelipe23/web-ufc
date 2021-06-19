var title = document.getElementById("title");
var description = document.getElementById("description");
var roms = document.getElementById("roms");
var parkingSpaces = document.getElementById("parkingSpaces");
var terrainArea = document.getElementById("terrainArea");
var buildingArea = document.getElementById("buildingArea");
var localization = document.getElementById("localization");
var price = document.getElementById("price");
var linkImg = document.getElementById("linkImg");

var listProperties = [];

const cadastrar = () =>{


var titleV = title.value;
var descriptionV = description.value;
var romsV = roms.value;
var parkingSpacesV = parkingSpaces.value;
var terrainAreaV = terrainArea.value;
var buildingAreaV = buildingArea.value;
var localizationV = localization.value;
var priceV = price.value;
var linkImgV = linkImg.value;


    
    listProperties.push({
        titleV,
        descriptionV,
        romsV,
        parkingSpacesV,
        terrainAreaV,
        buildingAreaV,
        localizationV,
        priceV,
        linkImgV,
    });


    //console.log(listProperties);

    document.getElementById("exibir").innerHTML += 
        `
       <div class="conjunto">
        <h1 class="list-title">${titleV}</h3>
            <div class="lista">
                <div>
                    <span class="span-description">Descrição: ${descriptionV}</span><br/>
                    <span class="span-description">Quartos: ${romsV}</span><br/>
                    <span class="span-description"> Vagas de Garagem: ${parkingSpacesV}</span><br/>
                    <span class="span-description"> Área do Terreno: ${terrainAreaV}</span><br/>
                    <span class="span-description"> Área Construída: ${buildingAreaV}</span><br/>
                    <span class="span-description"> Localidade: ${localizationV}</span><br/>
                    <span class="span-description"> Preço: R$${priceV}</span><br/>
                    <img src="${linkImgV}" width="${400}"/>            
                </div>
            </div>
        </div>
       `;
}





