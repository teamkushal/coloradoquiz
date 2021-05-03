import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1110Component } from './test-component1110.component';

describe('TestComponent1110Component', () => {
  let component: TestComponent1110Component;
  let fixture: ComponentFixture<TestComponent1110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
