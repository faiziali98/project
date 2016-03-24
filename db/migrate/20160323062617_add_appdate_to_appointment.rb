class AddAppdateToAppointment < ActiveRecord::Migration
  def change
    add_column :appointments, :appdate, :date
  end
end
