// welcome
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        let ipv4 = 'Não encontrado';
        let ipv6 = 'Não encontrado';

        Promise.all([

            fetch('https://api.ipify.org?format=json')
                .then(res => res.json())
                .then(data => ipv4 = data.ip)
                .catch(() => { }),

            fetch('https://api64.ipify.org?format=json')
                .then(res => res.json())
                .then(data => ipv6 = data.ip)
                .catch(() => { })

        ]).then(() => {
            console.log(`\nhello, friend.\n\n` +
                `User Agent: ${navigator.userAgent}\n` +
                `Platform: ${navigator.platform}\n` +
                `Language: ${navigator.language || navigator.userLanguage}\n` +
                `Screen Resolution: ${window.screen.width}x${window.screen.height}\n` +
                `Time Zone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}\n` +
                `Plugins: ${navigator.plugins.length ? Array.from(navigator.plugins).map(p => p.name) : 'Nenhum plugin'}\n` +
                `Window Size: ${window.innerWidth}x${window.innerHeight}\n` +
                `IPv4: ${ipv4}\nIPv6: ${ipv6}\n\n` +
                `Mr. Robot – Eps1.0_hellofriend.mov:\n` +
                `- O problema não é o que você sabe, é o que você acha que sabe. E o que você acha que sabe é a coisa mais perigosa de todas.\n`
            );
        });
    }
});

// Navbar
document.addEventListener("DOMContentLoaded", () => {
    if (!window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        document.querySelectorAll(".navbar a").forEach(link => link.style.display = "inline");
    }
});

// Footer
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");
    if (footer) footer.textContent = footer.textContent.replace('%ANO%', new Date().getFullYear());
});

// Dark Mode
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("dark-mode-switch");
    if (!toggle) return;

    const body = document.body;
    const darkModeEnabled = localStorage.getItem("darkmode") === "enabled";

    body.classList.toggle("dark-mode", darkModeEnabled);
    toggle.checked = darkModeEnabled;

    toggle.addEventListener("change", () => {
        body.classList.toggle("dark-mode", toggle.checked);
        localStorage.setItem("darkmode", toggle.checked ? "enabled" : "disabled");
    });
});

// Ícones
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".icons a").forEach(link => {
        const img = link.querySelector("img");
        if (!img) return;

        link.addEventListener("mouseenter", () => {
            img.dataset.originalSrc = img.src;
            img.src = img.src.replace("-thin.svg", "-light.svg");
        });

        link.addEventListener("mouseleave", () => {
            img.src = img.dataset.originalSrc;
        });
    });
});

// Stacks
document.addEventListener("DOMContentLoaded", () => {
    const shuffle = obj => Object.fromEntries(Object.entries(obj).sort(() => Math.random() - 0.5));

    const stacks = shuffle({
        "csharp": "#4A8B31", "dotnet": "#512D6D", "asp.net": "#0078D4", "entityframework": "#512D6D",
        "nunit": "#512BD4", "xunit": "#5E3BEE", "python": "#306998", "flask": "#000000",
        "django": "#092E20", "fastapi": "#009688", "pandas": "#150458", "numpy": "#013243",
        "javascript": "#F7DF1E", "typescript": "#3178C6", "vue.js": "#42b883", "angular": "#DD1B16",
        "node.js": "#83CD29", "express.js": "#000000", "java": "#007396", "spring boot": "#6DB33F",
        "hibernate": "#59666C"
    });

    const cardStacks = document.getElementById("stacks");
    if (!cardStacks) return;

    Object.entries(stacks).forEach(([stack, color]) => {
        const hashtag = document.createElement("p");
        hashtag.classList.add("hashtag", `hover-${stack.replace(/\s+/g, '-')}`);
        hashtag.textContent = `#${stack}`;
        hashtag.style.setProperty("--hover-color", color);
        cardStacks.appendChild(hashtag);
    });
});

