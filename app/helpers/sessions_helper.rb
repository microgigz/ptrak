module SessionsHelper

  def signedin?
    if session[:id] == nil
      return true
    else
      return false
    end
  end
  def currentuser

  end
  def signout
    
  end
  def deny_access
    #store_loction
    redirect_to signin_path, :notice => "Please Sign in to access the page"
  end
  
#  def current_user
#      @current_user ||= ((session[:user_id] && User.find_by_id(session[:user_id])) || 0)
#
#  end
end
