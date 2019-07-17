'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.post('/api/v1/login', 'AuthController.login')

Route.group(()=>{
    Route.post('register', 'AuthController.register')
    Route.get('auth', 'AuthController.auth')    
    Route.get('users', 'UserController.index')
    Route.get('messages/:groupId', 'MessageController.show')
    Route.post('messages', 'MessageController.store')
    Route.delete('messages/:messageId', 'MessageController.destroy')
    // Route.get('lastMessage', 'MessageController.lastMessage')
    Route.get('groups/:userId', 'GroupController.show')
    // Route.get('members', 'MemberController.index')
}).prefix('api/v1/').middleware('auth')

