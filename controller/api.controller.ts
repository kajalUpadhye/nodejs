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
    var id = req.param.id;
    console.log(id, ": id")
    console.log("inside api")
    console.log("Here we can write functions for getting reqiured Details")
    for(let k in user){
        //console.log(user[k] ,": user Details");
        }
    }

    //if we have mongo DB connection
    // User.find({}, function (err, task) {
    //     console.log(res, ":::res")
    //     if (err)
    //         res.send(err);
    //     res.json(task);
    // });
//};
