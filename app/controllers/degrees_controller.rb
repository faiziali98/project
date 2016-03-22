class DegreesController < ApplicationController
  def show
    @doctor = Doctor.find(params[:id])
    @degree = @doctor.degree
  end

  def new
    @doctor = Doctor.find(params[:id])
    @degree=@doctor.build_degree
  end

  def create
    @doctor = Doctor.find(params[:id])
    @degree=@doctor.build_degree(degree_params)
    if @degree.save
      redirect_to(controller: 'doctors',action: 'show' ,id: @doctor.id)
    else
      redirect_to @doctor
    end
  end
  private

     def degree_params
       params.require(:degree).permit(:uniName, :degreeName , :doctor_id)
     end
end
