class RenameColumn < ActiveRecord::Migration
  def change
        rename_column :searches, :area , :address
  end
end
