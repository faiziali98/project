class PatientSessionsController < ApplicationController

  def new


  end
  def create
    user = Patient.find_by(email: params[:patient_session][:email].downcase)
    if user && user.authenticate(params[:patient_session][:password])
      log_in user
      redirect_to user
    else
    flash.now[:danger] = 'Invalid email/password combination'
    render 'new'
  end
  end
  def destroy
    log_out
    redirect_to static_pages_Home_path
  end

end
