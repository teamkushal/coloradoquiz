import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3914Component } from './test-component3914.component';

describe('TestComponent3914Component', () => {
  let component: TestComponent3914Component;
  let fixture: ComponentFixture<TestComponent3914Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3914Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
