import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1645Component } from './test-component1645.component';

describe('TestComponent1645Component', () => {
  let component: TestComponent1645Component;
  let fixture: ComponentFixture<TestComponent1645Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1645Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
