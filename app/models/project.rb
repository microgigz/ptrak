class Project < ActiveRecord::Base
  belongs_to :user
  has_many :tasks

  after_create  do |record|
        user = record.user; user.projects.update_all("curr_project = '0 '", ['id <> ?', record.id])
  end

end
