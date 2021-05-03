import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2933Component } from './test-component2933.component';

describe('TestComponent2933Component', () => {
  let component: TestComponent2933Component;
  let fixture: ComponentFixture<TestComponent2933Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2933Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
