class CommentsController < ApplicationController
  def index

  end
  def update

  end
  def new

  end
  def show

  end
  def create
    @forum = Forum.find(params[:forum_id])
    @patient = Patient.find(params[:comment][:patient_id])
    @comment=@forum.comments.create(params[:comment].permit(:body));
    redirect_to(:controller=>:forums,:action=>:search,:patid=>@patient.id,:id=>@forum.id)
  end
  def edit

  end
  def destroy

  end

end
