import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1346Component } from './test-component1346.component';

describe('TestComponent1346Component', () => {
  let component: TestComponent1346Component;
  let fixture: ComponentFixture<TestComponent1346Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1346Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
