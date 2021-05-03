import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1936Component } from './test-component1936.component';

describe('TestComponent1936Component', () => {
  let component: TestComponent1936Component;
  let fixture: ComponentFixture<TestComponent1936Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1936Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
