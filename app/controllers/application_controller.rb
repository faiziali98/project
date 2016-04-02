class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  include PublicActivity::StoreController
  protect_from_forgery with: :exception
  include SessionsHelper
  include PatientSessionsHelper
  include DoctorSessionsHelper
  def current_user
    @current_user ||= Patient.find_by(id: session[:user_id])
  end
  helper_method :current_user
  hide_action :current_user
end
