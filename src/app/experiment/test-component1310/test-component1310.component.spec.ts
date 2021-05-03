import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1310Component } from './test-component1310.component';

describe('TestComponent1310Component', () => {
  let component: TestComponent1310Component;
  let fixture: ComponentFixture<TestComponent1310Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1310Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
