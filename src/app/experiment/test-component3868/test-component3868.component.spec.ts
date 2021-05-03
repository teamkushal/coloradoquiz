import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3868Component } from './test-component3868.component';

describe('TestComponent3868Component', () => {
  let component: TestComponent3868Component;
  let fixture: ComponentFixture<TestComponent3868Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3868Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
