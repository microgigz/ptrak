class AddColumnToTasks < ActiveRecord::Migration
  def self.up
    add_column :tasks, :user_id, :integer
    remove_column :tasks, :email
  end

  def self.down
    remove_column :tasks, :user_id
    add_column :tasks, :email, :string
  end
end
