class User < ActiveRecord::Base
  attr_accessible :name, :email , :e_password

  email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  has_many :tasks
  has_many :projects
  
  validates :name, :presence => true
  validates :email, :presence => true, :uniqueness => true
  validates :e_password, :presence => true
  
end
