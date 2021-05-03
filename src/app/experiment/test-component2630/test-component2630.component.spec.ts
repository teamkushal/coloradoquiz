import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2630Component } from './test-component2630.component';

describe('TestComponent2630Component', () => {
  let component: TestComponent2630Component;
  let fixture: ComponentFixture<TestComponent2630Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2630Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
