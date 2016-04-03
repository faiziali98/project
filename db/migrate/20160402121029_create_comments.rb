class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :doctor_id

      t.timestamps
    end
  end
end
