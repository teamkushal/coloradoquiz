import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2610Component } from './test-component2610.component';

describe('TestComponent2610Component', () => {
  let component: TestComponent2610Component;
  let fixture: ComponentFixture<TestComponent2610Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2610Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
