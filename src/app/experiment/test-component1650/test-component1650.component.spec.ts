import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1650Component } from './test-component1650.component';

describe('TestComponent1650Component', () => {
  let component: TestComponent1650Component;
  let fixture: ComponentFixture<TestComponent1650Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1650Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
