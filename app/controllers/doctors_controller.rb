class DoctorsController < ApplicationController
  #shows the ProfessionsController
  def profile
    @doctor= Doctor.find(params[:id])
  end
  def show
  #shows all the doctors per id
  #change it later and ask TA for help
  @doctor = Doctor.find(params[:format])
  end

  def edit
    @doctor = Doctor.find(params[:id])
  end

  def index
  end
  def update
    @doctor = Doctor.find(params[:id])
    if @doctor.update_attributes(user_params)
      redirect_to @doctor
    end
  end

  def create
  #to do back end of new
    @doctor = Doctor.new(user_params)
    if @doctor.save
      log_in @doctor
      flash[:success] = "Welcome to the Sample App!"
      redirect_to @doctor
    else
      render 'new'
    end
  end

  def new
    #to show in the views
    @doctor = Doctor.new
  end

  #extra method
  def show1
    @doctor = Doctor.find(params[:id])
  end

  def destroy
  end

  private
  def user_params
     params.require(:doctor).permit(:name, :email, :password,
                                  :password_confirmation)
  end
end
