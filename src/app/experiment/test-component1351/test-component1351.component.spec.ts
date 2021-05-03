import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1351Component } from './test-component1351.component';

describe('TestComponent1351Component', () => {
  let component: TestComponent1351Component;
  let fixture: ComponentFixture<TestComponent1351Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1351Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