// Tabela
document.addEventListener('DOMContentLoaded', () => {
    const certificacoes = [
        ["AWS Certified Solutions Architect", "Amazon Web Services (AWS)", "120h", "12/01/2025"],
        ["Microsoft Certified: Azure Fundamentals", "Microsoft", "40h", "06/01/2025"],
        ["Google Cloud Associate Engineer", "Google Cloud", "100h", "01/03/2025"],
        ["Oracle Cloud Infrastructure Architect Associate", "Oracle", "80h", "01/09/2025"]
    ];

    const graduacao = [
        ["Bachelor's Degree in Computer Science", "Universidade Nove De Julho", "4 years", "12/01/2023"],
        ["Bachelor's Degree in Information Systems", "Universidade São Judas Tadeu", "4 years", "06/01/2024"]
    ];

    const posGraduacao = [
        ["Postgraduate in Cloud Comouting Edge", "Univerddidade Anhembi Morumbi", "1 year", "12/01/2024"],
    ];

    const dados = [...certificacoes, ...graduacao, ...posGraduacao];

    const tbody = document.querySelector('tbody');

    dados.forEach(item => {

        const tr = document.createElement('tr');

        item.forEach(dado => {
            const td = document.createElement('td');
            td.textContent = dado;
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
});

// Projetos
document.addEventListener("DOMContentLoaded", () => {
    // Dados detalhados dos projetos
    const projetosDetalhes = {
        "RestFul API with C#, .NET and ORM Dapper": {
            "link": "https://github.com/rafaelderoncio/dotnet-restapi-dapper-catalog",
            "description": "This project provides an API to manage processes related to the product catalog context and product categories. The solution uses .net core and dapper as ORM. And it is structured into multiple projects to separate concerns and ensure modularity."
        },
        "RestFul API with C#, .NET and ORM EntityFramework": {
            "link": "https://github.com/rafaelderoncio/dotnet-restapi-efcore-movies",
            "description": "This project provides an API to manage processes related to the movie context and all its dependencies. The solution uses .net core and entity framework core. And it is structured into several projects to separate concerns and ensure modularity."
        },
        "Event-Driven with C#, .NET and RabbitMQ": {
            "link": "https://github.com/rafaelderoncio",
            "description": "Project developed in C# with .NET Core 8 to demonstrate skills in technologies and concepts such as SOLID, Clean Code, scalability techniques, code performance, and software architecture.\
                            The project is a comprehensive solution for managing academic certificates at the fictitious Athenas Academy. It provides a RESTful API as the entry point for creating and retrieving certificates, an event-driven architecture integrated with messaging services, local storage with cloud expansion capabilities, and automated tests to ensure software quality."
        },
        "User Access API with Node.js, TypeScript and TypeORM": {
            "link": "https://github.com/rafaelderoncio",
            "description": ""
        },
        "RestFul API with Node.js, TypeScript and TypeORM": {
            "link": "https://github.com/rafaelderoncio",
            "description": "This project provides an API to manage processes related to the product catalog context and product categories. The solution uses express, typescript and typeorm as ORM. And it is structured into multiple projects to separate concerns and ensure modularity."
        },
        "Lexical Compiler with raw Python": {
            "link": "https://github.com/rafaelderoncio",
            "description": "Compilador léxico desenvolvido do zero utilizando Python puro, sem bibliotecas externas."
        },
        "Config Server with Java 8, GitHub and Vault HashCorp": {
            "link": "https://github.com/rafaelderoncio",
            "description": "Servidor de configuração centralizado usando Java 8, GitHub e Vault HashCorp."
        },
        "Feature Toggle with Java 8 and FF4J": {
            "link": "https://github.com/rafaelderoncio",
            "description": "Gerenciamento de recursos dinâmicos utilizando Java 8 e FF4J para feature toggles."
        },
        "Filter Search with Angular 16+": {
            "link": "https://github.com/rafaelderoncio",
            "description": "Sistema de busca e filtragem desenvolvido com Angular 16+."
        },
        "File Upload Zone with Angular 16+": {
            "link": "https://github.com/rafaelderoncio",
            "description": "Módulo de upload de arquivos com Angular 16+, suportando arrastar e soltar arquivos."
        },
    };

    // Criando modal dinamicamente
    const modal = document.createElement("div");
    modal.id = "projectModal";
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2 id="modal-title"></h2>
            <hr>
            <p id="modal-description"></p>
            <a id="modal-project-link" href="#" target="_blank">
                <img src="icons/github-logo-thin.svg" alt="GitHub Project">
                project
            </a>
        </div>
    `;
    document.body.appendChild(modal);

    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalProjectLink = document.getElementById("modal-project-link");
    const closeModal = document.querySelector(".modal-close");

    // Abrindo o modal ao clicar no <li>
    document.querySelectorAll(".card li").forEach(item => {
        item.addEventListener("click", () => {
            const projeto = item.textContent.trim();
            const detalhes = projetosDetalhes[projeto];

            modalTitle.textContent = projeto;
            modalDescription.textContent = detalhes ? detalhes.description : "Detalhes indisponíveis.";

            modalProjectLink.href = detalhes.link;

            modal.style.display = "flex";
            
        });
    });

    // Fechar modal ao clicar no botão X
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fechar modal ao clicar fora do conteúdo
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});