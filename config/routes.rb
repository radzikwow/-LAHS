Rails.application.routes.draw do
  root to: 'items#index'
  get "pages", to: "pages#home"
  resources :items, only: [:update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
