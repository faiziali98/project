class ForumsController < ApplicationController
  def index

  end
  def update

  end
  def new
    @patient = Patient.find(params[:patid]);
    @forum = @patient.forums.build
  end
  def show
    #@patient = Patient.find(params[:forum][:patient_id]);
    @forum = Forum.all
    @patient = Patient.find(params[:patid]);
  end
  def create
    @patient = Patient.find(params[:forum][:patient_id]);
    @forum = @patient.forums.build(forum_params);
    if @forum.save
      redirect_to(:controller =>:forums , :action => :show,:patid=>@patient.id, :id=>@forum.id);
      #redirect_to discussion_form_path
    end

  end
  def edit

  end
  def destroy

  end
  def search
    @patient =Patient.find(params[:patid])
    @forum = Forum.find(params[:id])
  end

  private
    def forum_params
      params.require(:forum).permit(:title,:body,:patient_id)
    end
end
