import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3899Component } from './test-component3899.component';

describe('TestComponent3899Component', () => {
  let component: TestComponent3899Component;
  let fixture: ComponentFixture<TestComponent3899Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3899Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
