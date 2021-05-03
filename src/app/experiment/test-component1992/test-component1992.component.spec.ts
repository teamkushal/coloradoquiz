import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1992Component } from './test-component1992.component';

describe('TestComponent1992Component', () => {
  let component: TestComponent1992Component;
  let fixture: ComponentFixture<TestComponent1992Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1992Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
