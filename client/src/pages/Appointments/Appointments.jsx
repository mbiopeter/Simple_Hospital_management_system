import React, { useEffect, useMemo, useState } from 'react';
import List from '../../components/Controllers/List/List';
import './Appointments.css';
import LinearIndeterminate from '../../components/Loading.jsx/Loading';

const Appointments = () => {   
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [appId, SetAppId] = useState({id:""});

    useEffect(() => {
        fetch("http://localhost:8800/api/getAllAppointments")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.data) {
                    const updatedData = data.data.map(appointment => ({
                        ...appointment,
                        action: (
                            appointment.status === 'Pedding' ? (
                                <div>
                                    <button 
                                        onClick={() => handleAccept(appointment.id)} 
                                        className="action-button accept-button"
                                    >
                                        Accept
                                    </button>
                                    <button 
                                        onClick={() => handleReject(appointment.id)} 
                                        className="action-button reject-button"
                                    >
                                        Reject
                                    </button>
                                </div>
                            )
                            :appointment.status === 'Accepted' ? (
                                <div>
                                    <button 
                                        className="action-button accept-button"
                                    >
                                        Accepted
                                    </button>
                                </div>
                            )
                            :appointment.status === 'Rejected' && (
                                <div>
                                    <button 
                                        className="action-button accept-button"
                                        style={{backgroundColor: 'red'}}
                                    >
                                        Rejected
                                    </button>
                                </div>
                            )
                        )
                    }));
                    setAppointments(updatedData);
                } else {
                    console.error("Invalid response structure", data);
                }
            })
            .catch((error) => {
                console.error("Error fetching appointments:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleAccept = async(appointmentId) => {
        appId.id = appointmentId;
        await fetch("http://localhost:8800/api/acceptAppointment", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appId),               
        }).then((res) => res.json()).then((data) => {
            data.success ? alert(data.success) : alert(data.error)
        })
    };

    const handleReject = async(appointmentId) => {
        appId.id = appointmentId;
        await fetch("http://localhost:8800/api/rejectedAppointment", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appId),               
        }).then((res) => res.json()).then((data) => {
            data.success ? alert(data.success) : alert(data.error)
        })
    };

    const columns = useMemo(
        () => [
            {
                accessorKey: 'name.firstName', // access nested data with dot notation
                header: 'First Name',
                size: 150,
            },
            {
                accessorKey: 'name.lastName',
                header: 'Last Name',
                size: 150,
            },
            {
                accessorKey: 'date',
                header: 'Date',
                size: 250,
            },
            {
                accessorKey: 'time',
                header: 'Time',
                size: 250,
            },
            {
                accessorKey: 'user',
                header: 'User',
                size: 150,
            },
            {
                accessorKey: 'action',
                header: 'Action',
                size: 250,
            },
        ],
        []
    );

    if (loading) {
        return <LinearIndeterminate />;
    }

    return (
        <List 
            title='All Appointments'
            data={appointments}
            columns={columns}
        />
    );
}

export default Appointments;
