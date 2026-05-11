// script.js - Lógica para a página inicial da Pokédex

// Função assíncrona para buscar a lista de pokémons da PokéAPI
async function fetchPokemons() {
    try {
        // Faz a requisição para a API
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status);
        }
        // Converte a resposta para JSON
        const data = await response.json();
        // Exibe os pokémons na página
        displayPokemons(data.results);
    } catch (error) {
        // Trata erros de requisição
        console.error('Erro ao buscar pokémons:', error);
        document.getElementById('loading').innerHTML = '<p class="text-danger">Erro ao carregar pokémons. Tente novamente mais tarde.</p>';
    } finally {
        // Remove o indicador de carregamento
        document.getElementById('loading').style.display = 'none';
    }
}

// Função para exibir a lista de pokémons no DOM
function displayPokemons(pokemons) {
    const list = document.getElementById('pokemon-list');
    // Limpa a lista antes de adicionar novos itens
    list.innerHTML = '';
    // Itera sobre cada pokémon
    pokemons.forEach(async (pokemon) => {
        try {
            // Faz uma requisição adicional para obter detalhes do pokémon (imagem, etc.)
            const pokeResponse = await fetch(pokemon.url);
            if (!pokeResponse.ok) {
                throw new Error('Erro ao buscar detalhes do pokémon');
            }
            const pokeData = await pokeResponse.json();
            // Cria o HTML do card para o pokémon
            const card = `
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card h-100">
                        <img src="${pokeData.sprites.front_default || 'https://via.placeholder.com/200'}" class="card-img-top" alt="${pokeData.name}">
                        <div class="card-body">
                            <h5 class="card-title">${pokeData.name}</h5>
                            <a href="detalhes.html?id=${pokeData.id}" class="btn btn-primary">Ver Detalhes</a>
                        </div>
                    </div>
                </div>
            `;
            // Adiciona o card à lista
            list.innerHTML += card;
        } catch (error) {
            console.error('Erro ao buscar detalhes do pokémon:', error);
        }
    });
}

// Chama a função para buscar pokémons quando a página carrega
document.addEventListener('DOMContentLoaded', fetchPokemons);