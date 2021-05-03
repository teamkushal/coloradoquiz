import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1431Component } from './test-component1431.component';

describe('TestComponent1431Component', () => {
  let component: TestComponent1431Component;
  let fixture: ComponentFixture<TestComponent1431Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1431Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
