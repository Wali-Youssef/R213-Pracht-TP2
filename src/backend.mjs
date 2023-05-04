import Pocketbase from 'pocketbase' ;
const pb = new Pocketbase('http://127.0.0.1:8090') ;


try { const records = await pb.collection('agence').getFullList() ;
    console.table(records) ;
} catch (e) {
    console.error(e) ;
}

















try { const records = await pb.collection('agence').getOne('hcckdyul4kijvmd') ;
    console.table(records) ;
} catch (e) {
    console.error(e) ;
}

try {const records = await pb.collection('agence').getFullList({sort: 'created',});
    console.table(records) ;
} catch (e) {
    console.error(e) ;
}

try {const records = await pb.collection('agence').getFullList({sort: '-created',});
    console.table(records) ;
} catch (e) {
    console.error(e) ;
}

try {const records = await pb.collection('agence').getFullList({filter: 'favori=TRUE',});
    console.table(records) ;
} catch (e) {
    console.error(e) ;
}

try {const records = await pb.collection('agence').getFullList({filter: 'surface >= 100',});
    console.table(records) ;
} catch (e) {
    console.error(e) ;
}

try {const records = await pb.collection('agence').getFullList({filter: 'surface >= 100' &&  'nbrSd >= 2',});
    console.table(records) ;
} catch (e) {
    console.error(e) ;
}

try {const records = await pb.collection('agence').getFullList({filter: 'surface >= 100' || 'nbrChambres >= 3',});
    console.table(records) ;
} catch (e) {
    console.error(e) ;
}

try {const records = await pb.collection('agence').getFullList({filter: 'surface >= 100' , sort: 'prix',});
    console.table(records) ;
} catch (e) {
    console.error(e) ;
}

try {const records = await pb.collection('agence').getFullList({sort: 'nomMaison',});
    console.table(records) ;
} catch (e) {
    console.error(e) ;
}


