let alternado=false;

function trocarGrupos() {
    const container=document.querySelector('.container');

    if(!alternado){
        alternado=true;
        container.innerHTML = `
            <div class="container grupo">
                <h2>🅳 Grupo D</h2>

                    <h3>Seleções</h3>
                    <ul>
                        <li>Estados Unidos</li>
                        <li>Paraguai</li>
                        <li>Austrália</li>
                        <li>Turquia</li>
                    </ul>

                    <details><strong>Fatos:</strong> Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios.</details>
                </div>

                <div class="container grupo">
                    <h2>🅴 Grupo E</h2>

                    <h3>Seleções</h3>
                    <ul>
                        <li>Alemanha</li>
                        <li>Equador</li>
                        <li>Costa do Marfim</li>
                        <li>Curaçao</li>
                    </ul>

                    <details><strong>Fatos:</strong> Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.</details>
                </div>

                <div class="container grupo">
                    <h2>🅵 Grupo F</h2>

                    <h3>Seleções</h3>
                    <ul>
                        <li>Holanda</li>
                        <li>Japão</li>
                        <li>Tunísia</li>
                        <li>Suécia</li>
                    </ul>

                    <details><strong>Fatos:</strong> Japão e Suécia já protagonizaram jogos equilibrados. Holanda costuma ter forte presença ofensiva.</details>
                </div>
            `;
    }else{
        alternado=false;
        container.innerHTML = `
   <div class="container grupo">
            <h2>🅰️ Grupo A</h2>

            <h3>Seleções</h3>
            
            <ul>
                <li>México</li>
                <li>África do Sul</li>
                <li>Coreia do Sul</li>
                <li>República Tcheca</li>
            </ul>

            <details><strong>Fatos:</strong> O jogo de abertura será México x África do Sul. Confrontos entre Coreia do Sul e seleções europeias já ocorreram em várias Copas, com histórico equilibrado.</details>
        </div>

        <div class="container grupo">
            <h2>🅱️ Grupo B</h2>

            <h3>Seleções</h3>
            
            <ul>
                <li>Canadá</li>
                <li>Suíça</li>
                <li>Catar</li>
                <li>Vaga Europeia (Bósnia)</li>
            </ul>

            <details><strong>Fatos:</strong> O Canadá joga em casa, fator importante de desempenho. Catar e Suíça já se enfrentaram recentemente em amistosos internacionais.</details>
        </div>

        <div class="container grupo">
            <h2>🅲 Grupo C</h2>

            <h3>Seleções</h3>
            
            <ul>
                <li>Brasil</li>
                <li>Marrocos</li>
                <li>Haiti</li>
                <li>Escócia</li>
            </ul>

            <details><strong>Fatos:</strong> Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas.</details>
        </div>
        `;
    }
}    