class ApplicationController < ActionController::Base
  protect_from_forgery
  #  include SessionsHelper
  #
  #  helper_method :current_user
  #  def current_user
  #
  #    @current_user ||= ((session[:id] && User.find_by_id(session[:id])) || 0)
  #  end
  #  def current_porject
  #    @current_project ||=current_user.projects
  #  end
  layout :layout_by_resource

  def layout_by_resource    
    if controller_name == 'sessions' && action_name == 'new'
      'login'
    else
      'application'
    end
  end

#  def after_sign_up_path_for(resource)
#    #redirect_to 'destroy_user_session_path'
#    logger.debug "**************************************88"
#    logger.debug "called"
#    logger.debug "**************************************8"
#    redirect_to 'devise/sessions#destroy'
#    #redirect_to 'pages#index'
#  end

end