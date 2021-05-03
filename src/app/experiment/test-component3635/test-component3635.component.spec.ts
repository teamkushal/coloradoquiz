import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3635Component } from './test-component3635.component';

describe('TestComponent3635Component', () => {
  let component: TestComponent3635Component;
  let fixture: ComponentFixture<TestComponent3635Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3635Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
