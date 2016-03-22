class ProfessionsController < ApplicationController

#appy edit but then there will be no create and new
  def show
    @doctor = Doctor.find(params[:id])
    @office = @doctor.profession
  end

  def new
    @doctor = Doctor.find(params[:id])
    @office=@doctor.build_profession

  end

  def create
    @doctor = Doctor.find(params[:id])
    @office=@doctor.build_profession(profession_params)
    if @office.save
      redirect_to(controller: 'doctors',action: 'show' ,id: @doctor.id)

    end
  end
  private

     def profession_params
       params.require(:profession).permit(:spec, :offstart ,:offend,:address,:fee, :doctor_id)
     end
end
