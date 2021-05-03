import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2650Component } from './test-component2650.component';

describe('TestComponent2650Component', () => {
  let component: TestComponent2650Component;
  let fixture: ComponentFixture<TestComponent2650Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2650Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
