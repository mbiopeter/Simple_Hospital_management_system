import { db } from "../connect.js";

export const addEmployee = (req, res) => {
    try {
        // Verify all required data is available
        if (!req.body.FirstName || !req.body.LastName || !req.body.DateOfBirth || !req.body.IdNumber) {
            return res.status(400).json({ message: "Missing required data" });
        }

        // Check if the user already exists
        const checkQuery = `
            SELECT * FROM employees
            WHERE IdNumber = ?
        `;

        db.query(checkQuery, [req.body.IdNumber], (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Error checking user existence", error: err });
            }

            if (result.length > 0) {
                return res.status(400).json({ error: "User already exists" });
            }
            else {
                // If the user doesn't exist, proceed with insertion
                const insertQuery = `
                    INSERT INTO 
                    employees(FirstName, LastName, DateOfBirth, Gender, PhoneNumber, IdNumber, Roles)
                    VALUES(?,?,?,?,?,?,?)
                `;

                const roles = req.body.Roles ? JSON.stringify(req.body.Roles) : null;

                const params = [
                    req.body.FirstName,
                    req.body.LastName,
                    req.body.DateOfBirth,
                    req.body.Gender || null, // Assuming Gender is optional
                    req.body.PhoneNumber || null,
                    req.body.IdNumber,
                    roles // Stringified array of roles
                ];

                db.query(insertQuery, params, (err, data) => {
                    if (err) {
                        return res.status(500).json({ error: "Error adding user", error: err });
                    }
                    return res.status(200).json({ success: "User successfully created" });
                });
            }
        });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

export const addPatient = (req, res) => {
    try {
        // Verify all required data is available
        if (!req.body.RegistrationNumber || !req.body.FirstName || !req.body.LastName || !req.body.PatientId) {
            return res.status(400).json({ message: "Missing required data" });
        }

        // Check if the patient already exists
        const checkQuery = `
            SELECT * FROM patients
            WHERE PatientId = ?
        `;

        db.query(checkQuery, [req.body.PatientId], (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Error checking patient existence", error: err });
            }

            if (result.length > 0) {
                //update patient information
                const updateQuery = `
                    UPDATE patients SET 
                    Height = ?,
                    Weight = ?
                    WHERE PatientId = ?
                `;
                const params = [
                    req.body.Height,
                    req.body.Weight,
                    req.body.PatientId
                ];
                db.query(updateQuery, params, (err, data) => {
                    if (err) {
                        return res.status(500).json({ error: "Error updating patient information", error: err });
                    }
                    return res.status(200).json({ success: "Patient Information successfully updated" });
                });
            }
            else {
                // If the patient doesn't exist, proceed with insertion
                const insertQuery = `
                    INSERT INTO 
                    patients(RegistrationNumber, FirstName, LastName, DateOfBirth, Gender, PhoneNumber, EmailId, Height, Weight, BloodGroup, PatientId)
                    VALUES(?,?,?,?,?,?,?,?,?,?,?)
                `;

                const params = [
                    req.body.RegistrationNumber,
                    req.body.FirstName,
                    req.body.LastName,
                    req.body.DateOfBirth || null,
                    req.body.Gender || null,
                    req.body.PhoneNumber || null,
                    req.body.EmailId,
                    req.body.Height,
                    req.body.Weight,
                    req.body.BloodGroup,
                    req.body.PatientId || null,
                ];

                db.query(insertQuery, params, (err, data) => {
                    if (err) {
                        return res.status(500).json({ error: "Error adding user", error: err });
                    }
                    return res.status(200).json({ success: "Patient successfully registered" });
                });
            }
        });

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

export const sheduleAppointment = (req, res) => {
    try {
        // Verify all required data is available
        if (!req.body.Doctor || !req.body.Date || !req.body.Time) {
            return res.status(400).json({ message: "Missing required data" });
        }
        if (!req.body.user) {
            return res.status(400).json({ message: "User not logged in" });
        }
        else {
            // Check if the appointment already exists
            const checkQuery = `
                SELECT * FROM appointments
                WHERE user_id = ?
            `;

            db.query(checkQuery, [req.body.user_id], (err, result) => {
                if (err) {
                    return res.status(500).json({ error: "Error checking appointment existence", error: err });
                }

                if (result.length > 0) {
                    //update patient information
                    const updateQuery = `
                        UPDATE appointments SET
                        Doctor_id = ?,
                        Date = ?,
                        Time = ?,
                        status = ?
                        WHERE user_id = ?
                    `;
                    const params = [
                        req.body.Doctor,
                        req.body.Date,
                        req.body.Time,
                        'Pedding',
                        req.body.user
                    ];
                    db.query(updateQuery, params, (err, data) => {
                        if (err) {
                            return res.status(500).json({ error: "Error updating appointment information", error: err });
                        }
                        return res.status(200).json({ success: "Appointment Information successfully updated" });
                    });
                }
                else {
                    // If Appointment doesn't exist, proceed with insertion
                    const insertQuery = `
                        INSERT INTO 
                        appointments(Doctor_id, Date, Time,status, user_id)
                        VALUES(?,?,?,?,?)
                    `;

                    const params = [
                        req.body.Doctor,
                        req.body.Date,
                        req.body.Time,
                        'Pedding',
                        req.body.user
                    ];

                    db.query(insertQuery, params, (err, data) => {
                        if (err) {
                            return res.status(500).json({ error: "Error adding an appointment", error: err });
                        }
                        return res.status(200).json({ success: "Appointment successfully booked" });
                    });
                }
            });
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}


export const addTreatment = (req, res) => {
    try {
        // Verify all required data is available
        if (!req.body.PatientRegistrationNumber) {
            return res.status(400).json({ message: "PatientRegistrationNumber cannot be null" });
        }
        else {
            // Check if the appointment already exists
            const checkQuery = `
                SELECT * FROM treatments
                WHERE PatientRegistrationNumber = ?
            `;

            db.query(checkQuery, [req.body.PatientRegistrationNumber], (err, result) => {
                if (err) {
                    return res.status(500).json({ error: "Error checking treatment existence", error: err });
                }

                if (result.length > 0) {
                    //update patient information
                    const updateQuery = `
                        UPDATE treatments SET
                        Allergies = ?,
                        CurrentMedication = ?,
                        DiagnosisCode = ?,
                        DiagnosisDescription = ?,
                        DiagnosisDate = ?,
                        TreatmentType = ?,
                        TreatmentDescription = ?,
                        TreatmentStart = ?,
                        TreatmentEnd = ?,
                        MedicationName = ?,
                        Dosage = ?,
                        AdministrationRoute = ?,
                        Schedule = ?,
                        ProcedureName = ?,
                        ProcedureCode = ?,
                        ScheduledDate = ?,
                        ScheduleTime = ?,
                        Location = ?
                        WHERE PatientRegistrationNumber = ?
                    `;
                    const params = [
                        req.body.Allergies,
                        req.body.CurrentMedication,
                        req.body.DiagnosisCode,
                        req.body.DiagnosisDescription,
                        req.body.DiagnosisDate,
                        req.body.TreatmentType,
                        req.body.TreatmentDescription,
                        req.body.TreatmentStart,
                        req.body.TreatmentEnd,
                        req.body.MedicationName,
                        req.body.Dosage,
                        req.body.AdministrationRoute,
                        req.body.Schedule,
                        req.body.ProcedureName,
                        req.body.ProcedureCode,
                        req.body.ScheduledDate,
                        req.body.ScheduleTime,
                        req.body.Location,
                        req.body.PatientRegistrationNumber,

                    ];
                    db.query(updateQuery, params, (err, data) => {
                        if (err) {
                            return res.status(500).json({ error: "Error updating treatment information", error: err });
                        }
                        return res.status(200).json({ success: "Appointment Information successfully updated" });
                    });
                }
                else {
                    // If treatment doesn't exist, proceed with insertion
                    const insertQuery = `
                        INSERT INTO 
                        treatments(PatientRegistrationNumber, Allergies, CurrentMedication, DiagnosisCode, DiagnosisDescription, DiagnosisDate, TreatmentType, TreatmentDescription, TreatmentStart, TreatmentEnd, MedicationName, Dosage, AdministrationRoute, Schedule, ProcedureName, ProcedureCode, ScheduledDate, ScheduleTime, Location)
                        VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
                    `;

                    const params = [
                        req.body.PatientRegistrationNumber,
                        req.body.Allergies,
                        req.body.CurrentMedication,
                        req.body.DiagnosisCode,
                        req.body.DiagnosisDescription,
                        req.body.DiagnosisDate,
                        req.body.TreatmentType,
                        req.body.TreatmentDescription,
                        req.body.TreatmentStart,
                        req.body.TreatmentEnd,
                        req.body.MedicationName,
                        req.body.Dosage,
                        req.body.AdministrationRoute,
                        req.body.Schedule,
                        req.body.ProcedureName,
                        req.body.ProcedureCode,
                        req.body.ScheduledDate,
                        req.body.ScheduleTime,
                        req.body.Location,
                    ];

                    db.query(insertQuery, params, (err, data) => {
                        if (err) {
                            return res.status(500).json({ error: "Error adding an appointment", error: err });
                        }
                        return res.status(200).json({ success: "Appointment successfully booked" });
                    });
                }
            });
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}


export const getAllEmployees = (req, res) => {
    const selectQuery = `SELECT FirstName, LastName, DateOfBirth, Gender, PhoneNumber, IdNumber 
    FROM employees`
        ;

    db.query(selectQuery, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error fetching employees", error: err });
        }
        if (data) {
            const formattedData = data.map(employee => ({
                name: {
                    firstName: employee.FirstName,
                    lastName: employee.LastName,
                },
                gender: employee.Gender,
                phoneNumber: employee.PhoneNumber,
                idNumber: employee.IdNumber
            }));

            return res.status(200).json({ data: formattedData });
        }
    });
}


export const getAllPatients = (req, res) => {
    const selectQuery = `SELECT FirstName, LastName, DateOfBirth, Gender, PhoneNumber, PatientId 
    FROM patients`
        ;

    db.query(selectQuery, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error fetching patients", error: err });
        }
        if (data) {
            const formattedData = data.map(patient => ({
                name: {
                    firstName: patient.FirstName,
                    lastName: patient.LastName,
                },
                gender: patient.Gender,
                phoneNumber: patient.PhoneNumber,
                idNumber: patient.PatientId
            }));

            return res.status(200).json({ data: formattedData });
        }
    });
}

export const getAllAppointments = (req, res) => {
    const selectQuery = `
        SELECT 
            e.FirstName AS firstName, 
            e.LastName AS lastName, 
            a.Date AS date, 
            a.Time AS time, 
            a.user_id AS user,
            a.id As id,
            a.status
        FROM 
            appointments AS a
        INNER JOIN 
            employees AS e 
        ON 
            a.Doctor_id = e.id
    `;

    db.query(selectQuery, [], (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error fetching appointments", details: err });
        }
        if (data) {
            const formattedData = data.map(appointment => ({
                name: {
                    firstName: appointment.firstName,
                    lastName: appointment.lastName,
                },
                date: appointment.date,
                time: appointment.time,
                user: appointment.user,
                id: appointment.id,
                status: appointment.status
            }));

            return res.status(200).json({ data: formattedData });
        }
    });
}


export const getAllTreatments = (req, res) => {
    const selectQuery = `SELECT 
        p.FirstName,
        p.LastName,
        t.DiagnosisCode, 
        t.DiagnosisDate, 
        t.TreatmentType, 
        t.TreatmentStart, 
        t.TreatmentEnd 
    FROM 
        treatments AS t
    INNER JOIN 
        patients AS p
    ON
        p.RegistrationNumber = t.PatientRegistrationNumber
    `;

    db.query(selectQuery, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error fetching treatments", error: err });
        }
        if (data) {
            const formattedData = data.map(patient => ({
                name: {
                    firstName: patient.FirstName,
                    lastName: patient.LastName,
                },
                diagnosisCode: patient.DiagnosisCode,
                diagnosisDate: patient.DiagnosisDate,
                treatmentType: patient.TreatmentType,
                treatmentStart: patient.TreatmentStart,
                treatmentEnd: patient.treatmentEnd,
            }));

            return res.status(200).json({ data: formattedData });
        }
    });
}

