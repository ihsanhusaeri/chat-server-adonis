'use strict'
const User = use('App/Models/User')
const Message = use('App/Models/Message')
const {validate} = use('Validator')
const Database = use('Database')
// const VerificationCode = use('VerificationCode')
class UserController {
    async index({request, response, view}){
        const users = await User.query().with('messages').fetch()

        return{
            data: users
        }
    }
    // async register({request, auth, response}){
        // const rules ={
        //     username: 'required|username|unique:users, email',
        //     password: 'required'
        // }

        // const validation = await validate(request.all(), rules)
        
        // if(validation.fails()){
        //     return{
        //         message: "error",
        //         data: validation.messages()
        //     }
        // }
        // const user = await User.create(request.all())


        // return{
        //     message: "berhasil menyimpan!",
        //     data: user
        // }

    //     let user = await User.create(request.all())

    //     let token = await auth.generate(user)

    //     Object.assign(user, token)

    //     return response.json(user)
    // }
    // async login({request, response, auth}){
    //     // const {username, password} = request.all()

    //     // const users = await Database.from('users').where({username,password})

    //     // return {
    //     //     message: users
    //     // }
    //     // const codeEntry = await User.query()
    //     // .where({username, password})
    //     // .fetch()
    //     // return codeEntry
    //     const {username, password} = request.only(['username', 'password'])
    //     try{
    //         if(await User.query().where({username, password}).fetch()){
    //             let user = await User.findBy('username', username)
    //             let password = await User.findBy('password', password)
    //             let token = await auth.generate(user)
    
    //             Object.assign(user,token)
    
    //             return response.json(user)
    //         }
    //     }catch(e){
    //         console.log(e)
    //         return {message: "You are not registered!"}
    //     }
        
        
    // }
    // async login({request, response, auth}){
    //     const{username, password} = request.only(['username', 'password'])

    //     const token = await auth.attempt(username, password)

    //     return response.json({token})
    // }
}

module.exports = UserController
