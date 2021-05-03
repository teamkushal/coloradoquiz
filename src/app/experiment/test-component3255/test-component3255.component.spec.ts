import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3255Component } from './test-component3255.component';

describe('TestComponent3255Component', () => {
  let component: TestComponent3255Component;
  let fixture: ComponentFixture<TestComponent3255Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3255Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
