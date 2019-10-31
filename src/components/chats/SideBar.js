import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'

export default class SideBar extends Component{
		
	render(){
		const { chats, activeChat, user, setActiveChat, logout} = this.props
		return (
			<div id="side-bar">
					<div className="heading">
						<div className="app-name">Мой Чат <i className="fa fa-angle-down"></i></div>
						<div className="menu">
							<i className="fa fa-list"></i>
						</div>
					</div>
					<div className="search">
						<i className="fa fa-search"></i>
						<input placeholder="Поиск" type="text"/>
						<div className="plus"></div>
					</div>
					<div 
						className="users" 
						ref='users' 
						onClick={(e)=>{ (e.target === this.refs.user) && setActiveChat(null) }}>
						
						{
						chats.map((chat)=>{
							if(chat.name){
								const lastMessage = chat.messages[chat.messages.length - 1];
								const user = chat.users.find(({name})=>{
									return name !== this.props.name
								}) || { name:"Общий чат" }
								const classNames = (activeChat && activeChat.id === chat.id) ? 'active' : ''
								
								return(
								<div 
									key={chat.id} 
									className={`user ${classNames}`}
									onClick={ ()=>{ setActiveChat(chat) } }
									>
									<div className="user-photo">{user.name[0].toUpperCase()}</div>
									<div className="user-info">
										<div className="name">{user.name}</div>
										{lastMessage && <div className="last-message">{lastMessage.message}</div>}
									</div>
									
								</div>
							)
							}

							return null
						})	
						}
						
					</div>
					<div className="current-user">
						<span>{user.name}</span>
						<div onClick={()=>{logout()}} title="Logout" className="logout">
							<i className="fa fa-eject"></i>		
						</div>
					</div>
			</div>
		);
	
	}
}
