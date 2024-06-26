const menssagens = [
    {
        id: 1,
        mensagens: [ 
            {
                idMsg: 1,
                name: "Eae meu mano",
                data: "11:35",
                senderP: false,
            },
    
            {
                idMsg: 2,
                name: "Eae",
                data: "11:35",
                senderP: true,
            },
    
            {
                idMsg: 3,
                name: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de , fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero).",
                data: "11:35",
                senderP: true,
            },
    
            {
                idMsg: 4,
                name: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de , fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero).",
                data: "11:35",
                senderP: false,
            },
    
            {
                idMsg: 5,
                name: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem",
                data: "11:35",
                senderP: true,
            },
    
            {
                idMsg: 6,
                name: "aaaaaaaaaaaaaaaa",
                data: "11:36",
                senderP: false,
            }
        ]
    },
    {
        id: 2,
        mensagens: [ 
            {
                idMsg: 1,
                name: "Eae meu mano",
                data: "11:35",
                senderP: false,
            },
    
            {
                idMsg: 2,
                name: "Eae",
                data: "11:35",
                senderP: true,
            }
        ]
    },
    {
        id: 3,
        mensagens: [ 
            {
                idMsg: 1,
                name: "Eae maaaaaaaaaaaaaaaaano",
                data: "11:35",
                senderP: false,
            },
    
            {
                idMsg: 2,
                name: "Eae",
                data: "11:35",
                senderP: true,
            }
        ]
    }
]

const getUserMsg = (id : number) => {
    return menssagens.find((mssg) => mssg.id === id);
}

export const getUserMessages = async (id : number) => {
    const userMessages = getUserMsg(id);
    return userMessages ? userMessages.mensagens : null;
}