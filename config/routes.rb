Rails.application.routes.draw do








  root 'home#index'

  get 'projects' =>  'project#index'
  get 'project/:id' =>  'project#show'


  get 'blog' =>  'blog#index'
  get 'blog/:id' =>  'blog#show'


  get 'events' =>  'event#index'
  get 'event/:id' =>  'event#show'


  get 'videos' =>  'video#index'
  get 'video/:id' =>  'video#show'



  get 'contact' =>  'contact#index'

  get 'about' =>  'about#index'

end
