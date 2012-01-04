class RegistrationsController < Devise::RegistrationsController
  protected

  def after_sign_up_path_for(resource)

    logger.debug "*****************************************"
    logger.debug "executed"
    logger.debug "*****************************************"
    RAILS_DEFAULT_LOGGER.debug "called"
    logout_user
    redirect_to 'destroy_user_session_path'
    
  end


  def after_inactive_sign_up_path_for(resource)
    logger.debug "*****************************************"
    logger.debug "executed"
    logger.debug "*****************************************"
    RAILS_DEFAULT_LOGGER.debug "called"
    logout_user
    redirect_to 'destroy_user_session_path'
    
  end

    
end
