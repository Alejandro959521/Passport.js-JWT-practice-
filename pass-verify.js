const bcrypt = require('bcrypt');

async function verifyPassword() {

  const myPassword = 'admin123';
  const hash = '$2b$10$chhdTKikTNddounzN9IAxuUKXqca8aWu6WDx2JPRfek2MKgX6KdhO'
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);

}

verifyPassword();

