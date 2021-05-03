import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1974Component } from './test-component1974.component';

describe('TestComponent1974Component', () => {
  let component: TestComponent1974Component;
  let fixture: ComponentFixture<TestComponent1974Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1974Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
