import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2442Component } from './test-component2442.component';

describe('TestComponent2442Component', () => {
  let component: TestComponent2442Component;
  let fixture: ComponentFixture<TestComponent2442Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2442Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
