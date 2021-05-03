import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3672Component } from './test-component3672.component';

describe('TestComponent3672Component', () => {
  let component: TestComponent3672Component;
  let fixture: ComponentFixture<TestComponent3672Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3672Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
