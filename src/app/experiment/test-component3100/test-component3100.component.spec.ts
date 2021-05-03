import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3100Component } from './test-component3100.component';

describe('TestComponent3100Component', () => {
  let component: TestComponent3100Component;
  let fixture: ComponentFixture<TestComponent3100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
