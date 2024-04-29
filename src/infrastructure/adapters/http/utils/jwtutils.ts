import Jwt  from "jsonwebtoken";

const generateToken = (payload: any): string => {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret){
        throw new Error("JWT_SECRET no esta definido en el archivo .env");
    }
    const token = Jwt.sign(payload, jwtSecret, {expiresIn: '1h'});
    return token;
};

const verifyToken = (token : string): any => {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret){
        throw new Error("JWT_SECRET no esta definido en el archivo .env");
    }
    try{
        const decoded = Jwt.verify(token, jwtSecret);
        return decoded; 
    }catch (error) {
        console.log('Error verifying token: ', error)
        return null;
    }
};


export {generateToken, verifyToken}