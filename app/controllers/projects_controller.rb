class ProjectsController < ApplicationController
  def new
    @project=Project.new
    
  end

  def show
    @projects=current_user.projects
  end

  def create
    @project = Project.new(params[:project])
    @project.user_id = current_user.id
    @project.status= "in_progress"
    @project.curr_project=true
    Project.all.each do |p|
      next if (p.id == @project.id)
      p.curr_project= false
    end
    @project.save
    respond_to do |format|
      format.html{ redirect_to project_path @project.id }
    end
    
#    redirect_to(:action => "usecase" , :controller => "stories") if @project.save
  end
end
