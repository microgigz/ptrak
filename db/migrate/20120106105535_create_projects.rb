class CreateProjects < ActiveRecord::Migration
  def self.up
    create_table :projects do |t|
      t.string :pro_name
      t.string :pro_status
      t.integer :user_id

      t.timestamps
    end
  end

  def self.down
    drop_table :projects
  end
end
