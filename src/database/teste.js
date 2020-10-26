const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage')
Database.then(async db => {/*
    // Inserindo dados na tabela
    await saveOrphanage(db, {
        lat: "-23.1894443",
        lng: "-46.0030986",
        name: "Lar dos Meninos",
        about: "Presta assitência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social",
        whatsapp: "99999-9999",
        images: [
            "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        ].toString(),
        instructions: "Venha se sentir a vontade e traga m uito amor para dar ",
        opening_hours: "Horário de visitas Das 15h até as 18h",
        open_on_weekends: "1"  
    })
    */
    /*    await db.run(`
            INSERT INTO orphanages (
                lat,
                lng,
                name,
                about,
                whatsapp,
                images,
                instructions,
                opening_hours,
                open_on_weekends
            )VALUES (
                "-23.1894443",
                "-46.0030986",
                "Fake orphanage",
                "Presta assitência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social",
                "99999-9999",
                "https://images.unsplash.com/photo-1602622931974-78228760b7b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", "Venha se sentir a vontade e traga m uito amor para dar ",  
                "Horário de visitas Das 15h até as 18h",
                "1"            
            );
        `)

    // Consultar dados da tabela
        const selectedOrphanages = await db.all("SELECT * FROM orphanages");

        console.log(selectedOrphanages);
        
    // Consultar pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"');
    console.log(orphanage);

    // Deletar dados de tabela

    console.log(await db.run('DELETE FROM orphanages WHERE id="4"'))
*/
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");

    console.log(selectedOrphanages);
})