class AddColsToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :username, :string
    add_column :users, :initials, :string
    add_column :users, :startpage, :string
  end

  def self.down
    remove_column :users, :username
    remove_column :users, :initials
    remove_column :users, :startpage
  end
end
