class Search < ActiveRecord::Base
#to help in searching methodolgy
  belongs_to :patient
  def search_docs
    doctors = Doctor.select(:name, :sex, :id, :image);
    profession = Profession.select(:address, :spec, :doctor_id);
    # puts doctors[0].profession.address
    doctors = doctors.where(["name LIKE ?",name]) if name.present?
    doctors = doctors.where(["sex LIKE ?",sex]) if sex.present?
    doctors = doctors.map { |d| (!d.profession.nil? && (d.profession.address == address)) ? d : nil } if address.present?
    doctors = doctors.delete_if {|d| (d == nil) == true} if address.present?
    doctors = doctors.map { |d| (!d.profession.nil? && (d.profession.spec == spec)) ? d : nil } if spec.present?
    doctors = doctors.delete_if {|d| (d == nil) == true} if spec.present?

    puts "printing professions"
    # puts professions
    puts "printing professions done"
        return doctors
    end
end
