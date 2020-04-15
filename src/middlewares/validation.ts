import * as Joi from '@hapi/joi';
import { iUser } from '../interfaces/iUser';


export const createUserValidation = (user: iUser) => {
    const schema = Joi.object({
        name: Joi.string().min(2),
        email: Joi.string()
            .email()
            .min(6),
        password: Joi.string()
            .min(3)
            .required(),
        passwordConfirm: Joi.string()
            .min(3)
            .required()
            .valid(Joi.ref('password'))
            .error(new Error('Password and passwordConfirm are not equal'))
    });
    return schema.validate(user);
};

export const updateUserValidation = (user: iUser) => {
    const schema = Joi.object({
        name: Joi.string().min(2),
        email: Joi.string()
            .email()
            .min(6)

    });
    return schema.validate(user);
};

interface iReset {
    token: string;
    password: string;
    passwordConfirm: string;
}

export const resetPasswordValidation = (
    resetPasswordData: iReset
) => {
    const schema = Joi.object({
        token: Joi.string(),
        password: Joi.string()
            .min(3)
            .required(),
        passwordConfirm: Joi.string()
            .min(3)
            .required()
            .valid(Joi.ref('password'))
            .error(
                new Error(
                    'Password and confirmPassword are not equal'
                )
            )
    });
    return schema.validate(resetPasswordData);
};
