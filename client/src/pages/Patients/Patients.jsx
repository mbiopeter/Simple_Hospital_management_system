import React, { useEffect, useMemo } from 'react';
import List from '../../components/Controllers/List/List';
import { useState } from 'react';
import LinearIndeterminate from '../../components/Loading.jsx/Loading';

const Patients = () => {    
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8800/api/getAllPatients")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.data) {
                    setPatients(data.data);
                } else {
                    console.error("Invalid response structure", data);
                }
            })
            .catch((error) => {
                console.error("Error fetching patients:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

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
                accessorKey: 'gender', // normal accessorKey
                header: 'Gender',
                size: 200,
            },
            {
                accessorKey: 'phoneNumber',
                header: 'Phone Number',
                size: 150,
            },
            {
                accessorKey: 'idNumber',
                header: 'ID Number',
                size: 150,
            },
        ],
        []
    );

    if (loading) {
        return <LinearIndeterminate/>;
    }

    return (
        <List 
        title='All Patients'
        path='/patients/new'
        button='Add Patient'
        data={patients}
        columns={columns}
        />
    )
}

export default Patients
