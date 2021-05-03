import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2770Component } from './test-component2770.component';

describe('TestComponent2770Component', () => {
  let component: TestComponent2770Component;
  let fixture: ComponentFixture<TestComponent2770Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2770Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
