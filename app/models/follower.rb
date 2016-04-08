class Follower < ActiveRecord::Base
include PublicActivity::Model
tracked owner: ->(controller, model) { controller && controller.current_user }

belongs_to :doctor
belongs_to :patient
#validates :patient_id, uniqueness: true
end
