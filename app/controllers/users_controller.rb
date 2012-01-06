class UsersController < ApplicationController
  def new
  end

  def show
  end

  def signup
    @user=User.new

  end
  def create
    @user = User.new(params[:user])
     if @user.save
       flash[:success]= "Welcome to Pivital tracker!"
        session[:id]=@user.id
       redirect_to  @user
     else
       redirect_to signup_path
     end
  end
  def update
    @user = User.find(params[:id])
     if @user.update_attributes(params[:user])
       flash[:success] = "Profile Updated"
       redirect_to @user
     else
       @title ="Edit User"
       render 'edit'
     end
  end
  def edit
    @user = User.find(params[:id])
    @title = "Edit user"
  end
  #before_filter :athenticate
  private
  def athenticate
    deny_access unless signedin?
  end
end
