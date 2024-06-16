import React, { useEffect, useMemo, useState } from 'react';
import List from '../../components/Controllers/List/List';
import LinearIndeterminate from '../../components/Loading.jsx/Loading';

const Treatments = () => {    
    const [treatments, setTreatments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8800/api/getAllTreatments")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.data) {
                    setTreatments(data.data);
                } else {
                    console.error("Invalid response structure", data);
                }
            })
            .catch((error) => {
                console.error("Error fetching treatments:", error);
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
                accessorKey: 'diagnosisCode', // normal accessorKey
                header: 'Diagnosis Code',
                size: 200,
            },
            {
                accessorKey: 'diagnosisDate',
                header: 'Diagnosis Date',
                size: 150,
            },
            {
                accessorKey: 'treatmentType',
                header: 'Treatment Type',
                size: 150,
            },
            {
                accessorKey: 'treatmentStart',
                header: 'Treatment Start',
                size: 150,
            },
            {
                accessorKey: 'treatmentEnd',
                header: 'Treatment End',
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
        title='All Treatments'
        path='/treatment/New'
        button='Add Treatment'
        data={treatments}
        columns={columns}
        />
    )
}

export default Treatments
