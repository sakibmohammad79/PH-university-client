export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const genderName = ["Male", "Female", "Other"];

export const bloodGroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const monthOptions = monthNames.map((month) => ({
  value: month,
  label: month,
}));
export const genderOptions = genderName.map((gender) => ({
  value: gender.toLowerCase(),
  label: gender,
}));
export const bloodGroupOptions = bloodGroup.map((group) => ({
  value: group,
  label: group,
}));
