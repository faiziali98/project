class AddPaientIdToForum < ActiveRecord::Migration
  def change
    add_column :forums, :patient_id, :integer
  end
end