export const acceptAppointment = (req, res) => {
    const updateQuery = `
        UPDATE appointments SET status = ? WHERE id = ?;
    `;
    db.query(updateQuery, ['Accepted', req.body.id], (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error accepting appointments", details: err });
        }
        return res.status(200).json({ success: "Appointment successfully accepted" });
    })
}

export const rejectedAppointment = (req, res) => {
    const updateQuery = `
        UPDATE appointments SET status = ? WHERE id = ?;
    `;
    db.query(updateQuery, ['Rejected', req.body.id], (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error accepting appointments", details: err });
        }
        return res.status(200).json({ success: "Appointment successfully Rejected" });
    })
}


export const AllEmployees = (req, res) => {
    const selectQuery = `
        SELECT id,FirstName, LastName,Roles FROM employees
    `;

    db.query(selectQuery, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error fetching employees", details: err });
        }

        if (data.length === 0) {
            return res.status(404).json({ error: "No employees found" });
        }

        const employees = data.map(employee => {
            return {
                id: employee.id,
                role: employee.Roles,
                fullName: employee.FirstName + " " + employee.LastName
            };
        });

        return res.status(200).json({ data: employees });
    });
};

export const maxRegNo = (req, res) => {
    const selectQuery = `
        SELECT MAX(id) AS id FROM patients;
    `;
    db.query(selectQuery, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error fetching patients", details: err });
        }
        if (data.length > 0) {
            const formattedData = { id: data[0].id + 1 };
            return res.status(200).json({ data: formattedData });
        } else {
            return res.status(404).json({ error: "No patients found" });
        }
    });
}
