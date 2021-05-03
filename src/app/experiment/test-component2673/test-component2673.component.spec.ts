import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2673Component } from './test-component2673.component';

describe('TestComponent2673Component', () => {
  let component: TestComponent2673Component;
  let fixture: ComponentFixture<TestComponent2673Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2673Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
