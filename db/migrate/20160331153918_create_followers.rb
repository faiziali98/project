class CreateFollowers < ActiveRecord::Migration
  def change
    create_table :followers do |t|
      t.integer :doctor_id
      t.integer :patient_id

      t.timestamps
    end
  end
end
