import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1442Component } from './test-component1442.component';

describe('TestComponent1442Component', () => {
  let component: TestComponent1442Component;
  let fixture: ComponentFixture<TestComponent1442Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1442Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
