class Api::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: {errors: "Invalid credentials"}
    end
  end

  def destroy
    if current_user
      log_out
      render json: {}
    else
      render json: {}, status: :not_found
    end
  end
end
