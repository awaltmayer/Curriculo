console.log ("Portifólio carregado!");

const projetos = document.querySelectorAll ("Projeto");

projetos.forEach (projeto => {
    projeto.assEventListener ("mouseover", () => {
        projeto.style.transform = "scale(1.05)";
    });

    projeto.addEventListener ("mouseout", () => {
        projeto.style.transform = "scale(1)";
    });
});