import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3971Component } from './test-component3971.component';

describe('TestComponent3971Component', () => {
  let component: TestComponent3971Component;
  let fixture: ComponentFixture<TestComponent3971Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3971Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
