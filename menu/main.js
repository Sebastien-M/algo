var menuData = [
    {title: 'Accueil', url: 'accueil.php', order: 1},
    {
        title: 'Qui Sommes Nous', url: 'qsn.php', order: 2, children: [
            {
                title: 'L\'équipe', url: 'team.php', order: 1, children: [
                    {title: 'Pierre', url: 'pierre.php', order: 1},
                    {title: 'Paul', url: 'paul.php', order: 2},
                    {title: 'Jack', url: 'jack.php', order: 3}
                ]
            },
            {title: 'Les locaux', url: 'place.php', order: 2},
            {title: 'La vision', url: 'vision.php', order: 2}
        ]
    },
    {
        title: 'Portfolio', url: 'portfolio.php', order: 3, children: [
            {title: 'Projet 1', url: 'projet1.php', order: 1},
            {title: 'Projet 2', url: 'projet2.php', order: 2},
            {title: 'Projet 3', url: 'projet3.php', order: 3},
            {title: 'Projet 4', url: 'projet4.php', order: 4},
            {title: 'Projet 5', url: 'projet5.php', order: 5},
            {title: 'Projet 6', url: 'projet6.php', order: 6},
            {title: 'Projet 7', url: 'projet7.php', order: 7},
            {title: 'Projet 8', url: 'projet8.php', order: 8}
        ]
    },
    {title: 'FAQ', url: 'faq.php', order: 5},
    {title: 'CVG', url: 'cvg.php', order: 4}
];

function generate_menu(data, html_el) {
    for (var i = 0; i < data.length; i++) {
        var menu = document.querySelector(html_el);
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.textContent = data[i]['title'];
        a.href = data[i]['url'];
        li.className = 'row';
        menu.appendChild(li);
        li.appendChild(a);
        console.log(data[i]);

        if (data[i]['children'] !== undefined) {
            var ul = document.createElement('ul');
            ul.className = 'liste' + i;
            document.querySelector(html_el).appendChild(ul);
            generate_menu(data[i]['children'], '.liste' + i);
        }
    }
}

generate_menu(menuData, '.menu');
