class ProfessionsController < ApplicationController

#appy edit but then there will be no create and new
  def show
    @doctor = Doctor.find(params[:id])
    @office = @doctor.profession
  end
  def edit
    @doctor = Doctor.find(params[:id])
    @office=@doctor.profession

  end
  def update
    @doctor = Doctor.find(params[:id])
    @office = @doctor.profession
    if @office.update(profession_params)
      redirect_to static_pages_Home_path
    end
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
