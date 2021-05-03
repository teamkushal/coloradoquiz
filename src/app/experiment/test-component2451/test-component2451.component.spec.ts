import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2451Component } from './test-component2451.component';

describe('TestComponent2451Component', () => {
  let component: TestComponent2451Component;
  let fixture: ComponentFixture<TestComponent2451Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2451Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
