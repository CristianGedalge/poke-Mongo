import * as j from 'joi'

export const joiSchema= j.object({
    MONGODB:j.string().required() ,
    PORT:j.number().default(4000),
    NODE_ENV: j.string().required(),
    DEFAULT_LIMIT:j.number().default(7)
})