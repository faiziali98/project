class AppointmentsController < ApplicationController
  def new
    @doctor = Doctor.find(params[:docid])
    @patient = Patient.find(params[:patient])
    @appointment = @doctor.appointments.build
  end
  def create
    @doctor = Doctor.find(params[:docid])
    @patient = Patient.find(params[:patient])
    @appointment = @doctor.appointments.build(user_params)
    @patappointment =@patient.appointments.build(user_params)
    if @appointment.save
      redirect_to(controller: 'doctors',action: 'show' ,id: @doctor.id)
    end
  end

  def show
    @doctor = Doctor.find(params[:id])
    @office = @doctor.appointments

  end
  def show1

    @patient = Patient.find(params[:id])
    @office = @patient.appointments

  end
  private
  def user_params
     params.require(:appointment).permit(:appdate, :apptime,:patient_id)
  end
end
