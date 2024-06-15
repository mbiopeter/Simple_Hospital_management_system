import React, { useMemo, useState, useEffect } from 'react';
import List from '../../components/Controllers/List/List';
import LinearIndeterminate from '../../components/Loading.jsx/Loading';

const Employees = () => {    
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8800/api/getAllEmployees")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.data) {
                    setEmployees(data.data);
                } else {
                    console.error("Invalid response structure", data);
                }
            })
            .catch((error) => {
                console.error("Error fetching employees:", error);
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
            title='All Employees'
            path='/employees/new'
            button='Add Employee'
            data={employees}
            columns={columns}
        />
    );
}

export default Employees;
