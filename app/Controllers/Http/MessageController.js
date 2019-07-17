'use strict'
const Message = use('App/Models/Message')
const Database = use('Database')

class MessageController {
  
  async index ({ params, response, view }) {
    const groupId = params.groupId
    
    // const messages = await Database
    //                     .table('messages')
    //                     //.select('messages.id','chatText','users.id' ,'users.username')
    //                     .innerJoin('users', 'users.id', 'messages.user_id')
    //                     .where('group_id', groupId)
    //                     .orderBy('messages.id', 'desc')
    const messages = await Database
                        .select('messages.id', 'messages.user_id', 'messages.chatText', 'users.username')
                        .from('messages')
                        .innerJoin('users', 'messages.user_id', 'users.id')
                        .where('group_id', groupId)
                        .orderBy('messages.id', 'desc')
    return{
      data: messages
    }
  }
  async lastMessage({request, response, auth, view}){
    const message = await Database
                    .table('messages')
                    // .max('id')
                    .select(max('id'),'chatText')
                    .groupBy('group_id')
                    .orderBy('id', 'desc')
    return{
      lastMessage: message
    }
  }
  async create ({ request, response, view }) {
  }
  async store ({ request, response, auth}) {
    const {userId, message, groupId} = request.only(['userId', 'message', 'groupId'])

    const id = await Database
              .table('messages')
              .insert({user_id: userId, chatText:message, group_id:groupId})
    return response.json({
      id:id
    })
  }

  async show ({ params, request, response, view }) {
    const groupId = params.groupId
    
    // const messages = await Database
    //                     .table('messages')
    //                     //.select('messages.id','chatText','users.id' ,'users.username')
    //                     .innerJoin('users', 'users.id', 'messages.user_id')
    //                     .where('group_id', groupId)
    //                     .orderBy('messages.id', 'desc')
    const messages = await Database
                        .select('messages.id', 'messages.user_id', 'messages.chatText', 'users.username')
                        .from('messages')
                        .innerJoin('users', 'messages.user_id', 'users.id')
                        .where('group_id', groupId)
                        .orderBy('messages.id', 'desc')
    return{
      data: messages
    }
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
    const messageId = params.messageId

    const message = await Message.find(messageId)

    await message.delete()

    return response.json({
      messageId:messageId
    })
  }
}

module.exports = MessageController
