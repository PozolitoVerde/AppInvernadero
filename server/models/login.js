const mongoose = require('mongoose')
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const LoginScheme = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
          },
          password: {
            type: String,
            required: true
          }

    }
);

// Antes de guardar, se encripta la contraseña con bcrypt
userSchema.pre('save', async function(next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });

  // Método para comparar contraseñas
userSchema.methods.comparePasswords = async function(password) {
    try {
      const match = await bcrypt.compare(password, this.password);
      return match;
    } catch (error) {
      return error;
    }
  }
  
  const login = mongoose.model('Login', LoginScheme);
  
  module.exports = login;