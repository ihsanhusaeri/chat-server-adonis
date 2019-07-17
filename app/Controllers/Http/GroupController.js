'use strict'
const Group = use('App/Models/Group')
const Database = use('Database')

class GroupController {
  /**
   * Show a list of all groups.
   * GET groups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, response, view }) {
    // return Group.all()
    const userId = params.userId
    // const userId = await Group.find(params.id)
    const groups = await Database
                        .table('groups')
                        .innerJoin('members', 'members.group_id', 'groups.id')
                        .select('groups.name', 'groups.id')
                        .where({'members.user_id': userId})
                        
    return response.json({
      groups
    })
  }

  
  async create ({ request, response, view }) {
  }

  
  async store ({ request, response }) {
  }

 
  async show ({ params, request, response, view }) {
    const userId = params.userId
    // const userId = await Group.find(params.id)
    const groups = await Database
                        .table('groups')
                        .innerJoin('members', 'members.group_id', 'groups.id')
                        .select('groups.name', 'groups.id')
                        .where({'members.user_id': userId})
                        
    return response.json({
      groups
    })
  }

 async edit ({ params, request, response, view }) {
  }

 async update ({ params, request, response }) {
  }

  /**
   * Delete a group with id.
   * DELETE groups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = GroupController
