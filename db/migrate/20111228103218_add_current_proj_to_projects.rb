class AddCurrentProjToProjects < ActiveRecord::Migration
  def self.up
    add_column :projects, :curr_project, :boolean
    
  end

  def self.down
    remove_column :projects, :curr_project
    
  end
end
