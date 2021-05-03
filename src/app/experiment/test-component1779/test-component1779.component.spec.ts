import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1779Component } from './test-component1779.component';

describe('TestComponent1779Component', () => {
  let component: TestComponent1779Component;
  let fixture: ComponentFixture<TestComponent1779Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1779Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
