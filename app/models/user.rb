class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable, :lockable and :timeoutable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email,:name, :password, :password_confirmation, :remember_me,
    :time_zone
  #attr_accessible :name, :email , :e_password

  has_many :tasks
  has_many :projects
  
  validates :name, :presence => true
  #validates :e_password, :presence => true
  
end
