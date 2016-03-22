class CreateSearches < ActiveRecord::Migration
  def change
    create_table :searches do |t|
      t.string :name
      t.string :area
      t.string :gender
      t.string :speciality

      t.timestamps
    end
  end
end
