class Comment < ActiveRecord::Base
  belongs_to :doctor
  belongs_to :patient
  belongs_to :forum
end
