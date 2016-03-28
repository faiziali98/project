class AddDoctorIdToReview < ActiveRecord::Migration
  def change
    add_column :reviews, :doctor_id, :integer
  end
end
