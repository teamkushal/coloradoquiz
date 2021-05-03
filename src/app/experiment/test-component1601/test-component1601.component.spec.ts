import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1601Component } from './test-component1601.component';

describe('TestComponent1601Component', () => {
  let component: TestComponent1601Component;
  let fixture: ComponentFixture<TestComponent1601Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1601Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
