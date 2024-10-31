const appointmentlist=document.getElementById('appointmentList');

window.addEventListener('DOMContentLoaded', () => {
    axios.get('http://127.0.0.1:3000/appointments/user')
    .then((result) => {
        const appointments=result.data;
        appointmentlist.innerHTML='';
        appointments.forEach(appointment => {
            const li = document.createElement('li');
            li.textContent = `${appointment.username} - ${appointment.phone} - ${appointment.email}`;
            const dltbtn=document.createElement('button')
            dltbtn.textContent='Delete';
            dltbtn.onclick = () => deleteevent(appointment.id, li);
            const editbtn=document.createElement('button');
            editbtn.textContent='Edit';
            li.appendChild(editbtn);
            li.appendChild(dltbtn);
            appointmentlist.appendChild(li);   
        });
    }).catch((err) => {
        console.log(err);
    });
})

function addingappointment(event) {
    event.preventDefault();
    const name=event.target.name.value;
    const phone=event.target.phone.value;
    const email=event.target.email.value;
    const user={
        name,
        phone,
        email
    }
    axios.post('http://127.0.0.1:3000/appointments', user)
    .then(result => {
            const appointment=result.data;
            const li = document.createElement('li');
            li.textContent = `${appointment.username} - ${appointment.phone} - ${appointment.email}`;
            const dltbtn=document.createElement('button')
            dltbtn.textContent='Delete';
            dltbtn.onclick = () => deleteevent(appointment.id, li);
            const editbtn=document.createElement('button');
            editbtn.textContent='Edit';
            li.appendChild(editbtn);
            li.appendChild(dltbtn);
            appointmentlist.appendChild(li); 
    })
    .catch(err => console.log(err));
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
}

function deleteevent(id,li) {
    axios.delete(`http://127.0.0.1:3000/appointments/delete/${id}`)
    .then(res=>{
        if (res.status === 204) { // Check if the response indicates success
            appointmentlist.removeChild(li);
        } else {
            console.error('Failed to delete the appointment:', res);
        }
    })
    .catch(err=> console.log(err));   
}