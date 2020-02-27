$(function(){
    $('#pokes').click(function (event) { 
        event.preventDefault();
        const nombrePokemon = $('#buscar').val();
        const nombrePokemonLower = nombrePokemon.toLowerCase();
        $.ajax({
            url:`https://pokeapi.co/api/v2/pokemon/${nombrePokemonLower}`,
            success: function(respuesta) {
                console.log(respuesta);
            },
            error: function() {
                console.log("No se ha podido obtener la información");
            }
        }).done(response);
        function response(data){
            var nombrePokemon = data.name;
            var imagePokemon  = data.sprites.front_default;
            var pesoPokemon   = data.weight;
            var movePokemon  = data.moves[0].move.name;
            var movePokemon1  = data.moves[1].move.name;
            var movePokemon2  = data.moves[2].move.name;
            var movePokemon3  = data.moves[3].move.name;
            var tipoPokemon  = data.types;
            var habPokemon  = data.abilities[0].ability.name;
            var shinyPokemon =data.sprites.front_shiny;
            
            for (var i= 0; i < data.types.length; i++) {
                data.types[i] = data.types[i].type.name;
        var cajaPoquemon = $('#visualizar__pokemon');
        
        
        cajaPoquemon.html("")
        cajaPoquemon.append(`<div class="card" style="width: 18rem;">
        <img src="${imagePokemon}"style="width:200px", class="card-img-top" alt="${nombrePokemon}">
        <div class="card-body">
          <h1 class="card-title">${nombrePokemon}</h1>
        <p> Peso: ${pesoPokemon} pounds</p>
        <p> Move: ${movePokemon}</p>  
        <p> Move: ${movePokemon1}</p>
        <p> Move: ${movePokemon2}</p>
        <p> Move: ${movePokemon3}</p>
        <p> Tipo: ${tipoPokemon}</p>
        <p> Habilidad: ${habPokemon}</p>
        <img src="${shinyPokemon}"style="width:200px", class="card-img-top">
        <h2>Versión variocolor/shiny</h2>
        
        
        
        </div>
      </div>`);   
      
      var chart = new CanvasJS.Chart("chartContainer",
         {
            
              

            animationEnabled: true,
            title: {
                text: "Estadísticas " + nombrePokemon
            },
            data: [{
                type: "column", 
                legendText: "Datos oficiales*",
                showInLegend: true,
                dataPoints: [
                    {y: data.stats[0].base_stat, label: "Velocidad"},
                    {y: data.stats[1].base_stat, label: "Defensa Especial "},
                    {y: data.stats[2].base_stat, label: "Ataque Especial"},
                    {y: data.stats[3].base_stat, label: "Defensa"},
                    {y: data.stats[4].base_stat, label: "Ataque"},
                    {y: data.stats[5].base_stat, label: "HP",indexLabel:"Puntos de salud"},
                ]
            }]
        });
        chart.render();
    }    
}})})


	

    
    