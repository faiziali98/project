class Doctor < ActiveRecord::Base
#   has_attached_file :photo, :styles => { :small => "150x150>" },
#                   :url  => "/assets/products/:id/:style/:basename.:extension",
#                   :path => ":rails_root/public/assets/products/:id/:style/:basename.:extension"
#
# validates_attachment_presence :photo
# validates_attachment_size :photo, :less_than => 5.megabytes
# validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/png']
  mount_uploader :image, ImageUploader
  has_many :comments
  has_many :appointments
  has_one :profession
  has_many :degrees
  has_many :reviews
  has_many :followers
  before_save { self.email = email.downcase }
  validates :name,  presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },format: { with: VALID_EMAIL_REGEX },uniqueness: true

  has_secure_password
  validates :password, presence: true, length: { minimum: 6 }

  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

end
