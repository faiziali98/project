class AddApptimeToAppointment < ActiveRecord::Migration
  def change
    add_column :appointments, :apptime, :time
  end
end
