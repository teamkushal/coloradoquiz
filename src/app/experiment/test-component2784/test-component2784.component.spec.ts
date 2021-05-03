import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2784Component } from './test-component2784.component';

describe('TestComponent2784Component', () => {
  let component: TestComponent2784Component;
  let fixture: ComponentFixture<TestComponent2784Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2784Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
