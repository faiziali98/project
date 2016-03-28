Rails.application.routes.draw do

  get 'appointments/new'

  get 'sessions/new'
  get 'users/index'
  get 'users/show'
  get 'users/new'
  get 'static_pages/Home'
  get 'static_pages/Services'
  get 'static_pages/Contact'
  get 'static_pages/SignIn'
  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'
  get  'doctor' => 'doctors#show'
  get 'doctor/personal' => 'doctors#show1'
  get 'patient/search_doc' => 'patients#search'
  get 'patprof' => 'doctors#profile'
  get 'patient/appointments/:id'=> 'appointments#show1'
  resources :appointments
  resources :users
  resources:doctors
  resources:degrees
  resources:professions
  resources:patients
  resources:searches

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
