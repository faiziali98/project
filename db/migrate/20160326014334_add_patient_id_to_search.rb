class AddPatientIdToSearch < ActiveRecord::Migration
  def change
    add_column :searches, :patient_id, :integer
  end
end
