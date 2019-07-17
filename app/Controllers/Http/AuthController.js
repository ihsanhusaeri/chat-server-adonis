'use strict'

const User = use('App/Models/User')
class AuthController {
    // async login({request, auth, response}){
    //     let {username, password} = request.all()

    //     try{
    //         if(await auth.attempt(username, password)){
    //             let user = await user.findBy('username', username)
    //             let token = await auth.generate(user)

    //             Object.assign(user,token)

    //             return response.json(user)
    //         }
    //     }catch(e){
    //         console.log(e)
    //         return response.json({message: 'You are not registered!'})
    //     }
    // }
    async login({request, response, auth}){
        // const{username, password} = request.only(['username', 'password'])

        // const user = await User.findBy({'username': username, 'password':password})
        
        // const token = await auth.attempt(username, password)

        // return {
        //     user: user,
        //     //token: response.json({token})
        //     //token: token
        // }
        const {username, password} = request.only(['username', 'password'])
        try{
            const token = await auth.attempt(username, password)
            if(token){
                const user = await User.findBy('username', username)

                return response.json({
                    user: user,
                    token: token
                })
            }
        }catch(e){
            console.log(e)
            return response.json({response: 'You are not registered!'})
        }
    }
    async register({request, auth, response}){
        let user = await User.create(request.all())
        let token = await auth.generate(user)
        Object.assign(user, token)
        return response.json(user)
        // const username= request.input('username')
        // const password = request.input('password')
        // const groupId = request.input('groupId')

        // let user = new User()
        // user.username = username
        // user.password = password
        // user.group_id = groupId

        // user = await user.save()
        // let token = await auth.generate(user)
        // return response.json({user: user, token: token})
    }
    async auth({request, response, auth}){
        try {
            return await auth.getUser()
        }catch (error) {
            response.send('You are not logged in')
        }
    }
    
}

module.exports = AuthController
