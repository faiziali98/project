class PatientsController < ApplicationController

  def show
  #shows all the Patients per id
  @patient = Patient.find(params[:id])
  end
  def show1
    @patient = Patient.find(params[:id])
  end
  def edit
    @patient = Patient.find(params[:id])
  end

  def index
  end
  def update
    @patient = Patient.find(params[:id])
    if @patient.update_attributes(user_params)
      redirect_to @patient
    end
  end

  def create
  #to do back end of new
    @patient = Patient.new(user_params)
    if @patient.save
      log_in @patient
      flash[:success] = "Welcome to the Sample App!"
      redirect_to @patient
    else
      render 'new'
    end
  end

  def new
    #to show in the views
    @patient = Patient.new
  end

  def destroy
  end
#my extra actions
  def search
      @patient = Patient.find(params[:id])
  end
  private
  def user_params
     params.require(:patient).permit(:name, :email, :password,:sex,:phone,
                                  :password_confirmation)
  end
end
