import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../material/material.module';

import { QuizComponent } from './quiz.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [QuizComponent],
    imports: [MaterialModule,
        RouterTestingModule.withRoutes([{ path: '', component: QuizComponent }, { path: 'simple', component: QuizComponent }])],
    providers: [
        {
            provide: ActivatedRoute, useValue: {
                snapshot: { params: { title: 'history' } }
            }
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
