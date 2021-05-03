import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1641Component } from './test-component1641.component';

describe('TestComponent1641Component', () => {
  let component: TestComponent1641Component;
  let fixture: ComponentFixture<TestComponent1641Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1641Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
