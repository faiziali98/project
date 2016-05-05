class Appointment < ActiveRecord::Base
  belongs_to :doctor
  belongs_to :patient
  validates :apptime, presence: true
  validates :appdate, presence: true
end
