const Student = require('../models/student');

const createStudent = (req, res) => {
    const { name, fatherName, motherName, education, address } = req.body;
    const newStudent = new Student({
        name,
        fatherName,
        motherName,
        education,
        address
    });

    newStudent.save()
        .then(savedStudent => {
            res.status(201).json(savedStudent);
        })
        .catch(error => {
            res.status(500).json({ error: "Failed to create student", details: error.message });
        });
};


const getAllStudents= async (req, res) => {
    
    try {
        const student = await Student.find();
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateStudents = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json({ message: 'Student updated successfully', student: updatedStudent });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteStudents = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json({ message: 'Student deleted successfully', student: deletedStudent });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createStudent,
    getAllStudents,
    updateStudents,
    deleteStudents
};
