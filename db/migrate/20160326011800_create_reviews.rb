class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :waitTime
      t.integer :besideManner
      t.integer :overallRating
      t.string :description

      t.timestamps
    end
  end
end
