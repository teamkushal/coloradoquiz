import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3634Component } from './test-component3634.component';

describe('TestComponent3634Component', () => {
  let component: TestComponent3634Component;
  let fixture: ComponentFixture<TestComponent3634Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3634Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
