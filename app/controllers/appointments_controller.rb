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
    #make a check for both Doctor and patient
    if @appointment.save
      redirect_to(controller: 'appointments',action: 'show1' ,docid: @doctor.id, id:@patient.id)
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
