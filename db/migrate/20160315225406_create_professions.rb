class CreateProfessions < ActiveRecord::Migration
  def change
    create_table :professions do |t|
      t.string :spec
      t.string :fee
      t.string :offstart
      t.string :offend
      t.integer :doctor_id

      t.timestamps
    end
  end
end
