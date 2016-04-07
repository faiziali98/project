class Comment < ActiveRecord::Base
  include PublicActivity::Model
  tracked owner: ->(controller, model) { controller && controller.current_patuser }

  belongs_to :doctor
  belongs_to :patient
  belongs_to :forum
end
