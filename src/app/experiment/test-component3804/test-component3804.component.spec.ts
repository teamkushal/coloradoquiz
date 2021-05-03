import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3804Component } from './test-component3804.component';

describe('TestComponent3804Component', () => {
  let component: TestComponent3804Component;
  let fixture: ComponentFixture<TestComponent3804Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3804Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
