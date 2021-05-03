import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2840Component } from './test-component2840.component';

describe('TestComponent2840Component', () => {
  let component: TestComponent2840Component;
  let fixture: ComponentFixture<TestComponent2840Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2840Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
