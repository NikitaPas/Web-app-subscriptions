import jwt from 'jsonwebtoken'

export default (req, res, next) =>{

    const token = (req.headers.Authorization || '').replace(/Bearer\s?/, '');

    if(token){
        try {
            const decoded = jwt.verify(token, 'secret123');

            req.userId = decoded._id;
            next();
        } catch (error) {
            return res.status(403).json({
                message: 'Нет доступа',
            });
        };
    } else{
        return res.status(403).json({
            message: 'Нет доступа',
        });
    };

}