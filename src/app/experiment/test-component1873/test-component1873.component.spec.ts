import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1873Component } from './test-component1873.component';

describe('TestComponent1873Component', () => {
  let component: TestComponent1873Component;
  let fixture: ComponentFixture<TestComponent1873Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1873Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
