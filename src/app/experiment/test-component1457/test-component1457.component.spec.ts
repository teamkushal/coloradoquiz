import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1457Component } from './test-component1457.component';

describe('TestComponent1457Component', () => {
  let component: TestComponent1457Component;
  let fixture: ComponentFixture<TestComponent1457Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1457Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
