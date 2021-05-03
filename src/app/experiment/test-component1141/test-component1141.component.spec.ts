import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1141Component } from './test-component1141.component';

describe('TestComponent1141Component', () => {
  let component: TestComponent1141Component;
  let fixture: ComponentFixture<TestComponent1141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
