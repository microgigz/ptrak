class ApplicationController < ActionController::Base
  protect_from_forgery

  layout :layout_by_resource

  def layout_by_resource    
    if controller_name == 'sessions' && action_name == 'new'    
      'login'
    elsif controller_name == 'passwords' && action_name == 'new'
      'login'
    else
      'application'
    end
  end

  def after_sign_in_path_for( resource)
    dashboard_path
  end

end