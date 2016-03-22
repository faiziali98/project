class AddAddrssToProfession < ActiveRecord::Migration
  def change
    add_column :professions, :address, :string
  end
end
