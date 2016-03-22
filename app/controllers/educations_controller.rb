class EducationsController < ApplicationController
  def edit

  end

  def create
    @degree=current_user.education.build(degree_params)
    if @degree.save
      redirect_to doctor_path

    end
  end

  def new
    @doctor = Doctor.find(params[:id])
    @degree=@doctor.build_education
  end

  def update
  end

  private

     def degree_params
       params.require(:degree).permit(:uniName, :degreeName , :doctor_id)
     end
end
