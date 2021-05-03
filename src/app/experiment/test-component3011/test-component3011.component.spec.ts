import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3011Component } from './test-component3011.component';

describe('TestComponent3011Component', () => {
  let component: TestComponent3011Component;
  let fixture: ComponentFixture<TestComponent3011Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3011Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
