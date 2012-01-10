class StoriesController < ApplicationController
  layout 'Stroies'
  def index
    @task=Task.new
    @user_tasks= current_user.tasks
     respond_to do |format|
       format.html
       format.js
     end

  end
  def show
    redirect_to(:action => "usecase" , :controller => "stories") 
  end
  def create
    @task = Task.new(params[:task])
    
    @task.user_id= current_user.id
    @task.task_type="icebox"
    @task.project_id = current_user.projects.where(:curr_project => true).last.id
    @user_tasks= current_user.tasks.last if @task.save

  end
  def update_status
    @user_task= Task.find(params[:task_id])

    @user_task.task_type=(params[:type])
    @user_task.save
    logger.debug "/*******/"
    logger.debug current_user.present?
    logger.debug "/*******/"
  end

  
end
