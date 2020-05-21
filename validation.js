//VALIDATION
const Joi = require('@hapi/joi');

//register validation
const regValidation = data => {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(50)
            .required(),
    
        email: Joi.string()
            .min(6)
            .max(50)
            .required()
            .email(),
    
        password: Joi.string()
            .min(6)
            .max(50)
            .required()
    
    });

    return schema.validate(data);
};

const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string()
            .min(6)
            .max(50)
            .required()
            .email(),
    
        password: Joi.string()
            .min(6)
            .max(50)
            .required()
    
    });

    return schema.validate(data);
};



module.exports.regValidation = regValidation;
module.exports.loginValidation = loginValidation;