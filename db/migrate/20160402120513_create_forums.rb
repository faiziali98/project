class CreateForums < ActiveRecord::Migration
  def change
    create_table :forums do |t|
      t.string :title
      t.string :body

      t.timestamps
    end
  end
end
