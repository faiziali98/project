class Search < ActiveRecord::Base
#to help in searching methodolgy
  belongs_to :patient
  def search_docs
    doctors = Doctor.all;
    doctors = doctors.where(["name LIKE ?",name]) if name.present?
    doctors = doctors.where(["name LIKE ?",gender]) if gender.present?
    doctors = doctors.where(["speciality LIKE ?",doctors.profession.spec]) if speciality.present?
    doctors = doctors.where(["area LIKE ?",doctors.profession.area]) if area.present?
    return doctors
  end

end
