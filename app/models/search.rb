class Search < ActiveRecord::Base
#to help in searching methodolgy
  belongs_to :patient
  def search_docs
    doctors = Doctor.all;
    profession = Profession.all;
    doctors = doctors.where(["name LIKE ?",name]) if name.present?
    doctors = doctors.where(["sex LIKE ?",sex]) if sex.present?
    return doctors
    end
end
