var user = [
    {
        id: 'A1',
        fName: 'Ron',
        lName: 'Mattews',
        email: 'ron@xyz.com',
        pinCode: 123,
        birthDate: '01-MAR-1992',
        isActive: true
    }, {
        id: 'A2',
        fName: 'Jack',
        lName: 'Mattews',
        email: 'Jack@xyz.com',
        pinCode: 123,
        birthDate: '01-MAR-1992',
        isActive: true
    }, {
        id: 'A3',
        fName: 'Don',
        lName: 'Mattews',
        email: 'Don@xyz.com',
        pinCode: 123,
        birthDate: '01-MAR-1992',
        isActive: true
    }, {
        id: 'A4',
        fName: 'Tom',
        lName: 'Mattews',
        email: 'tom@xyz.com',
        pinCode: 123,
        birthDate: '01-MAR-1992',
        isActive: true
    }
]

var ToDo = [
    {
        id: 'ToDo1',
        userid: 'A2',
        text: 'creating demos',
        done: false,
        targetDate: '11/17/2017'
    },
    {
        id: 'ToDo2',
        userid: 'A4',
        text: 'presenting demos',
        done: false,
        targetDate: '11/17/2017'
    }, {
        id: 'ToDo3',
        userid: 'A2',
        text: 'creating demos',
        done: true,
        targetDate: '11/18/2017'
    }, {
        id: 'ToDo4',
        userid: 'A1',
        text: 'preparing demos',
        done: true,
        targetDate: '11/17/2017'
    }
];

var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.getDetails = function (req, res) {
    var id = req.params.id;
    var UserDetails = [];
    for (let k in user) {
        //console.log(user[k] ,": user Details");
        if (user[k].id === id) {
            UserDetails.push({ userDt: user[k] });
            for (let T in ToDo) {
                if (ToDo[T].userid === id) {
                    UserDetails.push({ toDoDt: ToDo[T] });
                }
            }
        }
    }
    res.json(UserDetails);
}


exports.getToDo = function (req, res) {
    var id = req.params.ToDoid;
    for (let k in ToDo) {
        if (ToDo[k].id === id) {
            res.json(ToDo[k])
        }
    }
}

exports.getActiveUser = function (req, res) {
    var ActiveUsers = [];
    for (let k in user) {
        //console.log(user[k] ,": user Details");
        if (user[k].isActive === true) {
            ActiveUsers.push({ userDt: user[k] });
            for (let T in ToDo) {
                if (ToDo[T].userid === user[k].id) {
                    ActiveUsers.push({ toDoDt: ToDo[T] });
                }
            }
        }
    }
    res.json(ActiveUsers);
}

exports.getActiveTodo = function (req, res) {
    var id = req.params.id;
    var today = new Date();
    var ActiveTodoUsers = [];
    for (let k in user) {
         if (user[k].id === id && user[k].isActive === true) {
           // ActiveTodoUsers.push({ userDt: user[k] });
            for (let T in ToDo) {
                if (ToDo[T].userid === user[k].id) {
                    var dt = new Date(ToDo[T]);
                    if(today >= dt)
                    ActiveTodoUsers.push({ toDoDt: ToDo[T],userDt: user[k] });
                }
            }
        }
    }
    res.json(ActiveTodoUsers);
}


    