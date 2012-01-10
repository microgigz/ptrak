class AddStartPageToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :start_page, :string
  end

  def self.down
    remove_column :users, :start_page
  end
end
