class CreateDegrees < ActiveRecord::Migration
  def change
    create_table :degrees do |t|
      t.string :uniName
      t.string :degreeName
      t.integer :doctor_id

      t.timestamps
    end
  end
end
