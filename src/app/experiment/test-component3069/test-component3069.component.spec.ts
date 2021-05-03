import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3069Component } from './test-component3069.component';

describe('TestComponent3069Component', () => {
  let component: TestComponent3069Component;
  let fixture: ComponentFixture<TestComponent3069Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3069Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
