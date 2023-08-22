import {UnAuthenticatedError} from '../errors/index.js'
import  jwt  from "jsonwebtoken"

const auth = async (req,res,next)=>{
    // const authHeader = req.headers.authorization
    // if(!authHeader || !authHeader.startsWith('Bearer') ){
    //     throw new UnAuthenticatedError('Authenticated Invalid')
    // }
    // const token = authHeader.split(' ')[1]
    const token = req.cookies.token;
    if (!token) {
      throw new UnAuthenticatedError('Authentication Invalid');
    }
    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {userId: payload.userId}
        next()
    }catch{
        res.send('Authenticated Invalid')

    }

}

export default auth