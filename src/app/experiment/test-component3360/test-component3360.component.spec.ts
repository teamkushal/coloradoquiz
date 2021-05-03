import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3360Component } from './test-component3360.component';

describe('TestComponent3360Component', () => {
  let component: TestComponent3360Component;
  let fixture: ComponentFixture<TestComponent3360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3360Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
