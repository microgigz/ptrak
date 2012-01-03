class AddProjectIdToTasks < ActiveRecord::Migration
  def self.up
    add_column :tasks, :project_id, :string
  end

  def self.down
    remove_column :tasks, :project_id
  end
end
