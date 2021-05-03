import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3751Component } from './test-component3751.component';

describe('TestComponent3751Component', () => {
  let component: TestComponent3751Component;
  let fixture: ComponentFixture<TestComponent3751Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3751Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
