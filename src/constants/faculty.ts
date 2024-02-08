const facultyDesignation = [
  "Professor",
  "Assistant Professor",
  "Associate Professor",
  "Lecturer",
];

export const facultyDesignationOptions = facultyDesignation.map(
  (designation) => ({
    label: designation,
    value: designation,
  })
);
