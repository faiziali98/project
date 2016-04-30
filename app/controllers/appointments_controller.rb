class AppointmentsController < ApplicationController
  def new
    @doctor = Doctor.find(params[:docid])
    @patient = Patient.find(params[:patient])
    @slots = officehours
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
     params.require(:appointment).permit(:appdate, :appointtime,:patient_id)
  end
  def officehours
    offstart = @doctor.profession.offstart
    offend = @doctor.profession.offend
    avgtime = 20
    checker = "00"
    allslots = []
    while(offstart <= offend)
      # if checker == 60
      #   checker == 00
      #   offstart = offstart.to_i + 1
      #   offstart = offstart.to_s
      # end
      slotstart = offstart + ":" + checker.to_s
      puts "first checker "
      puts checker
      checker = checker.to_i + avgtime
      puts"second checker"
      puts checker
      if checker >= 60
        checker = 00
        offstart = offstart.to_i + 1
        offstart = offstart.to_s
      end
      slotend = offstart + ":" + checker.to_s
      slot = slotstart.to_s + "-" + slotend.to_s
      puts "checker"
      puts checker
      puts "offstart"
      puts offstart
      allslots.push(slot)
    end
    return allslots
  end
end
