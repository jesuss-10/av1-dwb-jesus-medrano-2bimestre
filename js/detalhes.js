// detalhes.js - Lógica para a página de detalhes do Pokémon

// Captura o parâmetro 'id' da URL
const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');

// Função assíncrona para buscar detalhes do pokémon específico
async function fetchPokemonDetails() {
    if (!pokemonId) {
        // Se não houver ID, exibe mensagem de erro
        document.getElementById('loading').innerHTML = '<p class="text-danger">ID do pokémon não fornecido.</p>';
        return;
    }

    try {
        // Faz a requisição para a API com o ID do pokémon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Pokémon não encontrado: ' + response.status);
        }
        // Converte a resposta para JSON
        const data = await response.json();
        // Exibe os detalhes do pokémon
        displayPokemonDetails(data);
    } catch (error) {
        // Trata erros de requisição
        console.error('Erro ao buscar detalhes do pokémon:', error);
        document.getElementById('loading').innerHTML = '<p class="text-danger">Erro ao carregar detalhes do pokémon. Verifique o ID e tente novamente.</p>';
    } finally {
        // Remove o indicador de carregamento
        document.getElementById('loading').style.display = 'none';
    }
}

// Função para exibir os detalhes do pokémon no DOM
function displayPokemonDetails(pokemon) {
    const detailsContainer = document.getElementById('pokemon-details');
    // Cria o HTML com os detalhes do pokémon
    const detailsHTML = `
        <div class="col-md-8">
            <div class="card">
                <div class="card-body text-center">
                    
                        ${pokemon.stats.map(stat => `<li><strong>${stat.stat.name}:</strong> ${stat.base_stat}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    // Adiciona o HTML ao container
    detailsContainer.innerHTML = detailsHTML;
}

// Chama a função para buscar detalhes quando a página carrega
document.addEventListener('DOMContentLoaded', fetchPokemonDetails);

//mano, para de usar IA q ta feio