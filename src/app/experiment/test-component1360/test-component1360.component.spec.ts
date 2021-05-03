import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1360Component } from './test-component1360.component';

describe('TestComponent1360Component', () => {
  let component: TestComponent1360Component;
  let fixture: ComponentFixture<TestComponent1360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1360Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
