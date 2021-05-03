import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3945Component } from './test-component3945.component';

describe('TestComponent3945Component', () => {
  let component: TestComponent3945Component;
  let fixture: ComponentFixture<TestComponent3945Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3945Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
