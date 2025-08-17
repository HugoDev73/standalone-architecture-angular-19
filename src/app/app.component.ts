import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterceptorService } from './core/services/interceptor/interceptor.service';
import { ApiConfigService } from './core/services/api-config/api-config.service';
import { Endpoints } from './core/constants/api-endpoints';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'standalone-architecture';

  service = inject(InterceptorService)
  apiService = inject(ApiConfigService)

  ngOnInit(): void {
    this.service.getAllProducts()
    this.service.getProductById(98)
    const endpoint = this.apiService.getEndpoint(Endpoints.auth.logout)
    console.log(endpoint);
    
  }
}
