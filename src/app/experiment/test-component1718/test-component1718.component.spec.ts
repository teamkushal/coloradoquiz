import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1718Component } from './test-component1718.component';

describe('TestComponent1718Component', () => {
  let component: TestComponent1718Component;
  let fixture: ComponentFixture<TestComponent1718Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1718Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
