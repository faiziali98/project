class AddAppointtimeToAppointment < ActiveRecord::Migration
  def change
    add_column :appointments, :appointtime, :string
  end
end
