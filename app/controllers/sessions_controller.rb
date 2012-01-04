class SessionsController < ApplicationController
  layout  'special'
  def new
    
    render 'Singin/signin'
  end

#  def create
#    @user=User.find_by_email_and_e_password(params[:session][:email],params[:session][:e_password])
#
#
#    if @user.blank?
#      redirect_to signin_path
#
#    else
#      session[:id]= @user.id
#      redirect_to @user
#    end
#  end
#
#  def destroy
#
#    #session[:id]=nil
#    reset_session
#    redirect_to root_path
#  end
end
