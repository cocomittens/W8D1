class Api::BenchesController < ApplicationController
    def create
        @bench = Bench.new(bench_params)
        if @bench.save
            render json: :index
        else
            render json: @bench.errors
        end
    end

    def index
        @benches = Bench.all
        render :index
    end

  private
  def bench_params
    params.fetch(:bench, {}).permit(:description, :lat, :lng)
  end
end
