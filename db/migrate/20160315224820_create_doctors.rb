class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :sex
      t.string :email
      t.string :password
      t.integer :phone

      t.timestamps
    end
  end
end
