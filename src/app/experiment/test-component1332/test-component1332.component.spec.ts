import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1332Component } from './test-component1332.component';

describe('TestComponent1332Component', () => {
  let component: TestComponent1332Component;
  let fixture: ComponentFixture<TestComponent1332Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1332Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
