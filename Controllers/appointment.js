const User= require('../models/users')

exports.getAppointments = ((req, res, next) => {
    User.findAll()
    .then(users =>{
       return res.json(users);
    })
    .catch(err => console.log(err));
});

exports.postAppointments=((req, res, next) => {
    const name=req.body.name;
    const phone=req.body.phone;
    const email=req.body.email;
    User.create({
        username:name,
        phone:phone,
        email:email
    }).then(result => {
        console.log('user created');
        return res.json(result);
    }).catch(err => console.log(err));
})

exports.deleteAppointments = ((req, res, next) => {
    const id = req.params.id;
    console.log(id);
    User.findByPk(id)
    .then(appointment =>{
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        return appointment.destroy();
    })
    .then(() => {
        console.log('appiontment cancelled');
        res.status(204).send();
    })
    .catch(err=> console.log(err));
});