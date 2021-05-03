import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3483Component } from './test-component3483.component';

describe('TestComponent3483Component', () => {
  let component: TestComponent3483Component;
  let fixture: ComponentFixture<TestComponent3483Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3483Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
