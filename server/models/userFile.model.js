class UserFile {
  constructor(userId, lastName, firstName, age, profilePic) {
    this.userId = userId;
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.profilePic = profilePic;
  }
}

//modèle table user_file avant la video 239
// class UserFile {
//   constructor(
//     user_file_userId,
//     user_file_lastName,
//     user_file_firstName,
//     user_file_age,
//     user_file_profilePic
//   ) {
//     this.user_file_userId = user_file_userId;
//     this.user_file_lastName = user_file_lastName;
//     this.user_file_firstName = user_file_firstName;
//     this.user_file_age = user_file_age;
//     this.user_file_profilePic = user_file_profilePic;
//   }
// }

module.exports = UserFile;
