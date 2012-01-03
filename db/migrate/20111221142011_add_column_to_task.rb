class AddColumnToTask < ActiveRecord::Migration
  def self.up
    add_column :tasks, :task_type, :string
  end

  def self.down
    remove_column :tasks, :task_type
  end
end
