import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2719Component } from './test-component2719.component';

describe('TestComponent2719Component', () => {
  let component: TestComponent2719Component;
  let fixture: ComponentFixture<TestComponent2719Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2719Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
