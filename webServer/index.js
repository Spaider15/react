/**
 * Created by Busarov Ivan Spaider629@gmail.com on 11/26/2016.
 */
const http = require('http');
const server = http.createServer((req,res) => {
    const delivery = [
        {
            id : 1,
            date : 2016-11-20,
            route : 50,
            stk : 15,
            city : 1,
            responsible : 1,
            price : 1000,
            stock : 200,
            percent : 10,
            operator : 400,
            amount : 800,
            note: '',
            closed : 'on'
        },
        {
            id : 2,
            date : 2016-12-15,
            route : 20,
            stk : 10,
            city : 2,
            responsible : 2,
            price : 1000,
            stock : 200,
            percent : 10,
            operator : 400,
            amount : 800,
            note: '',
            closed : 0
        },
        {
            id : 3,
            date : 2016-11-20,
            route : 50,
            stk : 15,
            city : 1,
            responsible : 1,
            price : 1000,
            stock : 200,
            percent : 10,
            operator : 400,
            amount : 800,
            note: '',
            closed : 'on'
        },
        {
            id : 4,
            date : 2016-12-15,
            route : 20,
            stk : 10,
            city : 2,
            responsible : 2,
            price : 1000,
            stock : 200,
            percent : 10,
            operator : 400,
            amount : 800,
            note: '',
            closed : 0
        }
    ];

    const assembly = [
        {
            id : 1,
            date : 2016-11-20,
            city : 'Казань',
            adress : 'Московская 20',
            responsible : 'Максим',
            price : 1000,
            phone : 88888888,
            order : 'Комод',
            operator : 400,
            note: 'Комментарий',
            closed : 'on'
        },
        {
            id : 2,
            date : 2016-11-20,
            city : 'Казань',
            adress : 'Московская 20',
            responsible : 'Максим',
            price : 1000,
            phone : 88888888,
            order : 'Комод',
            operator : 400,
            note: 'Комментарий',
            closed : 'on'
        },
        {
            id : 3,
            date : 2016-11-20,
            city : 'Казань',
            adress : 'Московская 20',
            responsible : 'Артур',
            price : 1000,
            phone : 88888888,
            order : 'Комод',
            operator : 400,
            note: 'Комментарий',
            closed : 'on'
        },
        {
            id : 4,
            date : 2016-11-20,
            city : 'Казань',
            adress : 'Московская 20',
            responsible : 'Коля',
            price : 1000,
            phone : 88888888,
            order : 'Комод',
            operator : 400,
            note: 'Комментарий',
            closed : 'on'
        }
    ];

    res.setHeader("Access-Control-Allow-Origin", "*");
    switch(req.url){
        case '/auth':
            res.end(JSON.stringify({ displayName : 'Spaider' }));
            break;
        case '/delivery':
            setTimeout( () => { res.end(JSON.stringify(delivery));
            }, 1000 )
            break;
        case '/assembly':
            setTimeout( () => { res.end(JSON.stringify(assembly));
            }, 1000 )
            break;
        default:
            res.end('test web server')
    }

});
server.listen('8080');