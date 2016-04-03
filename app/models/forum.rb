class Forum < ActiveRecord::Base
  belongs_to :patient
  has_many :comments
end
