class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.string :day
      t.string :time
      t.integer :doctor_id

      t.timestamps
    end
  end
end
