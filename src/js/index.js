const characters = document.querySelectorAll('.character');

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        removeCharacterSelection();

        character.classList.add('selected');

        alterarImagemCharacterSelected(character);

        alterarNomeCharacterSelected(character);

        alterarCharacterDescription(character);
    })
});

function alterarCharacterDescription(character) {
    const descricaoCharacter = document.getElementById('character-description');
    descricaoCharacter.innerText = character.getAttribute('data-description');
}

function alterarNomeCharacterSelected(character) {
    const characterName = document.getElementById('character-name');
    characterName.innerText = character.getAttribute('data-name');
}

function alterarImagemCharacterSelected(character) {
    const imagemBigCharacter = document.querySelector('.big-character');
    const idCharacter = character.id;
    imagemBigCharacter.src = `./src/imagens/card-${idCharacter}.webp`;
  }
  

function removeCharacterSelection() {
    const selectedCharacter = document.querySelector('.selected');
    selectedCharacter.classList.remove('selected');
}
