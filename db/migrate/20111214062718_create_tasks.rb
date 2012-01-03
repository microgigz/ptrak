class CreateTasks < ActiveRecord::Migration
  def self.up
    create_table :tasks do |t|
      t.string :email
      t.string :task_name
      t.string :task_status
      t.string :task_level

      t.timestamps
    end
  end

  def self.down
    drop_table :tasks
  end
end
