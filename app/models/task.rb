class Task < ActiveRecord::Base
  belongs_to :user
  belongs_to :project

  attr_accessible :user_id ,:task_name, :task_status, :task_level

  
  validates :task_name, :presence => true
  
end
