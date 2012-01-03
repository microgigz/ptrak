class ApplicationController < ActionController::Base
  protect_from_forgery
  include SessionsHelper

  helper_method :current_user
  def current_user

    @current_user ||= ((session[:id] && User.find_by_id(session[:id])) || 0)
  end
  def current_porject
    @current_project ||=current_user.projects
  end
  
end
#before_filter me check karo k user login hai k nie.. us k bad kisi b view me ja k session ki value dekho agr session empty hai to login show karo otherwise logout