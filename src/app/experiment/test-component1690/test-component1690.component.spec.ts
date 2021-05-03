import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1690Component } from './test-component1690.component';

describe('TestComponent1690Component', () => {
  let component: TestComponent1690Component;
  let fixture: ComponentFixture<TestComponent1690Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1690Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
